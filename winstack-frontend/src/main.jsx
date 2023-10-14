import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";

import NavBar from "./components/NavBar.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        children: [
                { path: "/", element: <HomePage /> },
                { path: "/register", element: <LoginPage />},
                { path: "/profile", element: <ProfilePage />},
                { path: "/event", element: <EventPage />},
                { path: "/stickyNotes", element: <StickyNotesPage />},
            ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
    );