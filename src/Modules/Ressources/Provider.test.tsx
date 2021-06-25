import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "./Provider";

describe("Auth Provider", () => {
  it("Provider has exist", async () => {
    const RessourceProvider: React.FC<any> = Provider;
    const { container } = render(<RessourceProvider />);
    expect(container).toBeTruthy();
  });
});
