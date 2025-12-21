import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const { idToken } = await request.json();

    const firebaseApp = (getApps().length === 0) ? initializeApp({credential: cert({
        //@ts-ignore
        "type": process.env.FIREBASE_PROJECT_TYPE,
        "project_id": process.env.FIREBASE_PROJECT_ID,
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY,
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": process.env.FIREBASE_AUTH_URI,
        "token_uri": process.env.FIREBASE_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL,
        "universe_domain": process.env.FIREBASE_UNIVERSE_DOMAIN
    })}) : getApp();

    const decoded = await getAuth(firebaseApp).verifyIdToken(idToken);
    const { uid } = decoded;

    if(uid) {
        const expiresIn = 1000 * 60 * 60 * 10;

        //create session cookie
        const sessionCookie = await getAuth(firebaseApp).createSessionCookie(idToken, {expiresIn});

        if(sessionCookie) {
            (await cookies()).set("session_token", sessionCookie, {
                httpOnly: true,
                maxAge: expiresIn / 1000,
                secure: true
            });

            return Response.json({success: true});
        }
    }

    return Response.json({success: false});
}