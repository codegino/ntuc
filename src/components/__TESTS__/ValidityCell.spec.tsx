import "@testing-library/jest-dom";
import { ValidityCell } from "../ValidityCell";
import { render, screen } from "@testing-library/react";

test("displaying validity cell content", () => {
  const startDate = "07-17-2020";
  const expiryDate = "08-09-2021";

  const props = {
    row: {
      original: {
        startDate,
        expiryDate,
      },
    },
  } as any;
  render(<ValidityCell {...props} />);

  expect(screen.getByText(`17th Jul 2020`)).toBeInTheDocument();
  expect(screen.getByText(`9th Aug 2021`)).toBeInTheDocument();
});

test("snapshot of validity cell", () => {
  const b = {
    row: {
      original: {
        startDate: "07-17-2020",
        expiryDate: "08-09-2021",
      },
    },
  } as any;
  render(<ValidityCell {...b} />);

  expect(screen.getByTitle("validity").innerHTML).toMatchInlineSnapshot(
    `"<div><b>17th Jul 2020</b></div><div>9th Aug 2021</div>"`
  );
});
