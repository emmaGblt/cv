import { cn } from "@/utils/classes";

type TypeProps = { text: string };

function Tag({ text }: TypeProps) {
  return (
    <div
      className={cn(
        "px-3 py-1.5 inline-block font-semibold text-sm ",
        "cartoon:border-2 cartoon:rounded-md cartoon:shadow-xs cartoon:bg-light cartoon:text-primary",
        "neo:rounded-3xl neo:bg-background-2/50 neo:text-black neo:uppercase"
      )}
    >
      {text}
    </div>
  );
}

export default Tag;
