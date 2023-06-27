import { Stack } from "@mui/material";
import React from "react";
import { SearchField } from "../src/components/Input";
import Heading from "../src/components/Heading";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Link from "../src/components/Link";
import withAuth from "../src/hooks/withAuth";

function SearchPage() {
  return (
    <>
      <Heading variant={"h3"} text={"SEARCH PAGE"} />
      <SearchField />
    </>
  );
}

export default SearchPage;
