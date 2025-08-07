"use client";

/*export const metadata = {
  title: "Request A Quote!",
  description:
    "Leave us some information about you and your project and one of our managers will reach out to set up a discovery call with you to discuss service options and pricing.",
};*/

import Link from "next/link";

import { useState } from "react";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    honey: "", // honeypot field
  });
  const [status, setStatus] = useState("");

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    // Bot trap
    if (formData.honey !== "") return;

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
        }),
      });

      if (response.ok) {
        setStatus("✅ Request submitted successfully!");
        setFormData({ name: "", email: "", service: "", honey: "" });
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("🚫 Failed to send. Please try again later.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Request a Quote
            </h1>
          </div>

          {/* Contact form */}
          <form
            className="mx-auto max-w-[400px] space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Honeypot */}
            <input
              type="text"
              id="honey"
              value={formData.honey}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-indigo-200/65"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                className="form-input w-full"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-indigo-200/65"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="form-input w-full"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1 block text-sm font-medium text-indigo-200/65"
              >
                What service are you interested in?
              </label>
              <select
                id="service"
                required
                className="form-select w-full"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  -- Select an option --
                </option>
                <option value="Web Optimization">Web Optimization</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Digital Advertisement">
                  Digital Advertisement
                </option>
                <option value="Custom Development">Custom Development</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow hover:bg-[length:100%_150%]"
            >
              Submit Request
            </button>

            {status && (
              <p className="text-center text-sm text-indigo-200/80">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
