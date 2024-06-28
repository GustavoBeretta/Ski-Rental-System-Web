'use client';

//TERMINAR A IMPLEMENTAÇÃO DO EDIT ACCOUNT/ FALTA AINDA A IMPLEMENTAÇÃO DO REQ DO USUARIO QUE ESTA LOGADO PARA PEGAR OS DADOS DELE E MOSTRAR NO FORMULARIO

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';

export default function RentalRequestInformation() {
    const [userData, setUserData] = useState(null);// passar o object jason do usuario logado
    const [buttonText, setbuttonText] = useState("teste")


    const router = useRouter();

    const updateUser = async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("name");
        const sport = document.getElementById("email");
        const date = document.getElementById("password");
        const time = document.getElementById("newPassword");
        const status = document.getElementById("newPasswordConfirmation");
        const gender = document.getElementById("gender");
        const shoeSize = document.getElementById("shoeSize");
        const age = document.getElementById("age");
        const weight = document.getElementById("weight");
        const skis = document.getElementById("height");
        const boots = document.getElementById("height");
        const helmet = document.getElementById("height");


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

    const getUser = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/users/66788365fb1e9dd356a36880', {
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("Failed to fetch the user");
            }
            return res.json();
        } catch (error) {
            console.log("Error loading user information:", error);
        }
    }

    const getRequest = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/rental-requests/66721b808d45733413fe3d63', {
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("Failed to fetch the rental requests");
            }
            return res.json();
        } catch (error) {
            console.log("Error loading topics: ", error);
        }
    };

    const name = document.getElementById("name");
    const sport = document.getElementById("sport");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const status = document.getElementById("status");
    const gender = document.getElementById("gender");
    const shoeSize = document.getElementById("shoeSize");
    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const skis_board = document.getElementById("ski-board");
    const boots = document.getElementById("boots");
    const helmet = document.getElementById("helmet");


    const inputs = [
        { label: "Full name", name: "name", type: "text" },
        { label: "Sport", name: "sport", type: "text" },
        { label: "Date", name: "date", type: "date" },
        { label: "Time", name: "time", type: "time" },
        { label: "Status", name: "status", type: "text" },
        { label: "Gender", name: "gender", type: "select", options: ["Masculine", "Feminine"] },
        { label: "US Shoe Size", name: "shoeSize", type: "number" },
        { label: "Age", name: "age", type: "number" },
        { label: "Weight (KG)", name: "weight", type: "number" },
    ];

    return (
        <main>
            <section className="flex flex-col items-center justify-center snap-none">
                <h1 className="lg:text-4xl text-2xl text-[#8F8E8E] pt-6">Rental request information</h1>
                <div className="flex items-center content-center flex-col lg:w-6/12 ">
                    <form className="w-full rounded-lg space-y-4 sm:p-8">
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
                                        disabled
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
                                        readOnly
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-4">
                            <div className="text-sm font-medium text-[#8F8E8E]">Includes</div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="ski-board" aria-describedby="ski-board" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="ski-board" className="text-[#8F8E8E]">SKI/BOARD</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="boots" aria-describedby="boots" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="boots" className="text-[#8F8E8E]">BOOTS</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="helmet" aria-describedby="helmet" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="helmet" className="text-[#8F8E8E]">HELMET</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4">{buttonText}</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
