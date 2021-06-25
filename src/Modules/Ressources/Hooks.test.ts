import { renderHook, act } from "@testing-library/react-hooks";
import { Provider } from "./Provider";
import { useState, useDispatch } from "./Hooks";

jest.mock("../../Core/Services");
jest.mock("../../Core/Tools");

jest.mock("../../Core/Token");

describe("Ressources Hooks", () => {
  const wrapper: React.FC<any> = Provider;

  it("hook has initial state", async () => {
    const { result } = renderHook(() => useState(), { wrapper });
    expect(result.current.ressources).toBeTruthy();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.status).toBe(null);
  });
  it("hook has FETCH action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "FETCH" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
  it("hook has GET_RESSOURCES action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "GET_RESSOURCES" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
  it("hook has SUCCESS_SEARCH action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "SUCCESS_SEARCH" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
  it("hook has SEARCH action", async () => {
    const { result } = renderHook(() => useDispatch(), { wrapper });
    await act(async () => {
      result.current({ type: "SEARCH" });
    });
    expect(result.current).toEqual(expect.any(Function));
  });
});
