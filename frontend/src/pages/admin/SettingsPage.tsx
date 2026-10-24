import React from "react";
import { useOutletContext } from "react-router-dom";
import { Save } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const SettingsPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Platform Settings
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Configure HomeCare verification criteria, booking commissions, and system security.
          </p>
        </div>

        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
          <Save className="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Settings Form Groups */}
      <div className="space-y-4">
        {/* Verification Settings */}
        <div
          className={`p-5 rounded-2xl border ${
            isDark
              ? "bg-[#0c1011] border-zinc-800 text-white"
              : "bg-white border-slate-200 text-slate-800 shadow-sm"
          }`}
        >
          <h3 className="font-bold text-base mb-1">Nurse Onboarding & Verification</h3>
          <p className={`text-xs mb-4 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
            Rules required before a caregiver can accept live patient assignments.
          </p>

          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-teal-500 rounded" />
              <span>Require verified State Nursing Council registration certificate</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-teal-500 rounded" />
              <span>Require Aadhaar background identity verification</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-teal-500 rounded" />
              <span>Require minimum 1 year clinical hospital experience verification</span>
            </label>
          </div>
        </div>

        {/* Financial Settings */}
        <div
          className={`p-5 rounded-2xl border ${
            isDark
              ? "bg-[#0c1011] border-zinc-800 text-white"
              : "bg-white border-slate-200 text-slate-800 shadow-sm"
          }`}
        >
          <h3 className="font-bold text-base mb-1">Commission & Payout Schedule</h3>
          <p className={`text-xs mb-4 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
            Standard platform service take-rate and automated payout timing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-zinc-400 mb-1">Platform Commission Rate (%)</label>
              <input
                type="number"
                defaultValue="15"
                className={`w-full p-2 rounded-lg border outline-none ${
                  isDark
                    ? "bg-[#111718] border-zinc-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-800"
                }`}
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1">Payout Frequency</label>
              <select
                defaultValue="weekly"
                className={`w-full p-2 rounded-lg border outline-none cursor-pointer ${
                  isDark
                    ? "bg-[#111718] border-zinc-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-800"
                }`}
              >
                <option value="weekly">Weekly (Every Monday)</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="instant">Instant on Duty Completion</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
