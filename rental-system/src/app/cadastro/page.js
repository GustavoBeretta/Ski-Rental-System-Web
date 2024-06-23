'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Cadastro() {
  const router = useRouter();

  const postUsers = async (event) => {
    event.preventDefault(); // Evita o reload da página

    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("passwordConfirmation").value;
    const gender = document.getElementById("gender").value;
    const shoeSize = document.getElementById("shoeSize").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const dadosCadastro = {
      name: fullName,
      email: email,
      password: password,
      gender: gender,
      shoeSize: shoeSize,
      age: age,
      weight: weight,
      height: height
    }

    const dadosCadastroJson = JSON.stringify(dadosCadastro);

    try {
      const res = await fetch('http://localhost:3000/api/users', {
        cache: "no-store",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: dadosCadastroJson
      });
      if (!res.ok) {
        throw new Error("Failed to fetch the rental requests")
      }

      console.log("User created");

      // Redireciona para a página home
      router.push('/');

    } catch (error) {
      console.log("Error loading topics: ", error)
    }
  }

  const inputs = [
    { label: "Full name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Password", name: "password" },
    { label: "Password confirmation", name: "passwordConfirmation" },
    { label: "Gender", name: "gender", options: ["Masculine", "Feminine"] },
    { label: "US Shoe Size", name: "shoeSize" },
    { label: "Age", name: "age" },
    { label: "Weight (KG)", name: "weight" },
    { label: "Height (CM)", name: "height" },
  ];

  return (
    <main>
      <section className="flex flex-col items-center justify-center px-6 py-8 lg:py-0 snap-none">
        <h1 className="text-4xl text-[#8F8E8E] pt-6">Create New Account</h1>
        <p className="text-l text-[#4094A5] mt-4">
          Already registered? <a href="/" className="text-sm font-medium text-[#4094A5] hover:underline hover:text-black">Sign in</a>
        </p>
        <div className="flex items-center content-center flex-col w-6/12">
          <form className="w-full bg-white rounded-lg p-6 space-y-4 sm:p-8" onSubmit={postUsers}>
            {inputs.map((input) => (
              <div key={input.name}>
                <label htmlFor={input.name} className="block mb-1 text-sm font-medium text-[#8F8E8E]">
                  {input.label}
                </label>
                {input.options ? (
                  <select name={input.name} id={input.name} className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required>
                    <option value="" disabled selected hidden>Select an option</option>
                    {input.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input type="text" name={input.name} id={input.name} className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required />
                )}
              </div>
            ))}
            <div className="flex justify-center">
              <button type="submit" className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4">Sign up</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
