import React from "react";
import styled from "styled-components";
import { useTable, usePagination, Column } from "react-table";
import { Coupon } from "../models/coupon.model";
import { DiscountCell } from "./DiscountCell";
import { ValidityCell } from "./ValidityCell";
import { LimitCell } from "./LimitCell";
import { ActionsCell } from "./ActionsCell";
import { CustomPagination } from "./CustomPagination";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
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
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
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
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key: headerKey, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();

            return (
              <tr {...restHeaderGroupProps} key={headerKey}>
                {headerGroup.headers.map((column) => {
                  const { key: columnKey, ...restHeaderProps } =
                    column.getHeaderProps();
                  return (
                    <th {...restHeaderProps} key={columnKey}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            const { key: rowKey, ...restRowProps } = row.getRowProps();
            prepareRow(row);
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
