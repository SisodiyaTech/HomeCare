import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Info, Search, Eye } from "lucide-react";

interface RecentBookingsSecProps {
  isDark?: boolean;
}

const RecentBookingsSec: React.FC<RecentBookingsSecProps> = ({ isDark = true }) => {
  const [search, setSearch] = useState("");

  const bookings = [
    {
      id: "HC-1024",
      patient: "Priya Sharma",
      service: "Nursing Care",
      nurse: "Sarah Jenkins, RN",
      date: "Today, 02:30 PM",
      status: "In Progress",
    },
    {
      id: "HC-1023",
      patient: "Rajesh Patel",
      service: "Elderly Care",
      nurse: "Unassigned",
      date: "Today, 11:00 AM",
      status: "Pending",
    },
    {
      id: "HC-1022",
      patient: "Anita Desai",
      service: "Post-Surgery",
      nurse: "Sunita Rao, GNM",
      date: "Yesterday, 04:15 PM",
      status: "Completed",
    },
    {
      id: "HC-1021",
      patient: "Vikram Malhotra",
      service: "Palliative Care",
      nurse: "David Miller, RN",
      date: "23 Oct, 09:30 AM",
      status: "In Progress",
    },
  ];

  const filtered = bookings.filter(
    (b) =>
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.patient.toLowerCase().includes(search.toLowerCase()) ||
      b.service.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return isDark ? "text-teal-400" : "text-teal-700 font-semibold";
      case "Pending":
        return isDark ? "text-amber-400" : "text-amber-700 font-semibold";
      case "Completed":
        return isDark ? "text-emerald-400" : "text-emerald-700 font-semibold";
      default:
        return "text-zinc-400";
    }
  };

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
          <h3 className="text-xl font-bold">3. Recent Bookings</h3>
          <Link
            to="/admin/bookings"
            className="text-xs sm:text-sm font-semibold text-teal-400 hover:underline flex items-center gap-1"
          >
            <span>View all</span>
            <span>→</span>
          </Link>
        </div>

        <p className={`text-sm mb-4 ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
          Latest booking activity ko ek table mein show karo.
        </p>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search booking ID, patient, service..."
            className={`w-full pl-9 pr-3 py-1.5 rounded-lg text-xs outline-none border ${
              isDark
                ? "bg-[#111718] border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-500"
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-teal-600"
            }`}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr
                className={`border-b ${
                  isDark ? "border-zinc-800 text-zinc-400" : "border-slate-200 text-slate-500"
                }`}
              >
                <th className="py-2.5 px-3">Booking ID</th>
                <th className="py-2.5 px-3">Patient</th>
                <th className="py-2.5 px-3">Service</th>
                <th className="py-2.5 px-3">Nurse</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? "divide-zinc-800/60" : "divide-slate-100"}`}>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className={`transition-colors ${
                    isDark ? "hover:bg-zinc-900/50" : "hover:bg-slate-50"
                  }`}
                >
                  <td className="py-3 px-3 font-mono font-medium">{row.id}</td>
                  <td className="py-3 px-3 font-medium">{row.patient}</td>
                  <td className="py-3 px-3">{row.service}</td>
                  <td className="py-3 px-3">
                    {row.nurse === "Unassigned" ? (
                      <span className="text-amber-400 underline cursor-pointer text-xs">
                        + Assign
                      </span>
                    ) : (
                      row.nurse
                    )}
                  </td>
                  <td className={`py-3 px-3 text-xs ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                    {row.date}
                  </td>
                  <td className={`py-3 px-3 font-medium ${getStatusColor(row.status)}`}>
                    {row.status}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <Link
                      to="/admin/bookings"
                      className={`p-1.5 rounded-lg border inline-block ${
                        isDark
                          ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footnote from screenshot */}
      <div
        className={`mt-6 pt-3 border-t flex items-center gap-2 text-xs italic ${
          isDark ? "border-zinc-800 text-zinc-400" : "border-slate-200 text-slate-400"
        }`}
      >
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>Demo rows only. Table mein Patient, Nurse, Date aur Actions bhi add karna.</span>
      </div>
    </div>
  );
};

export default RecentBookingsSec;
