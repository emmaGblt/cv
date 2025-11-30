import "./index.css";

import { Bubbles, type LucideIcon, PartyPopper } from "lucide-react";
import { use } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";
import type { TTheme } from "@/types";
import { getNextItem } from "@/utils/array";
import { cn } from "@/utils/classes";

type ThemeButtonProps = {
  updateTheme: (newTheme: TTheme) => void;
};

const ORDERED_THEMES: Array<TTheme> = ["cartoon", "neomorphism"];

const THEME_NAMES: Record<TTheme, string> = {
  cartoon: "Cartoon",
  neomorphism: "Néomorphisme"
};

const THEME_ICONS: Record<TTheme, LucideIcon> = {
  cartoon: PartyPopper,
  neomorphism: Bubbles
};

function ThemeButton({ updateTheme }: ThemeButtonProps) {
  const currentTheme = use(ThemeContext);
  const ThemeIcon = THEME_ICONS[currentTheme];

  const onThemeChange = () => {
    const nextTheme = getNextItem(currentTheme, ORDERED_THEMES);
    if (nextTheme) updateTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={onThemeChange}
      className={cn(
        "group pushButton fixed top-6 right-8 z-10 min-w-[120px] cursor-pointer px-4.5 py-2.5 transition-all duration-1000 ease-out",
        "cartoon:bg-background-2 cartoon:border-2 cartoon:border-primary cartoon:font-semibold cartoon:shadow-sm cartoon:shadow-primary/80 cartoon:rounded-md",
        "neo:shadow-outer-md neo:active:shadow-inner-md neo:rounded-4xl neo:border neo:border-background neo:bg-background"
      )}
    >
      <span className="slideInTheme neo:group-hover:text-black/50 flex items-center gap-x-2">
        <ThemeIcon className="size-5 shrink-0" />
        {THEME_NAMES[currentTheme]}
      </span>
    </button>
  );
}

export default ThemeButton;
