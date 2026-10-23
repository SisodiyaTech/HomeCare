import ProfileBadge from "./ProfileBadge";
import NotificationBadge from "./NotificationBadge";
import Navs from "./Navs";
import LogoBadge from "./LogoBadge";

const Navbar = () => {
  return (
    <div className="max-w-full px-8 py-2 flex flex-row items-center justify-between border-b-2">
      <div>
        <LogoBadge />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          <Navs />
        </div>

        <div>
          <NotificationBadge />
        </div>

        <div>
          <ProfileBadge />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
