// import Link from "next/link";
import { ListCard } from "../src/components/List";
import Typography from "../src/components/Typography";
import { getCharacters, getComics } from "../src/services";
import { CharacterCard, ComicCard } from "../src/components/Card";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "../src/components/Link";
import { Box } from "@mui/material";
import withAuth from "../src/hooks/withAuth";

export const getServerSideProps: GetServerSideProps<{
  comicsData: [];
  charactersData: [];
}> = async () => {
  const comics = getComics();
  const characters = getCharacters();
  const [comicsData, charactersData] = await Promise.all([comics, characters]);
  return {
    props: {
      comicsData,
      charactersData,
    },
  };
};

function Home({
  comicsData,
  charactersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <ListCard
          title={"Read Comics For Free"}
          data={comicsData}
          renderItem={(comic) => (
            <Link href={`/comics/${comic.id}`} key={comic.id}>
              <ComicCard {...comic} />
            </Link>
          )}
        />
        <Link href={"/comics"}>
          <Typography text={"See more Comics"} color={"red"} />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <ListCard
          title={"Marvel Characters List"}
          data={charactersData}
          renderItem={(character) => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CharacterCard {...character} />
            </Link>
          )}
        />
        <Link href={"/characters"}>
          <Typography text={"See more characters"} color={"red"} />
        </Link>
      </Box>
    </>
  );
}

export default Home;
