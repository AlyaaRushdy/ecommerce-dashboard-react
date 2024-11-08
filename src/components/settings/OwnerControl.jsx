import { useEffect, useState } from "react";
import DataTable from "../shared/DataTable";
import { adminsColumns } from "@/data table columns/AdminsColumns";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";

const OwnerControl = () => {
  const [admins, setAdmins] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const { token } = useSelector((state) => state.user);
  const { toast } = useToast();

  useEffect(() => {
    axios
      .get("http://localhost:5000/admins/")
      .then((res) => res.data)
      .then((res) => {
        setAdmins(res.admins);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const handleDeleteAdmin = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/admins/deleteAccount/${id}`, "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        if (err.response.status == 403) {
          toast({
            variant: "destructive",
            title: err.response.data.message,
          });
        } else console.log(err.response);
      });
  };

  return (
    <div>
      {/* <div className="flex justify-between">
        {console.log(admins)}
        <h1 className="text-xl font-bold mb-10">Owner Control</h1> */}
      {/* <div className="flex justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <span className="cursor-pointer text-primary mb-10">
                Add Admin
              </span>
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
        </div> */}
      {/* </div> */}
      <DataTable
        columns={adminsColumns(handleDeleteAdmin)}
        data={admins}
        tableTitle={"All Admins"}
        ButtonText={"Add Admin"}
        ButtonLink={"/settings/addAdmin"}
      />
    </div>
  );
};

export default OwnerControl;
