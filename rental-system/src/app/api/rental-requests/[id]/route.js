import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import RentalRequest from "../../../../../models/rental_request";

// função PUT para atualizar uma rental request de acordo com seu ID
export async function PUT(request, {params}) {
    const {id} = params;
    const { newUserId: userId, newNameUser: nameUser, newGender: gender, newShoeSize: shoeSize, newAge: age, newWeight: weight, newHeight: height, newSport: sport, newStatus: status, newSki_Board: ski_board, newBoots: boots, newHelmet: helmet } = await request.json()
    await connectMongoDB();
    await RentalRequest.findByIdAndUpdate(id, { userId, nameUser, gender, shoeSize, age, weight, height, sport, status, ski_board, boots, helmet });
    return NextResponse.json({message: "Rental request updated"}, {status: 200});
}

// função GET para pegar uma rental request de acordo com seu id
export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const rentalRequest = await RentalRequest.findOne({_id: id});
    return NextResponse.json({rentalRequest}, {status: 200});
}


// função DELETE para excluir uma rental request de acordo com seu id
export async function DELETE(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    await RentalRequest.findByIdAndDelete(id);
    return NextResponse.json({message: "Rental request deleted"}, {status: 200});
}
