interface WeatherCodeInfo {
  label: string;
  emoji: string;
}

const weatherCodes: Record<number, WeatherCodeInfo> = {
  0: { label: "Clear Sky", emoji: "\u2600\uFE0F" },
  1: { label: "Mainly Clear", emoji: "\uD83C\uDF24\uFE0F" },
  2: { label: "Partly Cloudy", emoji: "\u26C5" },
  3: { label: "Overcast", emoji: "\u2601\uFE0F" },
  45: { label: "Fog", emoji: "\uD83C\uDF2B\uFE0F" },
  48: { label: "Depositing Rime Fog", emoji: "\uD83C\uDF2B\uFE0F" },
  51: { label: "Light Drizzle", emoji: "\uD83C\uDF26\uFE0F" },
  53: { label: "Moderate Drizzle", emoji: "\uD83C\uDF26\uFE0F" },
  55: { label: "Dense Drizzle", emoji: "\uD83C\uDF26\uFE0F" },
  56: { label: "Light Freezing Drizzle", emoji: "\uD83C\uDF27\uFE0F" },
  57: { label: "Dense Freezing Drizzle", emoji: "\uD83C\uDF27\uFE0F" },
  61: { label: "Slight Rain", emoji: "\uD83C\uDF27\uFE0F" },
  63: { label: "Moderate Rain", emoji: "\uD83C\uDF27\uFE0F" },
  65: { label: "Heavy Rain", emoji: "\uD83C\uDF27\uFE0F" },
  66: { label: "Light Freezing Rain", emoji: "\uD83C\uDF27\uFE0F" },
  67: { label: "Heavy Freezing Rain", emoji: "\uD83C\uDF27\uFE0F" },
  71: { label: "Slight Snowfall", emoji: "\uD83C\uDF28\uFE0F" },
  73: { label: "Moderate Snowfall", emoji: "\uD83C\uDF28\uFE0F" },
  75: { label: "Heavy Snowfall", emoji: "\uD83C\uDF28\uFE0F" },
  77: { label: "Snow Grains", emoji: "\uD83C\uDF28\uFE0F" },
  80: { label: "Slight Rain Showers", emoji: "\uD83C\uDF26\uFE0F" },
  81: { label: "Moderate Rain Showers", emoji: "\uD83C\uDF26\uFE0F" },
  82: { label: "Violent Rain Showers", emoji: "\u26C8\uFE0F" },
  85: { label: "Slight Snow Showers", emoji: "\uD83C\uDF28\uFE0F" },
  86: { label: "Heavy Snow Showers", emoji: "\uD83C\uDF28\uFE0F" },
  95: { label: "Thunderstorm", emoji: "\u26C8\uFE0F" },
  96: { label: "Thunderstorm with Slight Hail", emoji: "\u26C8\uFE0F" },
  99: { label: "Thunderstorm with Heavy Hail", emoji: "\u26C8\uFE0F" },
};

const defaultWeatherCode: WeatherCodeInfo = {
  label: "Unknown",
  emoji: "\u2753",
};

export function getWeatherInfo(code: number): WeatherCodeInfo {
  return weatherCodes[code] ?? defaultWeatherCode;
}
