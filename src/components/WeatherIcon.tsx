interface WeatherIconProps {
  emoji: string;
  label: string;
  className?: string;
}

export default function WeatherIcon({ emoji, label, className = "text-4xl" }: WeatherIconProps) {
  return (
    <span role="img" aria-label={label} className={className}>
      {emoji}
    </span>
  );
}
