import * as React from "react";
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from "@mui/material";

type PaginationBaseProps = Pick<
  MuiPaginationProps,
  "count" | "onChange" | "page" | "size" | "sx" | "variant"
>;

interface PaginationProps extends PaginationBaseProps {}

export default function Pagination(props: PaginationProps) {
  const { count, page, onChange } = props;
  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={onChange}
      size="large"
      variant="outlined"
      shape="rounded"
    />
  );
}
