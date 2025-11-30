import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold md:text-7xl">404</h1>
        <p className="mt-4 text-xl font-medium text-neutral-700 dark:text-neutral-300">
          Page not found
        </p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white font-medium"
          >
            Go to Home
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">
          If you think this is an error, please contact the site owner.
        </div>
      </div>
    </div>
  );
}
