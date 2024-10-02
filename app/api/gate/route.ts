import { NextRequest, NextResponse } from "next/server";
import { addGateHolder, fetchGateHolders, deleteGateHolder } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchGateHolders({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addGateHolder(body);
    return NextResponse.json({ message: "Item added successfully" });
}

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url);
    const id = url.searchParams.get("id") as string;
    await deleteGateHolder(id);
    return NextResponse.json({ message: "Item deleted successfully" });
}