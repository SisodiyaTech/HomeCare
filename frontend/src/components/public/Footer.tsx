import { PhoneCall } from "lucide-react";

const footerData = {
  quickLinks: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Our Services", href: "/services" },
    { title: "Find a Nurse", href: "/find-a-nurse" },
    { title: "How it Works", href: "/how-it-works" },
  ],

  professionals: [
    { title: "Join as a Nurse", href: "/join-as-nurse" },
    { title: "Nurse Registration", href: "/nurse-registration" },
    { title: "Verification Process", href: "/verification" },
    { title: "Nurse Login", href: "/nurse-login" },
  ],

  support: [
    { title: "Help Center", href: "/help" },
    { title: "Frequently Asked Questions", href: "/faq" },
    { title: "Contact Us", href: "/contact" },
    { title: "Cancellation & Refunds", href: "/refund-policy" },
  ],

  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
  ],
};

const Footer = () => {
  const footerSections = [
    { title: "Quick Links", links: footerData.quickLinks },
    { title: "For Professionals", links: footerData.professionals },
    { title: "Support", links: footerData.support },
    { title: "Legal", links: footerData.legal },
  ];

  return (
    <footer>
      <div className="bg-midnight p-8">
        {/* Emergency Notice */}
        <div className="mb-10 rounded-xl border border-rose bg-rose/15 p-3">
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-rose p-4">
              <PhoneCall className="text-white" />
            </div>

            <div>
              <h5 className="font-semibold text-mist">
                Emergency Medical Notice
              </h5>

              <p className="text-mist">
                HomeCare is for planned and on-demand home nursing procedures.
                For life-threatening emergencies, please <b>dial 108/112</b>{" "}
                immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gold">
                <img
                  src="/logo.png"
                  alt="HomeCare logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <h5 className="text-3xl text-white">
                Home<span className="text-gold">Care</span>
              </h5>
            </div>

            <p className="mt-4 text-mist">
              Connecting families with nursing professionals to make quality
              care more accessible, personal, and convenient — all from the
              comfort of home.
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="text-mist">
              <h5 className="mb-4 font-bold text-gold">{section.title}</h5>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-gold"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gold p-3">
        <p className="text-center text-sm text-midnight">
          © 2026 HomeCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
