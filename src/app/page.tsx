"use client";

import { useAuth } from "@/context/AuthContext";
import LoginComponent from "@/components/Login";
import DashboardPage from "@/app/dashboard/page";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return <div>{isAuthenticated ? <DashboardPage /> : <LoginComponent />}</div>;
}