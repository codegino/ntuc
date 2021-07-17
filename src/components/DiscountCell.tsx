import { UseTableCellProps } from "react-table";
import { Coupon } from "../models/coupon.model";

export const DiscountCell = ({ row }: UseTableCellProps<Coupon>) => {
  return (
    <div title="discount">
      <div>
        <b>$ {row.original.discount}</b>
      </div>
      <div style={{ fontSize: ".8em", color: "#aaa" }}>Cart Discount</div>
    </div>
  );
};
