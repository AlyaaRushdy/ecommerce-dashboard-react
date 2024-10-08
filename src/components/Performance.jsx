import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart visualizing e-commerce performance metrics (Revenue and Profit).";

// Data for the radar chart focusing on Revenue and Profit.
const chartData = [
  { metric: "January", revenue: 5000, profit: 1500 },
  { metric: "February", revenue: 6000, profit: 2000 },
  { metric: "March", revenue: 7000, profit: 2500 },
  { metric: "April", revenue: 4000, profit: 1000 },
  { metric: "May", revenue: 8000, profit: 3000 },
  { metric: "June", revenue: 9000, profit: 3500 },
];

// Configuration for the chart color and label.
const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))", // Color for Revenue
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))", // Color for Profit
  },
};

export function Performance() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>E-commerce Performance</CardTitle>
        <CardDescription>
          Comparing Revenue and Profit over the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]" // Increased the height from 250px to 400px
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -20, // Reduced negative margin slightly for more space
              bottom: 0,
              left: 30, // Added margin to left and right for more spacing
              right: 30,
            }}
            width={400}  // Increased chart width
            height={400} // Increased chart height
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="metric" />
            <PolarGrid />
            <Radar
              dataKey="revenue"
              fill="var(--color-revenue)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="profit"
              fill="var(--color-profit)"
              fillOpacity={0.6}
            />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}

export default Performance;
