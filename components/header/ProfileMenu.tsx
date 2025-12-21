import { AuthContextType } from "@/lib/typescript/auth";
import AuthProfileMenu from "./AuthProfileMenu";
import UnauthProfileMenu from "./UnauthProfileMenu";
import { useContext } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";

export default function ProfileMenu() {
    const authState : AuthContextType | undefined = useContext(AuthContext);

    return (
        <div className="absolute bg-white p-3 border border-gray-200 rounded-xl right-16 top-8 w-32">
            {authState?.isAuthUser ? <AuthProfileMenu /> : <UnauthProfileMenu />}
        </div>
    );
}