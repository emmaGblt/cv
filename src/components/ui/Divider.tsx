import { cn } from "@utils/classes";

type DividerProps = { className?: string; type?: "thin" | "thick" };

function Divider({ className, type = "thin" }: DividerProps) {
  return (
    <hr
      className={cn(
        type === "thick"
          ? "bg-secondary-2 shadow-primary/80 h-2.5 rounded border-none shadow-sm"
          : "neo:text-transparent neo:shadow-inner-sm h-1 rounded",
        className
      )}
    />
  );
}

export default Divider;
