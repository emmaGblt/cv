import { Tabs as BaseUiTabs } from "@base-ui-components/react/tabs";
import type { ComponentProps } from "react";
import Card from "./Card";
import { cn } from "@/utils/classes";

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
  return (
    <Card className="relative overflow-x-hidden">
      <BaseUiTabs.Root defaultValue={defaultValue} orientation="horizontal">
        <BaseUiTabs.List
          className={cn(
            "absolute grid grid-cols-3 transition-all duration-1000 ease-out",
            "cartoon:bg-background/40 cartoon:border-primary cartoon:border-4 cartoon:border-t-0 cartoon:border-r-0 rounded-bl-xl cartoon:right-0 cartoon:top-0",
            "neo:rounded-2xl neo:shadow-outer-md neo:top-4 neo:right-4 neo:border neo:border-background"
          )}
        >
          {tabs.map((tab) => (
            <BaseUiTabs.Tab
              value={tab.value}
              className={cn(
                "font-bold cursor-pointer px-5 py-4 text-secondary-2 hover:text-primary data-selected:text-primary cartoon:rounded-xl",
                "neo:data-selected:shadow-inner-md neo:rounded-2xl neo:data-selected:text-secondary-1 neo:transition-all neo:duration-300 neo:ease-out"
              )}
            >
              {tab.title}
            </BaseUiTabs.Tab>
          ))}
        </BaseUiTabs.List>
        {tabs.map((tab) => (
          <BaseUiTabs.Panel value={tab.value}>{tab.content}</BaseUiTabs.Panel>
        ))}
      </BaseUiTabs.Root>
    </Card>
  );
}

export default CardWithTabs;
