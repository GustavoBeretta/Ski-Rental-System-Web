'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'
import NavBar from "./components/NavBar";

export default function Login() {

    const [isEmployeeLogin, setIsEmployeeLogin] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn("credentials", {
                email, password, isEmployeeLogin, redirect:false,
            })
            
            if (res.error) {
                window.alert('Invalid credentials')
                return
            }
            
            router.replace("home")
        } catch (error) {
            console.log(error)
        }
    }

    const handleEmployeeLoginClick = () => {
        setIsEmployeeLogin(true);

    };

    return (
        <div>
            <NavBar/>
            <main className="lg:mt-40 p-4">
                <section>
                    <div className="flex flex-col items-center justify-center px-6 py-8 lg:py-0">
                        <h1 id="title" className="text-5xl text-center text-[#8F8E8E] mb-5">
                            {isEmployeeLogin ? 'Employee Login' : 'Guest Login'}
                        </h1>
                        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8F8E8E]">EMAIL:</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#8F8E8E]">PASSWORD:</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                    </div>
                                    <div className="flex items-center justify-center flex-col">
                                        {!isEmployeeLogin ? (
                                            <a href="./cadastro" className="text-sm font-medium text-[#4094A5] hover:underline hover:text-black">Create new account</a>
                                        ) : (<a href="/" className="text-sm font-medium text-[#4094A5] hover:underline hover:text-black">Guest? Login here</a>)}
                                        {!isEmployeeLogin && (
                                            <a href="#" id="employeeBtton" className="text-sm font-medium text-[#4094A5] hover:underline hover:text-black mt-3" onClick={handleEmployeeLoginClick}>Employee? Login here</a>
                                        )}
                                    </div>
                                    <button type="submit" className="w-full text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}