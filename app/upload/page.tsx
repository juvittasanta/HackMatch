"use client";

import { useState } from "react";

export default function Upload() {
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    gender: "",
    department: "",
    domain: "",
  });

  const [poster, setPoster] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPoster(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event Uploaded:", formData);
    console.log("Poster:", poster);
    alert("Event Submitted Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Upload Hackathon / Event 🚀
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select name="level" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select name="gender" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Gender Participation</option>
          <option value="Male">Male Only</option>
          <option value="Female">Female Only</option>
          <option value="All">All Genders</option>
        </select>

        <select name="department" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
        </select>

        <select name="domain" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Domain</option>
          <option value="Web">Web Development</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-white p-2 rounded-lg hover:scale-105 transition"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
}