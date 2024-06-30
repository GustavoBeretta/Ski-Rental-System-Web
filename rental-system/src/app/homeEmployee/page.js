'use client'

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic'; // Importação dinâmica para componentes que precisam de hooks do cliente
import NavBar from "../components/NavBar";

const RentalRequestCardEmployee = dynamic(() => import('../components/RentalRequestCardEmployee'), {
  ssr: false // Desabilita renderização do lado do servidor para esse componente
});

const getRequests = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/rental-requests', {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch the rental requests");
        }
        return res.json();
    } catch (error) {
        console.error("Error loading rental requests: ", error);
        throw error;
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

const HomeEmployee = () => {
    const { data: session, status } = useSession();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRequests();
                setRequests(data.requests);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch rental requests:", error);
                setLoading(false);
            }
        };

        if (status === 'authenticated' && session?.user?.role === 'guest') {
            window.location.href = '/home'; // Redireciona para a página inicial em vez de usar router.push
        } else {
            fetchData();
        }
    }, [session, status]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const sentRequests = requests.filter(r => r.status === "Sent");
    const inProgressRequests = requests.filter(r => r.status === "In Progress");
    const returnedRequests = requests.filter(r => r.status === "Returned");
    const canceledRequests = requests.filter(r => r.status === "Canceled");

    return (
        <div>
            <NavBar showLogOutIcon={true} showUsersIcon={true}/>
            <main className="mt-10 flex flex-col items-center justify-between">
                <div className="mb-10">
                    <h1 className="lg:text-4xl text-2xl text-[#8F8E8E]">Rental Requests</h1>
                </div>
                <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 sm:gap-4">
                    <div>
                        <h2 className="text-center text-xl">Sent</h2>
                        
                        {sentRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                name={r.name}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                    <div>
                        <h2 className="text-center text-xl">In Progress</h2>
                        {inProgressRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                    <div>
                        <h2 className="text-center text-xl">Returned</h2>
                        {returnedRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                    <div>
                        <h2 className="text-center text-xl">Canceled</h2>
                        {canceledRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeEmployee;