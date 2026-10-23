import React from "react";
import {
  Heart,
  ShieldCheck,
  Award,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Building2,
  BadgeCheck
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Verified Registered Nurses", icon: BadgeCheck },
    { value: "15,000+", label: "Safe Home Visits Completed", icon: Stethoscope },
    { value: "98.8%", label: "Patient & Family Satisfaction", icon: Heart },
    { value: "< 25 Min", label: "Average Dispatch Response", icon: Clock },
  ];

  const pillars = [
    {
      title: "Hospital-Grade Clinical Standards",
      description:
        "Every nurse is fully credentialed with verified state nursing council registrations, background audits, and aseptic protocol training.",
      icon: ShieldCheck,
      color: "bg-sage text-royal",
    },
    {
      title: "Patient Dignity & Compassion",
      description:
        "We believe healing happens best at home. Our care plans prioritize emotional comfort, familiar environments, and gentle companionship.",
      icon: Heart,
      color: "bg-gold/20 text-midnight",
    },
    {
      title: "Real-Time Family Transparency",
      description:
        "Digital vitals logging, shift handover notes, and doctor communication accessible by family members anywhere through the app.",
      icon: Users,
      color: "bg-sage text-royal",
    },
    {
      title: "24/7 Clinical Emergency Escalation",
      description:
        "Direct link between visiting nurses and on-call senior duty doctors for immediate tele-triage whenever complications arise.",
      icon: Award,
      color: "bg-gold/20 text-midnight",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-16 bg-ivory text-slate-text">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage text-royal text-sm font-semibold mb-4 border border-royal/10">
            <Sparkles className="w-4 h-4 text-royal" />
            <span>About HomeCare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight tracking-tight max-w-3xl">
            Reinventing Healthcare Through Dignity, Warmth & Clinical Rigor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-text/80 max-w-2xl leading-relaxed">
            HomeCare was built to bridge the gap between hospital discharge and recovery.
            We bring verified, compassionate nursing professionals directly to your doorstep.
          </p>
        </div>

        {/* Narrative & Image / Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-midnight leading-snug">
              Compassionate Nursing Care Where Families Feel Safest — <span className="text-royal">At Home</span>
            </h3>
            
            <p className="text-slate-text leading-relaxed">
              Managing postoperative recovery, chronic conditions, or elder care in a hospital
              setting can be stressful, financially exhausting, and emotionally taxing. HomeCare
              empowers families with hospital-level nursing support right in their living rooms.
            </p>

            <p className="text-slate-text leading-relaxed">
              Our platform connects patients with qualified General Nursing Midwifery (GNM) and
              B.Sc. Nursing professionals trained in wound management, catheter care, IV infusions,
              and dedicated post-operative recovery monitoring.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% Background-checked & police verified",
                "Licensed by State Nursing Council",
                "Hospital-standard infection prevention kits",
                "On-call physician supervision",
                "Flexible hourly, shift, or 24/7 care",
                "Instant digital medical reports",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm font-medium text-midnight">{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal hover:bg-forest text-white font-medium shadow-sm transition-all duration-200"
              >
                <span>Explore Care Options</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-sage text-midnight font-medium border border-mist transition-all duration-200"
              >
                <span>Speak with Care Coordinator</span>
              </a>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-midnight text-white p-8 sm:p-10 shadow-xl overflow-hidden border border-white/10">
              {/* Background gradient decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-royal/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center border border-gold/30">
                    <Building2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold font-semibold">Our Promise</span>
                    <h4 className="text-xl font-bold text-white">Trust, Safety & Quality</h4>
                  </div>
                </div>

                <p className="text-mist/90 text-sm leading-relaxed">
                  "Every patient we serve is treated like our own family member. We combine clinical
                  discipline with the personal warmth that only the home environment can nurture."
                </p>

                <div className="border-t border-white/10 pt-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-royal flex items-center justify-center font-bold text-white text-base">
                    HC
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-white">Dr. Aris Thorne</h5>
                    <p className="text-xs text-gold">Chief Medical Officer & Co-Founder</p>
                  </div>
                </div>

                {/* Micro badge banner */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-mist">Average response time</p>
                    <p className="text-lg font-bold text-gold">15-30 Minutes</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <p className="text-xs text-mist">Active cities</p>
                    <p className="text-lg font-bold text-white">12+ Metros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-mist hover:border-royal/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-midnight mb-2">{pillar.title}</h4>
                  <p className="text-sm text-slate-text/80 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="bg-royal rounded-3xl p-8 sm:p-12 text-white shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? "pt-6 md:pt-0 md:pl-6" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-mist/90 mt-1 font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
