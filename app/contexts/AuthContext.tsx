"use client";

import { firebaseApp } from "@/lib/firebase/firebase-app";
import { AuthContextType } from "@/lib/typescript/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({children}: {children: React.ReactNode}) {
    const fireApp = firebaseApp;
    const firebaseAuth = getAuth(fireApp);

    const [authState, setAuthState] = useState<AuthContextType>({isAuthUser: false});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if(user) {
                setAuthState({isAuthUser: true});
            }
            else {
                setAuthState({isAuthUser: false});
            }
        });

        return () => unsubscribe();
    }, [firebaseAuth]);

    return (<AuthContext value={authState}>{children}</AuthContext>);
}