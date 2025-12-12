import Link from "next/link";
import HeaderNavItems from "./HeaderNavItems";

export default async function Header() {
    return (
        <header className="p-4 border-b border-gray-200 shadow-md flex justify-between items-center">
            <div>
                <Link href="/" className="text-2xl text-teal-500 font-bold">Pocket Plan</Link>
            </div>

            <div>
                <HeaderNavItems />
            </div>
        </header>
    );
}