'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function RentalRequestInformation() {
    const [userData, setUserData] = useState(null);
    const [buttonText, setButtonText] = useState("teste");

    const router = useRouter();
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    const params = new URLSearchParams(urlObj.search);
    const id = params.get('id');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/rental-requests/${id}`, {
                    cache: "no-store"
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch the rental request");
                }
                const data = await res.json();
                console.log(data.rentalRequest);
                setUserData(data.rentalRequest);
            } catch (error) {
                console.log("Error loading user data: ", error);
            }
        };

        fetchUserData();
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const inputs = [
        { label: "Nome completo", name: "name", type: "text" },
        { label: "Esporte", name: "sport", type: "text" },
        { label: "Data", name: "date", type: "text" },
        { label: "Hora", name: "time", type: "text" },
        { label: "Status", name: "status", type: "text" },
        { label: "Gênero", name: "gender", type: "select", options: ["Masculino", "Feminino"] },
        { label: "Tamanho de sapato (EUA)", name: "shoeSize", type: "number" },
        { label: "Idade", name: "age", type: "number" },
        { label: "Peso (KG)", name: "weight", type: "number" },
    ];

    return (
        <main>
            <section className="flex flex-col items-center justify-center snap-none">
                <h1 className="lg:text-4xl text-2xl text-[#8F8E8E] pt-6">Informações da Solicitação de Aluguel</h1>
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
                                        <option value="" disabled defaultValue>Selecione uma opção</option>
                                        {input.options.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={input.type || 'text'}
                                        name={input.name}
                                        id={input.name}
                                        defaultValue={
                                            userData ? 
                                            (input.name === 'date' ? formatDate(userData.createdAt) :
                                             input.name === 'time' ? formatTime(userData.createdAt) :
                                             userData[input.name]) 
                                            : ''
                                        }
                                        className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                        readOnly
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-4">
                            <div className="text-sm font-medium text-[#8F8E8E]">Inclui</div>
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
                                        <label htmlFor="boots" className="text-[#8F8E8E]">BOTAS</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="helmet" aria-describedby="helmet" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="helmet" className="text-[#8F8E8E]">CAPACETE</label>
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
