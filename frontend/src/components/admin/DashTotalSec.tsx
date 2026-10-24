import React from "react";
import { Users, Stethoscope, CalendarDays, Clock } from "lucide-react";

interface DashTotalSecProps {
  isDark?: boolean;
}

const DashTotalSec: React.FC<DashTotalSecProps> = ({ isDark = true }) => {
  const stats = [
    { label: "Patients", value: "128", icon: Users, change: "+12%" },
    { label: "Nurses", value: "46", icon: Stethoscope, change: "+4" },
    { label: "Bookings", value: "32", icon: CalendarDays, change: "+18%" },
    { label: "Pending", value: "8", icon: Clock, change: "Requires action" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className={`p-5 rounded-xl border transition-all ${
            isDark
              ? "bg-[#0e1415] border-zinc-800 text-white"
              : "bg-white border-slate-200 text-slate-800 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-sm font-medium ${
                isDark ? "text-zinc-400" : "text-slate-500"
              }`}
            >
              {item.label}
            </span>
            <div
              className={`p-2 rounded-lg ${
                isDark
                  ? "bg-zinc-800 text-teal-400"
                  : "bg-teal-50 text-teal-700"
              }`}
            >
              <item.icon className="w-5 h-5" />
            </div>
          </div>

          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-4xl font-bold font-sans">{item.value}</span>
            <span className="text-xs font-semibold text-teal-500">
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashTotalSec;
