"use client";

import { AuthContext } from "@/app/contexts/AuthContext";
import { AuthContextType } from "@/lib/typescript/auth";
import { useContext } from "react";
import MobileAuthMenu from "./MobileAuthMenu";
import MobileUnauthMenu from "./MobileUnauthMenu";

export default function MobileProfileMenu() {
    const authState : AuthContextType | undefined = useContext(AuthContext);

    return (
        <div className="border-b border-gray-200 w-full p-4">
            {authState?.isAuthUser ? <MobileAuthMenu /> : <MobileUnauthMenu />}
        </div>
    );
}