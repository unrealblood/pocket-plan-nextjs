import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { DecodedIdToken, getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function verifySession(): Promise<DecodedIdToken> {
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

    if(!firebaseApp) {
        throw new Error("Firebase app is not initialised.");
    }
    else {
        const sessionCookie = (await cookies()).get("session_token")?.value;

        if(!sessionCookie) {
            redirect("/auth/signin");
        }
        else {
            return await getAuth(firebaseApp).verifySessionCookie(sessionCookie, true);
        }
    }
}