import { cn } from "@utils/classes";

type DividerProps = { className?: string; type?: "thin" | "thick" };

function Divider({ className, type = "thin" }: DividerProps) {
  return (
    <hr
      className={cn(
        type === "thick" && "h-2 bg-secondary-2 rounded-4xl border-none",
        className
      )}
    />
  );
}

export default Divider;
