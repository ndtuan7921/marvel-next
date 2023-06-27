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

function ListItem() {
  return (
    <>
      <ListItemButtonWrapper>
        <ListItemIcon>
          <Image src={ImgExam} alt={"card-img"} height={250} />
        </ListItemIcon>
        <ListItemText sx={{ rowGap: "1rem" }}>
          <TypoWrapper>
            <Typography
              text={"Captain America"}
              color={"#757575"}
              variant="h6"
            />
          </TypoWrapper>
          <TypoWrapper>
            <Typography
              text={"Captain America"}
              color={"#151515"}
              variant="h4"
            />
          </TypoWrapper>
          <TypoWrapper>
            <Typography
              text={"Captain America"}
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
