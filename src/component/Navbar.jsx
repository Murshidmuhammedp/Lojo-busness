import React, { useState } from 'react';


const LogoNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="flex items-center justify-between w-full p-4 sm:p-6 md:p-8 bg-black text-white">
            <div className="ml-4 md:ml-10">
                <a href="#" className="text-2xl font-bold ">Logo</a>
            </div>

            <div className="hidden md:flex flex-1 justify-center items-center space-x-6 text-lg font-serif">
                <a href="#" className="text-gray-300 hover:text-gray-400">Home</a>
                <a href="#" className="text-gray-300 hover:text-gray-400">News</a>
                <a href="#" className="text-gray-300 hover:text-gray-400">Podcasts</a>
                <a href="#" className="text-gray-300 hover:text-gray-400">Resources</a>
            </div>

            <div className="hidden md:block mr-4">
                <a href="#" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
                    Contact Us
                </a>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-900 text-white p-4 md:hidden">
                    <div className="flex flex-col space-y-4 text-center">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">News</a>
                        <a href="#" className="hover:text-gray-300">Podcasts</a>
                        <a href="#" className="hover:text-gray-300">Resources</a>
                        <a href="#" className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600">
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>

    );
};

export default LogoNavbar;
