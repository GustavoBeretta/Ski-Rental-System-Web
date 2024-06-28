"use client"

import { signOut } from "next-auth/react"

const NavBar = () => {
    return (
        <nav className="bg-[#81C9D8] p-2 overflow-y-hidden">
            <div className="flex mx-auto justify-between items-center">
                <p href="#" className="text-gray-600 hover:text-white text-l ">RENTAL SYSTEM</p>
                    <a onClick={() => signOut()} href="#">
                        <img className="h-8 w-8" src="/home-icon.png" alt="Home Icon" />
                    </a>
                    <p href="#" className="text-gray-600 hover:text-white">Wisp Resort</p>
            </div>
        </nav>
    );
}

export default NavBar;