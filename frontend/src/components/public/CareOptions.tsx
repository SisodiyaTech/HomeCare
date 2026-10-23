import React, { useState } from "react";
import {
  Activity,
  Heart,
  Stethoscope,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  PhoneCall,
  Zap
} from "lucide-react";

const CareOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Care Options" },
    { id: "post-op", label: "Post-Operative" },
    { id: "elderly", label: "Elderly & Geriatric" },
    { id: "critical", label: "IV & Injections" },
    { id: "specialized", label: "Specialized Procedures" },
  ];

  const careServices = [
    {
      id: "post-op-care",
      category: "post-op",
      title: "Post-Operative Surgical Recovery",
      tag: "Discharge Support",
      tagColor: "bg-royal/10 text-royal border-royal/20",
      icon: Stethoscope,
      price: "₹650",
      unit: "per visit",
      duration: "1 - 2 Hours",
      description:
        "Comprehensive clinical care following hospital discharge to prevent surgical site infections and facilitate rapid healing.",
      features: [
        "Aseptic surgical dressing & inspection",
        "Suture, staple, and drain removal",
        "Vital sign monitoring & pain charting",
        "Doctor prescription administration",
      ],
      popular: true,
    },
    {
      id: "geriatric-support",
      category: "elderly",
      title: "Elderly & Geriatric Companion Care",
      tag: "Most Requested",
      tagColor: "bg-gold/20 text-midnight border-gold/30",
      icon: Heart,
      price: "₹500",
      unit: "per hour",
      duration: "4 / 8 / 12 Hours",
      description:
        "Dedicated daily assistance for aging family members requiring clinical observation, mobility help, and compassionate companionship.",
      features: [
        "Scheduled medication & vitals charting",
        "Fall prevention & gentle mobility support",
        "Feeding assistance & personal hygiene",
        "Companionship & cognitive engagement",
      ],
      popular: false,
    },
    {
      id: "iv-infusions",
      category: "critical",
      title: "IV Infusion & Prescribed Injections",
      tag: "Immediate Dispatch",
      tagColor: "bg-rose/10 text-rose border-rose/20",
      icon: Zap,
      price: "₹400",
      unit: "per procedure",
      duration: "30 - 60 Mins",
      description:
        "Sterile intravenous cannulation, antibiotic administration, iron infusions, and subcutaneous/intramuscular injections.",
      features: [
        "Safe IV catheter insertion with sterile kit",
        "Antibiotics & doctor-prescribed saline fluids",
        "Insulin & pain management injections",
        "Immediate allergic response observation",
      ],
      popular: false,
    },
    {
      id: "wound-care",
      category: "specialized",
      title: "Advanced Wound & Bedsore Management",
      tag: "Clinical Care",
      tagColor: "bg-royal/10 text-royal border-royal/20",
      icon: Activity,
      price: "₹600",
      unit: "per dressing",
      duration: "45 - 60 Mins",
      description:
        "Specialized wound therapy for diabetic foot ulcers, pressure sores, burns, and chronic non-healing lesions.",
      features: [
        "Debridement & sterile antiseptic dressing",
        "Pressure sore stage 1-4 treatment",
        "Negative pressure wound therapy (VAC)",
        "Progressive photographic healing reports",
      ],
      popular: false,
    },
    {
      id: "catheter-stoma",
      category: "specialized",
      title: "Catheterization & Stoma Care",
      tag: "Specialized",
      tagColor: "bg-sage text-royal border-royal/10",
      icon: ShieldCheck,
      price: "₹550",
      unit: "per procedure",
      duration: "45 Mins",
      description:
        "Hygienic catheter insertion, maintenance, and stoma bag management executed strictly under aseptic clinical conditions.",
      features: [
        "Foley's catheter insertion & removal",
        "Bladder irrigation & urobag maintenance",
        "Colostomy / ileostomy appliance change",
        "Patient & family caregiver hygiene education",
      ],
      popular: false,
    },
    {
      id: "24-hr-nursing",
      category: "elderly",
      title: "12 / 24-Hour Intensive Bedside Nursing",
      tag: "Full-Shift Care",
      tagColor: "bg-midnight/10 text-midnight border-midnight/20",
      icon: Clock,
      price: "₹2,800",
      unit: "per 12hr shift",
      duration: "12 or 24 Hours",
      description:
        "Continuous bedside vigilance by an accredited Registered Nurse (RN/GNM) for high-dependency ICU step-down patients.",
      features: [
        "Round-the-clock vitals & oxygen saturation",
        "Tracheostomy care & suctioning support",
        "Enteral (Ryle's tube) feeding & aspiration care",
        "Digital handover report for treating physician",
      ],
      popular: false,
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? careServices
      : careServices.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 px-6 sm:px-10 lg:px-16 bg-white text-slate-text">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage text-royal text-sm font-semibold mb-4 border border-royal/10">
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Tailored Home Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight tracking-tight max-w-3xl">
            Services & Care Options Designed Around Your Healing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-text/80 max-w-2xl leading-relaxed">
            From single-visit clinical procedures to round-the-clock nursing supervision,
            choose the exact level of care tailored to your family's needs.
          </p>
        </div>

        {/* Category Pills / Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-royal text-white shadow-md shadow-royal/20 scale-105"
                    : "bg-ivory text-slate-text hover:bg-sage hover:text-midnight border border-mist"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 border bg-ivory/60 hover:bg-white hover:shadow-xl hover:-translate-y-1 ${
                  service.popular
                    ? "border-royal ring-2 ring-royal/20"
                    : "border-mist hover:border-royal/30"
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-royal text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-royal text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.tagColor}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-midnight mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-text/80 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Duration pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-mist text-xs font-medium text-slate-text mb-5">
                    <Clock className="w-3.5 h-3.5 text-royal" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 border-t border-mist/80 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                        <span className="text-slate-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="border-t border-mist pt-5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-text/70 block">Estimated Fee</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-midnight">{service.price}</span>
                      <span className="text-xs text-slate-text/70">{service.unit}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-royal hover:bg-forest text-white text-sm font-semibold transition-all duration-200 group"
                  >
                    <span>Book Care</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Care Advisory Banner */}
        <div className="rounded-3xl bg-midnight text-white p-8 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Need a personalized regimen?
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold text-white">
              Not sure which care option is right for your patient?
            </h4>
            <p className="text-mist/80 text-sm max-w-2xl">
              Our clinical nurse supervisors offer complimentary tele-assessments to review
              doctor discharge summaries and recommend the optimal nursing plan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:1800-466-3227"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold/90 text-midnight font-bold shadow-md transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline: 1800-HOME-CARE</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Free Triage Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareOptions;
