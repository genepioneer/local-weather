import { DayForecast } from "@/types/weather";
import WeatherIcon from "./WeatherIcon";

interface ForecastCardProps {
  day: DayForecast;
}

export default function ForecastCard({ day }: ForecastCardProps) {
  return (
    <div className="rounded-xl bg-white/80 p-5 shadow-md backdrop-blur-sm transition-transform hover:scale-[1.02]">
      <div className="mb-3 text-center">
        <p className="text-lg font-semibold text-gray-800">{day.dayName}</p>
        <p className="text-sm text-gray-500">{day.date}</p>
      </div>

      <div className="mb-3 flex flex-col items-center">
        <WeatherIcon emoji={day.weatherEmoji} label={day.weatherLabel} className="text-5xl" />
        <p className="mt-1 text-sm font-medium text-gray-600">{day.weatherLabel}</p>
      </div>

      <div className="mb-4 flex justify-center gap-3">
        <span className="text-xl font-bold text-red-500">{day.tempMax}&deg;</span>
        <span className="text-gray-300">/</span>
        <span className="text-xl font-bold text-blue-500">{day.tempMin}&deg;</span>
      </div>

      <dl className="space-y-1.5 text-sm text-gray-600">
        <div className="flex justify-between">
          <dt>Wind</dt>
          <dd className="font-medium">{day.windSpeed} km/h</dd>
        </div>
        <div className="flex justify-between">
          <dt>Humidity</dt>
          <dd className="font-medium">{day.humidity}%</dd>
        </div>
        <div className="flex justify-between">
          <dt>Precipitation</dt>
          <dd className="font-medium">{day.precipitationProbability}%</dd>
        </div>
        <div className="flex justify-between">
          <dt>UV Index</dt>
          <dd className="font-medium">{day.uvIndex}</dd>
        </div>
      </dl>
    </div>
  );
}
