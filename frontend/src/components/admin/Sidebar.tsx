import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  CreditCard,
  Settings,
} from "lucide-react";
import LogoBadge from "../common/LogoBadge";

const Sidebar = () => {
  const DashboardNav = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Patients",
      link: "/patients",
      icon: Users,
    },
    {
      title: "Nurses",
      link: "/nurses",
      icon: Stethoscope,
      Options: ["Patients", "Nurses", "Suspended Accounts"],
    },
    {
      title: "Bookings & requests",
      link: "/bookings",
      icon: CalendarDays,
    },
    ,
    {
      title: "Verification",
      link: "/verification",
      icon: CalendarDays,
    },
    {
      title: "Payments",
      link: "/payments",
      icon: CreditCard,
    },
    {
      title: "Complaints & Safety",
      link: "/requests",
      icon: CalendarDays,
    },
    {
      title: "Reports & Analytics",
      link: "/requests",
      icon: CalendarDays,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="border-r-2 border-r-slate">
      <div className="p-5">
        <LogoBadge />
      </div>
      <div>
        {DashboardNav.map((nav) => (
          <div key={nav.title} className="flex gap-1 p-5  items-center">
            <div>
              <nav.icon />
            </div>
            <h5 className="font-normal font-sans text-base">{nav.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
