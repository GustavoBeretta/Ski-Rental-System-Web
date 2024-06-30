'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function RentalRequestInformation() {
    const [rentalRequestData, setRentalRequestData] = useState(null);
    const [buttonText, setButtonText] = useState("Cancel");

    const router = useRouter();
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    const params = new URLSearchParams(urlObj.search);
    const id = params.get('id');

    const topButtonHandler = () => {
        router.push('/homeEmployee');
    }

    useEffect(() => {
        const fetchRentalRequestData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/rental-requests/${id}`, {
                    cache: "no-store"
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch the rental request");
                }
                const data = await res.json();
                console.log(data.rentalRequest);
                setRentalRequestData(data.rentalRequest);
            } catch (error) {
                console.log("Error loading user data: ", error);
            }
        };

        fetchRentalRequestData();
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
        { label: "Full Name", name: "nameUser", type: "text" },
        { label: "Sport", name: "sport", type: "text" },
        { label: "Date", name: "date", type: "text" },
        { label: "Time", name: "time", type: "text" },
        { label: "Status", name: "status", type: "text" },
        { label: "Gender", name: "gender", type: "select", options: ["Male", "Female"] },
        { label: "Shoe size", name: "shoeSize", type: "number" },
        { label: "Age", name: "age", type: "number" },
        { label: "Weight (KG)", name: "weight", type: "number" },
    ];

    return (
        <main>
            <section className="flex flex-col items-center justify-center snap-none">
                <div className='mt-6 flex flex-col items-center md:flex-row md:justify-items-center md:place-items-center'>
                    <h1 className="lg:text-4xl text-2xl text-[#8F8E8E]">Rental Request Information</h1>
                    <button class="flex ml-4 items-center justify-center w-10 h-10 text-white bg-[#81C9D8] rounded-full shadow-lg hover:bg-[#3a7885] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75" onClick={topButtonHandler}></button>
                </div>
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
                                            rentalRequestData ?
                                                (input.name === 'date' ? formatDate(rentalRequestData.createdAt) :
                                                    input.name === 'time' ? formatTime(rentalRequestData.createdAt) :
                                                        rentalRequestData[input.name])
                                                : ''
                                        }
                                        className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                        readOnly
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-4">
                            <div className="text-sm font-medium text-[#8F8E8E]">INCLUDES :</div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="ski-board" checked={rentalRequestData?.ski_board} aria-describedby="ski-board" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="ski-board" className="text-[#8F8E8E]">SKI/BOARD</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="boots" checked={rentalRequestData?.boots} aria-describedby="boots" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="boots" className="text-[#8F8E8E]">BOOTS</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="helmet" checked={rentalRequestData?.helmet} aria-describedby="helmet" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" disabled />
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
