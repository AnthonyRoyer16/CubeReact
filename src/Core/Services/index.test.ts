import { fetch } from "./index";

jest.mock("./index", () => {
  return { fetch: () => Promise.resolve({}) };
});

describe("Core Fetch", () => {
  it("should send get method", async () => {
    expect(await fetch("get", "mock")).toEqual({});
  });
  it("should send post method", async () => {
    expect(await fetch("post", "mock", {})).toEqual({});
  });
  it("should send put method", async () => {
    expect(await fetch("put", "mock", {})).toEqual({});
  });
  it("should send delete method", async () => {
    expect(await fetch("delete", "mock")).toEqual({});
  });
});
