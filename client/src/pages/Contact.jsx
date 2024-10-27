// Student Name: Ebibulukemi Emiowei (Eric)
// Student ID: 301367312
// Date: 09/29/2024

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // for redirecting to the homepage
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission and redirect to Home page after submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    navigate("/");
  };

  return (
    <header className="min-h-screen bg-[#1d1b19] text-white flex items-center justify-center pb-4 pt-24">
      <div className="max-w-lg w-full bg-[#212020] p-6 rounded-lg shadow-lg">
        <div className="text-left">
          <p className="text-[#987750] text-lg leading-4 pb-5 uppercase tracking-widest">
            Contact Me
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-lg font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-[#1d1b19] text-white rounded"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-lg font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-[#1d1b19] text-white rounded"
              placeholder="Enter your last name"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-lg font-semibold">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-[#1d1b19] text-white rounded"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-[#1d1b19] text-white rounded"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-[#1d1b19] text-white rounded"
              placeholder="Enter your message"
              rows="2"></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#987750] text-white font-bold py-2 rounded mt-4 hover:bg-[#987750]">
            Send Message
          </button>
        </form>
      </div>
    </header>
  );
};

export default Contact;
