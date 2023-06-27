import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCharactersById, getComicsByCharacterId } from "../../src/services";
import { Box } from "@mui/material";
import Image from "next/image";
import Typography from "../../src/components/Typography";
import Heading from "../../src/components/Heading";
import { ListCard } from "../../src/components/List";
import { ComicCard } from "../../src/components/Card";
import Link from "../../src/components/Link";
// import Link from "next/link";

interface Character {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterDetailData {
  character: Character | null;
  comics: any[];
}

function CharacterDetailPage() {
  const [characterDetail, setCharacterDetail] = useState<CharacterDetailData>({
    character: null,
    comics: [],
  });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (router.query.id) {
          const characterDetailData: CharacterDetailData = {
            character: await getCharactersById(router.query.id as string),
            comics: await getComicsByCharacterId(router.query.id as string),
          };
          setCharacterDetail(characterDetailData);
        }
      } catch (error) {
        console.error("Error fetching character data", error);
      }
    };

    fetchData();
  }, [router.query.id]);

  const { character, comics } = characterDetail;

  if (!character) {
    return null; // Return loading or error state if desired
  }

  const { name, description, thumbnail } = character;

  return (
    <>
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
              alt="character-thumbnail"
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
            <Heading variant="h4" text={name} color="white" />
            <Typography text={description} color="white" />
          </Box>
        </Box>
      </Box>
      <ListCard
        title="Read Comics For Free"
        data={comics}
        renderItem={(comic) => (
          <Link href={`/comics/${comic.id}`} key={comic.id}>
            <ComicCard {...comic} />
          </Link>
        )}
      />
    </>
  );
}

export default CharacterDetailPage;
