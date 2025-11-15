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
    <Card className="relative">
      <BaseUiTabs.Root defaultValue={defaultValue} orientation="horizontal">
        <BaseUiTabs.List
          className={cn(
            "absolute border-3 border-t-0 border-r-0 right-0 top-0 px-10 py-4 flex gap-x-8 rounded-tr-3xl rounded-bl-3xl",
            "bg-secondary-2/30 border-secondary-3"
          )}
        >
          {tabs.map((tab) => (
            <BaseUiTabs.Tab
              value={tab.value}
              className="font-bold cursor-pointer text-secondary-3 hover:text-primary data-selected:text-primary"
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
