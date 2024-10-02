import { NextRequest, NextResponse } from "next/server";
import { addGalleryItem, deleteGalleryItem, fetchGalleryItems } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchGalleryItems({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addGalleryItem(body);
    return NextResponse.json({ message: "Item added successfully" });
}

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    await deleteGalleryItem(id as string);
    return NextResponse.json({ message: "Item deleted successfully" });
}