import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Tailwind hover effect
    const hoverEffect =
        "relative inline-block transition duration-300 transform hover:scale-105 hover:text-red-600 " +
        "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
        "after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full";

    return (
        <div className={`mx-auto px-[10%] fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
                            <li><a className={hoverEffect}>Home</a></li>
                            <li>
                                <a  className={hoverEffect}>Categories</a>
                                <ul className="p-2">
                                    <li><a href="/action" className={hoverEffect}>Action</a></li>
                                    <li><a href="/romantic" className={hoverEffect}>Romantic</a></li>
                                    <li><a href="/thriller" className={hoverEffect}>Thriller</a></li>
                                    <li><a href="/comedy" className={hoverEffect}>Comedy</a></li>
                                    <li><a href="/drama" className={hoverEffect}>Drama</a></li>
                                    <li><a href="/horror" className={hoverEffect}>Horror</a></li>
                                    <li><a href="/sci-fi" className={hoverEffect}>Sci-Fi</a></li>
                                    <li><a href="/adventure" className={hoverEffect}>Adventure</a></li>
                                    <li><a href="/crime" className={hoverEffect}>Crime</a></li>
                                    <li><a href="/biography" className={hoverEffect}>Biography</a></li>
                                    <li><a href="/family" className={hoverEffect}>Family</a></li>
                                    <li><a href="/animation" className={hoverEffect}>Animation</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className=" font-extrabold  text-[#E50914] text-3xl hidden md:block">Movie Lens Hub</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><a className={hoverEffect}>Home</a></li>
                        <li>
                            <details>
                                <summary className="hover:text-red-600">Categories</summary>
                                <ul className="p-2">
                                    <li><a href="/action" className={hoverEffect}>Action</a></li>
                                    <li><a href="/romantic" className={hoverEffect}>Romantic</a></li>
                                    <li><a href="/thriller" className={hoverEffect}>Thriller</a></li>
                                    <li><a href="/comedy" className={hoverEffect}>Comedy</a></li>
                                    <li><a href="/drama" className={hoverEffect}>Drama</a></li>
                                    <li><a href="/horror" className={hoverEffect}>Horror</a></li>
                                    <li><a href="/sci-fi" className={hoverEffect}>Sci-Fi</a></li>
                                    <li><a href="/adventure" className={hoverEffect}>Adventure</a></li>
                                    <li><a href="/crime" className={hoverEffect}>Crime</a></li>
                                    <li><a href="/biography" className={hoverEffect}>Biography</a></li>
                                    <li><a href="/family" className={hoverEffect}>Family</a></li>
                                    <li><a href="/animation" className={hoverEffect}>Animation</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className={hoverEffect}>Item 3</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <label className="input w-3/4 lg:w-full max-w-xs bg-transparent border border-white/30 hover:border-white/50 focus-within:border-white/70 focus-within:bg-black/30 backdrop-blur-md text-white rounded-full px-3 py-2 flex items-center gap-2">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
        </div>
    );
}
