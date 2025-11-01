 import React, { useEffect, useState, useRef } from "react";

export default function Navbar({ setSelectedCategory, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);  
  const [dropdownOpen, setDropdownOpen] = useState(false);  
  const dropdownRef = useRef(null); 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setScrolled(true);  
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const hoverEffect =
    "relative inline-block transition duration-300 transform hover:scale-105 hover:text-red-600 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
    "after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full";

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={`mx-auto px-[10%] fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Hamburger Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow text-lg"
            >
              <li>
                <a onClick={() => handleCategoryClick("All")} className={hoverEffect}>
                  Home
                </a>
              </li>
              <li ref={dropdownRef}>
                <details open={dropdownOpen}>
                  <summary
                    className={hoverEffect}
                    onClick={(e) => {
                      e.preventDefault(); // prevent default toggle
                      setDropdownOpen(!dropdownOpen);
                    }}
                  >
                    Categories
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-box">
                    <li>
                      <a onClick={() => handleCategoryClick("Action")} className={hoverEffect}>
                        Action
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Romantic")} className={hoverEffect}>
                        Romantic
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Thriller")} className={hoverEffect}>
                        Thriller
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Comedy")} className={hoverEffect}>
                        Comedy
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Drama")} className={hoverEffect}>
                        Drama
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Horror")} className={hoverEffect}>
                        Horror
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Sci-Fi")} className={hoverEffect}>
                        Sci-Fi
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Adventure")} className={hoverEffect}>
                        Adventure
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Crime")} className={hoverEffect}>
                        Crime
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Biography")} className={hoverEffect}>
                        Biography
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Family")} className={hoverEffect}>
                        Family
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleCategoryClick("Animation")} className={hoverEffect}>
                        Animation
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a onClick={() => handleCategoryClick("TV Show")} className={hoverEffect}>
                  TV Show
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Name */}
          <a
            onClick={() => handleCategoryClick("All")}
            className="font-extrabold text-[#E50914] text-3xl hidden md:block cursor-pointer"
          >
            Movie Lens Hub
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a onClick={() => handleCategoryClick("All")} className={hoverEffect}>
                Home
              </a>
            </li>
            <li ref={dropdownRef}>
              <details open={dropdownOpen}>
                <summary
                  className="hover:text-red-600"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  Categories
                </summary>
                <ul className="p-2 bg-base-100 rounded-box">
                  <li>
                    <a onClick={() => handleCategoryClick("Action")} className={hoverEffect}>
                      Action
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Romantic")} className={hoverEffect}>
                      Romantic
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Thriller")} className={hoverEffect}>
                      Thriller
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Comedy")} className={hoverEffect}>
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Drama")} className={hoverEffect}>
                      Drama
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Horror")} className={hoverEffect}>
                      Horror
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Sci-Fi")} className={hoverEffect}>
                      Sci-Fi
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Adventure")} className={hoverEffect}>
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Crime")} className={hoverEffect}>
                      Crime
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Biography")} className={hoverEffect}>
                      Biography
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Family")} className={hoverEffect}>
                      Family
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Animation")} className={hoverEffect}>
                      Animation
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a onClick={() => handleCategoryClick("TV Show")} className={hoverEffect}>
                TV Show
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar End - Sliding Search */}
        <div className="navbar-end flex items-center relative">
          {/* Small Device Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white p-2 focus:outline-none lg:hidden"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5a6 6 0 100 12 6 6 0 000-12zM21 21l-4.3-4.3"
              />
            </svg>
          </button>

          {/* Sliding Input */}
          <div
            className={`absolute right-0 top-0 transition-all duration-300 overflow-hidden ${
              searchOpen ? "w-[200px] opacity-100" : "w-0 opacity-0"
            } lg:static lg:opacity-100 lg:w-[400px]`}
          >
            <label className="flex w-full bg-transparent border border-white/30 hover:border-white/50 focus-within:border-white/70 focus-within:bg-black/30 backdrop-blur-md text-white rounded-full px-3 py-2 items-center gap-2 transition-all duration-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
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
              <input
                type="search"
                placeholder="Search by movie name"
                onChange={handleSearchChange}
                className="bg-transparent focus:outline-none text-white placeholder-gray-400 w-full transition-all duration-300"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
