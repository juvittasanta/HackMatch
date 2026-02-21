"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    skill: "",
    gender: "",
    domain: "",
    type: "",
    date: "",
    description: "",
    poster: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePosterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, poster: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingEvents =
      JSON.parse(localStorage.getItem("hackmatch_events") || "[]");

    const newEvent = {
      id: Date.now().toString(),
      ...formData,
    };

    const updatedEvents = [...existingEvents, newEvent];

    localStorage.setItem(
      "hackmatch_events",
      JSON.stringify(updatedEvents)
    );

    alert("Event Registered Successfully 🎉");

    setFormData({
      title: "",
      department: "",
      skill: "",
      gender: "",
      domain: "",
      type: "",
      date: "",
      description: "",
      poster: "",
    });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Register Event 🚀
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl space-y-6"
      >
        {/* Event Title */}
        <input
          type="text"
          name="title"
          placeholder="Event Name"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-pink-300"
        />

        {/* Department */}
        <input
          type="text"
          name="department"
          placeholder="Conducted By (Department)"
          value={formData.department}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-300"
        />

        {/* Event Type */}
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border"
        >
          <option value="">Select Event Type</option>
          <option>Hackathon</option>
          <option>Art Fest</option>
          <option>Tech Fest</option>
        </select>

        {/* Skill Level */}
        <select
          name="skill"
          value={formData.skill}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border"
        >
          <option value="">Select Skill Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Pro</option>
        </select>

        {/* Gender Eligibility */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border"
        >
          <option value="">Select Gender Eligibility</option>
          <option>Open to All</option>
          <option>Women Only</option>
          <option>Men Only</option>
        </select>

        {/* Domain */}
        <select
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border"
        >
          <option value="">Select Domain</option>
          <option>Coding</option>
          <option>AI/ML</option>
          <option>Design</option>
          <option>Hardware</option>
          <option>Robotics</option>
          <option>Other</option>
        </select>

        {/* Date */}
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border"
        />

        {/* Poster Upload */}
        <div>
          <label className="block mb-2 font-medium">Upload Poster</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePosterUpload}
            className="w-full"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
          className="w-full p-3 rounded-xl border"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Register Event
        </button>
      </form>
    </div>
  );
}