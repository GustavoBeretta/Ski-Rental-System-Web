"use client"

import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

const NavBar = ({ showHomeIcon, showLogOutIcon }) => {

    const router = useRouter();

    function RedirectHome() {

        const currentPath = router.pathname

        if (currentPath === "/edit-account-employee") {
            router.push('/homeEmployee')
        }   else {
            router.push('/home')
        }

    }

    return (
        <nav className="bg-[#81C9D8] p-2 overflow-y-hidden">
            <div className="flex mx-auto justify-center items-center ">
                <div className="flex justify-center lg:justify-start w-1/3">
                    <a href="#" className="text-gray-600 hover:text-white lg:text-l">Rental System</a>
                </div>
                <div className="w-1/3 flex justify-center">
                    {showHomeIcon && (
                        <a onClick={() => RedirectHome()} href="#">
                            <img className="h-8 w-8" src="/home-icon.png" alt="Home Icon bg-green-400 bg-green-400" />
                        </a>
                    )}
                    {showLogOutIcon && (
                        <a onClick={() => signOut()} href="#">
                        <img className="h-8 w-8" src="/log-out-icon.png" alt="Log Out Icon bg-green-400 bg-green-400" />
                    </a>
                    )}
                </div>
                <div className="w-1/3 flex justify-center lg:justify-end">
                    <a href="#" className="text-gray-600 text-l hover:text-white">Wisp Resort</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;