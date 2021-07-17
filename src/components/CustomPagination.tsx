import { TableInstance } from "react-table";
import { Coupon } from "../models/coupon.model";
import { useMediaQueries } from "@react-hook/media-query";
import Pagination from "@material-ui/lab/Pagination";

export const CustomPagination = ({
  pageOptions,
  rows,
  gotoPage,
  state: { pageIndex },
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

      <Pagination
        count={pageOptions.length}
        variant="outlined"
        shape="rounded"
        onChange={(_, _page) => gotoPage(_page - 1)}
      />
    </div>
  );
};
