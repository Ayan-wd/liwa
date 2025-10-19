"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMsg("✅ Your message has been sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            mobileNumber: "",
            message: "",
          });
        },
        () => {
          setErrorMsg("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-lg uppercase text-blue-600 font-semibold">
          Get in Touch
        </h3>
        <div className="w-20 h-1 bg-[#EDE8D0] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden" >
        <div className="md:flex" >
          {/* Left Info Panel */}
          <div className="md:w-1/3 p-10 text-gray-800 flex flex-col justify-between bg-blue-700">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Why Contact Us?</h2>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="mr-2">📞</span>
                  Quick response to your queries
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💬</span>
                  Friendly support team
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📧</span>
                  Assistance via email or phone
                </li>
              </ul>
            </div>
            <div className="mt-8 text-white">
              <h3 className="text-lg font-semibold mb-2 text-white">Need immediate assistance?</h3>
              <p className=" mb-2 ">Call us at +971 54 393 1009 /  <span>+971 50 168 1993</span></p>
              <p className="text-sm ">Our team is available 10AM - 6PM, Monday to Saturday</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-2/3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-[#EDE8D0] focus:border-[#EDE8D0]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-[#EDE8D0] focus:border-[#EDE8D0]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-[#EDE8D0] focus:border-[#EDE8D0]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-[#EDE8D0] focus:border-[#EDE8D0]"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6] text-white font-medium rounded-full shadow-sm  transition duration-300 bg-blue-700"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status Messages */}
              {successMsg && <p className="text-green-600">{successMsg}</p>}
              {errorMsg && <p className="text-red-600">{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
