export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600 text-lg font-medium">Loading...</p>
    </div>
  );
}
