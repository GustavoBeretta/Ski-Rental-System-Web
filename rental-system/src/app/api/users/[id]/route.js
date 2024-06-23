import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Users from "../../../../../models/users";

export async function PUT(request, {params}) {
    const {id} = params;
    const { newName: name, newEmail: email, newPassword: password, newGender: gender, newShoeSize: showSize, newAge: age, newWeight: weight, newHeight: height, newRole: role } = await request.json()
    await connectMongoDB();
    await Users.findByIdAndUpdate(id, { name, email, password, gender, showSize, age, weight, height, role });
    return NextResponse.json({message: "User updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const user = await Users.findOne({_id: id});
    return NextResponse.json({user}, {status: 200});
}