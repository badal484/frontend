import React, { useState } from "react";

export default function Query() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Query submitted successfully!");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Submit Your Query</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full rounded"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full rounded"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
        />
        <textarea
          className="border p-2 w-full rounded"
          name="message"
          placeholder="Your Query..."
          rows="4"
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
