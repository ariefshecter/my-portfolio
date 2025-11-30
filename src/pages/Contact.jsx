import React from "react";
import ContactForm from "../components/ContactForm";

/**
 * src/pages/Contact.jsx
 *
 * - Page wrapper for contact
 * - Shows ContactForm and contact details / socials
 * - Accessible headings and clear CTAs
 */

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <header className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
            Want to collaborate, hire, or say hello? Use the form below or reach out via email / socials.
          </p>
        </div>
      </header>

      {/* Main content: form + contact details */}
      <main className="pb-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Send a message</h2>
              <ContactForm endpoint={null} />
            </div>
          </div>

          {/* Contact details / socials */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900 shadow-sm">
              <h3 className="text-lg font-medium">Get in touch</h3>

              <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-200 space-y-3">
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Email</div>
                  <a href="mailto:ceryover@gmail.com" className="block mt-1 text-sm text-primary-600 hover:underline">ceryover@gmail.com</a>
                </div>

                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Location</div>
                  <div className="mt-1">Lampung, Indonesia</div>
                </div>

                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Availability</div>
                  <div className="mt-1">Open to freelance & full-time</div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-200 dark:border-neutral-800 pt-4">
                <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Connect</h4>
                <div className="mt-3 flex items-center gap-3">
                  <a href="https://github.com/ariefshecter" target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600">
                    {/* GitHub */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M12 2C7.03 2 3 6.03 3 11c0 4.08 2.64 7.54 6.3 8.76.46.08.62-.2.62-.44 0-.22-.01-.8-.01-1.57-2.56.56-3.1-.62-3.3-1.2-.11-.28-.6-1.2-1.03-1.45-.35-.2-.85-.7-.01-.71.79-.01 1.35.73 1.54 1.03.9 1.5 2.34 1.07 2.91.82.09-.65.34-1.07.62-1.32-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.35.3.66.89.66 1.8 0 1.3-.01 2.35-.01 2.67 0 .24.16.53.63.44C18.36 18.54 21 15.08 21 11c0-4.97-4.03-9-9-9z" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

<a
  href="https://discord.com/users/arief_shecter"
  target="_blank"
  rel="noreferrer"
  className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600"
>
  {/* Discord */}
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
    <path
      d="M19 5c-1.6-.7-3.3-1.1-5.1-1.3l-.2.5c-1-.1-2-.1-3 0l-.2-.5C8.7 3.9 7 4.3 5.4 5 2.8 8.8 2 12.5 2.4 16c2 1.5 4.2 2.5 6.7 3l.9-1.5c-.7-.2-1.4-.5-2.1-.9l.4-.3c3.9 1.8 8.1 1.8 12 0l.4.3c-.7.4-1.4.7-2.1.9l.9 1.5c2.5-.5 4.7-1.5 6.7-3 .4-3.5-.4-7.2-3-11z"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12.5a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zM15 12.5a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

                </div>
              </div>
            </div>

            {/* Optional: small map / location placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800">
              <div className="w-full h-40 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
                Map / Location (add iframe or image)
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
