import { NextRequest, NextResponse } from "next/server";
import { addGalleryItem, fetchGalleryItems } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchGalleryItems({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addGalleryItem(body);
    return NextResponse.json({ message: "Item added successfully" });
}