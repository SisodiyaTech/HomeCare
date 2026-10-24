import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, Eye } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const BookingsPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";

  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const allBookings = [
    {
      id: "HC-1024",
      patient: "Priya Sharma",
      service: "Nursing Care",
      nurse: "Sarah Jenkins, RN",
      date: "Today, 02:30 PM",
      status: "In Progress",
      amount: "₹2,400",
    },
    {
      id: "HC-1023",
      patient: "Rajesh Patel",
      service: "Elderly Care",
      nurse: "Unassigned",
      date: "Today, 11:00 AM",
      status: "New Requests",
      amount: "₹3,800",
    },
    {
      id: "HC-1022",
      patient: "Anita Desai",
      service: "Post-Surgery",
      nurse: "Sunita Rao, GNM",
      date: "Yesterday, 04:15 PM",
      status: "Completed",
      amount: "₹4,500",
    },
    {
      id: "HC-1021",
      patient: "Vikram Malhotra",
      service: "Palliative Care",
      nurse: "David Miller, RN",
      date: "23 Oct, 09:30 AM",
      status: "In Progress",
      amount: "₹3,200",
    },
    {
      id: "HC-1020",
      patient: "Sneha Kulkarni",
      service: "Wound Dressing",
      nurse: "Unassigned",
      date: "22 Oct, 05:00 PM",
      status: "Cancelled",
      amount: "₹1,200",
    },
  ];

  const filtered = allBookings.filter((b) => {
    const matchesTab = activeTab === "all" || b.status.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.patient.toLowerCase().includes(search.toLowerCase()) ||
      b.service.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Bookings & Care Requests
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Track and dispatch home healthcare assignments across the platform (32 Total).
          </p>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto">
          {[
            { id: "all", label: "All (32)" },
            { id: "new requests", label: "New Requests (8)" },
            { id: "in progress", label: "In Progress (10)" },
            { id: "completed", label: "Completed (11)" },
            { id: "cancelled", label: "Cancelled (3)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeTab === tab.id
                  ? "bg-teal-600 text-white"
                  : isDark
                  ? "bg-zinc-900 text-zinc-400 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search booking ID or patient..."
            className={`w-full pl-9 pr-3 py-1.5 rounded-lg text-xs outline-none border ${
              isDark
                ? "bg-[#111718] border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-500"
                : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-teal-600 shadow-sm"
            }`}
          />
        </div>
      </div>

      {/* Bookings Table */}
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
                <th className="py-3 px-4 font-semibold">Booking ID</th>
                <th className="py-3 px-4 font-semibold">Patient</th>
                <th className="py-3 px-4 font-semibold">Service</th>
                <th className="py-3 px-4 font-semibold">Assigned Caregiver</th>
                <th className="py-3 px-4 font-semibold">Scheduled Time</th>
                <th className="py-3 px-4 font-semibold">Amount</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? "divide-zinc-800/60" : "divide-slate-100"}`}>
              {filtered.map((b) => (
                <tr
                  key={b.id}
                  className={`transition-colors ${isDark ? "hover:bg-zinc-900/50" : "hover:bg-slate-50"}`}
                >
                  <td className="py-3.5 px-4 font-mono font-medium text-teal-400">{b.id}</td>
                  <td className="py-3.5 px-4 font-medium">{b.patient}</td>
                  <td className="py-3.5 px-4">{b.service}</td>
                  <td className="py-3.5 px-4">
                    {b.nurse === "Unassigned" ? (
                      <span className="text-amber-400 font-semibold underline cursor-pointer text-xs">
                        + Assign Staff
                      </span>
                    ) : (
                      b.nurse
                    )}
                  </td>
                  <td className={`py-3.5 px-4 text-xs ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                    {b.date}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-medium">{b.amount}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        b.status === "In Progress"
                          ? isDark
                            ? "bg-teal-950 text-teal-300 border border-teal-800"
                            : "bg-teal-50 text-teal-800 border border-teal-200"
                          : b.status === "New Requests"
                          ? isDark
                            ? "bg-amber-950 text-amber-300 border border-amber-800"
                            : "bg-amber-50 text-amber-800 border border-amber-200"
                          : b.status === "Completed"
                          ? isDark
                            ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                            : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-rose-950 text-rose-300 border border-rose-800"
                      }`}
                    >
                      {b.status}
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
                      <Eye className="w-3.5 h-3.5" />
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

export default BookingsPage;
