import { alpha, InputBase, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { SelectionDropdown } from "../../atoms/selectionDropdown";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0px 10px 10px 0px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    minWidth: "10rem",
  },
}));
export const SearchBar = () => (
  <SearchContainer>
    <SelectionDropdown />
    <Search sx={{ display: "flex" }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  </SearchContainer>
);
