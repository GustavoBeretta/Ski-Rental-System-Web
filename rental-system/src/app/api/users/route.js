import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb"
import users from "../../../../models/users";

export async function POST(request) {
    const {id, status, name} = await request.json();
    await connectMongoDB();
    await users.create({id, status, name});
    return NextResponse.json({message: "User created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    const requests = await users.find();
    return NextResponse.json({ requests });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await RentalRequest.findByIdAndDelete(id)
    return NextResponse.json({message: "Request deleted"}, {status: 200})
}
    