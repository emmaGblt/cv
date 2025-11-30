import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Tag from "./Tag";

describe("Tag renders properly", () => {
  it("renders a div with the text", () => {
    const { queryByText } = render(<Tag text="Tag text" />);

    const text = queryByText("Tag text");
    expect(text).toBeVisible();
    // Check some classes
    expect(text).toHaveClass("inline-block px-2 py-1");
  });
});
