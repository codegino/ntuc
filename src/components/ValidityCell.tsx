import dateformat from "dateformat";
import { UseTableCellProps } from "react-table";
import { Coupon } from "../models/coupon.model";

export const ValidityCell = ({ row }: UseTableCellProps<Coupon>) => {
  return (
    <>
      <div>
        <b>{dateformat(row.original.startDate, "dS mmm yyyy")}</b>
      </div>
      <div>{dateformat(row.original.expiryDate, "dS mmm yyyy")}</div>
    </>
  );
};