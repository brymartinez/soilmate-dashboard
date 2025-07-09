"use client";

import { useAuth } from "@/context/AuthContext";
import LoginComponent from "@/components/Login";
import LoadingSpinner from "@/components/LoadingSpinner";
import DashboardPage from "@/app/dashboard/page";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

export default function Home() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return isAuthenticated ? <DashboardPage /> : <LoginComponent />;
  }
}