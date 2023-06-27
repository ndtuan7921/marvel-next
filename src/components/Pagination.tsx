"use client";
import * as React from "react";
import { Pagination as MuiPagination } from "@mui/material";

export default function Pagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <MuiPagination
      count={10}
      page={page}
      onChange={handleChange}
      sx={{
        ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
          color: "#ffffff",
          backgroundColor: "#E62429",
        },
      }}
    />
  );
}
