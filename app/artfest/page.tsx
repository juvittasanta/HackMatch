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

export default function ArtFestPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hackmatch_events");
    if (stored) {
      const allEvents = JSON.parse(stored);
      const artFest = allEvents.filter(
        (event: EventType) => event.type === "Art Fest"
      );
      setEvents(artFest);
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Art Fest 🎨
      </h1>

      {events.length === 0 ? (
        <p>No art fest events yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg"
            >
              <h2 className="text-xl font-semibold">
                {event.title}
              </h2>
              <p className="text-sm text-gray-600">
                {event.department}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}