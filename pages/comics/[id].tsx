"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getComicsById } from "../../src/services";
import Typography from "../../src/components/Typography";
import { Box, Skeleton } from "@mui/material";
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      if (router.query.id) {
        setLoading(true);
        const data = await getComicsById(router.query.id as string);
        setComic(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      }
    };

    fetchData();
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
    <>
      {loading ? (
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
            <Skeleton sx={{ bgcolor: "#424242" }}>
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={"comic-thumbnail"}
                width={430}
                height={480}
              />
            </Skeleton>
            <Box>
              <Skeleton sx={{ bgcolor: "#424242" }}>
                <Heading variant={"h4"} text={title} color={"white"} />
              </Skeleton>
              <Skeleton sx={{ bgcolor: "#424242" }} />
              <Skeleton sx={{ bgcolor: "#424242" }} />
            </Box>
          </Box>
        </Box>
      ) : (
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
                <Typography
                  text={modified}
                  variant="subtitle1"
                  color={"white"}
                />
              </Box>
              <Typography text={description} color={"white"} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default ComicDetailPage;
