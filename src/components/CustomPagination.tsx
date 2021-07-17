import { TableInstance } from "react-table";
import { Coupon } from "../models/coupon.model";

export const CustomPagination = ({
  pageIndex,
  pageOptions,
  rows,
  previousPage,
  canPreviousPage,
  gotoPage,
  pageCount,
  nextPage,
  canNextPage,
}: TableInstance<Coupon>) => {
  return (
    <div className="pagination">
      <div>
        <span>
          Showing {pageIndex + 1} - {pageOptions.length} of {rows.length}
        </span>
      </div>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <button onClick={() => gotoPage(index + pageIndex)} key={index}>
                {index + pageIndex + 1}
              </button>
            );
          })}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {pageCount}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
      </div>
    </div>
  );
};
