import {
  Download,
  UserRound,
  Search,
  ClipboardCheck,
  ArrowRight,
  HeartPulse,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the App",
    description:
      "Get the HomeCare app on your device and begin your journey toward convenient home nursing care.",
  },
  {
    number: "02",
    icon: UserRound,
    title: "Create Your Account",
    description:
      "Sign up and provide the required information to set up your personal HomeCare account.",
  },
  {
    number: "03",
    icon: Search,
    title: "Explore Care Options",
    description:
      "Discover available nursing services and share your care requirements through the app.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Manage Your Booking",
    description:
      "Follow booking updates and stay connected through the communication features available in the app.",
  },
];

export default function HowItWork() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#D9BC83]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#176B5B]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9BC83]/50 bg-white px-4 py-2">
            <HeartPulse size={16} className="text-[#176B5B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#176B5B]">
              Simple Steps, Better Care
            </span>
          </div>

          <h2 className=" text-4xl leading-tight tracking-tight text-[#102A2A] sm:text-5xl lg:text-6xl">
            How <span className=" text-[#176B5B]">HomeCare</span> Works
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#596761] sm:text-lg">
            Getting started with home nursing care doesn't have to be
            complicated. Follow a few simple steps to begin.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-[#DFE6E2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D9BC83] hover:shadow-xl hover:shadow-[#102A2A]/5"
              >
                {/* Number and icon */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-semibold text-[#D9BC83]">
                    {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4EEE9] transition-colors duration-300 group-hover:bg-[#176B5B]">
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className="text-[#176B5B] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                <h3 className="mb-3  text-2xl font-semibold text-[#102A2A]">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-[#596761] sm:text-base">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 h-1 w-12 rounded-full bg-[#D9BC83] transition-all duration-300 group-hover:w-20 group-hover:bg-[#176B5B]" />

                {/* Connector on desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-5 top-12 z-10 hidden text-[#D9BC83] lg:block">
                    <ArrowRight size={20} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#102A2A] p-8 sm:p-10 lg:flex-row lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9BC83]">
              Your Care Journey Starts Here
            </p>

            <h3 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Care that feels closer to home.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#D6E0DC] sm:text-base">
              Explore HomeCare and discover a more convenient way to navigate
              your home nursing care journey.
            </p>
          </div>

          <a
            href="#download-app"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#D9BC83] px-6 py-4 text-sm font-semibold text-[#102A2A] transition-all duration-300 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#D9BC83]/30"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
