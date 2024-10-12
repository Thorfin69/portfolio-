'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const scrollToSection = (sectionId) => {
    const headerOffset = window.innerWidth < 768 ? 80 : 100; // Adjust header offset for mobile vs. desktop
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="container mx-auto px-4 py-6 md:px-[230px] bg-[#111826] shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio.</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`md:flex space-x-6 absolute md:relative top-0 left-0 w-full md:w-auto bg-[#111826] md:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0`}
        >
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <li key={item} className="text-center md:text-left md:py-0 md:px-4 py-4">
              <a
                className="hover:text-cyan-400 transition-colors block px-4 md:px-0"
                href={`#${item}`} // Linking to section IDs
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  scrollToSection(item); // Call the scroll function
                  closeMenu(); // Close menu on link click
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize first letter */}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
