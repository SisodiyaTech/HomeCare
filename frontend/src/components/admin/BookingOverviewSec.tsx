import React from "react";
import { Info } from "lucide-react";

interface BookingOverviewSecProps {
  isDark?: boolean;
}

const BookingOverviewSec: React.FC<BookingOverviewSecProps> = ({ isDark = true }) => {
  const items = [
    { label: "New Requests", count: 8, percentage: 25, color: "bg-[#d9bc83]" },
    { label: "In Progress", count: 10, percentage: 31, color: "bg-[#176b5b]" },
    { label: "Completed", count: 11, percentage: 34, color: "bg-[#287a52]" },
    { label: "Cancelled", count: 3, percentage: 9, color: "bg-[#b42336]" },
  ];

  return (
    <div
      className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
        isDark
          ? "bg-[#0c1011] border-zinc-800 text-white"
          : "bg-white border-slate-200 text-slate-800 shadow-sm"
      }`}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-xl font-bold">2. Booking Overview</h3>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                : "bg-slate-100 border-slate-200 text-slate-700"
            }`}
          >
            32 Total
          </span>
        </div>

        <p className={`text-sm mb-6 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
          Bookings ke current statuses ka breakdown.
        </p>

        {/* Progress bars list */}
        <div className="space-y-4">
          {items.map((row) => (
            <div key={row.label} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className={isDark ? "text-zinc-200" : "text-slate-700"}>
                  {row.label}
                </span>
                <span className="font-bold font-sans">{row.count}</span>
              </div>

              {/* Progress bar */}
              <div
                className={`h-2.5 w-full rounded-full overflow-hidden ${
                  isDark ? "bg-zinc-800" : "bg-slate-100"
                }`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-500 ${row.color}`}
                  style={{ width: `${row.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote from screenshot */}
      <div
        className={`mt-6 pt-3 border-t flex items-center gap-2 text-xs italic ${
          isDark ? "border-zinc-800 text-zinc-400" : "border-slate-200 text-slate-400"
        }`}
      >
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>
          Example distribution: 32 total bookings. Real counts aur selected date range ke hisaab se update hon.
        </span>
      </div>
    </div>
  );
};

export default BookingOverviewSec;
