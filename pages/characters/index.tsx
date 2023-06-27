import { getCharacters } from "../../src/services";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ListCard } from "../../src/components/List";
// import Link from "next/link";
import { CharacterCard, ComicCard } from "../../src/components/Card";
import Heading from "../../src/components/Heading";
import Link from "../../src/components/Link";
import withAuth from "../../src/hooks/withAuth";
export const getServerSideProps: GetServerSideProps<{
  characters: [];
}> = async () => {
  const characters = await getCharacters();
  return {
    props: {
      characters,
    },
  };
};
function CharactersPage({
  characters,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Heading variant={"h3"} text={"CHARACTERS PAGE"} />
      <ListCard
        title={"Marvel Characters List"}
        data={characters}
        renderItem={(character) => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard {...character} />
          </Link>
        )}
      />
    </>
  );
}

export default CharactersPage;
