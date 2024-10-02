import { NextRequest, NextResponse } from "next/server";
import { addSemResult, fetchSemResults, deleteSemResult } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchSemResults({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addSemResult(body);
    return NextResponse.json({ message: "Item added successfully" });
}

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url);
    const id = url.searchParams.get("id") as string;
    await deleteSemResult(id);
    return NextResponse.json({ message: "Item deleted successfully" });
}