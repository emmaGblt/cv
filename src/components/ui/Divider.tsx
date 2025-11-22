import { cn } from "@utils/classes";

type DividerProps = { className?: string; type?: "thin" | "thick" };

function Divider({ className, type = "thin" }: DividerProps) {
  return (
    <hr
      className={cn(
        type === "thick"
          ? "h-2.5 bg-secondary-2 border-none rounded shadow-sm shadow-primary/80"
          : "neo:text-transparent neo:shadow-inner-sm h-1 rounded",
        className
      )}
    />
  );
}

export default Divider;
