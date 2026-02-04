"use client";

import Link from "next/link";
import HeaderNavItems from "./HeaderNavItems";
import { useState } from "react";
import AuthProvider from "@/app/contexts/AuthContext";
import MobileProfileMenu from "./MobileProflieMenu";

export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    function handleToggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <div className="p-4 border-b border-gray-200 shadow-md flex justify-between items-center">
                <div>
                    <Link href="/" className="text-2xl text-teal-500 font-bold">Pocket Plan</Link>
                </div>

                <div className="sm:block hidden">
                    <HeaderNavItems />
                </div>

                <div className="sm:hidden block">
                    <div className="flex justify-center items-center gap-2">
                        <Link href="/plan" className="bg-teal-500 text-white px-3 py-1 rounded-xl">Start Planing</Link>

                        <button type="button" onClick={handleToggleMenu} className="cursor-pointer">
                            <span className="bi-list text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {showMenu
            &&
            <div className="flex flx-col justify-start items-start">
                <AuthProvider>
                    <MobileProfileMenu />
                </AuthProvider>
            </div>}
        </header>
    );
}