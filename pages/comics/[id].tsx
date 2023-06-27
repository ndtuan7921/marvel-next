"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getComicsById } from "../../src/services";
import Typography from "../../src/components/Typography";
import { Box } from "@mui/material";
import Heading from "../../src/components/Heading";

interface Comic {
  title: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  textObjects: any[];
}

function ComicDetailPage() {
  const [comic, setComic] = useState<Comic | null>(null);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (router.query.id)
        data = await getComicsById(router.query.id as string);
      setComic(data);
    };

    fetchData().catch(console.error);
  }, [router.query.id]);

  // console.log(comic);

  if (!comic) {
    return null; // Return loading or error state if desired
  }
  const { title, modified, thumbnail, textObjects } = comic;

  let description;
  if (textObjects.length > 0 && textObjects[0].hasOwnProperty("text")) {
    description = textObjects[0].text;
  }
  return (
    <Box sx={{ background: "#202020" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "2rem",
          justifyContent: "space-between",
          margin: "0 auto",
          maxWidth: "60%",
          position: "relative",
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            maxWidth: "650px",
          }}
        >
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={"comic-thumbnail"}
            width={430}
            height={480}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            rowGap: "1.875rem",
            color: "white",
          }}
        >
          <Heading variant={"h4"} text={title} color={"white"} />
          <Box>
            <Typography
              text={"Published"}
              variant="h6"
              sx={{ marginBottom: "5px" }}
              color={"white"}
            />
            <Typography text={modified} variant="subtitle1" color={"white"} />
          </Box>
          <Typography text={description} color={"white"} />
        </Box>
      </Box>
    </Box>
  );
}

export default ComicDetailPage;
