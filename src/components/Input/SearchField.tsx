"use client";
import { SearchOutlined } from "@mui/icons-material";
import { InputBase, Stack, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { querySearch } from "../../services";
// import { ListItem } from "../List";
import Button from "./Button";
import dynamic from "next/dynamic";
import ListItemSkeleton from "../Skeleton/ListItemSkeleton";
// import Link from "../Link";
const Link = dynamic(() => import("../Link"));
const ListItem = dynamic(() =>
  import("../List").then((module) => module.ListItem)
);

const Search = styled("div")(({ theme }) => ({
  borderBottom: "2px solid #151515",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#202020",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    textTransform: "uppercase",

    width: "100%",
    "&::placeholder": {
      color: "#767676",
      fontWeight: "semibold",
    },
  },
}));

interface SearchFieldProps {
  placeholder?: string;
}

const typeItems = [
  {
    id: "characters",
    label: "characters",
  },
  {
    id: "comics",
    label: "comics",
  },
];

function SearchField({ placeholder = "SEARCH ..." }: SearchFieldProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("characters");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      // 👇 Get input value
      setSearchTerm(ref.current!.value);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true);

        const data = await querySearch({ type, searchTerm });
        setResults(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      }

      // console.log("search\t", data);
    };

    fetchData();
  }, [searchTerm, type]);
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          fullWidth
          inputRef={ref}
          onKeyDown={handleKeyDown}
        />
        <Stack direction={"row"}>
          {typeItems.map((item) => {
            return (
              <Button
                text={item.label}
                onClick={() => setType(item.id)}
                key={item.id}
              />
            );
          })}
        </Stack>
      </Search>
      {loading &&
        Array.from({ length: 5 }, (_, index) => (
          <ListItemSkeleton key={index} />
        ))}
      {!loading &&
        results.length > 0 &&
        results.map((item: any) => {
          return (
            <Link href={`/${type}/${item.id}`} key={item.id}>
              <ListItem {...item} />
            </Link>
          );
        })}
    </>
  );
}

export default SearchField;
