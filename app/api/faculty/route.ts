import { NextRequest, NextResponse } from "next/server";
import { addFaculty, fetchFaculty, deleteFacultyMember } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchFaculty({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addFaculty(body);
    return NextResponse.json({ message: "Item added successfully" });
}

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url);
    const id: any = url.searchParams.get('id');
    await deleteFacultyMember(id);
    return NextResponse.json({ message: "Item deleted successfully" });
}