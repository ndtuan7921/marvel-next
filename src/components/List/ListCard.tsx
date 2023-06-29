"use client";
import React, { ChangeEvent, ReactNode, useState } from "react";
import { Skeleton, Stack } from "@mui/material";
import Heading from "../Heading";
import CardSkeleton from "../Skeleton/CardSkeleton";
import Pagination from "../Pagination/Pagination";
import { Pagination as MuiPagination } from "@mui/material";
import usePagination from "../Pagination/usePagination";
interface ListCardProps {
  loading?: boolean;
  title: string;
  data: any[];
  renderItem: (value: any, index: number, array: any[]) => ReactNode;
}

function ListCard(props: ListCardProps) {
  const { title, data, loading = false } = props;
  const [page, setPage] = useState(1);
  const per_page = 10;
  const count = Math.ceil(data!.length / per_page);
  const _DATA = usePagination(data, per_page);

  const handleChange = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Stack
      direction="column"
      alignItems={"center"}
      spacing={5}
      sx={{ marginBottom: "3rem" }}
    >
      <Heading variant="h3" text={title} />
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        flexWrap={"wrap"}
      >
        {loading
          ? Array.from({ length: 5 }, (_, index) => (
              <CardSkeleton key={index} />
            ))
          : data && _DATA.currentData().map(props.renderItem)}
      </Stack>

      {data.length > 0 && (
        <Pagination count={count} page={page} onChange={handleChange} />
      )}
    </Stack>
  );
}

export default ListCard;
