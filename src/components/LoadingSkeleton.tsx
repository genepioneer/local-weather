export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl bg-white/60 dark:bg-gray-800/60 p-5 shadow-md"
        >
          <div className="mb-3 flex flex-col items-center gap-2">
            <div className="h-5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="mb-3 flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="mb-4 flex justify-center gap-3">
            <div className="h-6 w-10 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-10 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
}
