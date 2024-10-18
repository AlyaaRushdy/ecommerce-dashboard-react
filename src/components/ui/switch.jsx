import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

// Switch component
const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border border-transparent transition-colors focus:outline-none",
      "bg-gray-200 data-[state=checked]:bg-orange-500",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition-transform",
        "translate-x-1 data-[state=checked]:translate-x-6"
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export default Switch;