import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Onboarding } from "./pages/Onboarding";
import { Dashboard } from "./pages/Dashboard";
import { Planner } from "./pages/Planner";
import { Tasks } from "./pages/Tasks";
import { Progress } from "./pages/Progress";
import { Focus } from "./pages/Focus";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "focus",
        element: <Focus />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
