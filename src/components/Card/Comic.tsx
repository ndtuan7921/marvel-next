import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActionArea as MuiCardActionArea,
} from "@mui/material";
import Image from "next/image";

import Typography from "../Typography";
import { Comic } from "../../interfaces";

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
        <MuiCardContent>
          <Typography text={title} variant="body2" color={"#151515"} />
          <Typography
            text={creatorsText ?? ""}
            variant="caption"
            color={"#767676"}
          />
        </MuiCardContent>
      </MuiCardActionArea>
    </MuiCard>
  );
}
