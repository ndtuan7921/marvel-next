import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  styled,
} from "@mui/material";
import React from "react";
import Typography from "../Typography";
import Image from "next/image";
const CardContentStyled = styled(CardContent)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  minHeight: 126,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

function CardSkeleton() {
  return (
    <Card sx={{ maxWidth: 216, maxHeight: 480 }}>
      <CardActionArea>
        <Skeleton width={250} height={200} />
        <CardContentStyled>
          <Skeleton width={50} height={20} />
          <Skeleton width={50} height={20} />
        </CardContentStyled>
      </CardActionArea>
    </Card>
  );
}

export default CardSkeleton;
