'use client';

import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";

export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session && session.user) {
        const user = session.user;
        setUserData(user);
    }
  }, [session]);

  const handleClickEditAccount = () => {
    router.push('/edit-account');
  }
  const handleClickRentalRequests = () => {
    router.push('/rental-requests');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = userData._id;
    const userName = userData.name;
    const gender = userData.gender
    const shoeSize = userData.shoeSize;
    const age = userData.age;
    const weight = userData.weight;
    const height = userData.height;
    const sport = document.getElementById('sport').value;
    const ski_board = document.getElementById('ski-board').checked;
    const boots = document.getElementById('boots').checked;
    const helmet = document.getElementById('helmet').checked;

    if(!ski_board && !boots && !helmet) {
      alert('Please select at least one item to rent');
      return;
    }

    const rentalRequest = {
      userId: userId,
      nameUser: userName,
      gender: gender,
      shoeSize: shoeSize,
      age: age,
      weight: weight,
      height: height,
      sport: sport,
      status: 'send',
      ski_board: ski_board,
      boots: boots,
      helmet: helmet
    };

    const rentalRequestJSON = JSON.stringify(rentalRequest);
    try {
      const res = await fetch('http://localhost:3000/api/rental-requests', {
        cache: "no-store",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: rentalRequestJSON
      });
      if (!res.ok) {
        throw new Error("Failed to fetch the rental requests")
      }

      alert('Rental request submitted successfully!');
    } catch (error) {
      console.log("Error loading topics: ", error)
    }
  }

  return (
    <div>
      <NavBar showLogOutIcon={true}/>
      <main className="flex flex-col items-center justify-between py-0 mb-0 lg:mt-60 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-60">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center mb-1 text-[#8F8E8E]">NEW RENTAL REQUEST</h1>
            <h2 className="text-sm mb-4 text-[#8F8E8E]">Make sure guest information is updated!</h2>
            <form className="space-y-4 md:space-y-6 w-3/4 mb-4" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8F8E8E]">SPORT:</label>
                <select id='sport' className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  <option>Ski</option>
                  <option>Snowboard</option>
                </select>
              </div>
              <div>
                <div className="flex flex-col space-y-4">
                  <div className="text-sm font-medium text-[#8F8E8E]">INCLUDES :</div>
                  <div className="flex items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="ski-board" aria-describedby="ski-board" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="ski-board" className="text-[#8F8E8E]">Ski/Board</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="boots" aria-describedby="boots" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="boots" className="text-[#8F8E8E]">Boots</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="helmet" aria-describedby="helmet" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="helmet" className="text-[#8F8E8E]">Helmet</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button type="submit" onClick={handleSubmit} className="w-2/4 text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
          </div>
          <div className="flex flex-col justify-center space-y-10">
            <button type="submit" onClick={handleClickRentalRequests} className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-extrabold rounded-3xl text-3xl px-5 py-2.5 text-center h-full">Rental Historic</button>
            <button type="button" onClick={handleClickEditAccount} className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-extrabold rounded-3xl text-3xl px-5 py-2.5 text-center h-full">Account Settings </button>
          </div>
        </div>
      </main>
    </div>
  );
}
