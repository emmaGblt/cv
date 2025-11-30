import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Divider from "./Divider";

describe("Divider renders properly", () => {
  it("renders a hr element", () => {
    render(<Divider />);

    expect(document.querySelector("hr")).toBeVisible();
  });

  it("renders the thin variant by default", () => {
    render(<Divider />);

    const divider = document.querySelector("hr");
    expect(divider).toHaveClass(
      "neo:text-transparent neo:shadow-inner-sm h-1 rounded"
    );
  });

  it("renders the thick variant when 'type' prop equals 'thick'", () => {
    render(<Divider type="thick" />);

    const divider = document.querySelector("hr");
    expect(divider).toHaveClass(
      "bg-secondary-2 shadow-primary/80 h-2.5 rounded border-none shadow-sm"
    );
  });
});
