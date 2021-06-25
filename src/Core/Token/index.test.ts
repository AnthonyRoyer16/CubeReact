import { getToken } from "./index";

jest.mock("jwt-decode");

describe("getToken", () => {
  it("should return token", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
    expect(getToken()).toBe("token");
  });
});
