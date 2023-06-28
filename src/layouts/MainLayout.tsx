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
          width: "80%",
          margin: "auto",
          mt: "2rem",
        }}
      >
        {children}
      </Stack>

      <Footer />
    </Stack>
  );
};
export default withAuth(MainLayout);
