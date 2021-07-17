import React from "react";
import { UseTableCellProps } from "react-table";
import styled from "styled-components";
import { Coupon } from "../models/coupon.model";

const EllipsisButton = styled.button`
  background-image: url("https://storage.googleapis.com/coding_challenge_assets/vertical-ellipsis.svg");
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ActionsCell = ({ row }: UseTableCellProps<Coupon>) => {
  return (
    <div style={{ margin: "auto", textAlign: "right" }}>
      <EllipsisButton
        role="button"
        onClick={() => window.alert(row.original.couponCode)}
      >
        &nbsp;
      </EllipsisButton>
    </div>
  );
};
