"use client";
import React, { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-09-01", revenue: 4500, expenses: 1200 },
  { date: "2024-09-02", revenue: 5000, expenses: 1800 },
  { date: "2024-09-03", revenue: 5200, expenses: 1500 },
  { date: "2024-09-04", revenue: 4800, expenses: 1600 },
  { date: "2024-09-05", revenue: 5300, expenses: 1400 },
  { date: "2024-09-06", revenue: 6000, expenses: 1700 },
  { date: "2024-09-07", revenue: 5700, expenses: 1900 },
  { date: "2024-09-08", revenue: 6200, expenses: 2000 },
  { date: "2024-09-09", revenue: 4900, expenses: 1700 },
  { date: "2024-09-10", revenue: 5200, expenses: 1600 },
  { date: "2024-09-11", revenue: 6100, expenses: 1900 },
  { date: "2024-09-12", revenue: 5800, expenses: 2000 },
  { date: "2024-09-13", revenue: 6300, expenses: 1800 },
  { date: "2024-09-14", revenue: 4700, expenses: 1600 },
  { date: "2024-09-15", revenue: 5500, expenses: 2100 },
  { date: "2024-09-16", revenue: 5100, expenses: 1700 },
  { date: "2024-09-17", revenue: 5600, expenses: 1900 },
  { date: "2024-09-18", revenue: 5900, expenses: 2000 },
  { date: "2024-09-19", revenue: 4700, expenses: 1600 },
  { date: "2024-09-20", revenue: 5300, expenses: 1800 },
  { date: "2024-09-21", revenue: 5800, expenses: 1900 },
  { date: "2024-09-22", revenue: 6200, expenses: 2200 },
  { date: "2024-09-23", revenue: 4900, expenses: 1600 },
  { date: "2024-09-24", revenue: 5100, expenses: 1700 },
  { date: "2024-09-25", revenue: 6000, expenses: 2100 },
  { date: "2024-09-26", revenue: 5700, expenses: 1800 },
  { date: "2024-09-27", revenue: 6400, expenses: 1900 },
  { date: "2024-09-28", revenue: 5200, expenses: 1700 },
  { date: "2024-09-29", revenue: 5000, expenses: 1500 },
  { date: "2024-09-30", revenue: 5900, expenses: 1800 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
};

const SalesStatistics = () => {
  const [activeChart, setActiveChart] = useState("revenue");

  const total = useMemo(() => {
    return {
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
      expenses: chartData.reduce((acc, curr) => acc + curr.expenses, 0),
    };
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>SalesStatistics</CardTitle>
          <CardDescription>
            Showing total visitors for the last 30 days
          </CardDescription>
        </div>
        <div className="flex">
          {["revenue", "expenses"].map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveChart(key)}
            >
              <span className="text-xs text-muted-foreground">
                {chartConfig[key].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesStatistics;
