import Link from "next/link";

export default function UnauthProfileMenu() {
    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <Link href="/auth/signin" className="hover:border-b hover:border-gray-500">SignIn</Link>
            
            <Link href="/auth/signup" className="hover:border-b hover:border-gray-500">Signup</Link>
        </div>
    );
}