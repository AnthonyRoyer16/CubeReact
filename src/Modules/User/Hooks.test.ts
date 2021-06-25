import { renderHook, act } from "@testing-library/react-hooks";
import { Provider } from "./Provider";
import { useState, useDispatch } from "./Hooks";

jest.mock("../../Core/Services");
jest.mock("../../Core/Tools");

jest.mock("../../Core/Token");

describe("User Hooks", () => {
  const wrapper: React.FC<any> = Provider;

  it("hook has initial state", async () => {
    const { result } = renderHook(() => useState(), { wrapper });
    expect(result.current.user).toBeTruthy();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.status).toBe(null);
  });
  it("hook has GET_ACCOUNT action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "GET_ACCOUNT" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
});
