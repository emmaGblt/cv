import { ThemeContext } from "@/contexts/ThemeContext";
import type { TTheme } from "@/types";
import { cn } from "@utils/classes";
import { Flower2, Snowflake, type LucideIcon } from "lucide-react";
import { use } from "react";
import { getNextTheme } from "@/utils/themes";
import "./index.css";

type ThemeButtonProps = {
  updateTheme: (newTheme: TTheme) => void;
};

const ORDERED_THEMES: Array<TTheme> = ["cartoon", "neomorphism"];

const THEME_NAMES: Record<TTheme, string> = {
  cartoon: "Cartoon",
  neomorphism: "Néomorphisme",
};

const THEME_ICONS: Record<TTheme, LucideIcon> = {
  cartoon: Snowflake,
  neomorphism: Flower2,
};

function ThemeButton({ updateTheme }: ThemeButtonProps) {
  const currentTheme = use(ThemeContext);
  const ThemeIcon = THEME_ICONS[currentTheme];

  const onThemeChange = () => {
    const nextTheme = getNextTheme(currentTheme, ORDERED_THEMES);
    updateTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={onThemeChange}
      className={cn(
        "z-10 cursor-pointer fixed top-6 right-8 min-w-[120px] py-2.5 px-4.5 transition-all duration-1000 ease-out pushButton",
        "cartoon:bg-background-2 cartoon:border-2 cartoon:border-primary cartoon:font-semibold cartoon:shadow-sm cartoon:shadow-primary/80 cartoon:rounded-md",
        "neo:shadow-outer-md neo:active:shadow-inner-md neo:rounded-4xl neo:border neo:border-background"
      )}
    >
      <span
        className="slideInTheme flex items-center gap-x-2"
        key={currentTheme}
      >
        <ThemeIcon className="size-5 shrink-0" />
        {THEME_NAMES[currentTheme]}
      </span>
    </button>
  );
}

export default ThemeButton;
