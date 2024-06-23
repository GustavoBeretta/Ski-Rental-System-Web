'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';

export default function EditAccount() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user/me'); // Ajuste a URL conforme necessário
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  function getHashPassword(senha) {
      return bcrypt.hash(senha, 10);
  }

  const router = useRouter();

  const updateUser = async (event) => {
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
      
    if (password !== passwordConfirmation) {
      window.alert("Passwords do not match");
      return;
    }

    const hashPassword =  await getHashPassword(password);

    const dadosCadastro = {
      name: fullName,
      email: email,
      password: hashPassword,
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
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: dadosCadastroJson
      });
      if (!res.ok) {
        throw new Error("Failed to update user information");
      }

      router.push('/');

    } catch (error) {
      console.log("Error updating user information:", error);
    }
  }

  const inputs = [
    { label: "Full name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Password confirmation", name: "passwordConfirmation", type: "password" },
    { label: "Gender", name: "gender", type: "select", options: ["Masculine", "Feminine"] },
    { label: "US Shoe Size", name: "shoeSize", type: "number" },
    { label: "Age", name: "age", type: "number" },
    { label: "Weight (KG)", name: "weight", type: "number" },
    { label: "Height (CM)", name: "height", type: "number" },
  ];

  return (
    <main>
      <section className="flex flex-col items-center justify-center px-6 py-8 lg:py-0 snap-none">
        <h1 className="text-4xl text-[#8F8E8E] pt-6">Edit Account Information</h1>
        <div className="flex items-center content-center flex-col w-6/12">
          <form className="w-full bg-white rounded-lg p-6 space-y-4 sm:p-8" onSubmit={updateUser}>
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
              <button type="submit" className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4">Save</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
