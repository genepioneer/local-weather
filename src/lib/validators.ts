const CITY_NAME_REGEX = /^[\p{L}\s\-'.]+$/u;
const MAX_CITY_LENGTH = 100;

export interface ValidationResult {
  valid: boolean;
  sanitized: string;
  error?: string;
}

export function validateCityName(input: unknown): ValidationResult {
  if (typeof input !== "string" || input.trim().length === 0) {
    return { valid: false, sanitized: "", error: "Please enter a city name." };
  }

  const trimmed = input.trim();

  if (trimmed.length > MAX_CITY_LENGTH) {
    return {
      valid: false,
      sanitized: "",
      error: `City name must be ${MAX_CITY_LENGTH} characters or fewer.`,
    };
  }

  if (!CITY_NAME_REGEX.test(trimmed)) {
    return {
      valid: false,
      sanitized: "",
      error:
        "City name contains invalid characters. Only letters, spaces, hyphens, apostrophes, and periods are allowed.",
    };
  }

  return { valid: true, sanitized: trimmed };
}
