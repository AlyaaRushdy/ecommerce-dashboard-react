"use client";

import * as React from "react";
import { addDays, format, isBefore } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePickerWithRange({ className }) {
  const today = new Date();
  const [date, setDate] = React.useState(() => {
    const sevenDaysAgo = addDays(today, -7);
    return {
      from: sevenDaysAgo,
      to: today,
    };
  });

  const handleSelect = (newDate) => {
    setDate((prev) => {
      if (!newDate) return { from: undefined, to: undefined };

      const to = newDate.to && isBefore(newDate.to, today) ? newDate.to : today;
      return { from: newDate.from, to };
    });
  };

  return (
    <div className={cn("gap-2 sm:block hidden", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline-block">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                  </>
                ) : (
                  format(date.from, "LLL dd")
                )
              ) : (
                "Pick a date"
              )}
            </span>
            <span className="sm:hidden">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                  </>
                ) : (
                  format(date.from, "LLL dd")
                )
              ) : (
                "Pick a date"
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={1}
            disabled={(date) => date > today}
            className="sm:flex hidden"
          />
          {/* <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={1}
            disabled={(date) => date > today}
            className="sm:hidden"
          /> */}
        </PopoverContent>
      </Popover>
    </div>
  );
}
