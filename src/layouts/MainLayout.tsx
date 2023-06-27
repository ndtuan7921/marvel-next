import { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Stack } from "@mui/material";
import withAuth from "../hooks/withAuth";
const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
    >
      <Header />
      <Stack
        direction="column"
        alignItems={"stretch"}
        spacing={2}
        sx={{
          maxWidth: "80%",
          mb: "auto",
          mt: "3rem",
          margin: "3rem auto auto",
        }}
      >
        {children}
      </Stack>

      <Footer />
    </Stack>
  );
};
export default withAuth(MainLayout);
