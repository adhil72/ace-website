import { NextRequest, NextResponse } from "next/server";
import { addFaculty, fetchFaculty } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchFaculty({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addFaculty(body);
    return NextResponse.json({ message: "Item added successfully" });
}