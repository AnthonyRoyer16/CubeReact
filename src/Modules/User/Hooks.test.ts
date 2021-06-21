import { renderHook, act } from "@testing-library/react-hooks";
import { Provider } from "./Provider";
import { useState, useDispatch } from "./Hooks";

jest.mock("core/services");
jest.mock("core/tools");

jest.mock("core/token");

describe("Auth Hooks", () => {
  const wrapper: React.FC<any> = Provider;

  it("hook has initial state", async () => {
    const { result } = renderHook(() => useState(), { wrapper });
    expect(result.current.auth).toBeFalsy();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.status).toBe(null);
  });
  it("hook has SIGN_IN action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "SIGN_IN" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
  it("hook has AUTHENTICATE action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "AUTHENTICATE" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
  it("hook has SIGN_OUT action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "SIGN_OUT" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
});
