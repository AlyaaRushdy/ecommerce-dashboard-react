import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, Tooltip } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots showing website views";

// Updated data representing website views for the last 6 months
const chartData = [
  { month: "January", views: 5000 },
  { month: "February", views: 6200 },
  { month: "March", views: 4700 },
  { month: "April", views: 5400 },
  { month: "May", views: 6800 },
  { month: "June", views: 7300 },
];

// Updated chart config for "views"
const chartConfig = {
  views: {
    label: "Website Views",
    color: "hsl(var(--chart-1))",
  },
};

// Custom tooltip content
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md p-2">
          <h4 className="font-bold text-gray-800 dark:text-white">
            {payload[0].payload.month}
          </h4>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            {`${payload[0].name} : ${payload[0].value} views`}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Great job! Keep up the momentum!
          </p>
        </div>
      );
    }
    return null;
  };
  

export function WebsiteViews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Views</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
            <Tooltip content={<CustomTooltip />} /> {/* Using the custom tooltip */}
            <Line
              dataKey="views"
              type="natural"
              stroke="var(--color-views)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-views)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none justify-center items-center">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing website views for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default WebsiteViews;
