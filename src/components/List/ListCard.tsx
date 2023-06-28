"use client";
import React, { ReactNode } from "react";
import { Skeleton, Stack } from "@mui/material";
import Heading from "../Heading";
import CardSkeleton from "../Skeleton/CardSkeleton";

interface ListCardProps {
  loading?: boolean;
  title: string;
  data: any[] | undefined;
  renderItem: (value: any, index: number, array: any[]) => ReactNode;
}

function ListCard(props: ListCardProps) {
  const { title, data, loading = false } = props;

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
          : data && data.map(props.renderItem)}
      </Stack>
    </Stack>
  );
}

export default ListCard;
