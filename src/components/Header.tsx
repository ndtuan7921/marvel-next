"use client";
import React from "react";
import HeaderLogo from "../assets/images/headerlogo.svg";
import { Box } from "@mui/material";
// import Link from "next/link";
import Image from "next/image";
import { SearchOutlined } from "@mui/icons-material";
import Typography from "./Typography";
import Link from "./Link";

const NavItems = [
  {
    id: "home",
    url: "/",
    label: "Home",
  },
  {
    id: "characters",
    url: "/characters",
    label: "Characters",
  },
  {
    id: "comics",
    url: "/comics",
    label: "Comics",
  },

  {
    id: "search",
    url: "/search",
    label: "Search",
  },
];

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#151515",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "55px",
          borderBottom: "1px solid #393939",
          padding: "0px 20px",
        }}
      >
        {/* login section */}
        <Link
          href="/login"
          style={{
            padding: "0 15px",
            height: "100%",
            borderLeft: "1px solid #393939",
            borderRight: "1px solid #393939",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            text={"Sign in | Join"}
            color={"white"}
            sx={{ textTransform: "uppercase" }}
          />
        </Link>

        {/* logo */}
        <Link href="/">
          {/* <HeaderLogo /> */}
          <Image src={HeaderLogo} alt={"header-logo"} />
        </Link>

        {/* search */}
        <Link
          href="/search"
          style={{
            padding: "0 15px",
            color: "white",
            height: "100%",
            borderLeft: "1px solid #393939",
            borderRight: "1px solid #393939",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchOutlined />
        </Link>
      </Box>
      <Box>
        <nav>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "1rem",
            }}
          >
            {NavItems.map((item) => {
              return (
                <li
                  className="menu-nav-items"
                  key={item.id}
                  style={{ listStyleType: "none" }}
                >
                  <Link href={item.url}>
                    <Typography text={item.label} color={"white"} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Box>
    </Box>
  );
}

export default Header;
