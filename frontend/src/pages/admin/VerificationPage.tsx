import React from "react";
import { useOutletContext } from "react-router-dom";
import { Check, X, FileText } from "lucide-react";

interface OutletContextType {
  theme?: "dark" | "light";
}

const VerificationPage: React.FC = () => {
  const ctx = useOutletContext<OutletContextType | undefined>();
  const isDark = ctx?.theme !== "light";

  const queue = [
    {
      id: "V-201",
      name: "Priya Verma",
      qualification: "B.Sc Nursing (Hons)",
      council: "Maharashtra Nursing Council",
      regNo: "MNC-2018-9941",
      submitted: "10 minutes ago",
      documents: ["Degree Certificate", "Council Registration", "Aadhaar Card", "BLS Cert"],
    },
    {
      id: "V-202",
      name: "Ramesh Kannan",
      qualification: "GNM (General Nursing & Midwifery)",
      council: "Tamil Nadu Nursing Council",
      regNo: "TNC-2016-4318",
      submitted: "2 hours ago",
      documents: ["GNM Diploma", "Hospital Experience Letter", "Govt ID"],
    },
    {
      id: "V-203",
      name: "Anjali Mathur",
      qualification: "Post Basic B.Sc Nursing",
      council: "Delhi Nursing Council",
      regNo: "DNC-2020-1120",
      submitted: "Yesterday",
      documents: ["Nursing Degree", "ACLS Certification", "Police Clearance"],
    },
    {
      id: "V-204",
      name: "Deepak Sharma",
      qualification: "ANM Certified Caregiver",
      council: "Rajasthan Nursing Council",
      regNo: "RNC-2021-8842",
      submitted: "2 days ago",
      documents: ["ANM Certificate", "Reference Verification Letter"],
    },
    {
      id: "V-205",
      name: "Maria Fernandes",
      qualification: "M.Sc Critical Care Nursing",
      council: "Goa Nursing Council",
      regNo: "GNC-2015-7731",
      submitted: "3 days ago",
      documents: ["Masters Degree", "ICU Specialist Cert", "ID Proof"],
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/40">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#102a2a]"}`}>
            Nurse Credential Verification
          </h1>
          <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Review submitted degrees, state nursing council registrations, and background verifications (5 Pending).
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30">
          5 Pending Review
        </span>
      </div>

      {/* Queue items */}
      <div className="space-y-4">
        {queue.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl border transition-all ${
              isDark
                ? "bg-[#0c1011] border-zinc-800 text-white"
                : "bg-white border-slate-200 text-slate-800 shadow-sm"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <span className="text-xs font-mono text-teal-400 font-medium">({item.id})</span>
                  <span className={`text-[11px] ${isDark ? "text-zinc-500" : "text-slate-400"}`}>
                    Submitted {item.submitted}
                  </span>
                </div>

                <p className="text-sm font-medium text-teal-500">{item.qualification}</p>

                <p className={`text-xs ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                  Council: <span className="font-medium">{item.council}</span> · Reg #:{" "}
                  <span className="font-mono">{item.regNo}</span>
                </p>

                {/* Documents tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.documents.map((doc) => (
                    <span
                      key={doc}
                      className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md border ${
                        isDark
                          ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                          : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      <FileText className="w-3 h-3 text-teal-500" />
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Action buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-rose-800/60 bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 cursor-pointer">
                  <X className="w-3.5 h-3.5" />
                  <span>Reject</span>
                </button>
                <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white cursor-pointer shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                  <span>Approve & Verify</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerificationPage;
