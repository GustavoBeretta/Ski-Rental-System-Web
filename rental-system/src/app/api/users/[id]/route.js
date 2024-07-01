import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Users from "../../../../../models/users";

// função PUT para atualizar um user de acordo com seu ID
export async function PUT(request, {params}) {
    const {id} = params;
    const { newName: name, newEmail: email, newPassword: password, newGender: gender, newShoeSize: shoeSize, newAge: age, newWeight: weight, newHeight: height, newRole: role } = await request.json()
    await connectMongoDB();
    await Users.findByIdAndUpdate(id, { name, email, password, gender, shoeSize, age, weight, height, role });
    return NextResponse.json({message: "User updated"}, {status: 200});
}

// função GET para pegar um user de acordo com seu id
export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const user = await Users.findOne({_id: id});
    return NextResponse.json({user}, {status: 200});
}

// função DELETE para excluir um user de acordo com seu id
export async function DELETE(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    await Users.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted"}, {status: 200});
}
