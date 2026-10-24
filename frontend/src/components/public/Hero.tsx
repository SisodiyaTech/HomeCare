import React from "react";
import {
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight,
  Download,
  Clock,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border border-mist/40 bg-midnight">
        {/* Background Image with Rich Dual Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-right md:bg-center transform scale-105 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent lg:hidden" />

        {/* Content Container */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>Compassionate Care That Comes Home</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 font-heading">
            Compassionate Nursing Care,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-mist to-white">
              Closer to Home.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-mist/90 font-normal leading-relaxed max-w-xl mb-8">
            Find and connect with certified nursing professionals for your home
            care needs. Hospital-grade post-operative recovery, elderly
            assistance, and sterile clinical procedures managed through one
            intuitive app.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#app-features"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-midnight bg-gold hover:bg-gold/90 shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-sm sm:text-base group"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Download the App</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-sm hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md transition-all duration-200 cursor-pointer text-sm sm:text-base group"
            >
              <span>Explore Care Options</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 border border-gold/30">
                <ShieldCheck className="w-4 h-4 text-gold" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white leading-tight">
                  100% Vetted
                </span>
                <span className="block text-[11px] text-mist/80">
                  State-Licensed RNs
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-royal/40 flex items-center justify-center shrink-0 border border-royal/50">
                <Clock className="w-4 h-4 text-mist" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white leading-tight">
                  &lt; 30 Mins
                </span>
                <span className="block text-[11px] text-mist/80">
                  Average Dispatch
                </span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
                <Star className="w-4 h-4 text-gold fill-gold" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white leading-tight">
                  4.9 / 5.0
                </span>
                <span className="block text-[11px] text-mist/80">
                  15k+ Home Visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
