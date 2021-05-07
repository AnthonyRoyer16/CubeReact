import { act, render, screen } from "@testing-library/react";
import { Page } from "./Page"
import { BrowserRouter } from "react-router-dom"

beforeAll(() => {
    delete window.matchMedia
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
});


describe("Page Layout test elements", () => {
    it("should have title Mock Title", () => {
      act(() => {
        const { container } = render(
            <BrowserRouter>
              <Page header={true}>
                <></>
              </Page>
            </BrowserRouter>
        );
        expect(screen.queryByPlaceholderText(/Rechercher une ressource/i)).toBeTruthy();
        expect(container.getElementsByClassName("anticon-home")).toBeTruthy();
        expect(container.getElementsByClassName("anticon-hearth")).toBeTruthy();
        expect(container.getElementsByClassName("anticon-user")).toBeTruthy();
        expect(container.getElementsByClassName("anticon-message")).toBeTruthy();
      });
    });
});