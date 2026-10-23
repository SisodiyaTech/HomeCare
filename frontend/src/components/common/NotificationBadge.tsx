import { Bell } from "lucide-react";

const NotificationBadge = () => {
  return (
    <div className="p-2 rounded-full relative">
      <div className="bg-rose rounded-full text-white flex items-center justify-center font-bold w-5 h-5 absolute top-0 right-0">
        2
      </div>
      <Bell />
    </div>
  );
};

export default NotificationBadge;
