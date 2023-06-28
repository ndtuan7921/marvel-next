"use client";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  styled,
} from "@mui/material";
import Image from "next/image";
import ImgExam from "../../assets/images/example.png";
import React from "react";
import Typography from "../Typography";

const TypoWrapper = styled(Box)(({ theme }) => ({
  margin: "1rem 0",
}));

const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  columnGap: "7rem",
}));

function ListItem(props: any) {
  const { id, title, name, thumbnail, description } = props;
  return (
    <>
      <ListItemButtonWrapper>
        <ListItemIcon>
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={"card-img"}
            height={250}
            width={200}
          />
        </ListItemIcon>
        <ListItemText sx={{ rowGap: "1rem" }}>
          <TypoWrapper>
            <Typography text={name ?? title} color={"#757575"} variant="h6" />
          </TypoWrapper>
          <TypoWrapper>
            <Typography text={name ?? title} color={"#151515"} variant="h4" />
          </TypoWrapper>
          <TypoWrapper>
            <Typography
              text={description}
              color={"#757575"}
              variant="subtitle1"
            />
          </TypoWrapper>
        </ListItemText>
      </ListItemButtonWrapper>
      <Divider />
    </>
  );
}

export default ListItem;
