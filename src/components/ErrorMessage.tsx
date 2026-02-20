interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-md rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
    >
      <p>{message}</p>
    </div>
  );
}
