import { cn } from "@/utils/classes";

type TypeProps = { text: string; className?: string };

function Tag({ text, className }: TypeProps) {
  return (
    <div
      className={cn(
        "px-2 py-1 md:px-3 md:py-1.5 inline-block font-semibold text-xs md:text-sm text-center",
        "cartoon:border-2 cartoon:rounded-md cartoon:shadow-xs cartoon:bg-light cartoon:text-primary",
        "neo:rounded-3xl neo:bg-background-2/50 neo:text-black",
        className
      )}
    >
      {text}
    </div>
  );
}

export default Tag;
