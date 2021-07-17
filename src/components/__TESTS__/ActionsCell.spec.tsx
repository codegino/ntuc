import "@testing-library/jest-dom";
import { ActionsCell } from "../ActionsCell";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as faker from "faker";

test("actions cell should show alert when button is clicked", () => {
  const couponCode = faker.random.word();
  const props = {
    row: {
      original: {
        couponCode,
      },
    },
  } as any;
  render(<ActionsCell {...props} />);
  const alert = jest.spyOn(window, "alert").mockImplementation();
  userEvent.click(screen.getByRole("button"));

  expect(alert).toHaveBeenNthCalledWith(1, couponCode);
  alert.mockRestore();
});
