import { getComics } from "../../src/services";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ListCard } from "../../src/components/List";
// import Link from "next/link";
import { ComicCard } from "../../src/components/Card";
import Heading from "../../src/components/Heading";
import Link from "../../src/components/Link";
export const getServerSideProps: GetServerSideProps<{
  comics: [];
}> = async () => {
  const comics = await getComics();
  return {
    props: {
      comics,
    },
  };
};
function ComicsPage({
  comics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Heading variant={"h3"} text={"COMICS PAGE"} />
      <ListCard
        title={"Read Comics For Free"}
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

export default ComicsPage;
