import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { username, password } = await req.json();
    if (username === "acegec" && password === "#3zF9329880") {
        return NextResponse.json({ message: "Login successful", code: 200 });
    } else {
        return NextResponse.json({ message: "Invalid credentials", code: 401 });
    }
}