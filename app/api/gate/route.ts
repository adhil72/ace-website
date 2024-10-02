import { NextRequest, NextResponse } from "next/server";
import { addGateHolder, fetchGateHolders } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchGateHolders({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addGateHolder(body);
    return NextResponse.json({ message: "Item added successfully" });
}