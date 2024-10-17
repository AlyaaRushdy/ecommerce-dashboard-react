import { cn } from "@/lib/utils";

function Loading() {
  return (
    <>
      <div className="w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] ml-auto h-screen absolute bg-gray-700/85 flex justify-center items-center z-10 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("animate-spin")}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    </>
  );
}

export default Loading;
