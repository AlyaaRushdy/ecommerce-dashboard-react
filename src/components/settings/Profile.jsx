import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    profession: "",
    bio: "",
  });
  const [onlinePresenceLinkToAdd, setOnlinePresenceLinkToAdd] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [items, setItems] = useState([
    { id: 1, link: "https://example.com/1" },
    { id: 2, link: "https://example.com/2" },
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      link: `https://example.com/${items.length + 1}`,
      text: `Link ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-10">Public Profile</h1>
      <div className="flex gap-8 items-center mb-16">
        <Avatar className="hidden h-36 w-36 sm:flex">
          <AvatarImage
            src={
              "https://tse3.mm.bing.net/th?id=OIP.o9IM-gTFr_wkl11AnqIJdAHaLH&pid=Api&P=0&h=220"
            }
            alt="Avatar"
          />
        </Avatar>
        <div>
          <div className="flex flex-col gap-4">
            <Button
              variant="primary"
              className="bg-background dark:bg-neutral-900 border"
            >
              Change Picture
            </Button>
            <Button variant="secondary" className="dark:bg-red-800">
              Delete Picture
            </Button>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20"
      >
        <div className="col-span-2 xl:col-span-1">
          <label htmlFor="firstName" className="block text-sm font-medium ">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="col-span-2 xl:col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium ">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="location" className="block text-sm font-medium ">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your location"
            required
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="profession" className="block text-sm font-medium ">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your profession"
            required
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="bio" className="block text-sm font-medium ">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write a short bio"
            rows="4"
            required
          />
        </div>
        <div className="col-span-2">
          <Button
            type="submit"
            variant="primary"
            className=" bg-background dark:bg-neutral-900 border w-full"
          >
            Submit
          </Button>
        </div>
      </form>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Online Presence</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-500 rounded-md text-center"
          >
            <a
              href={item.link}
              className="text-white hover:text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.link}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Sheet>
          <SheetTrigger>
            <Button className="mb-10" type="primary">
              <Plus />
              Add Another
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>Add Online Presence</SheetHeader>
            <div className="space-y-2 my-4 mb-10">
              <Input
                type="text"
                placeholder="Enter Online Presence Link"
                value={onlinePresenceLinkToAdd}
                onChange={(e) => setOnlinePresenceLinkToAdd(e.target.value)}
                required
              />
            </div>

            <SheetFooter>
              <SheetClose>
                <Button variant="secoundary" className="bg-red-500">
                  Cancel
                </Button>
              </SheetClose>
              <SheetClose>
                <Button type="primary" onClick={handleAddItem}>
                  Save
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Profile;
