import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart displaying daily sales.";

// Updated chart data representing daily sales for the full week
const chartData = [
  { day: "Monday", sales: 1200 },
  { day: "Tuesday", sales: 1800 },
  { day: "Wednesday", sales: 1500 },
  { day: "Thursday", sales: 2000 },
  { day: "Friday", sales: 2300 },
  { day: "Saturday", sales: 2700 },
  { day: "Sunday", sales: 3100 },
];

// Chart configuration for daily sales
const chartConfig = {
  sales: {
    label: "Daily Sales",
    color: "hsl(var(--chart-1))",
  },
};

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md p-3">
        <h4 className="font-bold text-lg text-gray-800 dark:text-white">
          {`Sales on ${payload[0].payload.day}`}
        </h4>
        <p className="text-xl text-green-600 dark:text-green-400">
          {`$${payload[0].value}`}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Keep up the great work!
        </p>
      </div>
    );
  }
  return null;
};


export function SalesChart() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Daily Sales</CardTitle>
        <CardDescription>Sales data from the last week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Total daily sales for the last 7 days.
        </div>
      </CardFooter>
    </Card>
  );
}

export default SalesChart;
