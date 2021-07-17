import "@testing-library/jest-dom";
import { LimitCell } from "../LimitCell";
import { render, screen } from "@testing-library/react";
import * as faker from "faker";

test("displaying discount cell content", () => {
  const maxSingleRedemption = faker.datatype.number();
  const props = {
    row: {
      original: {
        maxSingleRedemption,
      },
    },
  } as any;
  render(<LimitCell {...props} />);

  expect(
    screen.getByText(`${maxSingleRedemption} per user`)
  ).toBeInTheDocument();
});

test("snapshot of limit cell", () => {
  const b = {
    row: {
      original: {
        maxSingleRedemption: 1,
      },
    },
  } as any;
  render(<LimitCell {...b} />);

  expect(screen.getByTitle("limit").innerHTML).toMatchInlineSnapshot(`"1 per user"`);
});
