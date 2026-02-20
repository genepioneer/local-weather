"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city") ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = city.trim();
    if (trimmed) {
      router.push(`/?city=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
      <label htmlFor="city-input" className="sr-only">
        City name
      </label>
      <input
        id="city-input"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name..."
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-800"
        maxLength={100}
        autoComplete="off"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </form>
  );
}
