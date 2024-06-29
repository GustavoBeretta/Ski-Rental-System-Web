'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import NavBar from "../components/NavBar";

export default function EditAccount() {
    const [userData, setUserData] = useState({});
    const [dadosCadastro, setDadosCadastro] = useState({});

    const router = useRouter();
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    const params = new URLSearchParams(urlObj.search);
    const id = params.get('id');

    function getHashPassword(senha) {
        return bcrypt.hash(senha, 10);
    }

    async function getUserID() {
        try {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("Failed to fetch the user information");
            }
            const userData = await res.json();
            setUserData(await userData.user);
        } catch (error) {
            console.log("Error loading user information: ", error);
        }
    }
    useEffect(() => {
        if (id) {
            getUserID();
        }
    }, [id]);

    const updateUser = async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("newPassword").value;
        const passwordConfirmation = document.getElementById("newPasswordConfirmation").value;
        const gender = document.getElementById("gender").value;
        const shoeSize = document.getElementById("shoeSize").value;
        const age = document.getElementById("age").value;
        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;
        const employeeYes = document.getElementById("employee-Yes").checked ? "employee" : "guest";


        if (password && passwordConfirmation) {
            if (password !== passwordConfirmation) {
                window.alert("Passwords do not match");
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
                newRole: employeeYes,
            }
            setDadosCadastro(JSON.stringify(dadosCadastro));
        } else {
            const dadosCadastro = {
                newName: fullName,
                newEmail: email,
                newPassword: userData.password,
                newGender: gender,
                newShoeSize: shoeSize,
                newAge: age,
                newWeight: weight,
                newHeight: height,
                newRole: employeeYes,
            };
            setDadosCadastro(JSON.stringify(dadosCadastro));
        }


        try {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                cache: "no-store",
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dadosCadastro
            });
            if (!res.ok) {
                throw new Error("Failed to update user information");
            }
            window.alert("User information updated successfully");
            router.push('/usersRegistered');

        } catch (error) {
            console.log("Error updating user information:", error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: checked ? 'employee' : '',
        }));
    };

    const inputs = [
        { label: "FULL NAME:", name: "name", type: "text" },
        { label: "EMAIL:", name: "email", type: "email" },
        { label: "NEW PASSWORD:", name: "newPassword", type: "password" },
        { label: "NEW PASSWORD CONFIRMATION:", name: "newPasswordConfirmation", type: "password" },
        { label: "GENDER:", name: "gender", type: "select", options: ["Male", "Female"] },
        { label: "US SHOE SIZE:", name: "shoeSize", type: "number" },
        { label: "AGE:", name: "age", type: "number" },
        { label: "WEIGHT (KG):", name: "weight", type: "number" },
        { label: "HEIGHT (CM):", name: "height", type: "number" },
        { label: "EMPLOYEE:", name: "employee", type: "checkbox", options: ["Yes"] },
    ];

    return (
        <div>
            <NavBar showEmployeeHomeIcon={true}/>
            <main className="mt-10">
                <section className="flex flex-col items-center justify-center snap-none">
                    <h1 className="lg:text-4xl text-2xl text-[#8F8E8E] pt-6">Edit Account Information</h1>
                    <div className="flex items-center content-center flex-col lg:w-6/12 ">
                        <form className="w-full rounded-lg space-y-4 sm:p-8" onSubmit={updateUser}>
                            {inputs.map((input) => (
                                <div key={input.name}>
                                    <label htmlFor={input.name} className="block mb-1 text-sm font-medium text-[#8F8E8E]">
                                        {input.label}
                                    </label>
                                    {input.type === 'select' ? (
                                        <select
                                            name={input.name}
                                            id={input.name}
                                            value={userData[input.name] || ''}
                                            onChange={handleChange}
                                            className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                            required
                                        >
                                            {input.options.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : input.type === 'checkbox' ? (
                                        <div>
                                            {input.options.map((option) => (
                                                <label key={option}>
                                                    <input
                                                        type="checkbox"
                                                        name={input.name}
                                                        id={`${input.name}-${option}`}
                                                        value={option}
                                                        checked={userData.role === 'employee'}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    ) : (
                                        <input
                                            type={input.type || 'text'}
                                            name={input.name}
                                            id={input.name}
                                            defaultValue={userData ? userData[input.name] : ''}
                                            className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4">Save</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}