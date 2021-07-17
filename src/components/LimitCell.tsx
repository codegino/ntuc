import { UseTableCellProps } from "react-table";
import { Coupon } from "../models/coupon.model";

export const LimitCell = ({ row }: UseTableCellProps<Coupon>) => {
  return <span title="limit">{row.original.maxSingleRedemption} per user</span>;
};
