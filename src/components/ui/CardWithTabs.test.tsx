import { render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Card from "./Card";
import CardWithTabs from "./CardWithTabs";
import Divider from "./Divider";

vi.mock("@components/ui/Card", () => {
  return {
    default: vi
      .fn()
      .mockImplementation(({ children }: { children: ReactNode }) => (
        <div>{children}</div>
      ))
  };
});

vi.mock("@components/ui/Divider");

describe("CardWithTabs renders properly", () => {
  beforeEach(() =>
    render(
      <CardWithTabs
        defaultValue="tab2"
        tabs={[
          { value: "tab1", title: "Tab 1", content: "Content of tab 1" },
          { value: "tab2", title: "Tab 2", content: "Content of tab 2" },
          { value: "tab3", title: "Tab 3", content: "Content of tab 3" }
        ]}
      />
    )
  );

  afterEach(() => vi.clearAllMocks());

  it("renders a Card component", () => {
    expect(Card).toHaveBeenCalledOnce();
  });

  it("renders 3 tabs", () => {
    const tabs = screen.queryAllByRole("tab");

    expect(tabs.length).toBe(3);
    expect(within(tabs[0]).queryByText("Tab 1")).toBeVisible();
    expect(within(tabs[1]).queryByText("Tab 2")).toBeVisible();
    expect(tabs[1]).toHaveAttribute("data-selected"); // tab2 is the default value
    expect(within(tabs[2]).queryByText("Tab 3")).toBeVisible();
  });

  it("renders the selected tab name in a heading", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: "Tab 2" })
    ).toBeVisible();
  });

  it("renders a Divider component", () => {
    expect(Divider).toHaveBeenCalledOnce();
  });

  it("renders the content of the default selected tab", () => {
    expect(screen.queryByText("Content of tab 2")).toBeVisible();
    expect(screen.queryByText("Content of tab 1")).toBeNull();
    expect(screen.queryByText("Content of tab 3")).toBeNull();
  });
});
