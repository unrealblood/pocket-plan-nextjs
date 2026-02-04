"use client";

import { firebaseApp } from "@/lib/firebase/firebase-app";
import { signoutSession } from "@/lib/firebase/signout-session";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileAuthMenu() {
    const router = useRouter();

    async function handleSignOut() {
        const fireApp = firebaseApp;
        const firebaseAuth = getAuth(fireApp);

        const result = await signoutSession();
        if(result.success) {
            signOut(firebaseAuth)
            .then(() => {
                router.push("/auth/signin");
            })
            .catch((error) => {
                throw new Error("Failed to sign out the user. Error: " + error.message);
            });
        }
    }

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <Link href="/dashboard">Dashboard</Link>

            <button type="button" className="cursor-pointer" onClick={handleSignOut}>Signout</button>
        </div>
    );
}