import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import { PublicLayout } from "./layouts/PublicLayout";
import { UserLayout } from "./layouts/UserLayout";
import { NurseLayout } from "./layouts/NurseLayout";
import { AdminLayout } from "./layouts/AdminLayout";

// Public Pages
import { HomePage } from "./pages/public/HomePage";
import { HowItWorksPage } from "./components/public/HowItWork";
import { ServicesPage } from "./pages/public/ServicesPage";
import { FindNursesPage } from "./pages/public/FindNursesPage";

// User / Patient Pages
import { UserDashboardPage } from "./pages/user/UserDashboardPage";
import { CreateRequestPage } from "./pages/user/CreateRequestPage";
import { RequestMatchingPage } from "./pages/user/RequestMatchingPage";
import { MyBookingsPage } from "./pages/user/MyBookingsPage";

// Nurse Pages
import { NurseDashboardPage } from "./pages/nurse/NurseDashboardPage";
import { LiveBroadcastRequestsPage } from "./pages/nurse/LiveBroadcastRequestsPage";
import { NurseEarningsPage } from "./pages/nurse/NurseEarningsPage";
import { NurseVerificationPage } from "./pages/nurse/NurseVerificationPage";
import { NurseSafetyPage } from "./pages/nurse/NurseSafetyPage";

// Admin Pages
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { NurseVerificationQueuePage } from "./pages/admin/NurseVerificationQueuePage";
import { BookingsManagementPage } from "./pages/admin/BookingsManagementPage";
import { PlatformSettingsPage } from "./pages/admin/PlatformSettingsPage";

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "how-it-works", element: <HowItWorksPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "find-nurses", element: <FindNursesPage /> },
    ],
  },

  // User / Patient Routes
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <Navigate to="/user/dashboard" replace /> },
      { path: "dashboard", element: <UserDashboardPage /> },
      { path: "create-request", element: <CreateRequestPage /> },
      { path: "matching/:id", element: <RequestMatchingPage /> },
      { path: "bookings", element: <MyBookingsPage /> },
    ],
  },

  // Nurse Routes
  {
    path: "/nurse",
    element: <NurseLayout />,
    children: [
      { index: true, element: <Navigate to="/nurse/dashboard" replace /> },
      { path: "dashboard", element: <NurseDashboardPage /> },
      { path: "broadcasts", element: <LiveBroadcastRequestsPage /> },
      { path: "earnings", element: <NurseEarningsPage /> },
      { path: "verification", element: <NurseVerificationPage /> },
      { path: "safety", element: <NurseSafetyPage /> },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
      { path: "verifications", element: <NurseVerificationQueuePage /> },
      { path: "bookings", element: <BookingsManagementPage /> },
      { path: "settings", element: <PlatformSettingsPage /> },
    ],
  },

  // Catch-all
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
