"use client";

import { useState, useEffect } from "react";

interface EventType {
  id: string;
  name: string;
  department: string;
  skill: string;
  gender: string;
  domain: string;
  date: string;
  type: string;
}

export default function PreferencesPage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  const [preferences, setPreferences] = useState({
    skill: "",
    gender: "",
    department: "",
    domain: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("hackmatch_events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

const calculateMatch = (event: EventType) => {
  let score = 0;
  let total = 5; // Now 5 factors

  // Skill match
  if (preferences.skill && preferences.skill === event.skill) {
    score++;
  }

  // Gender logic
  if (
    preferences.gender &&
    (event.gender === "Open to All" ||
      preferences.gender === event.gender)
  ) {
    score++;
  }

  // Department logic
  if (
    preferences.department &&
    (event.department === "Open to All" ||
      preferences.department.toLowerCase() ===
        event.department.toLowerCase())
  ) {
    score++;
  }

  // Domain partial match (SMART MATCHING)
  if (
    preferences.domain &&
    event.domain
      .toLowerCase()
      .includes(preferences.domain.toLowerCase())
  ) {
    score++;
  }

  // Time logic (basic match for now)
  if (event.date) {
    score++;
  }

  return Math.round((score / total) * 100);
};

  const handleMatch = () => {
    const matched = events.map((event) => ({
      ...event,
      match: calculateMatch(event),
    }));

    matched.sort((a, b) => b.match - a.match);
    setFiltered(matched);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Student Preferences 🎯
      </h1>

      {/* Preference Form */}
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl space-y-4 mb-10">
        <select
          onChange={(e) =>
            setPreferences({ ...preferences, skill: e.target.value })
          }
          className="w-full p-3 rounded-xl border"
        >
          <option value="">Select Skill Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Pro</option>
        </select>

        <select
          onChange={(e) =>
            setPreferences({ ...preferences, gender: e.target.value })
          }
          className="w-full p-3 rounded-xl border"
        >
          <option value="">Select Gender Preference</option>
          <option>Open to All</option>
          <option>Women Only</option>
          <option>Men Only</option>
        </select>

        <input
          placeholder="Preferred Department"
          onChange={(e) =>
            setPreferences({ ...preferences, department: e.target.value })
          }
          className="w-full p-3 rounded-xl border"
        />

        <input
          placeholder="Preferred Domain (AI/ML, Coding...)"
          onChange={(e) =>
            setPreferences({ ...preferences, domain: e.target.value })
          }
          className="w-full p-3 rounded-xl border"
        />

        <button
          onClick={handleMatch}
          className="w-full py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-semibold hover:scale-105 transition"
        >
          Find My Match
        </button>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((event) => (
          <div
            key={event.id}
            className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">
              {event.name}
            </h2>

            <p className="text-sm text-gray-600 mb-3">
              {event.department} • {event.domain}
            </p>

            <div className="mb-2">
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"
                  style={{ width: `${event.match}%` }}
                ></div>
              </div>
            </div>

            <p className="text-sm font-medium text-gray-700">
              {event.match}% Match
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}