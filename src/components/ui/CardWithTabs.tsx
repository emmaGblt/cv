import { Tabs as BaseUiTabs } from "@base-ui-components/react/tabs";
import type { ComponentProps } from "react";
import Card from "./Card";

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
        <BaseUiTabs.List className="absolute border border-t-0 border-gray-400 right-0 top-0 px-10 py-4 flex gap-x-8 bg-amber-300 rounded-tr-3xl rounded-bl-3xl">
          {tabs.map((tab) => (
            <BaseUiTabs.Tab
              value={tab.value}
              className="font-semibold cursor-pointer text-gray-500 hover:text-gray-800 active:text-gray-800 data-selected:text-amber-800"
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
