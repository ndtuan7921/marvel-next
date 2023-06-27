"use client";
import * as React from "react";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActionArea as MuiCardActionArea,
  styled,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import ImgExam from "../../assets/images/example.png";

import Heading from "../Heading";
import Typography from "../Typography";
import { Character } from "../../interfaces";

const CardContentStyled = styled(MuiCardContent)(({ theme }) => ({
  background: "#151515",
  textTransform: "uppercase",
  minHeight: 126,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

type CharacterCardBaseProps = Pick<Character, "id" | "name" | "thumbnail">;

interface CharacterCardProps extends CharacterCardBaseProps {}

export default function CharacterCard(props: CharacterCardProps) {
  const { id, name, thumbnail } = props;

  return (
    <MuiCard sx={{ maxWidth: 216, maxHeight: 450 }}>
      <MuiCardActionArea>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          // src={ImgExam}
          alt={"card-img"}
          width={230}
          height={280}
        />
        <CardContentStyled>
          <Heading text={name} variant="h6" color={"white"} />
          <Typography variant="body2" text={id.toString()} color={"#767676"} />
        </CardContentStyled>
      </MuiCardActionArea>
    </MuiCard>
  );
}
