import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, Plus, Star, CheckCircle, Clock } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const NursesPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";
  const [search, setSearch] = useState("");

  const nurses = [
    {
      id: "N-401",
      name: "Sarah Jenkins, RN",
      specialty: "Critical Care & ICU",
      rating: 4.9,
      experience: "7 years",
      status: "On Duty",
      patient: "Priya Sharma",
      verified: true,
    },
    {
      id: "N-402",
      name: "Sunita Rao, GNM",
      specialty: "Post-Op Recovery & Ortho",
      rating: 4.8,
      experience: "5 years",
      status: "On Duty",
      patient: "Anita Desai",
      verified: true,
    },
    {
      id: "N-403",
      name: "David Miller, RN",
      specialty: "Palliative & Elderly Care",
      rating: 5.0,
      experience: "9 years",
      status: "On Duty",
      patient: "Vikram Malhotra",
      verified: true,
    },
    {
      id: "N-404",
      name: "Kavita Nair, ANM",
      specialty: "General Nursing & Injections",
      rating: 4.7,
      experience: "3 years",
      status: "Available",
      patient: "None",
      verified: true,
    },
    {
      id: "N-405",
      name: "Priya Verma, BSc",
      specialty: "Pediatric & Neonatal",
      rating: 4.9,
      experience: "4 years",
      status: "Pending Verification",
      patient: "None",
      verified: false,
    },
  ];

  const filtered = nurses.filter(
    (n) =>
      n.name.toLowerCase().includes(search.toLowerCase()) ||
      n.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Nurses Directory
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Manage verified medical staff, duty shifts, and caregiver credentials (46 Total).
          </p>
        </div>

        <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add Nurse Profile</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by nurse name or clinical specialty..."
          className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs outline-none border ${
            isDark
              ? "bg-[#111718] border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-500"
              : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-teal-600 shadow-sm"
          }`}
        />
      </div>

      {/* Nurses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((nurse) => (
          <div
            key={nurse.id}
            className={`p-5 rounded-2xl border transition-all ${
              isDark
                ? "bg-[#0c1011] border-zinc-800 text-white"
                : "bg-white border-slate-200 text-slate-800 shadow-sm"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center font-bold">
                  {nurse.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{nurse.name}</h4>
                  <p className={`text-xs ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                    {nurse.specialty}
                  </p>
                </div>
              </div>

              {nurse.verified ? (
                <CheckCircle className="w-4 h-4 text-teal-400" />
              ) : (
                <Clock className="w-4 h-4 text-amber-400" />
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-medium text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {nurse.rating} ({nurse.experience})
              </span>

              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                  nurse.status === "On Duty"
                    ? isDark
                      ? "bg-teal-950 text-teal-300 border border-teal-800"
                      : "bg-teal-50 text-teal-800 border border-teal-200"
                    : nurse.status === "Available"
                    ? isDark
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                      : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-amber-950 text-amber-300 border border-amber-800"
                }`}
              >
                {nurse.status}
              </span>
            </div>

            {nurse.patient !== "None" && (
              <p className={`mt-2 text-xs ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                Current patient: <span className="text-teal-400 font-medium">{nurse.patient}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NursesPage;
