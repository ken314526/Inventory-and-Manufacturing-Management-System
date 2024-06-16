"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="space-y-4">
        <div className="text-center">
          <Link href="/items">
            <span className="text-lg font-medium text-gray-600 dark:text-white-400 hover:underline">
              Item List
            </span>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/orders">
            <span className="text-lg font-medium text-gray-600 dark:text-white-400 hover:underline">
              Order List
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
