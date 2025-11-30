import React, { useState } from "react";

/**
 * src/components/ContactForm.jsx
 *
 * - Accessible contact form with built-in client-side validation
 * - Optional `endpoint` prop: if provided, form will POST JSON to that URL
 * - Graceful UI states: idle | sending | success | error
 * - Easy to adapt to Netlify Forms / Formspree / your backend
 *
 * Usage:
 * <ContactForm endpoint="https://example.com/api/contact" />
 *
 */

export default function ContactForm({ endpoint = null }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  function validate(values) {
    const err = {};
    if (!values.name || values.name.trim().length < 2) err.name = "Please enter your name.";
    if (!values.email) err.email = "Please enter your email.";
    else {
      // simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(values.email)) err.email = "Please enter a valid email.";
    }
    if (!values.message || values.message.trim().length < 10) err.message = "Message must be at least 10 characters.";
    return err;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (errors[name]) setErrors((s) => ({ ...s, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("sending");
    try {
      // If an endpoint is provided, send JSON there.
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Network response was not ok");
      } else {
        // Fallback: emulate network call (remove this in production)
        await new Promise((r) => setTimeout(r, 700));
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("ContactForm error:", err);
      setStatus("error");
    } finally {
      // optionally reset status after some time, but keep success visible
      setTimeout(() => {
        if (status !== "success") setStatus("idle");
      }, 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-card-sm">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={`mt-2 w-full rounded-md px-3 py-2 border ${errors.name ? "border-red-400" : "border-neutral-200 dark:border-neutral-700"} bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-300`}
          placeholder="Your full name"
          required
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`mt-2 w-full rounded-md px-3 py-2 border ${errors.email ? "border-red-400" : "border-neutral-200 dark:border-neutral-700"} bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-300`}
          placeholder="you@domain.com"
          required
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="6"
          className={`mt-2 w-full rounded-md px-3 py-2 border ${errors.message ? "border-red-400" : "border-neutral-200 dark:border-neutral-700"} bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-300`}
          placeholder="Tell me about your project or opportunity..."
          required
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:opacity-95 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && <span className="text-sm text-green-600">Message sent — thank you!</span>}
        {status === "error" && <span className="text-sm text-red-600">Something went wrong. Please try again.</span>}
      </div>

      {/* Helpful note: how to integrate with Netlify Forms if user wants */}
      <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
        {endpoint ? (
          <span>Sending to configured endpoint.</span>
        ) : (
          <span>No endpoint configured — the form uses a mock send. Provide an <code>endpoint</code> prop to post data.</span>
        )}
      </div>
    </form>
  );
}
