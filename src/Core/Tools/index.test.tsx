import { isEmpty } from "./index";

describe("isEmpty", () => {
  it("should return isEmpty false", () => {
    const obj = {
      name: "gdgegdes",
    };
    expect(isEmpty(obj)).toBe(false);
  });
  it("should return isEmpty true", () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });
});
