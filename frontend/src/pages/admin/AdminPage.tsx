import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Download, RefreshCw, Sun, Moon } from "lucide-react";

import DashTotalSec from "../../components/admin/DashTotalSec";
import ActionSec from "../../components/admin/ActionSec";
import BookingOverviewSec from "../../components/admin/BookingOverviewSec";
import RecentBookingsSec from "../../components/admin/RecentBookingsSec";
import PlatformActivitySec from "../../components/admin/PlatformActivitySec";

interface OutletContextType {
  theme?: "dark" | "light";
  setTheme?: (theme: "dark" | "light") => void;
}

const AdminPage: React.FC = () => {
  // Get theme from AdminLayout context if available, or maintain local state
  const outletCtx = useOutletContext<OutletContextType | undefined>();
  const [localTheme, setLocalTheme] = useState<"dark" | "light">("dark");

  const theme = outletCtx?.theme ?? localTheme;
  const setTheme = outletCtx?.setTheme ?? setLocalTheme;
  const isDark = theme === "dark";

  const [dateRange, setDateRange] = useState("7d");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-[#102a2a]"
            }`}
          >
            Welcome back, Abhishek 👋
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Here's what's happening across HomeCare over the last 7 days.
          </p>
        </div>

        {/* Quick Controls */}
        <div className="flex items-center gap-2">
          {/* Date Selector */}
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border outline-none cursor-pointer ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-zinc-200"
                : "bg-white border-slate-200 text-slate-700 shadow-sm"
            }`}
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>

          {/* Refresh button */}
          <button
            onClick={handleRefresh}
            title="Refresh statistics"
            className={`p-2 rounded-lg border cursor-pointer ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
                : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
            }`}
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-teal-400" : ""}`}
            />
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-lg border cursor-pointer ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-amber-300 hover:bg-zinc-800"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
            }`}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Export button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Row 1: KPI Stats (Screenshot 5) */}
      <DashTotalSec isDark={isDark} />

      {/* Row 2: 1. Action Required (Screenshot 1) & 2. Booking Overview (Screenshot 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <ActionSec isDark={isDark} />
        </div>
        <div className="lg:col-span-5">
          <BookingOverviewSec isDark={isDark} />
        </div>
      </div>

      {/* Row 3: 3. Recent Bookings (Screenshot 3) & 4. Platform Activity (Screenshot 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <RecentBookingsSec isDark={isDark} />
        </div>
        <div className="lg:col-span-4">
          <PlatformActivitySec isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
