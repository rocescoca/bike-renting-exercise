import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
//
import RentingPage from "./rentingPage";

describe("RentingPage", () => {
  test("there is a renting header", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <RentingPage />
        </MemoryRouter>
      );
    });
    const rentingHeader = screen.getByText(/Alquiler/);
    expect(rentingHeader).toBeInTheDocument();
  });
  test("there is a rentings table", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <RentingPage />
        </MemoryRouter>
      );
    });
    const rentingTable = screen.getByRole("table");
    expect(rentingTable).toBeInTheDocument();
  });
  test("cliking on renting button shows the new renting modal form", async () => {
    await waitFor(() => {
      render(
        <MemoryRouter>
          <RentingPage />
        </MemoryRouter>
      );
    });
    fireEvent.click(screen.getByText("Alquilar"));
    const newRentingModal = screen.getByRole("dialog");
    expect(newRentingModal).toBeInTheDocument();
  });
});
