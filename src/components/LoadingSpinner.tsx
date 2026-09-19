export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-gray-200 border-t-purple-500" />
    </div>
  );
}
