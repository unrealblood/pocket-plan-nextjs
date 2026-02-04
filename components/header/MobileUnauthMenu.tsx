"use client";

import Link from "next/link";

export default function MobileUnauthMenu() {
    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <Link href="/auth/signin">SignIn</Link>
            <Link href="/auth/signup">Signup</Link>
        </div>
    );
}