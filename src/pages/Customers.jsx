import { Users, UserPlus } from "lucide-react";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ModeToggle from "@/components/shared/modeToggle";
// import { DataTableDemo } from "./test";
import { Link } from "react-router-dom";

function Customers() {
  const customers = [
    {
      id: "n12i8",
      name: "Magdy Ahmed",
      email: "abc@gmail.com",
      phone: "01234567897",
      city: "Cairo",
      registered: "Jan 10, 2024",
      totalOrders: 4,
      totalExpense: 1200,
    },
    {
      id: "n12i5",
      name: "Ahmed Magdy",
      email: "abc@gmail.com",
      phone: "01234567897",
      city: "Giza",
      registered: "Aug 10, 2024",
      totalOrders: 0,
      totalExpense: 0,
    },
  ];

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

        <Card>
          <CardHeader className="px-7">
            <CardTitle className="text-lg">All Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className=" overflow-hidden rounded-t-md">
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-neutral-900">
                  <TableHead className="font-bold">Customer ID</TableHead>
                  <TableHead className="font-bold">Name</TableHead>
                  <TableHead className="font-bold">Phone Numer</TableHead>
                  <TableHead className="font-bold">City</TableHead>
                  <TableHead className="font-bold">Registered</TableHead>
                  <TableHead className="font-bold">Total Orders</TableHead>
                  <TableHead className="font-bold">Total Expense</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <Link to={`/customers/${customer.id}`}>
                        {customer.id}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Link to={`/customers/${customer.id}`}>
                          {customer.name}
                        </Link>
                        <Link
                          to={`/customers/${customer.id}`}
                          className="text-muted-foreground"
                        >
                          {customer.email}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.city}</TableCell>
                    <TableCell className="font-medium">
                      {customer.registered}
                    </TableCell>
                    <TableCell className="font-medium">
                      {customer.totalOrders}
                    </TableCell>
                    <TableCell className="font-medium">
                      &#163;{customer.totalExpense}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* <DataTableDemo /> */}
      </div>
    </>
  );
}

export default Customers;
