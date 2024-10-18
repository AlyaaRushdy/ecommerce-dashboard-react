import AccountSettings from "@/components/settings/AccountSettings";
import Notifications from "@/components/settings/Notifications";
import OwnderControl from "@/components/settings/OwnderControl";
import Profile from "@/components/settings/Profile";
import Header from "@/components/shared/Header";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { key: "profile", title: "Public Profile", component: <Profile /> },
  {
    key: "account",
    title: "Account Settings",
    component: <AccountSettings />,
  },
  {
    key: "notifications",
    title: "Notifications",
    component: <Notifications />,
  },
  { key: "owner", title: "Owner Control", component: <OwnderControl /> },
];

function Settings() {
  const location = useLocation();
  const tab = location.search.split("=")[1];
  const currentTabCompoennt = LINKS.find((link) => link.key == tab).component;

  return (
    <>
      <div className="p-5">
        <Header currentPage={"Settings"} />
        <div className="flex gap-20 mt-10">
          <ul className="flex flex-col gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.key}
                to={`/settings?tab=${link.key}`}
                className={`py-2 px-4 transition-all duration-200 rounded-full ${
                  tab == link.key ? "bg-gray-600 text-white" : "hover:bg-gray-600 hover:text-white"
                } `}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <div className="w-3/4">{currentTabCompoennt}</div>
        </div>
      </div>
    </>
  );
}

export default Settings;
