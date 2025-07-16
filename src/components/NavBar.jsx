import { useState, useEffect } from "react";

import { navLinks } from "../constants";

function NavBar() {
    // track if the user has scrolled down the page
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // create an event listener for when the user scrolls
        const handleScroll = () => {
            // check if the user has scrolled down at least 10px
            // if so, set the state to true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        // add the event listener to the window
        window.addEventListener("scroll", handleScroll);

        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <div className="flex gap-2 items-center">
                    {/* Avatar Circle with Initials */}
                    <a href="#home" className="logo">
                        <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-bold">
                            BY
                        </div>
                    </a>
                    <a href="#home" className="logo">
                        Beffin Yohannan
                    </a>
                </div>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-4">

                    <a href="#contact" className="contact-btn group ">
                        <div className="inner ">
                            <span >Contact me</span>
                        </div>
                    </a>

                    {/* Hamburger Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden  focus:outline-none cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <nav className="mobile-nav lg:hidden mt-2">
                    <ul className="flex flex-col gap-4 bg-black shadow-md p-4">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link} onClick={() => setMenuOpen(false)}>
                                    {name}
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default NavBar