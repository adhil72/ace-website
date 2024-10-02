import { NextRequest, NextResponse } from "next/server";
import { addExecomMember, deleteExecomMember, fetchExecomMembers } from "../db";

export const GET = async (req: NextRequest) => {
    return NextResponse.json(await fetchExecomMembers({}));
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    await addExecomMember(body);
    return NextResponse.json({ message: "Item added successfully" });
}

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url);
    const id = url.searchParams.get('id') as any;
    await deleteExecomMember(id);
    return NextResponse.json({ message: "Item deleted successfully" });
}