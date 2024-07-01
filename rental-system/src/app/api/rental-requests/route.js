import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb"
import RentalRequest from "../../../../models/rental_request";

export async function POST(request) {
    const { userId, nameUser, gender, shoeSize, age, weight, height, sport, status, ski_board, boots, helmet } = await request.json();
    await connectMongoDB();
    await RentalRequest.create({ userId, nameUser, gender, shoeSize, age, weight, height, sport, status, ski_board, boots, helmet });
    return NextResponse.json({message: "Rental Request created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    const requests = await RentalRequest.find();
    return NextResponse.json({ requests });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await RentalRequest.findByIdAndDelete(id)
    return NextResponse.json({message: "Request deleted"}, {status: 200})
}
    