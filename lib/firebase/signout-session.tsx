export async function signoutSession() {
    const response = await fetch("/api/firebase/signout-session", {
        method: "POST",
        headers: {
            "Content-Type": "appication/json"
        }
    });

    return await response.json();
}