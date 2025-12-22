"use client";

import { firebaseApp } from "@/lib/firebase/firebase-app";
import { ReactionMessageTypeEnum } from "@/lib/typescript/auth";
import Link from "next/link";
import { FormEvent, useState, useTransition } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { createSession } from "@/lib/firebase/create-session";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    //firebase
    const fireApp = firebaseApp;
    const firebaseAuth = getAuth(fireApp);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [reactionMessageType, setReactionMessageType] = useState<ReactionMessageTypeEnum>(ReactionMessageTypeEnum.None);
    const [reactionMessage, setReactionMessage] = useState<string>("");

    async function handleSignupSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!name || (name.trim().length === 0)) {
            setReactionMessage("Please enter your full name");
            setReactionMessageType(ReactionMessageTypeEnum.Error);
            return
        }

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

        if(!confirmPassword || (confirmPassword.trim().length === 0)) {
            setReactionMessage("Please confirm your password");
            setReactionMessageType(ReactionMessageTypeEnum.Error);
            return
        }

        if(password !== confirmPassword) {
            setReactionMessage("Passwords do not match");
            setReactionMessageType(ReactionMessageTypeEnum.Error);
            return
        }

        startTransition(async () => {
            createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then((credential) => {
                const user = credential.user;
                
                if(user) {
                    setReactionMessage("Successfully signed up the user. You can now signin.");
                    setReactionMessageType(ReactionMessageTypeEnum.Success);
                }
                else {
                    throw new Error("Failed to signup the user.");
                }
            })
            .catch((error) => {
                setReactionMessage("Failed to signup the user. Error: " + error.message);
                setReactionMessageType(ReactionMessageTypeEnum.Error);
            });
        });
    }

    async function handleSignInWithGoogleAccountClick() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(firebaseAuth, provider)
        .then(async (result) => {
            const token = await result.user.getIdToken();

            if(token) {
                const result = await createSession(token);

                if(result.success) {
                    router.push("/");
                }
                else {
                    throw new Error("Failed to signin the user with Google account.");
                }
            }
        })
        .catch((error) => {
            setReactionMessage("Failed to signin with google account. Error: " + error.message);
            setReactionMessageType(ReactionMessageTypeEnum.Error);
        });
    }

    return (
        <form className="mt-4 w-[550px] mx-auto" onSubmit={handleSignupSubmit}>
            <fieldset className="border border-black px-8 py-2 rounded-xl">
                <legend>Signup Form</legend>
                
                <div className="flex justify-center items-center flex-col">
                    <div>
                        <label htmlFor="nameInput" className="font-bold">Full Name</label><br />

                        <input type="text" id="nameInput" className="w-80 bg-gray-200 p-2 rounded-full mt-2" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="emailInput" className="font-bold">Email Address</label><br />

                        <input type="email" id="emailInput" className="w-80 bg-gray-200 p-2 rounded-full mt-2" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="passwordInput" className="font-bold">Password</label><br />

                        <input type="password" id="passwordInput" className="w-80 bg-gray-200 p-2 rounded-full mt-2" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="confirmPasswordInput" className="font-bold">Confirm Password</label><br />

                        <input type="password" id="confirmPasswordInput" className="w-80 bg-gray-200 p-2 rounded-full mt-2" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>

                {(reactionMessageType == ReactionMessageTypeEnum.Error)
                &&
                <div className="text-center mt-4">
                    <p className="text-red-500">{reactionMessage}</p>
                </div>
                }

                {(reactionMessageType == ReactionMessageTypeEnum.Success)
                &&
                <div className="text-center mt-4">
                    <p className="text-green-500">{reactionMessage}</p>
                </div>
                }

                <div className="flex justify-center items-center mt-4 mb-4">
                    <button type="submit" disabled={isPending} className="w-80 cursor-pointer bg-green-500 py-2 rounded-full text-white">Signup</button>
                </div>

                <div className="flex justify-center items-center mt-4 mb-2">
                    <button type="button" className="w-80 cursor-pointer bg-blue-500 py-2 rounded-full text-white" onClick={handleSignInWithGoogleAccountClick}>SignIn with Google Account</button>
                </div>

                <div className="flex justify-center items-center mt-4 mb-2">
                    <p className="text-center">
                        Already have an account. <Link href="/auth/signin" className="font-bold">SignIn here</Link>
                    </p>
                </div>
            </fieldset>
        </form>
    );
}