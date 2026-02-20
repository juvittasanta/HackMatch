"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          HackMatch
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-pink-500 transition">
            Home
          </Link>
          <Link href="/hackathons" className="hover:text-pink-500 transition">
            Hackathons
          </Link>
          <Link href="/events" className="hover:text-pink-500 transition">
            Events
          </Link>
          <Link href="/art-fest" className="hover:text-pink-500 transition">
            Art Fest
          </Link>
          <Link href="/tech-fest" className="hover:text-pink-500 transition">
            Tech Fest
          </Link>
          <Link href="/register" className="hover:text-pink-500 transition">
            Register Event
          </Link>
          <Link href="/preferences" className="hover:text-pink-500 transition">
            Student Preferences
          </Link>
        </div>
      </div>
    </nav>
  );
}