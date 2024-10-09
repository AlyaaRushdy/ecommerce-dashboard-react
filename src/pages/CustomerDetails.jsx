import ModeToggle from "@/components/shared/modeToggle";

import { useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Banknote,
  LogIn,
  MapPin,
  NotebookText,
  ShoppingBag,
  Smartphone,
  UserPlus,
} from "lucide-react";
import OrdersTable from "@/components/OrdersTable";
import HeaderBreadcrumb from "@/components/HeaderBreadcrumb";
import { Separator } from "@/components/ui/separator";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const chartData = [
  { month: "January", orders: 1 },
  { month: "February", orders: 3 },
  { month: "March", orders: 2 },
  { month: "April", orders: 0 },
  { month: "May", orders: 1 },
  { month: "June", orders: 1 },
];

const chartConfig = {
  orders: {
    label: "orders",
    color: "hsl(var(--chart-1))",
  },
};

function CustomerDetails() {
  const { customerId } = useParams();

  const data = [
    {
      id: "53200002",
      products: "5 items",
      date: "Jan 10, 2024",
      customer: "Ronald Jones",
      status: "Pending",
      quantity: 5,
      city: "New York",
      totalAmount: "$253.52",
    },
    {
      id: "53200003",
      products: "3 items",
      date: "Jan 15, 2024",
      customer: "Jacob McKinney",
      status: "Completed",
      quantity: 3,
      city: "Los Angeles",
      totalAmount: "$966.41",
    },
    {
      id: "53200004",
      products: "8 items",
      date: "Jan 20, 2024",
      customer: "Isabella Murphy",
      status: "Shipping",
      quantity: 8,
      city: "Chicago",
      totalAmount: "$567.51",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-red-700";
      case "Completed":
        return "text-green-500";
      case "Shipping":
        return "text-yellow-400";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between mb-2">
          <HeaderBreadcrumb
            currentPage={customerId}
            prevPage={"Customers"}
            prevPageLink={"/customers"}
          />
          <ModeToggle />
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders
              </CardTitle>
              <NotebookText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">8</div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <Banknote className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1"> &#163;2700</div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Bought Products
              </CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">12</div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 py-4">
          <Card className="w-full lg:w-1/3">
            <CardContent className="pt-6 flex flex-col gap-2">
              <div className="flex flex-col gap-2 items-center">
                <Avatar className="h-16 w-16 flex">
                  <AvatarImage src={"customerImage"} alt="Avatar" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <p>Ahmed Magdy</p>
                  <p className="text-muted-foreground">abc@gmail.com</p>
                </div>
              </div>
              <Separator className="mb-2" />
              <div className="flex gap-2">
                <Smartphone className="text-muted-foreground w-5" />
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p className="text-muted-foreground">01234567897</p>
                </div>
              </div>
              <div className="flex gap-2">
                <UserPlus className="text-muted-foreground w-5" />
                <div>
                  <p className="font-semibold">Signup date</p>
                  <p className="text-muted-foreground">Jun 15, 2024</p>
                </div>
              </div>
              <div className="flex gap-2">
                <LogIn className="text-muted-foreground w-5" />
                <div>
                  <p className="font-semibold">Last Login date</p>
                  <p className="text-muted-foreground">Aug 20, 2024</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin className="text-muted-foreground w-5" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">
                    123 Nile Avenue, Apartment 4B, Zamalek District, Cairo,
                    Egypt
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Banknote className="text-muted-foreground w-5" />
                <div>
                  <p className="font-semibold">Payment Method</p>
                  <p className="text-muted-foreground">Credit Card</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full lg:w-2/3">
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="max-h-72 min-w-full"
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="orders"
                    type="natural"
                    stroke="var(--color-orders)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total orders since signing up
              </div>
            </CardFooter>
          </Card>
        </div>

        <Card className="w-full my-4">
          <CardContent className="pt-6">
            <OrdersTable data={data} getStatusClass={getStatusClass} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default CustomerDetails;