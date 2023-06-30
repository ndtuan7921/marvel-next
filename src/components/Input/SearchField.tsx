import { SearchOutlined } from "@mui/icons-material";
import { Box, InputBase, Stack, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { querySearch } from "../../services";
import Button from "./Button";
import dynamic from "next/dynamic";
import ListItemSkeleton from "../Skeleton/ListItemSkeleton";
const Link = dynamic(() => import("../Link"));
const ListItem = dynamic(() =>
  import("../List").then((module) => module.ListItem)
);

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
  color: "#000000",
  "&.Mui-focused": {
    outline: "2px solid #C6A972",
    outlineOffset: "1px",
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    border: "none",
    borderRadius: "0",
    borderBottom: "2px solid #151515",

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    textTransform: "uppercase",

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
    e.key === "Enter" && setSearchTerm(ref.current!.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true);

        const data = await querySearch({ type, searchTerm });
        setResults(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, type]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>
        <Stack direction={"column"} spacing={2}>
          <StyledInputBase
            placeholder={placeholder}
            inputRef={ref}
            onKeyDown={handleKeyDown}
            data-cy="search-field"
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
        </Stack>
      </Box>

      {/* show search results */}
      <Box sx={{ width: "100%" }}>
        {loading &&
          Array.from({ length: 5 }, (_, index) => (
            <ListItemSkeleton key={index} />
          ))}
        <Stack direction={"column"}>
          {!loading &&
            results.length > 0 &&
            results.map((item: any) => {
              return (
                <Link
                  href={`/${type}/${item.id}`}
                  key={item.id}
                  className="link-result"
                >
                  <ListItem {...item} />
                </Link>
              );
            })}
        </Stack>
      </Box>
    </>
  );
}

export default SearchField;
