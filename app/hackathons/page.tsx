"use client";

import { useEffect, useState } from "react";

interface EventType {
  id: string;
  title: string;
  department: string;
  skill: string;
  gender: string;
  domain: string;
  date: string;
  type: string;
  poster: string;
}

export default function HackathonsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hackmatch_events");
    if (stored) {
      const allEvents = JSON.parse(stored);
      const hackathons = allEvents.filter(
        (event: EventType) => event.type === "Hackathon"
      );
      setEvents(hackathons);
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Hackathons 🚀
      </h1>

      {events.length === 0 ? (
        <p className="text-gray-600">
          No hackathons registered yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              {event.poster && (
                <img
                  src={event.poster}
                  alt={event.title}
                  className="rounded-2xl mb-4 h-40 w-full object-cover"
                />
              )}

              <h2 className="text-xl font-semibold mb-2">
                {event.title}
              </h2>

              <p className="text-sm text-gray-600 mb-1">
                {event.department}
              </p>

              <p className="text-sm text-gray-600">
                {event.skill} • {event.domain}
              </p>

              <button className="mt-4 w-full py-2 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full hover:scale-105 transition">
                Register
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}