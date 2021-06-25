import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "./requests";

jest.mock("./requests", () => {
  return {
    getRequest: () => Promise.resolve({}),
    postRequest: () => Promise.resolve({}),
    putRequest: () => Promise.resolve({}),
    deleteRequest: () => Promise.resolve({}),
  };
});

describe("Requests", () => {
  it("should have getRequest", async () => {
    expect(await getRequest("path")).toEqual({});
  });
  it("should have postRequest", async () => {
    expect(await postRequest("path", {})).toEqual({});
  });
  it("should have putRequest", async () => {
    expect(await putRequest("path", {})).toEqual({});
  });
  it("should have deleteRequest", async () => {
    expect(await deleteRequest("path")).toEqual({});
  });
});
