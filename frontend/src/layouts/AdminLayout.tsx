import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === "dark" ? "bg-[#090d0e] text-zinc-100" : "bg-[#f8f7f2] text-slate-800"
      }`}
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sticky Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <Sidebar theme={theme} setTheme={setTheme} />
        </div>

        {/* Content Area with Outlet */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet context={{ theme, setTheme }} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
