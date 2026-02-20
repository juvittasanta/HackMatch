"use client";

import { useState } from "react";

type EventType = {
  name: string;
  level: string;
  gender: string;
  domain: string;
  department: string;
};

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    level: "",
    gender: "",
    domain: "",
    department: "",
  });

  const events: EventType[] = [
    {
      name: "HackMatch 2026",
      level: "Beginner",
      gender: "All",
      domain: "Web",
      department: "CSE",
    },
    {
      name: "AI Fusion",
      level: "Advanced",
      gender: "All",
      domain: "AI",
      department: "CSE",
    },
    {
      name: "Cyber Shield",
      level: "Intermediate",
      gender: "Male",
      domain: "Cybersecurity",
      department: "ECE",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const calculateMatch = (event: EventType) => {
    let score = 0;
    let total = 4;

    if (preferences.level === event.level) score++;
    if (preferences.gender === event.gender || event.gender === "All") score++;
    if (preferences.domain === event.domain) score++;
    if (preferences.department === event.department) score++;

    return Math.round((score / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Find Your Perfect Hackathon 🔥
      </h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
        <select name="level" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select name="gender" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="All">All</option>
        </select>

        <select name="domain" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Domain</option>
          <option value="Web">Web</option>
          <option value="AI">AI</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>

        <select name="department" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
        </select>
      </div>

      {/* EVENTS DISPLAY */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {events.map((event, index) => {
          const match = calculateMatch(event);

          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-2">{event.name}</h2>
              <p>Level: {event.level}</p>
              <p>Domain: {event.domain}</p>
              <p>Department: {event.department}</p>

              <div className="mt-4">
                <p className="font-semibold">Match: {match}%</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
                  <div
                    className="bg-gradient-to-r from-pink-400 to-blue-400 h-3 rounded-full"
                    style={{ width: `${match}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}