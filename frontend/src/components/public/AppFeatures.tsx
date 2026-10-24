import React, { useState } from "react";
import {
  Navigation,
  Activity,
  ShieldAlert,
  MessageSquare,
  Calendar,
  Receipt,
  Download,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react";

const AppFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: "gps",
      title: "Real-Time Nurse GPS Tracking",
      tagline: "Know exactly when care arrives",
      icon: Navigation,
      description:
        "Watch your assigned nurse's transit route and estimated arrival time on live interactive maps, eliminating guesswork and waiting anxiety.",
      metrics: "Live ETA updates every 15s",
    },
    {
      id: "vitals",
      title: "Digital Vitals & Health Vault",
      tagline: "Track healing trends over time",
      icon: Activity,
      description:
        "Blood pressure, pulse, SpO2, blood glucose levels, and clinical shift logs are synced instantly. Share structured graphs directly with your doctor.",
      metrics: "Instant PDF summary export",
    },
    {
      id: "sos",
      title: "One-Tap Emergency SOS Escalation",
      tagline: "24/7 Physician emergency triage",
      icon: ShieldAlert,
      description:
        "In critical moments, tap SOS to immediately patch through to our senior duty doctor and initiate local ambulance dispatch protocols.",
      metrics: "< 15 second pickup rate",
    },
    {
      id: "chat",
      title: "Encrypted Family & Nurse Chat",
      tagline: "Direct, secure communication",
      icon: MessageSquare,
      description:
        "Exchange private updates, doctor instructions, and post-dressing recovery photos with your caregiver under HIPAA-compliant security standards.",
      metrics: "End-to-end encrypted",
    },
    {
      id: "calendar",
      title: "Effortless Shift Scheduling",
      tagline: "Flexible recurring care blocks",
      icon: Calendar,
      description:
        "Manage upcoming shifts, modify visit hours, or request your favorite verified nurse for repeated appointments with one simple tap.",
      metrics: "1-click rebooking",
    },
    {
      id: "billing",
      title: "Insurance-Ready Digital Invoices",
      tagline: "Complete billing transparency",
      icon: Receipt,
      description:
        "Itemized invoices with procedure breakdowns, council registration numbers, and digital signatures tailored for hassle-free medical insurance reimbursement.",
      metrics: "Automated GST & tax receipts",
    },
  ];

  return (
    <section id="app-features" className="py-20 px-6 sm:px-10 lg:px-16 bg-white text-slate-text">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage text-royal text-sm font-semibold mb-4 border border-royal/10">
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Smart Care Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight tracking-tight max-w-3xl">
            Everything You Need to Manage Home Care in One Powerful App
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-text/80 max-w-2xl leading-relaxed">
            Engineered for families, doctors, and nursing professionals to deliver
            peace of mind, transparency, and clinical excellence right from your smartphone.
          </p>
        </div>

        {/* Feature Grid & Interactive Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Interactive Feature Selector */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isSelected = selectedFeature === idx;
              return (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-ivory border-royal shadow-md ring-1 ring-royal/20"
                      : "bg-white hover:bg-ivory/60 border-mist"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-royal text-white" : "bg-sage text-royal"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-midnight">{feature.title}</h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold/20 text-midnight">
                          {feature.metrics}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-royal mb-1">{feature.tagline}</p>
                      <p className="text-sm text-slate-text/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Phone Showcase Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[42px] bg-midnight text-white p-6 shadow-2xl border-4 border-slate-700/60 ring-8 ring-black/5">
              {/* Phone Speaker Notch */}
              <div className="w-32 h-4 bg-slate-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Mockup Screen Content */}
              <div className="space-y-4">
                {/* Active Care Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">ACTIVE VISIT</span>
                  </div>
                  <span className="text-xs text-gold font-medium">Shift #HC-4092</span>
                </div>

                {/* Nurse card preview */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-royal flex items-center justify-center font-bold text-white text-base border-2 border-gold">
                      RN
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white">Sister Priya Nair</h4>
                        <CheckCircle className="w-4 h-4 text-gold fill-gold/20" />
                      </div>
                      <p className="text-xs text-mist">B.Sc. Nursing • 8 Yrs Exp</p>
                      <div className="flex items-center gap-1 text-[11px] text-gold mt-0.5">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span>4.96 (320+ visits)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-midnight/60 rounded-xl p-2.5 text-xs text-mist flex items-center justify-between">
                    <span>Procedure:</span>
                    <span className="font-semibold text-white">Wound Dressing & IV Flush</span>
                  </div>
                </div>

                {/* Live Vitals Preview Widget */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-2">
                  <span className="text-xs font-semibold text-mist uppercase tracking-wider block">
                    Recorded Vitals (Just Now)
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                      <span className="text-[10px] text-mist block">BP</span>
                      <span className="text-sm font-bold text-white">120/78</span>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                      <span className="text-[10px] text-mist block">SpO2</span>
                      <span className="text-sm font-bold text-success">99%</span>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                      <span className="text-[10px] text-mist block">Pulse</span>
                      <span className="text-sm font-bold text-white">74 bpm</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Action Button */}
                <div className="pt-2">
                  <button className="w-full py-3 rounded-xl bg-rose hover:bg-rose/90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose/25">
                    <ShieldAlert className="w-4 h-4" />
                    <span>24/7 Clinical Emergency Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Banner */}
        <div className="rounded-3xl bg-royal text-white p-8 sm:p-12 shadow-xl border border-royal/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-gold">
              Get Started in Minutes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Download the HomeCare Mobile App Today
            </h3>
            <p className="text-mist/90 text-sm max-w-xl">
              Available on both iOS and Android. Book verified home nursing, track clinical visits,
              and stay connected to your family's health wherever you are.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button className="px-6 py-3.5 rounded-2xl bg-white hover:bg-sage text-midnight font-bold text-sm shadow-md flex items-center gap-2.5 transition-all cursor-pointer">
              <Download className="w-5 h-5 text-royal" />
              <div className="text-left">
                <span className="text-[10px] block text-slate-text leading-tight">Download on</span>
                <span className="text-xs font-extrabold text-midnight">Apple App Store</span>
              </div>
            </button>

            <button className="px-6 py-3.5 rounded-2xl bg-midnight hover:bg-forest text-white font-bold text-sm shadow-md flex items-center gap-2.5 transition-all border border-white/20 cursor-pointer">
              <Download className="w-5 h-5 text-gold" />
              <div className="text-left">
                <span className="text-[10px] block text-mist leading-tight">GET IT ON</span>
                <span className="text-xs font-extrabold text-white">Google Play Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
