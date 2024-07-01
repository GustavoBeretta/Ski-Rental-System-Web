'use client'

import React, { useEffect, useState } from 'react';
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error("Error loading users: ", error);
    return [];o
  }
};

const UsersRegistered = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    if (session && session.user.role === 'employee') {
      fetchUsers();
    }
  }, [session]);

  useEffect(() => {
    if (status === 'loading') return; 

    if (!session || session.user.role === 'guest') {
      router.push('/home');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null;
  }

  if (!Array.isArray(users)) {
    return <p>Error loading users</p>;
  }

  return (
    <div>
      <NavBar showEmployeeHomeIcon={true}/>
      <main className="flex flex-col items-center justify-between lg:mt-20 p-4">
        <div className="mb-20 mt-0">
          <h1 className="text-5xl text-[#8F8E8E] text-center">Users Registered</h1>
        </div>
        <div className="grid lg:grid-cols-5 gap-5 grid-cols-2 sm:gap-4">
          {users.map(r => (
            session.user.email !== r.email && (
              <UserCard
                key={r._id}
                name={r.name}
                gender={r.gender}
                shoeSize={r.shoeSize}
                height={r.height}
                weight={r.weight}
                age={r.age}
                _id={r._id}
              />
            )
          ))}
        </div>
      </main>
    </div>
  );
};

export default UsersRegistered;