/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

describe("Testing math functions", () => {
  it("should sum 3 plus 2 is equal 5", () => {
    let result = 3 + 2;
    expect(result).toBe(5);
  });

  it("should multiply 5 by 3 and return 15", () => {
    let result = 5 * 3;
    expect(result).toBe(15);
  });
});

describe("functional components", () => {
  it("should have a container div", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      container.getElementsByClassName("container").length
    ).toBeGreaterThan(0);
  });

  it("should render NotFound component when entering a non existing route", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/blablabla"]}>
        <App />
      </MemoryRouter>
    );

    const h2 = container.getElementsByTagName("h2")[0];
    expect(h2.innerHTML).toBe("Página não encontrada");
  });

  it("should go to the registration page when clicking on the register button", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    act(() => {
      let registerBtn = container
        .getElementsByTagName("a")[0];

      registerBtn.click()
    });

    const registrationTitle = screen.getByText("Cadastro de carro");
    expect(registrationTitle).toBeInTheDocument();
  });
});

export {};
