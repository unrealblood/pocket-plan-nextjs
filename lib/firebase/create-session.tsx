export async function createSession(idToken: string) {
    const response = await fetch("/api/firebase/create-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({idToken}),
    });

    return await response.json();
}