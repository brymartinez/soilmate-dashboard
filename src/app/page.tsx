
import { LoginComponent } from "@/components/Login";
import DashboardPage from "@/app/dashboard/page";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";
import { fetchUserFromServer } from "@/server/amplify";
Amplify.configure(amplifyconfig);

export default async function Home() {

  const user = await fetchUserFromServer();

  if (user) {
    return <DashboardPage />;
  } else {
    return <LoginComponent />;
  }
}
