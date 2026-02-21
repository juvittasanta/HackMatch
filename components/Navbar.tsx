"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent tracking-wide"
        >
          HackMatch
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold text-lg">
          
          <Link href="/" className="hover:text-pink-500 transition duration-300">
            Home
          </Link>

          <Link href="/hackathons" className="hover:text-pink-500 transition duration-300">
            Hackathons
          </Link>

          <Link href="/events" className="hover:text-pink-500 transition duration-300">
            Events
          </Link>

          <Link href="/artfest" className="hover:text-pink-500 transition duration-300">
            Art Fest
          </Link>

          <Link href="/techfest" className="hover:text-pink-500 transition duration-300">
            Tech Fest
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white shadow-md hover:scale-105 transition duration-300"
          >
            Register Event
          </Link>

          <Link href="/preferences" className="hover:text-pink-500 transition duration-300">
            Student Preferences
          </Link>

        </div>
      </div>
    </nav>
  );
}