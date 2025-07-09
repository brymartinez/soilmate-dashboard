"use client";

import SideNav from "@/components/sidenav/SideNav";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {

  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen text-primary">
      <SideNav />
      <div className="flex flex-col flex-1 items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4">Welcome to your dashboard!</p>
        <button
          onClick={logout}
          className="mt-8 px-4 py-2 text-white bg-green-500 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
