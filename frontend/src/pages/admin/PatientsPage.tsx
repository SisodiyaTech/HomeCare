import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, Plus, Phone, MapPin, MoreVertical } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const PatientsPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";
  const [search, setSearch] = useState("");

  const patients = [
    {
      id: "P-101",
      name: "Priya Sharma",
      age: 68,
      phone: "+91 98201 44102",
      address: "Bandra West, Mumbai",
      condition: "Post-Op Recovery",
      status: "Active Care",
      nurse: "Sarah Jenkins, RN",
    },
    {
      id: "P-102",
      name: "Rajesh Patel",
      age: 74,
      phone: "+91 98112 55219",
      address: "Andheri East, Mumbai",
      condition: "Geriatric Assistance",
      status: "Awaiting Nurse",
      nurse: "Unassigned",
    },
    {
      id: "P-103",
      name: "Anita Desai",
      age: 52,
      phone: "+91 97654 33201",
      address: "Powai, Mumbai",
      condition: "Cardiac Rehab",
      status: "Active Care",
      nurse: "Sunita Rao, GNM",
    },
    {
      id: "P-104",
      name: "Vikram Malhotra",
      age: 82,
      phone: "+91 99200 11984",
      address: "Juhu, Mumbai",
      condition: "Palliative Support",
      status: "Active Care",
      nurse: "David Miller, RN",
    },
    {
      id: "P-105",
      name: "Sneha Kulkarni",
      age: 39,
      phone: "+91 98450 78210",
      address: "Worli, Mumbai",
      condition: "Diabetic Wound Dressing",
      status: "Discharged",
      nurse: "None",
    },
  ];

  const filtered = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase()) ||
      p.condition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Patients Management
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Directory of registered care recipients and active patient records (128 Total).
          </p>
        </div>

        <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Register New Patient</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search patient by name, address, or medical condition..."
            className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs outline-none border ${
              isDark
                ? "bg-[#111718] border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-500"
                : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-teal-600 shadow-sm"
            }`}
          />
        </div>
      </div>

      {/* Patients Table */}
      <div
        className={`rounded-2xl border overflow-hidden ${
          isDark
            ? "bg-[#0c1011] border-zinc-800 text-white"
            : "bg-white border-slate-200 text-slate-800 shadow-sm"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr
                className={`border-b ${
                  isDark ? "border-zinc-800 bg-[#0e1415] text-zinc-400" : "border-slate-200 bg-slate-50 text-slate-600"
                }`}
              >
                <th className="py-3 px-4 font-semibold">Patient Name</th>
                <th className="py-3 px-4 font-semibold">Age</th>
                <th className="py-3 px-4 font-semibold">Contact & Address</th>
                <th className="py-3 px-4 font-semibold">Care Condition</th>
                <th className="py-3 px-4 font-semibold">Assigned Nurse</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? "divide-zinc-800/60" : "divide-slate-100"}`}>
              {filtered.map((pt) => (
                <tr
                  key={pt.id}
                  className={`transition-colors ${isDark ? "hover:bg-zinc-900/50" : "hover:bg-slate-50"}`}
                >
                  <td className="py-3.5 px-4 font-medium">
                    <p className="font-semibold">{pt.name}</p>
                    <span className="text-[11px] font-mono text-zinc-400">{pt.id}</span>
                  </td>
                  <td className="py-3.5 px-4">{pt.age} yrs</td>
                  <td className="py-3.5 px-4">
                    <div className="space-y-0.5 text-xs">
                      <p className="flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-zinc-400" />
                        {pt.phone}
                      </p>
                      <p className={`flex items-center gap-1.5 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        {pt.address}
                      </p>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">{pt.condition}</td>
                  <td className="py-3.5 px-4">
                    {pt.nurse === "Unassigned" ? (
                      <span className="text-amber-400 underline cursor-pointer text-xs font-medium">
                        + Assign Nurse
                      </span>
                    ) : (
                      pt.nurse
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        pt.status === "Active Care"
                          ? isDark
                            ? "bg-teal-950 text-teal-300 border border-teal-800"
                            : "bg-teal-50 text-teal-800 border border-teal-200"
                          : pt.status === "Awaiting Nurse"
                          ? isDark
                            ? "bg-amber-950 text-amber-300 border border-amber-800"
                            : "bg-amber-50 text-amber-800 border border-amber-200"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {pt.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      className={`p-1.5 rounded-lg border cursor-pointer ${
                        isDark
                          ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <MoreVertical className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
