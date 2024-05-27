const NavBar = () => {
    return (
        <nav className="bg-cyan-500 p-2 overflow-y-hidden">
            <div className="flex mx-auto justify-between items-center">
                <a href="#" className="text-gray-600 hover:text-white text-l ">RENTAL SYSTEM</a>
                    <a href="#">
                        <img className="h-8 w-8" src="/home-icon.png" alt="Home Icon" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white">Wisp Resort</a>
            </div>
        </nav>
    );
}

export default NavBar;