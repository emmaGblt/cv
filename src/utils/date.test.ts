import { describe, expect, it } from "vitest";

import { getStringPeriod } from "./date";

describe("getStringPeriod works properly", () => {
  it("formats the start date and end date together", () => {
    const startDate = new Date("2024-08-01");
    const endDate = new Date("2025-11-18");
    const period = getStringPeriod(startDate, endDate);

    expect(period).toBe("01/08/2024 - 18/11/2025");
  });

  it("can format the start date only (end date is optional)", () => {
    const startDate = new Date("2024-08-01");
    const period = getStringPeriod(startDate);

    expect(period).toBe("01/08/2024");
  });

  it("accepts formatter options", () => {
    const startDate = new Date("2024-08-01");
    const endDate = new Date("2025-11-18");
    const period = getStringPeriod(startDate, endDate, { year: "numeric" });

    expect(period).toBe("2024 - 2025");
  });
});
