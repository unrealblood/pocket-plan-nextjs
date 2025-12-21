"use client";

import { createSession } from "@/lib/firebase/create-session";
import { firebaseApp } from "@/lib/firebase/firebase-app";
import { ReactionMessageTypeEnum } from "@/lib/typescript/auth";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

export default function SignInForm() {
    //firebase
    const fireApp = firebaseApp;
    const firebaseAuth = getAuth(fireApp);
    
    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    //local state
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [reactionMessageType, setReactionMessageType] = useState<ReactionMessageTypeEnum>(ReactionMessageTypeEnum.None);
    const [reactionMessage, setReactionMessage] = useState<string>("");

    async function handleSignInSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!email || (email.trim().length === 0)) {
            setReactionMessage("Please enter your email address");
            setReactionMessageType(ReactionMessageTypeEnum.Error);
            return
        }

        if(!password || (password.trim().length === 0)) {
            setReactionMessage("Please enter your password");
            setReactionMessageType(ReactionMessageTypeEnum.Error);
            return
        }

        startTransition(async () => {
            signInWithEmailAndPassword(firebaseAuth, email, password)
            .then(async (credential) => {
                const user = credential.user;
                const token = await user.getIdToken();

                const result = await createSession(token);
                
                if(result.success) {
                    router.push("/");
                }
            })
            .catch((error) => {
                setReactionMessage("Failed to signin user. Error: " + error.message);
                setReactionMessageType(ReactionMessageTypeEnum.Error);
            });
        });
    }

    async function hanldeLoginWithGoogleAccountClick() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(firebaseAuth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = result.user.getIdToken();
            const user = result.user;

            console.log("USER_ID");
            console.log(user.uid);
        })
        .catch((error) => {
            setReactionMessage("Failed to signin the user. Error: " + error.message);
            setReactionMessageType(ReactionMessageTypeEnum.Error);
        });
    }

    return (
        <form className="mt-4 w-[550px] mx-auto" onSubmit={handleSignInSubmit}>
            <fieldset className="border border-black px-8 py-2 rounded-xl">
                <legend>SignIn Form</legend>
                
                <div className="flex justify-center items-center flex-col">
                    <div className="mt-4">
                        <label htmlFor="emailInput" className="font-bold">Email Address</label><br />

                        <input type="email" id="emailInput" className="w-80 bg-gray-200 p-2 rounded-full mt-2" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="passwordInput" className="font-bold">Password</label><br />

                        <input type="password" id="passwordInput" className="w-80 bg-gray-200 p-2 rounded-full mt-2" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                {(reactionMessageType == ReactionMessageTypeEnum.Error)
                &&
                <div className="text-center mt-4">
                    <p className="text-red-500">{reactionMessage}</p>
                </div>
                }

                <div className="flex justify-center items-center mt-4 mb-4">
                    <button type="submit" disabled={isPending} className="w-80 cursor-pointer bg-green-500 px-4 py-2 rounded-full text-white">SignIn</button>
                </div>

                <div className="flex justify-center items-center mt-4 mb-2">
                    <button type="button" className="w-80 cursor-pointer bg-blue-500 py-2 rounded-full text-white" onClick={hanldeLoginWithGoogleAccountClick}>SignIn with Google Account</button>
                </div>

                <div className="flex justify-center items-center mt-4 mb-2">
                    <p className="text-center">
                        Do not have an account. <Link href="/auth/register" className="font-bold">Signup here</Link>
                    </p>
                </div>
            </fieldset>
        </form>
    );
}