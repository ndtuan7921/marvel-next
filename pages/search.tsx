import { Skeleton } from "@mui/material";
import { SearchField } from "../src/components/Input";
import Heading from "../src/components/Heading";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

function SearchPage() {
  return (
    <>
      {/* <Skeleton animation="wave" /> */}
      <Heading variant={"h3"} text={"SEARCH PAGE"} />
      <SearchField />
    </>
  );
}

export default SearchPage;
