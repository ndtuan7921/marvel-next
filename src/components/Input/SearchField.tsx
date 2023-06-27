"use client";
import { SearchOutlined } from "@mui/icons-material";
import { InputBase, styled } from "@mui/material";

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

function SearchField({ placeholder = "SEARCH ..." }: SearchFieldProps) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchOutlined />
      </SearchIconWrapper>
      <StyledInputBase placeholder={placeholder} fullWidth />
    </Search>
  );
}

export default SearchField;
