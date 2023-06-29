import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../assets/images/footerlogo.svg";
import { Box } from "@mui/material";
import Typography from "./Typography";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#151515" }}>
      <Box
        className="Footer-top"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          margin: "0 auto",
          padding: "30px 0",
        }}
      >
        <Link href="/home" className="logo">
          <Image src={FooterLogo} alt={"footer-logo"} />
        </Link>
      </Box>
      <Box className="Footer-bottom">
        <nav>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <Box sx={{ display: "block", padding: "5px 10px" }}>
                <Typography
                  text={"Term of Use"}
                  variant="body2"
                  color={"#767676"}
                />
              </Box>
            </li>
            <li>
              <Box sx={{ display: "block", padding: "5px 10px" }}>
                <Typography
                  text={"Privacy Policy"}
                  variant="body2"
                  color={"#767676"}
                />
              </Box>
            </li>
            <li>
              <Box sx={{ display: "block", padding: "5px 10px" }}>
                <Typography
                  text={"Interested-Based Ads"}
                  variant="body2"
                  color={"#767676"}
                />
              </Box>
            </li>
            <li>
              <Box sx={{ display: "block", padding: "5px 10px" }}>
                <Typography
                  text={"License Agreement"}
                  variant="body2"
                  color={"#767676"}
                />
              </Box>
            </li>
            <li>
              <Box sx={{ display: "block", padding: "5px 10px" }}>
                <Typography
                  text={"2023 Marvel"}
                  variant="body2"
                  color={"#767676"}
                />
              </Box>
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  );
}

export default Footer;
