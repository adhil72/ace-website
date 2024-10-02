import { NextRequest, NextResponse } from "next/server";
import { addSemResult, fetchSemResults } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchSemResults({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addSemResult(body);
    return NextResponse.json({ message: "Item added successfully" });
}