import {
  GeocodingResponse,
  ForecastResponse,
  WeatherData,
  DayForecast,
} from "@/types/weather";
import { getWeatherInfo } from "@/lib/weather-codes";
import { validateCityName } from "@/lib/validators";

const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

const DAILY_PARAMS = [
  "weather_code",
  "temperature_2m_max",
  "temperature_2m_min",
  "precipitation_probability_max",
  "wind_speed_10m_max",
  "relative_humidity_2m_max",
  "uv_index_max",
].join(",");

function getDayName(dateString: string, index: number): string {
  if (index === 0) return "Today";
  if (index === 1) return "Tomorrow";
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export async function fetchWeatherByCity(
  city: string
): Promise<{ data?: WeatherData; error?: string }> {
  const validation = validateCityName(city);
  if (!validation.valid) {
    return { error: validation.error };
  }

  const sanitizedCity = validation.sanitized;

  // Geocode the city
  const geoUrl = `${GEOCODING_URL}?name=${encodeURIComponent(sanitizedCity)}&count=5&language=en&format=json`;

  let geoResponse: Response;
  try {
    geoResponse = await fetch(geoUrl, { next: { revalidate: 3600 } });
  } catch {
    return { error: "Unable to reach the geocoding service. Please try again later." };
  }

  if (!geoResponse.ok) {
    return { error: "Geocoding service returned an error. Please try again later." };
  }

  const geoData: GeocodingResponse = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    return { error: `No location found for "${sanitizedCity}". Please check the city name and try again.` };
  }

  const location = geoData.results[0];

  // Fetch forecast
  const forecastUrl = `${FORECAST_URL}?latitude=${location.latitude}&longitude=${location.longitude}&daily=${DAILY_PARAMS}&timezone=auto&forecast_days=5`;

  let forecastResponse: Response;
  try {
    forecastResponse = await fetch(forecastUrl, { next: { revalidate: 1800 } });
  } catch {
    return { error: "Unable to reach the forecast service. Please try again later." };
  }

  if (!forecastResponse.ok) {
    return { error: "Forecast service returned an error. Please try again later." };
  }

  const forecastData: ForecastResponse = await forecastResponse.json();

  // Transform into app-level types
  const days: DayForecast[] = forecastData.daily.time.map((date, index) => {
    const weatherCode = forecastData.daily.weather_code[index];
    const info = getWeatherInfo(weatherCode);

    return {
      date: formatDate(date),
      dayName: getDayName(date, index),
      weatherCode,
      weatherLabel: info.label,
      weatherEmoji: info.emoji,
      tempMax: Math.round(forecastData.daily.temperature_2m_max[index]),
      tempMin: Math.round(forecastData.daily.temperature_2m_min[index]),
      precipitationProbability:
        forecastData.daily.precipitation_probability_max[index],
      windSpeed: Math.round(forecastData.daily.wind_speed_10m_max[index]),
      humidity: forecastData.daily.relative_humidity_2m_max[index],
      uvIndex: Math.round(forecastData.daily.uv_index_max[index] * 10) / 10,
    };
  });

  return {
    data: {
      locationName: location.name,
      country: location.country,
      admin1: location.admin1,
      latitude: location.latitude,
      longitude: location.longitude,
      days,
    },
  };
}
