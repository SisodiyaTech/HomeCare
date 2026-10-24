import React from "react";
import { useOutletContext } from "react-router-dom";
import { Check, Download } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const PaymentsPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";

  const pendingPayouts = [
    {
      id: "PAY-901",
      nurse: "Sarah Jenkins, RN",
      sessions: "6 shifts completed",
      period: "15 Oct - 21 Oct",
      amount: "₹18,200",
      bank: "HDFC Bank (•••• 4921)",
      status: "Awaiting Approval",
    },
    {
      id: "PAY-902",
      nurse: "Sunita Rao, GNM",
      sessions: "4 shifts completed",
      period: "15 Oct - 21 Oct",
      amount: "₹12,400",
      bank: "ICICI Bank (•••• 7810)",
      status: "Awaiting Approval",
    },
    {
      id: "PAY-903",
      nurse: "David Miller, RN",
      sessions: "5 shifts completed",
      period: "15 Oct - 21 Oct",
      amount: "₹16,000",
      bank: "SBI (•••• 2201)",
      status: "Awaiting Approval",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Payments & Payouts Ledger
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Nurse payout approvals, client transaction receipts, and settlement history.
          </p>
        </div>

        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
          <Download className="w-3.5 h-3.5" />
          <span>Export Financial Report</span>
        </button>
      </div>

      {/* Pending Payouts Card */}
      <div
        className={`p-6 rounded-2xl border ${
          isDark
            ? "bg-[#0c1011] border-zinc-800 text-white"
            : "bg-white border-slate-200 text-slate-800 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold">Pending Nurse Payouts</h3>
            <p className={`text-xs ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
              Direct bank transfers queued for weekly clinical shifts.
            </p>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30">
            3 Ready to Process
          </span>
        </div>

        <div className="divide-y divide-zinc-800/60">
          {pendingPayouts.map((p) => (
            <div key={p.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-sm">{p.nurse}</p>
                <p className={`text-xs mt-0.5 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                  {p.sessions} · {p.period} · {p.bank}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-lg font-bold font-mono text-teal-400">{p.amount}</span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                  <span>Release Payout</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
