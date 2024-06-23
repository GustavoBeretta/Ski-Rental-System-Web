import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import RentalRequest from "../../../../../models/rental_request";

export async function PUT(request, {params}) {
    const {id} = params;
    const { newUserId: userId, newSport: sport, newDate: date, newTime: time, newStatus: status, newSki_Board: ski_board, newBoots: boots, newHelmet: helmet } = await request.json()
    await connectMongoDB();
    await RentalRequest.findByIdAndUpdate(id, { userId, sport, date, time, status, ski_board, boots, helmet });
    return NextResponse.json({message: "Rental request updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const rentalRequest = await RentalRequest.findOne({_id: id});
    return NextResponse.json({rentalRequest}, {status: 200});
}