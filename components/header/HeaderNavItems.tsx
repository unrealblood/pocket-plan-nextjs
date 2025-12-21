"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import AuthProvider from "@/app/contexts/AuthContext";

export default function HeaderNavItems() {
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

    function handleProfileClick() {
        setShowProfileMenu(!showProfileMenu);
    }

    return (
        <nav className="relative flex justify-center items-center gap-8">
            <Link href="/dashboard">Dashboard</Link>

            <button type="button" className="cursor-pointer" onClick={handleProfileClick}>Profile</button>

            {showProfileMenu
            &&
            <AuthProvider>
                <ProfileMenu />
            </AuthProvider>}

            <Link href="/plan" className="bg-teal-500 text-white px-6 py-2 rounded-xl">Start Planing</Link>
        </nav>
    );
}