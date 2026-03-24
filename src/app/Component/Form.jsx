"use client"
import { Send } from 'lucide-react';
import React, { useState } from 'react';

const Form = () => {
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    }
  };
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Form */}

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl relative font-bold mb-6">
            Get in Touch
           <span className='absolute bg-green-600 w-15 h-0.5 -bottom-2 left-0 rounded-full'></span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name:"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject:"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              ></textarea>

              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button className="bg-green-500 text-white w-full justify-center cursor-pointer px-6 py-3 flex items-center gap-x-2 rounded hover:bg-green-600">
              Send Message <Send size={18} absoluteStrokeWidth />
            </button>

          </form>
        </div>

        {/* Map */}

        <div className="w-full h-112.5 rounded-lg overflow-hidden">

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Chittagong&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

        </div>

      </div>
        </div>
    );
};

export default Form;