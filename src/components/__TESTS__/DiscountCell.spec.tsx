import "@testing-library/jest-dom";
import { DiscountCell } from "../DiscountCell";
import { render, screen } from "@testing-library/react";
import * as faker from "faker";

test("displaying discount cell content", () => {
  const discount = faker.datatype.number();
  const props = {
    row: {
      original: {
        discount,
      },
    },
  } as any;
  render(<DiscountCell {...props} />);

  expect(screen.getByText(`$ ${discount}`)).toBeInTheDocument();
  expect(screen.getByText(/cart discount/i)).toBeInTheDocument();
});

test("snapshot of discount cell", () => {
  const props = {
    row: {
      original: {
        discount: 1,
      },
    },
  } as any;
  render(<DiscountCell {...props} />);

  expect(screen.getByTitle("discount").innerHTML).toMatchInlineSnapshot(
    `"<div><b>$ 1</b></div><div>Cart Discount</div>"`
  );
});
