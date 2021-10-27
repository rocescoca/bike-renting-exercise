import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
//
import LandingPage from "./landingPage";

describe("LandingPage", () => {
  test("there is a button for renting page", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const rentingButton = screen.getByText(/TUS ALQUILERES/);
    expect(rentingButton).toBeInTheDocument();
  });
  test("there is a button for catalog page", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const catalogButton = screen.getByText(/ECHA UN OJO AL CATALOGO/);
    expect(catalogButton).toBeInTheDocument();
  });
});
