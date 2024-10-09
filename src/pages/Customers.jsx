import { Users, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ModeToggle from "@/components/shared/modeToggle";

import { customers } from "@/test arrays/customers";
import { columns } from "@/data table columns/customersColumns";
import DataTable from "@/components/shared/DataTable";

function Customers() {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between mb-2">
          <h1 className="font-medium text-2xl">Customers</h1>
          <ModeToggle />
        </div>

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
    </>
  );
}

export default Customers;
