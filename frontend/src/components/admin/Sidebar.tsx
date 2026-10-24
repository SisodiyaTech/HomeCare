import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  ShieldCheck,
  CreditCard,
  ShieldAlert,
  Settings,
  Sun,
  Moon,
  LogOut,
  Bell,
} from "lucide-react";

interface SidebarProps {
  theme?: "dark" | "light";
  setTheme?: (theme: "dark" | "light") => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  theme: propTheme,
  setTheme: propSetTheme,
}) => {
  const [localTheme, setLocalTheme] = useState<"dark" | "light">("dark");
  const currentTheme = propTheme ?? localTheme;
  const toggleTheme = propSetTheme ?? setLocalTheme;
  const isDark = currentTheme === "dark";

  const navSections = [
    {
      heading: "Overview",
      items: [
        {
          title: "Dashboard",
          to: "/admin/dashboard",
          icon: LayoutDashboard,
          badge: "Live",
          badgeType: "teal",
        },
      ],
    },
    {
      heading: "Management",
      items: [
        {
          title: "Patients",
          to: "/admin/patients",
          icon: Users,
          badge: "128",
        },
        {
          title: "Nurses",
          to: "/admin/nurses",
          icon: Stethoscope,
          badge: "46",
        },
        {
          title: "Bookings & requests",
          to: "/admin/bookings",
          icon: CalendarDays,
          badge: "32",
        },
      ],
    },
    {
      heading: "Operations & Safety",
      items: [
        {
          title: "Verification",
          to: "/admin/verification",
          icon: ShieldCheck,
          badge: "05",
          badgeType: "amber",
        },
        {
          title: "Payments",
          to: "/admin/payments",
          icon: CreditCard,
          badge: "03",
          badgeType: "teal",
        },
        {
          title: "Complaints & Safety",
          to: "/admin/complaints",
          icon: ShieldAlert,
          badge: "02",
          badgeType: "rose",
        },
      ],
    },
    {
      heading: "Preferences",
      items: [
        {
          title: "Settings",
          to: "/admin/settings",
          icon: Settings,
        },
      ],
    },
  ];

  const getBadgeStyle = (type?: string) => {
    switch (type) {
      case "amber":
        return isDark
          ? "bg-amber-950/70 text-amber-300 border-amber-800/60"
          : "bg-amber-50 text-amber-700 border-amber-200";
      case "rose":
        return isDark
          ? "bg-rose-950/70 text-rose-300 border-rose-800/60"
          : "bg-rose-50 text-rose-700 border-rose-200";
      case "teal":
        return isDark
          ? "bg-teal-950/70 text-teal-300 border-teal-800/60"
          : "bg-teal-50 text-teal-700 border-teal-200";
      default:
        return isDark
          ? "bg-zinc-800 text-zinc-300 border-zinc-700"
          : "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <aside
      className={`h-screen sticky top-0 flex flex-col justify-between border-r transition-colors select-none ${
        isDark
          ? "bg-[#0c1011] border-zinc-800 text-zinc-200"
          : "bg-white border-slate-200 text-slate-700"
      }`}
    >
      {/* Header */}
      <div>
        <div
          className={`p-5 pb-4 border-b flex items-center justify-between ${
            isDark ? "border-zinc-800" : "border-slate-100"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
              HC
            </div>
            <div>
              <h4
                className={`text-sm font-bold tracking-tight ${
                  isDark ? "text-white" : "text-[#102a2a]"
                }`}
              >
                Home<span className="text-teal-500">Care</span>
              </h4>
              <p
                className={`text-[10px] font-semibold uppercase tracking-wider ${
                  isDark ? "text-zinc-500" : "text-slate-400"
                }`}
              >
                Admin Portal
              </p>
            </div>
          </div>

          <button
            title="Notifications"
            className={`p-1.5 rounded-lg border ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation items */}
        <div className="p-3 space-y-4 overflow-y-auto max-h-[calc(100vh-210px)]">
          {navSections.map((sec) => (
            <div key={sec.heading} className="space-y-1">
              <span
                className={`px-3 text-[10px] font-bold uppercase tracking-wider block ${
                  isDark ? "text-zinc-500" : "text-slate-400"
                }`}
              >
                {sec.heading}
              </span>

              <div className="space-y-0.5">
                {sec.items.map((nav) => (
                  <NavLink
                    key={nav.title}
                    to={nav.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? isDark
                            ? "bg-teal-950/60 text-teal-300 border-l-4 border-teal-400 font-semibold"
                            : "bg-teal-50 text-teal-900 border-l-4 border-teal-600 font-semibold shadow-sm"
                          : isDark
                          ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <nav.icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{nav.title}</span>
                    </div>

                    {nav.badge && (
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${getBadgeStyle(
                          nav.badgeType
                        )}`}
                      >
                        {nav.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Theme Toggle & Admin Profile */}
      <div
        className={`p-3 border-t space-y-2.5 ${
          isDark ? "border-zinc-800 bg-[#090d0e]" : "border-slate-100 bg-slate-50"
        }`}
      >
        {/* Theme Toggle */}
        <div
          className={`p-1 rounded-xl flex items-center border ${
            isDark ? "bg-[#101718] border-zinc-800" : "bg-white border-slate-200"
          }`}
        >
          <button
            onClick={() => toggleTheme("light")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
              !isDark ? "bg-teal-600 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light</span>
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
              isDark ? "bg-teal-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark</span>
          </button>
        </div>

        {/* Admin Card */}
        <div
          className={`p-2 rounded-xl border flex items-center justify-between ${
            isDark ? "bg-[#111718] border-zinc-800" : "bg-white border-slate-200 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold truncate">Abhishek</p>
              <p className={`text-[10px] truncate ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                Super Admin
              </p>
            </div>
          </div>

          <button
            title="Log out"
            className="p-1 text-zinc-400 hover:text-rose-400 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
