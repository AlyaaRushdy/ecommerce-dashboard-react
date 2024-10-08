"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart showing customer satisfaction";

const chartData = [
  { title: "Satisfaction", percent: 90, fill: "hsl(var(--color-chart-3))" }, // Adjusted to use a color variable
];

const chartConfig = {
  title: {
    label: "Satisfaction",
  },
  percent: {
    label: "90%",
    color: "hsl(var(--chart-1))", // Adjusted to use a color variable
  },
};

export function CustomerSatisfaction() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Customer Satisfaction</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={360 * (chartData[0].percent / 100)}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background dark:first:fill-gray-700 dark:last:fill-gray-900" // Adjusted for dark mode
              polarRadius={[86, 74]}
            />
            <RadialBar
              dataKey="percent"
              background
              cornerRadius={10}
              fill={chartData[0].fill} // Fill color for the radial bar
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold dark:fill-white" // Adjusted for dark mode
                        >
                          {chartData[0].percent}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground dark:fill-gray-400" // Adjusted for dark mode
                        >
                          Satisfaction
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground dark:text-gray-400"> {/* Adjusted for dark mode */}
          Showing overall customer satisfaction for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default CustomerSatisfaction;
