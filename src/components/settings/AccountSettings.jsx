import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";

const AccountSettings = () => {
  const [email, setEmail] = useState("email@gmail.com");
  const [oldPassword, setOldPassword] = useState("oldpassword123");
  const [newPassword, setNewPassword] = useState("newpassword123");
  const [showAlert, setShowAlert] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log("Old password: ", oldPassword);
    console.log("New password: ", newPassword);
  };

  const handleSave = () => {
    console.log("New email: ", email);
  };

  const deleteAccountHandler = () => {
    console.log("delete the account here");
  };

  const handleDelete = () => {
    console.log("Account deleted");
    deleteAccountHandler();
    setShowAlert(false); // Close alert after deletion
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-10">Account Settings</h1>
      <h2 className="text-xl font-bold mb-10">Email Address</h2>
      <div className="flex justify-between">
        <p>
          Your email address is <span className="font-bold">{email}</span>
        </p>
        <Sheet>
          {/* Using asChild prop to prevent nesting issues */}
          <SheetTrigger asChild>
            <span className="text-indigo-600 underline cursor-pointer">
              Change
            </span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>Change Email Address</SheetHeader>
            <div className="space-y-2 my-4 mb-10">
              <Input
                type="email"
                placeholder="Enter new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button onClick={handleSave}>Save</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="mt-20">
        <h2 className="text-lg font-bold mb-10">Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          {/* Password fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="password"
              placeholder="Old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="w-full md:w-1/2"
            />
            <Input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full md:w-1/2"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full md:w-auto">
            Save Password
          </Button>
        </form>
      </div>
      <div className="mt-20">
        <h2 className="text-xl font-bold mb-6">Delete Account</h2>
        <p className="w-96 leading-8">
          Would you like to delete your account? This account contains 1388
          posts. Deleting your account will remove all the content associated
          with it.
        </p>
        <button
          className="text-red-900 hover:text-red-600 transition-all duration-200 mt-8"
          onClick={() => setShowAlert(true)}
        >
          I want to delete my account
        </button>
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-bold mb-4 text-black">
                Are you sure you want to delete this account?
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                This action cannot be undone. All of your data will be
                permanently removed.
              </p>

              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => setShowAlert(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
