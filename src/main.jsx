import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

// included event sticky page

import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import EventStickyPage from "./pages/EventStickyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import StickyNoteForm from "./components/StickyNoteForm.jsx";
import EventCard from "./components/EventCard.jsx";



const router = createBrowserRouter([
  {
    path: "/", element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/events", element: <EventsPage /> },
      // { path: "/event", element: <EventStickyPage /> },
      { path: "/events/:id", element: <EventStickyPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/", element: <HomePage /> },
      { path: "/sticky-notes", element: <StickyNoteForm /> },
      { path: "/newevent", element: <EventCard /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    {/* Here we wrap our app in the router provider so they render */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

