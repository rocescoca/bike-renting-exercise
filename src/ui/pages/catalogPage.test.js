import { render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
//
import CatalogPage from "./catalogPage";

describe("CatalogPage", () => {
  test("there is a catalog header", () => {
    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>
    );
    const catalogHeader = screen.getByText(/Catálogo/);
    expect(catalogHeader).toBeInTheDocument();
  });
  test("there are 3 BASIC models", async () => {
    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>
    );

    const modelsListContainer = screen.getByTitle("modelsListContainer");
    let basicModels = [];
    await waitFor(() => {
      basicModels = within(modelsListContainer).getAllByText(/BASIC/);
    });
    expect(basicModels.length).toBe(3);
  });
  test("there are 3 PREMIUM models", async () => {
    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>
    );

    const modelsListContainer = screen.getByTitle("modelsListContainer");
    let premiumModels = [];
    await waitFor(() => {
      premiumModels = within(modelsListContainer).getAllByText(/PREMIUM/);
    });
    expect(premiumModels.length).toBe(3);
  });
});
