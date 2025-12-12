import AuthProfileMenu from "./AuthProfileMenu";
import UnauthProfileMenu from "./UnauthProfileMenu";

export default function ProfileMenu() {
    const isAuthUser = false;

    return (
        <div className="absolute bg-white p-3 border border-gray-200 rounded-xl right-16 top-8 w-32">
            {isAuthUser ? <AuthProfileMenu /> : <UnauthProfileMenu />}
        </div>
    );
}