import { firebaseApp } from "@/lib/firebase/firebase-app";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AuthProfileMenu() {
    const router = useRouter();

    async function handleSignOut() {
        const fireApp = firebaseApp;
        const firebaseAuth = getAuth(fireApp);

        signOut(firebaseAuth)
        .then(() => {
            router.push("/auth/signin");
        })
        .catch((error) => {
            throw new Error("Failed to sign out the user. Error: " + error.message);
        });
    }

    return (
        <button type="button" className="cursor-pointer hover:border-b hover:border-gray-500" onClick={handleSignOut}>Sign Out</button>
    );
}