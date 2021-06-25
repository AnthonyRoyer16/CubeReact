import { Reducer, InitialState } from "../../Modules/Ressources/Reducer";

jest.mock("../../Core/Token");

describe("Auth Reducer", () => {
  it("should run action with SUCCESS type", () => {
  
    const state = Reducer(InitialState, { type: "SUCCESS" });
    console.log(InitialState)
    expect(state.ressources).toBe(undefined);
    expect(state.loading).toBe(false);
  });
});
