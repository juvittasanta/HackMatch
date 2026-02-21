"use client";

import { useEffect, useState } from "react";

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

export default function EventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hackmatch_events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  const renderSection = (title: string, type: string) => {
    const filtered = events.filter((event) => event.type === type);

    return (
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>

        {filtered.length === 0 ? (
          <p className="text-gray-600">No {title} available yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((event) => (
              <div
                key={event.id}
                className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {event.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {event.department}
                </p>

                <p className="text-sm text-gray-600">
                  {event.skill} • {event.domain}
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  {new Date(event.date).toLocaleString()}
                </p>

                <button className="w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-medium hover:shadow-lg transition">
                  Register
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        All Events ✨
      </h1>

      {renderSection("Hackathons 🚀", "Hackathon")}
      {renderSection("Art Fest 🎨", "Art Fest")}
      {renderSection("Tech Fest 💻", "Tech Fest")}
    </div>
  );
}