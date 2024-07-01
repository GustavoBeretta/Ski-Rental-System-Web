'use client';

import RentalRequestCard from "../components/RentalRequestCard";
import NavBar from "../components/NavBar";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const getRequests = async () => {
  try {
    const res = await fetch('https://rental-request-app.vercel.app/api/rental-requests', {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch the rental requests");
    }
    const data = await res.json();
    return Array.isArray(data.requests) ? data.requests : [];
  } catch (error) {
    console.log("Error loading rental requests: ", error);
    return [];
  }
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export default function RentalRequestsPage() {
  const { data: session, status } = useSession();
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    const fetchRequests = async () => {
      const data = await getRequests();
      const userRequests = data.filter(request => request.userId === session.user._id);
      setRequests(userRequests);
    };

    fetchRequests();
  }, [session, status, router]);

  return (
    <div>
      <NavBar showGuestHomeIcon={true}/>
      <main className="mt-20 flex flex-col items-center justify-between">
        <div className="mb-10">
          <h1 className="text-3xl">Rental Requests</h1>
        </div>
        <div className="grid lg:grid-cols-5 gap-5 grid-cols-2 sm:gap-4">
          {requests.length > 0 ? (
            requests.map(r => (
              <RentalRequestCard
                key={r._id}
                _id={r._id}
                status={r.status}
                date={formatDate(r.createdAt)}
                time={formatTime(r.createdAt)}
                sport = {r.sport}
              />
            ))
          ) : (
            <p>No rental requests found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
