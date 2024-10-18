import { useEffect, useState } from "react";
import axios from "axios";

import { Users, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Loading from "@/components/shared/loading";
import { columns } from "@/data table columns/customersColumns";
import DataTable from "@/components/shared/DataTable";
import Header from "@/components/shared/Header";

function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => res.data)
      .then((res) => {
        setCustomers(res.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customers]);

  return (
    <>
      {customers.length == 0 ? (
        <Loading />
      ) : (
        <div className="p-5">
          <Header currentPage={"Customers"} />
          <div className="flex flex-col md:flex-row gap-4 py-4">
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  All Customers
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">2500</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  New Customers
                </CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">20</div>
                <p className="text-xs text-muted-foreground">
                  +150.1% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <DataTable
            data={customers}
            columns={columns}
            tableTitle={"All Customers"}
          />
        </div>
      )}
    </>
  );
}

export default Customers;
