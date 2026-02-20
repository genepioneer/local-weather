import { Suspense } from "react";
import SearchForm from "@/components/SearchForm";
import ForecastGrid from "@/components/ForecastGrid";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { fetchWeatherByCity } from "@/lib/weather-api";

interface PageProps {
  searchParams: Promise<{ city?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const { city } = await searchParams;

  let weatherData = null;
  let error = null;

  if (city) {
    const result = await fetchWeatherByCity(city);
    if (result.error) {
      error = result.error;
    } else {
      weatherData = result.data ?? null;
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-100">
          5-Day Weather Forecast
        </h1>

        <div className="mb-8">
          <Suspense fallback={null}>
            <SearchForm />
          </Suspense>
        </div>

        {!city && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Search for a city to see its weather forecast.
          </p>
        )}

        {error && <ErrorMessage message={error} />}

        {weatherData && <ForecastGrid weather={weatherData} />}

        {city && !error && !weatherData && <LoadingSkeleton />}
      </div>
    </main>
  );
}
