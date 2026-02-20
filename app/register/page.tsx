"use client";

import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    level: "",
    gender: "",
    domain: "",
    date: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
  e.preventDefault();

  const existingEvents = JSON.parse(
    localStorage.getItem("events") || "[]"
  );

  const updatedEvents = [...existingEvents, formData];

  localStorage.setItem("events", JSON.stringify(updatedEvents));

  alert("Event Registered Successfully 🚀");

  setFormData({
    title: "",
    department: "",
    level: "",
    gender: "",
    domain: "",
    date: "",
  });
};
  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 to-blue-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Register Hackathon / Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Name"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Conducted By (Department)"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <select
          name="level"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Select Skill Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Pro">Pro</option>
        </select>

        <select
          name="gender"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Gender Eligibility</option>
          <option value="All">Open to All</option>
          <option value="Women">Women Only</option>
          <option value="Men">Men Only</option>
        </select>

        <select
          name="domain"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Domain</option>
          <option value="Coding">Coding</option>
          <option value="Hardware">Hardware</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Design">Design</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-300 to-blue-300 py-3 rounded font-semibold hover:opacity-90"
        >
          Submit Event
        </button>
      </form>
    </main>
  );
}