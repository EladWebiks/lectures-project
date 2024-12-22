import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./Components/LoginModal/LoginModal.tsx";
import Layout from "./pages/Layout/Layout";
import GalleryPage from "./pages/GalleryPage/GalleryPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import theme from "./theme.ts";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import CalendarPage from "./pages/CalendarPage/CalendarPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import PrivateRoute from "./auth/PrivateRoute.tsx";
const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // layout
      children: [
        { path: "", element: <HomePage /> },
        {path:"/profile", element: <PrivateRoute component={<ProfilePage/>}></PrivateRoute>},
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
          element: <PrivateRoute component={<CalendarPage />}></PrivateRoute>,
        },
        {
          path: "/profile",
          element: <ProfilePage/>,
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
