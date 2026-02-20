import { NextRequest, NextResponse } from "next/server";
import { fetchWeatherByCity } from "@/lib/weather-api";
import { validateCityName } from "@/lib/validators";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");

  const validation = validateCityName(city);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const result = await fetchWeatherByCity(validation.sanitized);

  if (result.error) {
    const status = result.error.includes("No location found") ? 404 : 502;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ data: result.data });
}
