// Open-Meteo Geocoding API response types
export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  country_code: string;
  admin1?: string;
}

export interface GeocodingResponse {
  results?: GeocodingResult[];
}

// Open-Meteo Forecast API response types
export interface DailyData {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  relative_humidity_2m_max: number[];
  uv_index_max: number[];
}

export interface ForecastResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  daily: DailyData;
}

// App-level types consumed by UI
export interface DayForecast {
  date: string;
  dayName: string;
  weatherCode: number;
  weatherLabel: string;
  weatherEmoji: string;
  tempMax: number;
  tempMin: number;
  precipitationProbability: number;
  windSpeed: number;
  humidity: number;
  uvIndex: number;
}

export interface WeatherData {
  locationName: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
  days: DayForecast[];
}

export interface WeatherApiResponse {
  data?: WeatherData;
  error?: string;
}
