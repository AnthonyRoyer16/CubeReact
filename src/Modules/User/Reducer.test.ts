import { Reducer, InitialState } from "../../Modules/Auth/Reducer";

jest.mock("../../Core/Token");

describe("Auth Reducer", () => {
  it("should run action with LOGIN type", () => {
  
    const state = Reducer(InitialState, { type: "LOGIN" });
    console.log(InitialState)
    expect(state.auth).toBeFalsy();
    expect(state.loading).toBeTruthy();
  });
  it("should run action with LOGOUT type", () => {
    const state = Reducer(InitialState, { type: "LOGOUT" });
    expect(state.auth).toBeFalsy();
    expect(state.loading).toBeFalsy();
  });
  it("should run action with SUCCESS type", () => {
    const state = Reducer(InitialState, {
      type: "SUCCESS",
      payload: { expired: "" },
    });
    expect(state.auth).toBeTruthy();
    expect(state.loading).toBeFalsy();
  });
  it("should run action with ERROR type", () => {
    const state = Reducer(InitialState, { type: "ERROR" });
    expect(state.auth).toBeFalsy();
    expect(state.loading).toBeFalsy();
  });
});
