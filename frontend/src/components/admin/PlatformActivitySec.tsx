import React from "react";
import { UserPlus, CheckCircle2, CreditCard, Info } from "lucide-react";

interface PlatformActivitySecProps {
  isDark?: boolean;
}

const PlatformActivitySec: React.FC<PlatformActivitySecProps> = ({ isDark = true }) => {
  const events = [
    {
      id: "1",
      title: "New nurse registration",
      desc: "A nurse profile was submitted for verification.",
      time: "10 minutes ago",
      icon: UserPlus,
    },
    {
      id: "2",
      title: "Booking completed",
      desc: "A care session was marked as completed.",
      time: "35 minutes ago",
      icon: CheckCircle2,
    },
    {
      id: "3",
      title: "Payment updated",
      desc: "A payment status was updated.",
      time: "1 hour ago",
      icon: CreditCard,
    },
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
          <h3 className="text-xl font-bold">4. Platform Activity</h3>
          <div className="flex items-center gap-1.5 text-xs text-teal-400">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Live Feed</span>
          </div>
        </div>

        <p className={`text-sm mb-6 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
          Recent important events ki timeline.
        </p>

        {/* Timeline list */}
        <div className="space-y-6 pl-2">
          {events.map((ev) => (
            <div key={ev.id} className="flex items-start gap-3.5">
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  isDark
                    ? "bg-teal-950/40 text-teal-400 border border-teal-900/40"
                    : "bg-teal-50 text-teal-700 border border-teal-100"
                }`}
              >
                <ev.icon className="w-4 h-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold truncate">{ev.title}</h4>
                  <span className={`text-[11px] shrink-0 ${isDark ? "text-zinc-500" : "text-slate-400"}`}>
                    {ev.time}
                  </span>
                </div>
                <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
                  {ev.desc}
                </p>
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
        <span>Activity entries tabhi show hon jab backend mein actual event records available hon.</span>
      </div>
    </div>
  );
};

export default PlatformActivitySec;
