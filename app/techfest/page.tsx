"use client";

import { useEffect, useState } from "react";

interface EventType {
  id: string;
  title: string;
  department: string;
  level: string;
  gender: string;
  domain: string;
  date: string;
  type: string;
  poster?: string;
}

export default function TechFestPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hackmatch_events");
    if (stored) {
      const parsed = JSON.parse(stored);

      // Filter only Tech Fest events
      const techEvents = parsed.filter(
        (event: EventType) => event.type === "Tech Fest"
      );

      setEvents(techEvents);
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Tech Fest 💻⚡
      </h1>

      {events.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No Tech Fest events registered yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              {event.poster && (
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-2xl mb-4"
                />
              )}

              <h2 className="text-2xl font-semibold mb-2">
                {event.title}
              </h2>

              <p className="text-sm text-gray-600 mb-2">
                {event.department}
              </p>

              <div className="space-y-1 text-sm text-gray-700">
                <p><strong>Level:</strong> {event.level}</p>
                <p><strong>Gender:</strong> {event.gender}</p>
                <p><strong>Domain:</strong> {event.domain}</p>
                <p><strong>Date:</strong> {event.date}</p>
              </div>

              <button className="mt-5 w-full py-2 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full hover:scale-105 transition">
                Register
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}