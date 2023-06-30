import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCharactersById, getComicsByCharacterId } from "../../src/services";
import { Box, Skeleton } from "@mui/material";
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
  const [loading, setLoading] = useState(false);
  const [isListCardLoading, setListCardLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (router.query.id) {
          const characterDetailData: CharacterDetailData = {
            character: await getCharactersById(router.query.id as string),
            comics: await getComicsByCharacterId(router.query.id as string),
          };
          setCharacterDetail(characterDetailData);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching character data", error);
      }
    };

    fetchData();
  }, [router.query.id]);

  useEffect(() => {
    setListCardLoading(loading);
  }, [loading]);

  const { character, comics } = characterDetail;

  if (!character) {
    return null; // Return loading or error state if desired
  }

  const { name, description, thumbnail } = character;

  return (
    <>
      <div style={{ display: "none" }} data-cy="character-id">
        {router.query.id}
      </div>
      <Box sx={{ background: "#202020", width: "100%" }}>
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
            {loading ? (
              <Skeleton sx={{ bgcolor: "#424242" }}>
                <Image
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={"character-thumbnail"}
                  width={430}
                  height={500}
                />
              </Skeleton>
            ) : (
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt="character-thumbnail"
                width={430}
                height={500}
              />
            )}
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
            {loading ? (
              <Skeleton sx={{ bgcolor: "#424242" }}>
                <Heading variant="h4" text={name} color="white" />
                <Typography text={description} color="white" />
              </Skeleton>
            ) : (
              <>
                <Heading variant="h4" text={name} color="white" />
                <Typography text={description} color="white" />
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {comics.length > 0 && (
          <ListCard
            title={`More ${name}`}
            data={comics}
            loading={isListCardLoading}
            renderItem={(comic) => (
              <Link
                href={`/comics/${comic.id}`}
                className="comic-link"
                key={comic.id}
              >
                <ComicCard {...comic} />
              </Link>
            )}
          />
        )}
      </Box>
    </>
  );
}

export default CharacterDetailPage;
