import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import AdminPage from "./pages/admin/AdminPage";
import PatientsPage from "./pages/admin/PatientsPage";
import NursesPage from "./pages/admin/NursesPage";
import BookingsPage from "./pages/admin/BookingsPage";
import VerificationPage from "./pages/admin/VerificationPage";
import PaymentsPage from "./pages/admin/PaymentsPage";
import ComplaintsPage from "./pages/admin/ComplaintsPage";
import SettingsPage from "./pages/admin/SettingsPage";
import PublicLayout from "./layouts/PublicLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Section with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminPage />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="nurses" element={<NursesPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="verification" element={<VerificationPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="complaints" element={<ComplaintsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Public Website */}
        <Route path="/home" element={<PublicLayout />} />

        {/* Root redirect to Admin Dashboard */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
