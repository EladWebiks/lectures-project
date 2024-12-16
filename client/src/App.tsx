import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./pages/Layout/Layout";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // layout
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "/reader",
          element: <HomePage />,
        },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <HomePage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
