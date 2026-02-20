import { WeatherData } from "@/types/weather";
import ForecastCard from "./ForecastCard";

interface ForecastGridProps {
  weather: WeatherData;
}

export default function ForecastGrid({ weather }: ForecastGridProps) {
  const subtitle = weather.admin1
    ? `${weather.admin1}, ${weather.country}`
    : weather.country;

  return (
    <section>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{weather.locationName}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {weather.days.map((day) => (
          <ForecastCard key={day.date} day={day} />
        ))}
      </div>
    </section>
  );
}
