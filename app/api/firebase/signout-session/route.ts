import { cookies } from "next/headers";

export async function POST(request: Request) {
    (await cookies()).delete("session_token");

    if((await cookies()).get("session_token")) {
        return Response.json({success: true});
    }

    return Response.json({success: false});
}