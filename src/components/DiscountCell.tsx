import { UseTableCellProps } from "react-table";
import { Coupon } from "../models/coupon.model";

export const DiscountCell = ({ row }: UseTableCellProps<Coupon>) => {
  return (
    <>
      <b>$ {row.original.discount}</b>
      <div>Cart Discount</div>
    </>
  );
};
