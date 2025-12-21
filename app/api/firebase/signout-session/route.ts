import { cookies } from "next/headers";

export async function POST(request: Request) {
    (await cookies()).delete("session_token");

    return Response.json({success: true});
}