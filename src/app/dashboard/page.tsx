"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome to your dashboard!</p>
      <button
        onClick={logout}
        className="mt-8 px-4 py-2 text-white bg-red-500 rounded"
      >
        Logout
      </button>
    </div>
  );
}
