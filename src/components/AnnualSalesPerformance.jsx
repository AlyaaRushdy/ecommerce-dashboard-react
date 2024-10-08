"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
} from "@/components/ui/chart";

export const description = "Annual Sales Performance Comparison";

// Sample data for the chart (now includes all months)
const chartData = [
  { month: "January", year2022: 186, year2023: 150 },
  { month: "February", year2022: 305, year2023: 250 },
  { month: "March", year2022: 237, year2023: 200 },
  { month: "April", year2022: 73, year2023: 90 },
  { month: "May", year2022: 209, year2023: 180 },
  { month: "June", year2022: 214, year2023: 190 },
  { month: "July", year2022: 180, year2023: 210 },
  { month: "August", year2022: 220, year2023: 250 },
  { month: "September", year2022: 200, year2023: 230 },
  { month: "October", year2022: 300, year2023: 290 },
  { month: "November", year2022: 280, year2023: 310 },
  { month: "December", year2022: 350, year2023: 330 },
];

const chartConfig = {
  year2022: {
    label: "2022",
    color: "hsl(210, 70%, 50%)", // Blue color for 2022
  },
  year2023: {
    label: "2023",
    color: "hsl(60, 70%, 50%)", // Yellow color for 2023
  },
};

// Styling for the tooltip
const customTooltipStyles = `
  .custom-tooltip {
    background: var(--bg-tooltip); /* Use a CSS variable for tooltip background */
    border-radius: 4px;
    padding: 8px;
    color: var(--text-tooltip); /* Use a CSS variable for tooltip text color */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ChartTooltipContent = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Month: ${payload[0].payload.month}`}</p>
        <p>{`2022: ${payload[0].payload.year2022}`}</p>
        <p>{`2023: ${payload[0].payload.year2023}`}</p>
      </div>
    );
  }
  return null;
};

export function AnnualSalesPerformance() {
  return (
    <Card className="w-full shadow-lg rounded-lg overflow-hidden"> {/* Set height here */}
      <style>{customTooltipStyles}</style>
      <CardHeader className="bg-gray-100 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg font-semibold">Annual Sales Performance</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Comparing 2022 vs. 2023 (Full Year)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 16,
              bottom: 16,
            }}
            className="w-full"
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="year2022"
              type="monotone"
              stroke={chartConfig.year2022.color} // Using the defined color for 2022
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }} // Optional: to show an active dot on hover
            />
            <Line
              dataKey="year2023"
              type="monotone"
              stroke={chartConfig.year2023.color} // Using the defined color for 2023
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }} // Optional: to show an active dot on hover
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-700 p-4">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing sales performance for the full year
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AnnualSalesPerformance;
