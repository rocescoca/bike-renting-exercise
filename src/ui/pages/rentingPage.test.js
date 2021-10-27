import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
//
import RentingPage from "./rentingPage";

describe("RentingPage", () => {
  test("there is a renting header", () => {
    render(
      <MemoryRouter>
        <RentingPage />
      </MemoryRouter>
    );
    const rentingHeader = screen.getByText(/Alquiler/);
    expect(rentingHeader).toBeInTheDocument();
  });
  test("there is a rentings table", () => {
    render(
      <MemoryRouter>
        <RentingPage />
      </MemoryRouter>
    );
    const rentingTable = screen.getByRole("table");
    expect(rentingTable).toBeInTheDocument();
  });
  test("cliking on renting button shows the new renting modal form", async () => {
    render(
      <MemoryRouter>
        <RentingPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Alquilar"));
    const newRentingModal = screen.getByRole("dialog");
    expect(newRentingModal).toBeInTheDocument();
  });
});
