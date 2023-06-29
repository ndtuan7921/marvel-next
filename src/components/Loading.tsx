import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Typography from "./Typography";

export default function Loading() {
  return (
    <Box
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <CircularProgress color={"error"} />
        <Typography text={"Loading..."} />
      </Stack>
    </Box>
  );
}
