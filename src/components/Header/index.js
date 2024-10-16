import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons from react-icons for the hamburger and close icons

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state when hamburger is clicked
    };

    return (
        <div className="flex flex-row justify-between items-center bg-black text-white p-6 px-12">
            {/* Logo and Title (EthAi hidden on small screens) */}
            <div className="flex flex-row items-center space-x-3">
                <img src="https://res.cloudinary.com/drpddho9b/image/upload/v1728970220/logo_pgfsoj.png" alt="logo" />
                <h1 className="text-xl font-bold hidden md:block">EthAi</h1> {/* Hidden on small screens */}
            </div>

            {/* Navigation Links - hidden on small screens, flex on medium+ screens */}
            <div className="hidden md:flex flex-row justify-evenly space-x-10 bg-[#0C2B2FB2] px-[90px] py-3 rounded-3xl">
                <a className="text-[#B0FAFFB2] text-[17px]" href="#f">Features</a>
                <a className="text-[#B0FAFFB2] text-[17px]" href="#w">Why Us</a>
                <a className="text-[#B0FAFFB2] text-[17px]" href="#t">Tokenomics</a>
                <a className="text-[#B0FAFFB2] text-[17px]" href="#r">Roadmap</a>
            </div>

            {/* Action Buttons - hidden on small screens, flex on medium+ screens */}
            <div className="hidden md:flex flex-row justify-evenly space-x-8">
                <button type="button" className="text-white">Log in</button>
                <button type="button"
                    className="bg-[#CDFCFF] rounded-xl text-black px-5 py-2"
                    style={{ boxShadow: 'inset 0 5px 9px rgba(76, 221, 253, 0.5)' }}
                >
                    Whitepaper
                </button>
            </div>

            {/* Hamburger Menu Icon - visible on small screens */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <FiX className="text-white text-3xl" /> : <FiMenu className="text-white text-3xl" />}
                </button>
            </div>

            {/* Mobile Menu - shown when the hamburger is clicked */}
            {isMenuOpen && (
                <div className="absolute top-[80px] right-0 w-[340px] bg-black p-6 md:hidden flex flex-col space-y-4">
                    <a className="text-[#B0FAFFB2] text-[17px]" href="#f">Features</a>
                    <a className="text-[#B0FAFFB2] text-[17px]" href="#w">Why Us</a>
                    <a className="text-[#B0FAFFB2] text-[17px]" href="#t">Tokenomics</a>
                    <a className="text-[#B0FAFFB2] text-[17px]" href="#r">Roadmap</a>

                    <button type="button" className="text-white w-full text-left">Log in</button>
                    <button type="button"
                        className="bg-[#CDFCFF] rounded-xl text-black w-[150px] text-left px-5 py-2 mt-3"
                        style={{ boxShadow: 'inset 0 5px 9px rgba(76, 221, 253, 0.5)' }}
                    >
                        Whitepaper
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
