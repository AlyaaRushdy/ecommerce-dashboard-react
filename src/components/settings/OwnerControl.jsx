import { ownerControllCoulmns } from "@/data table columns/ownerControllerCoulmns";
import DataTable from "../shared/DataTable";
import { ownersControllArray } from "@/test arrays/ownerControll";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const OwnerControl = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddAdmin = () => {
    // Add Admin logic here
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-10">Owner Control</h1>
        <div className="flex justify-between">
          <Sheet>
            {/* Avoid using a button-like element inside SheetTrigger */}
            <SheetTrigger asChild>
              <button className="cursor-pointer text-primary mb-10">
                Add Admin
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>Add Admin</SheetHeader>
              <div className="space-y-2 my-4 mb-10">
                <Input
                  type="email"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 my-4 mb-10">
                <Input
                  type="email"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  {/* Ensure buttons are not nested directly inside another button */}
                  <Button variant="secondary" className="bg-red-500">
                    Cancel
                  </Button>
                </SheetClose>
                <Button type="primary" onClick={handleAddAdmin}>
                  Save
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <DataTable
        columns={ownerControllCoulmns}
        data={ownersControllArray}
        tableTitle={"All Admins"}
      />
    </div>
  );
};

export default OwnerControl;
