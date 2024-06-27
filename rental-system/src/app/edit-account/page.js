'use client';

//TERMINAR A IMPLEMENTAÇÃO DO EDIT ACCOUNT/ FALTA AINDA A IMPLEMENTAÇÃO DO REQ DO USUARIO QUE ESTA LOGADO PARA PEGAR OS DADOS DELE E MOSTRAR NO FORMULARIO

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';

export default function EditAccount() {
    const [userData, setUserData] = useState(null);// passar o object jason do usuario logado


    function getHashPassword(senha) {
        return bcrypt.hash(senha, 10);
    }

    function passwordMatch(senha, hash) {
        return bcrypt.compare(senha, hash);
    }

    const router = useRouter();

    const updateUser = async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const antigaPassword = document.getElementById("password").value;
        const password = document.getElementById("newPassword").value;
        const passwordConfirmation = document.getElementById("newPasswordConfirmation").value;
        const gender = document.getElementById("gender").value;
        const shoeSize = document.getElementById("shoeSize").value;
        const age = document.getElementById("age").value;
        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;

        if (password !== passwordConfirmation) {
            window.alert("Passwords do not match");
            return;
        }
        const hashAntigaPassword = await getHashPassword(antigaPassword);

        if (passwordMatch(hashAntigaPassword, userData.password)) {
            window.alert("Password is the same as the current one");
            return;
        }

        const hashPassword = await getHashPassword(password);

        const dadosCadastro = {
            newName: fullName,
            newEmail: email,
            newPassword: hashPassword,
            newGender: gender,
            newShoeSize: shoeSize,
            newAge: age,
            newWeight: weight,
            newHeight: height,
            newRole: "guest"
        }

        const dadosCadastroJson = JSON.stringify(dadosCadastro);

        try {
            const res = await fetch('http://localhost:3000/api/users/66788365fb1e9dd356a36880', {// Passar o id do usuário logado apos o users/{id}
                cache: "no-store",
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dadosCadastroJson
            });
            if (!res.ok) {
                throw new Error("Failed to update user information");
            }
            console.log("User information updated successfully");
            router.push('/');

        } catch (error) {
            console.log("Error updating user information:", error);
        }
    }

    const inputs = [
        { label: "Full name", name: "name", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
        { label: "New Password", name: "newPassword", type: "password" },
        { label: "New password confirmation", name: "newPasswordConfirmation", type: "password" },
        { label: "Gender", name: "gender", type: "select", options: ["Masculine", "Feminine"] },
        { label: "US Shoe Size", name: "shoeSize", type: "number" },
        { label: "Age", name: "age", type: "number" },
        { label: "Weight (KG)", name: "weight", type: "number" },
        { label: "Height (CM)", name: "height", type: "number" },
    ];

    return (
        <main>
            <section className="flex flex-col items-center justify-center snap-none">
                <h1 className="lg:text-4xl text-2xl text-[#8F8E8E] pt-6">Edit Account Information</h1>
                <div className="flex items-center content-center flex-col lg:w-6/12 ">
                    <form className="w-full rounded-lg space-y-4 sm:p-8" onSubmit={updateUser}>
                        {inputs.map((input) => (
                            <div key={input.name}>
                                <label htmlFor={input.name} className="block mb-1 text-sm font-medium text-[#8F8E8E]">
                                    {input.label}
                                </label>
                                {input.options ? (
                                    <select
                                        name={input.name}
                                        id={input.name}
                                        className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                        required
                                    >
                                        <option value="" disabled defaultValue>Select an option</option>
                                        {input.options.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={input.type || 'text'}
                                        name={input.name}
                                        id={input.name}
                                        defaultValue={userData ? userData[input.name] : ''}
                                        className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                        required
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex justify-center">
                            <button type="submit" onClick={updateUser} className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4">Save</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
