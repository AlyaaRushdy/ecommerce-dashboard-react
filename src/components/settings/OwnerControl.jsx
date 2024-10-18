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
    //Add Admin here
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-10">Owner Controll</h1>
        <div className="flex justify-between">
          <Sheet>
            <SheetTrigger>
              <Button className="mb-10" type="primary">
                Add Admin
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>Add Admin</SheetHeader>
              <div className="space-y-2 my-4 mb-10">
                <Input
                  type="email"
                  placeholder="Enter new email"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 my-4 mb-10">
                <Input
                  type="email"
                  placeholder="Enter new email"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  <Button type="primary" onClick={handleAddAdmin}>
                    Save
                  </Button>
                </SheetClose>
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
