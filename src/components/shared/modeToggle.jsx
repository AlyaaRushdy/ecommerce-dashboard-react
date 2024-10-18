import { useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/slices/modeSlice";

export default function ModeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mode.theme);
  const [error, setError] = useState(null);

  const toggleMode = useCallback(() => {
    try {
      const newMode = theme === "light" ? "dark" : "light";
      dispatch(setMode(newMode));
      // If we want to persist the mode in localStorage
      localStorage.setItem("theme", newMode);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      console.error("Error toggling mode:", errorMessage);
      setError(errorMessage);
    }
  }, [theme, dispatch]);

  // Error boundary
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleMode}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
