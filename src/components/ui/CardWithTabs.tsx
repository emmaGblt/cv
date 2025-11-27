import { Tabs as BaseUiTabs } from "@base-ui-components/react/tabs";
import { type ComponentProps,use } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";
import { cn } from "@/utils/classes";

import Card from "./Card";
import Divider from "./Divider";

type BaseUiTabProps = ComponentProps<typeof BaseUiTabs.Tab>;
type BaseUiRootProps = ComponentProps<typeof BaseUiTabs.Root>;

type TabProp = {
  value: BaseUiTabProps["value"];
  title: string;
  content: BaseUiTabProps["children"];
};

type CardWithTabsProps = {
  defaultValue: BaseUiRootProps["defaultValue"];
  tabs: Array<TabProp>;
};

function CardWithTabs({ defaultValue, tabs }: CardWithTabsProps) {
  const theme = use(ThemeContext);

  return (
    <Card className="relative overflow-x-hidden">
      <BaseUiTabs.Root defaultValue={defaultValue} orientation="horizontal">
        <BaseUiTabs.List
          className={cn(
            "sm:mx-10 mb-8 md:m-0 md:absolute grid grid-cols-3 transition-all duration-1000 ease-out",
            "cartoon:bg-background/40 cartoon:border-primary cartoon:border-4 cartoon:rounded-bl-md cartoon:-right-1 cartoon:-top-1",
            "neo:rounded-2xl neo:shadow-outer-md neo:top-4 neo:right-4 neo:border neo:border-background"
          )}
        >
          {tabs.map((tab) => (
            <BaseUiTabs.Tab
              key={`tab-${tab.value}`}
              value={tab.value}
              className={cn(
                "font-bold transition-all duration-300 ease-out cursor-pointer px-3 py-3.5 md:px-5 md:py-4 text-secondary-2 cartoon:hover:text-primary data-selected:text-primary cartoon:rounded-md",
                "neo:data-selected:shadow-inner-md neo:rounded-2xl neo:data-selected:text-secondary-1 neo:hover:text-black/50"
              )}
            >
              {tab.title}
            </BaseUiTabs.Tab>
          ))}
        </BaseUiTabs.List>
        {tabs.map((tab) => (
          <BaseUiTabs.Panel value={tab.value} key={`panel-${tab.value}`}>
            <h2 className="text-xl md:text-3xl mb-4 cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary max-w-fit neo:font-bold">
              {tab.title}
            </h2>
            <Divider
              className="w-1/6 xl:w-1/8 mb-8"
              type={theme === "cartoon" ? "thick" : "thin"}
            />
            {tab.content}
          </BaseUiTabs.Panel>
        ))}
      </BaseUiTabs.Root>
    </Card>
  );
}

export default CardWithTabs;
