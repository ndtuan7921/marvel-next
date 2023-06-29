import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActionArea as MuiCardActionArea,
  styled,
} from "@mui/material";
import Image from "next/image";

import Heading from "../Heading";
import Typography from "../Typography";
import { Character } from "../../interfaces";

const CardContentStyled = styled(MuiCardContent)(({ theme }) => ({
  background: "#151515",
}));

type CharacterCardBaseProps = Pick<Character, "id" | "name" | "thumbnail">;

interface CharacterCardProps extends CharacterCardBaseProps {}

export default function CharacterCard(props: CharacterCardProps) {
  const { id, name, thumbnail } = props;

  return (
    <MuiCard>
      <MuiCardActionArea>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          // src={ImgExam}
          alt={"card-img"}
          width={230}
          height={280}
          style={{ objectFit: "fill" }}
        />
        <CardContentStyled>
          <Heading text={name} variant="h6" color={"#ffffff"} />
          <Typography variant="body2" text={id.toString()} color={"#767676"} />
        </CardContentStyled>
      </MuiCardActionArea>
    </MuiCard>
  );
}
