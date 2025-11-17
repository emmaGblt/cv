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
        "z-10 cursor-pointer fixed top-6 right-8 min-w-[120px]",
        "bg-background-2 border-3 border-primary py-2.5 px-4.5 font-semibold shadow-sm shadow-primary/70 rounded-xl"
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
