import { describe, expect, it } from "vitest";
import { formatDate } from "@/lib/dates";

describe("formatDate", () => {
  it("writes the house date style", () => {
    expect(formatDate("2026-11-02")).toBe("2 November 2026");
    expect(formatDate("2027-01-31")).toBe("31 January 2027");
  });

  it("rejects anything that is not an ISO date", () => {
    expect(() => formatDate("02/11/2026")).toThrow();
    expect(() => formatDate("2026-13-01")).toThrow();
    expect(() => formatDate("2026-11-00")).toThrow();
  });
});
