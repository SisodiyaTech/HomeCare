import React from "react";
import { useOutletContext } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const ComplaintsPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";

  const incidents = [
    {
      id: "INC-801",
      title: "Delayed Nurse Arrival (45 mins)",
      bookingId: "HC-1019",
      filedBy: "Priya Sharma (Patient)",
      against: "Nurse Kavita Nair",
      time: "3 hours ago",
      severity: "Medium",
      status: "Under Review",
      description: "Caregiver was stuck in heavy traffic; patient medication schedule was slightly delayed.",
    },
    {
      id: "INC-802",
      title: "Billing Discrepancy Query",
      bookingId: "HC-1015",
      filedBy: "Rajesh Patel (Patient Family)",
      against: "Platform Ledger",
      time: "Yesterday",
      severity: "Low",
      status: "Investigation",
      description: "Client requested refund for unused injection consumable supplies on receipt.",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Safety & Incident Resolution
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Active complaints, care incident tickets, and safety escalations (2 Open).
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-500 border border-rose-500/30">
          2 Open Cases
        </span>
      </div>

      {/* Incident Cards */}
      <div className="space-y-4">
        {incidents.map((inc) => (
          <div
            key={inc.id}
            className={`p-5 rounded-2xl border transition-all ${
              isDark
                ? "bg-[#0c1011] border-zinc-800 text-white"
                : "bg-white border-slate-200 text-slate-800 shadow-sm"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-950/40 text-rose-400 border border-rose-900/40">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base">{inc.title}</h3>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                    Ticket: <span className="font-mono text-teal-400">{inc.id}</span> · Booking:{" "}
                    <span className="font-mono">{inc.bookingId}</span> · Filed {inc.time}
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-500 border border-amber-500/30">
                {inc.status}
              </span>
            </div>

            <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-zinc-300" : "text-slate-600"}`}>
              {inc.description}
            </p>

            <div className="mt-4 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-xs">
              <span className={isDark ? "text-zinc-400" : "text-slate-500"}>
                Reported by: <span className="font-medium text-white">{inc.filedBy}</span>
              </span>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-lg text-xs font-medium border border-zinc-700 hover:bg-zinc-800 cursor-pointer">
                  Contact Parties
                </button>
                <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer">
                  Resolve Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsPage;
