import React , { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountSettings from "@/components/settings/AccountSettings";
import Notifications from "@/components/settings/Notifications";
import OwnerControl from "@/components/settings/OwnerControl";
import Profile from "@/components/settings/Profile";
import Header from "@/components/shared/Header";

const LINKS = [
  { key: "profile", title: "Public Profile", component: <Profile /> },
  { key: "account", title: "Account Settings", component: <AccountSettings /> },
  {
    key: "notifications",
    title: "Notifications",
    component: <Notifications />,
  },
  { key: "owner", title: "Owner Control", component: <OwnerControl /> },
];

export default function Settings() {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("profile");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    if (tab && LINKS.some((link) => link.key === tab)) {
      setCurrentTab(tab);
    } else {
      setCurrentTab("profile");
    }
  }, [location.search]);

const currentTabComponent = React.useMemo(
  () => LINKS.find((link) => link.key === currentTab)?.component || <Profile />,
  [currentTab]
);


  return (
    <div className="p-5">
      <Header currentPage="Settings" />
      <div className="flex gap-20 mt-10">
        <ul className="flex flex-col gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.key}
              to={`/settings?tab=${link.key}`}
              className={`py-2 px-4 transition-all duration-200 rounded-full ${
                currentTab === link.key
                  ? "bg-gray-600 text-white"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="w-3/4">{currentTabComponent}</div>
      </div>
    </div>
  );
}
