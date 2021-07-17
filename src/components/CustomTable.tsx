import React from "react";
import styled from "styled-components";
import { useTable, usePagination, Column, useSortBy } from "react-table";
import { Coupon } from "../models/coupon.model";
import { DiscountCell } from "./DiscountCell";
import { ValidityCell } from "./ValidityCell";
import { LimitCell } from "./LimitCell";
import { ActionsCell } from "./ActionsCell";
import { CustomPagination } from "./CustomPagination";

const Styles = styled.div`
  padding: 1rem;
  @media screen and (max-width: 600px) {
    & {
      padding: 0;
    }
  }

  table {
    border-spacing: 0;
    border-bottom: 1px solid #f1f1f1;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #f1f1f1;
      text-align: left;

      :last-child {
        border-right: 0;
      }
    }

    tr {
      :nth-child(even) {
        background-color: #fafafa;
      }
    }

    td {
      padding: 1rem 0;
    }
  }

  .pagination {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`;

function Table({
  columns,
  data,
}: {
  columns: Column<Coupon>[];
  data: Coupon[];
}) {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    tableInstance;

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key: headerKey, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();

              return (
                <tr {...restHeaderGroupProps} key={headerKey}>
                  {headerGroup.headers.map((column) => {
                    const { key: columnKey, ...restHeaderProps } =
                      column.getHeaderProps(column.getSortByToggleProps());
                    return (
                      <th {...restHeaderProps} key={columnKey}>
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              const { key: rowKey, ...restRowProps } = row.getRowProps();
              return (
                <tr {...restRowProps} key={rowKey}>
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...restCellProps } =
                      cell.getCellProps();
                    return (
                      <td {...restCellProps} key={cellKey}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CustomPagination {...tableInstance} />
    </>
  );
}

function CustomTable({ data }: { data: Coupon[] }) {
  const columns: Column<Coupon>[] = React.useMemo(
    () => [
      {
        Header: "Coupon",
        accessor: "couponCode",
      },
      {
        Header: "Discount",
        accessor: "discount",
        Cell: DiscountCell,
      },
      {
        Header: "Limit",
        accessor: "maxSingleRedemption",
        Cell: LimitCell,
      },
      {
        Header: "Validity",
        accessor: "startDate",
        Cell: ValidityCell,
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        Cell: ActionsCell,
        accessor: "id",
      },
    ],
    []
  );

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default CustomTable;
