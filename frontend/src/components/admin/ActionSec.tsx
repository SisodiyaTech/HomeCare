import React from "react";
import { ShieldCheck, CalendarClock, Wallet, ShieldAlert, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionSecProps {
  isDark?: boolean;
}

const ActionSec: React.FC<ActionSecProps> = ({ isDark = true }) => {
  const actions = [
    {
      count: "05",
      title: "Nurse Verifications",
      subtitle: "Awaiting review",
      icon: ShieldCheck,
      color: "teal",
      link: "/admin/verification",
    },
    {
      count: "08",
      title: "New Requests",
      subtitle: "Awaiting assignment",
      icon: CalendarClock,
      color: "teal",
      link: "/admin/bookings",
    },
    {
      count: "03",
      title: "Pending Payouts",
      subtitle: "Needs processing",
      icon: Wallet,
      color: "teal",
      link: "/admin/payments",
    },
    {
      count: "02",
      title: "Open Complaints",
      subtitle: "Needs attention",
      icon: ShieldAlert,
      color: "rose",
      link: "/admin/complaints",
    },
  ];

  return (
    <div
      className={`p-6 rounded-2xl border transition-all ${
        isDark
          ? "bg-[#0c1011] border-zinc-800 text-white"
          : "bg-white border-slate-200 text-slate-800 shadow-sm"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-xl font-bold">1. Action Required</h3>
        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30">
          Priority
        </span>
      </div>

      <p className={`text-sm mb-6 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
        Admin ko jin tasks par action lena hai, unki summary.
      </p>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            className={`p-4 rounded-xl border block transition-all hover:scale-[1.01] ${
              isDark
                ? "bg-[#111718] border-zinc-800 hover:border-teal-700"
                : "bg-slate-50 border-slate-200 hover:border-teal-500 hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div
                className={`p-2 rounded-lg ${
                  item.color === "rose"
                    ? isDark
                      ? "bg-rose-950/40 text-rose-400"
                      : "bg-rose-50 text-rose-600"
                    : isDark
                    ? "bg-teal-950/40 text-teal-400"
                    : "bg-teal-50 text-teal-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-3">
              <span className="text-3xl font-bold font-sans">{item.count}</span>
            </div>

            <h4 className="mt-1 font-semibold text-sm">{item.title}</h4>
            <p className={`text-xs mt-0.5 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
              {item.subtitle}
            </p>
          </Link>
        ))}
      </div>

      {/* Footnote from screenshot */}
      <div
        className={`mt-6 pt-3 border-t flex items-center gap-2 text-xs italic ${
          isDark ? "border-zinc-800 text-zinc-400" : "border-slate-200 text-slate-400"
        }`}
      >
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>Illustrative values only — inhe actual backend data se replace karna.</span>
      </div>
    </div>
  );
};

export default ActionSec;
