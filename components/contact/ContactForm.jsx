"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
 import 'tailwindcss/tailwind.css'
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔹 replace
        "YOUR_TEMPLATE_ID", // 🔹 replace
        e.target,
        "YOUR_PUBLIC_KEY" // 🔹 replace
      )
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setMessage("❌ Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center  py-12">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-sm uppercase text-blue-600 font-semibold">
            Get in Touch
          </h3>
          <h2 className="text-3xl md:text-4xl  text-gray-800 mt-2">
            We're always ready to work with new clients
          </h2>
          <p className="text-gray-500 mt-3">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={sendEmail} className="grid gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              required
              className="w-full px-4 py-3 border border-black-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="johndoe@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="+92 300 1234567"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Project Inquiry"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Status Message */}
        {message && (
          <p className="text-center mt-6 text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
