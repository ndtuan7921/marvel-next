"use client";
import * as React from "react";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActionArea as MuiCardActionArea,
  styled,
} from "@mui/material";
import Image from "next/image";
import ImgExam from "../../assets/images/example.png";

import Typography from "../Typography";
import { Comic } from "../../interfaces";

const CardContentStyled = styled(MuiCardContent)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  minHeight: 126,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

type ComicCardBaseProps = Pick<
  Comic,
  "id" | "title" | "thumbnail" | "creators"
>;

interface ComicCardProps extends ComicCardBaseProps {}

export default function ComicCard(props: ComicCardProps) {
  const { title, thumbnail, creators } = props;
  let creatorsText;
  if (creators.items) {
    creatorsText = creators.items
      .slice(0, 2)
      .map((item: any) => item.name)
      .join(", ");
  }

  return (
    <MuiCard sx={{ maxWidth: 216, maxHeight: 480 }}>
      <MuiCardActionArea>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          // src={ImgExam}
          alt={"card-img"}
          width={230}
          height={280}
        />
        <CardContentStyled>
          <Typography
            text={title}
            variant="body2"
            color={"#151515"}
            sx={{ fontWeight: "700" }}
          />
          <Typography
            text={creatorsText ?? ""}
            variant="caption"
            color={"#767676"}
          />
        </CardContentStyled>
      </MuiCardActionArea>
    </MuiCard>
  );
}
