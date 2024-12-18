import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./pages/Layout/Layout";
import GalleryPage from "./pages/GalleryPage/GalleryPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";

import theme from "./theme.ts";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import LogInPage from "./pages/LogInPage.tsx/LogInPage.tsx";
import CalendarPage from "./pages/CalendarPage/CalendarPage.tsx";
const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // layout
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "/gallery",
          element: <GalleryPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/calendar",
          element: <CalendarPage />,
        },
        {
          path: "/login",
          element: <LogInPage />,
        },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <HomePage /> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  );
};

export default App;
