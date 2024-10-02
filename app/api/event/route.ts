import { NextRequest, NextResponse } from "next/server";
import { addEvent, fetchEvents } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchEvents({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addEvent(body);
    return NextResponse.json({ message: "Item added successfully" });
}