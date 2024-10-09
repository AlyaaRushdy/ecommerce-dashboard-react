"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick
}) => {
  return (
    (<div
      onClick={onClick}
      className={cn(
        "",
        className
      )}>
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40 text-lg my-10">{children}</div>
    </div>)
  );
};
