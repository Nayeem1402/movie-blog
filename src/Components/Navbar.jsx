import React from 'react'

export default function Navbar() {
    return (
        <div className='mx-auto px-[10%] bg-transparent fixed top-0 left-0 right-0 z-10 w-full'>
            <div class="navbar  shadow-sm">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabindex="-1"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Categories</a>
                                <ul class="p-2">
                                    <li><a href="/action">Action</a></li>
                                    <li><a href="/romantic">Romantic</a></li>
                                    <li><a href="/thriller">Thriller</a></li>
                                    <li><a href="/comedy">Comedy</a></li>
                                    <li><a href="/drama">Drama</a></li>
                                    <li><a href="/horror">Horror</a></li>
                                    <li><a href="/sci-fi">Sci-Fi</a></li>
                                    <li><a href="/adventure">Adventure</a></li>
                                    <li><a href="/crime">Crime</a></li>
                                    <li><a href="/biography">Biography</a></li>
                                    <li><a href="/family">Family</a></li>
                                    <li><a href="/animation">Animation</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <a class="btn btn-ghost text-[#E50914] text-3xl hidden md:block"> Movie Lens Hub</a>
                </div>
                <div class="navbar-center hidden lg:flex ">
                    <ul class="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Categories</summary>
                                <ul class="p-2">
                                    <li><a href="/action">Action</a></li>
                                    <li><a href="/romantic">Romantic</a></li>
                                    <li><a href="/thriller">Thriller</a></li>
                                    <li><a href="/comedy">Comedy</a></li>
                                    <li><a href="/drama">Drama</a></li>
                                    <li><a href="/horror">Horror</a></li>
                                    <li><a href="/sci-fi">Sci-Fi</a></li>
                                    <li><a href="/adventure">Adventure</a></li>
                                    <li><a href="/crime">Crime</a></li>
                                    <li><a href="/biography">Biography</a></li>
                                    <li><a href="/family">Family</a></li>
                                    <li><a href="/animation">Animation</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    {/* search bar  */}

                    <label className="input w-3/4 lg:w-full max-w-xs bg-gray-200  ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
        </div>
    )
}
