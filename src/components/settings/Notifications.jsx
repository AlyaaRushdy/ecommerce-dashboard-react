import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Switch from "../ui/switch";

const Notifications = () => {
  const [weeklyNewsLetter, setWeeklyNewsLetter] = useState(false);
  const [accountSummary, setAccountSummary] = useState(false);
  const [notificationsSettings, setNotificationsSettings] = useState({
    newFollowers: { label: "New Follower", checked: false },
    postLike: { label: "Post Like", checked: false },
    someOneFollowedPosts: {
      label: "Someone you followed posted",
      checked: false,
    },
    postAddedToCollection: {
      label: "Post added to collection",
      checked: false,
    },
    postDownloaded: { label: "Post downloaded", checked: false },
  });

  const onCheckedChange = (checked, key) => {
    setNotificationsSettings((prevSettings) => ({
      ...prevSettings,
      [key]: {
        ...prevSettings[key],
        checked: checked,
      },
    }));
  };

  const onWeeklyNewsLetterChange = (checked) => {
    setWeeklyNewsLetter(checked);
  };

  const onAccountSummaryChange = (checked) => {
    setAccountSummary(checked);
  };

  useEffect(() => {
    //here you can seet the data on the first render
  }, []);

  const handleSaveChange = () => {
    //here you can submit the data
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-10">Notifications</h1>
      <h2 className="text-lg font-bold mb-10">Email Notifications</h2>
      <div className="flex justify-between mb-10">
        <div className="">
          <h2 className="text-lg font-bold mb-4">Weekly newsletter</h2>
          <p>A small text about what the newsletters might contain</p>
        </div>
        <Switch
          onCheckedChange={onWeeklyNewsLetterChange}
          checked={weeklyNewsLetter}
        />
      </div>
      <div className="flex justify-between mb-16">
        <div className="">
          <h2 className="text-lg font-bold mb-4">Account Summary</h2>
          <p>A small text about what the newsletters might contain</p>
        </div>
        <Switch
          onCheckedChange={onAccountSummaryChange}
          checked={accountSummary}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold mb-2">Website Notifications</h2>

        {Object.entries(notificationsSettings).map(([key, value]) => (
          <div key={key} className="flex gap-4 items-center">
            <Checkbox
              checked={value.checked}
              onCheckedChange={(checked) => onCheckedChange(checked, key)}
            />
            <span>{value.label}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        <Button
          variant="primary"
          className=" bg-background dark:bg-neutral-900 border"
          onClick={handleSaveChange}
        >
          Save Changes
        </Button>
        <Button variant="secondary" className="dark:bg-red-800">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Notifications;
