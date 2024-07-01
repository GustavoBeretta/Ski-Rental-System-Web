'use client';

import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';
import NavBar from "../components/NavBar";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import Swal from 'sweetalert2';

export default function EditAccount() {
    const { data: session, status } = useSession();
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
        gender: '',
        shoeSize: '',
        age: '',
        weight: '',
        height: ''
    });

    useEffect(() => {
        if (session && session.user) {
            const user = session.user;
            setUserData(user);
            setFormData({
                fullName: user.name || '',
                email: user.email || '',
                gender: user.gender || '',
                shoeSize: user.shoeSize || '',
                age: user.age || '',
                weight: user.weight || '',
                height: user.height || ''
            });
        }
    }, [session]);

    const updateUser = async (event) => {
        event.preventDefault();

        if (formData.newPassword !== formData.newPasswordConfirmation) {
            Swal.fire('Passwords do not match', '', 'error')
            return;
        }

        if (!(await bcrypt.compare(formData.currentPassword, userData.password))) {
            Swal.fire('Current password is not correct', '', 'error')
            return;
        }

        const hashPassword = formData.newPassword ? await bcrypt.hash(formData.newPassword, 10) : userData.password;

        const dadosCadastro = {
            newName: formData.fullName,
            newEmail: formData.email,
            newPassword: hashPassword,
            newGender: formData.gender,
            newShoeSize: formData.shoeSize,
            newAge: formData.age,
            newWeight: formData.weight,
            newHeight: formData.height,
            newRole: session.user.role
        };

        const dadosCadastroJson = JSON.stringify(dadosCadastro);

        try {
            const res = await fetch(`http://localhost:3000/api/users/${userData._id}`, {
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
            Swal.fire('User information updated successfully!', '', 'success')
            signOut()
        } catch (error) {
            Swal.fire(`Error updating user information: ${error}`, '', 'error');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const inputs = [
        { label: "FULL NAME:", name: "fullName", type: "text" },
        { label: "EMAIL:", name: "email", type: "email" },
        { label: "CURRENT PASSWORD:", name: "currentPassword", type: "password" },
        { label: "NEW PASSWORD:", name: "newPassword", type: "password" },
        { label: "NEW PASSWORD CONFIRMATION:", name: "newPasswordConfirmation", type: "password" },
        { label: "GENDER:", name: "gender", type: "select", options: ["Male", "Female"] },
        { label: "US SHOE SIZE:", name: "shoeSize", type: "number" },
        { label: "AGE:", name: "age", type: "number" },
        { label: "WEIGHT (KG):", name: "weight", type: "number" },
        { label: "HEIGHT (CM):", name: "height", type: "number" },
    ];

    if (status === 'loading' || !userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar showGuestHomeIcon={true}/>
            <main className="lg:mt-5 p-4">
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
                                            value={formData[input.name]}
                                            onChange={handleChange}
                                            className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                            required={!(input.name === 'newPassword' || input.name === 'newPasswordConfirmation')}
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
                                            value={formData[input.name]}
                                            onChange={handleChange}
                                            className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                            required={!(input.name === 'newPassword' || input.name === 'newPasswordConfirmation')}
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
