import { TableInstance } from "react-table";
import { Coupon } from "../models/coupon.model";
import { useMediaQueries } from "@react-hook/media-query";

export const CustomPagination = ({
  pageOptions,
  rows,
  previousPage,
  canPreviousPage,
  gotoPage,
  pageCount,
  nextPage,
  canNextPage,
  state: { pageIndex, pageSize },
}: TableInstance<Coupon>) => {
  const { matchesAll } = useMediaQueries({
    screen: "screen",
    width: "(max-width: 600px)",
  });

  return (
    <div
      className="pagination"
      style={{
        flexDirection: matchesAll ? "column" : "row",
      }}
    >
      <div>
        Showing {pageIndex + 1} - {pageOptions.length} of {rows.length}
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
