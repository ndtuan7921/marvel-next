import { useRouter } from "next/router";
import Image from "next/image";
import React, { FormEvent, useContext, useState } from "react";
import { UserContext } from "../src/context";
import { Button, TextField } from "../src/components/Input";
import Typography from "../src/components/Typography";
import { Box } from "@mui/material";
import HeaderLogo from "../src/assets/images/headerlogo.svg";
import NoLayout from "../src/layouts/NoLayout";

function LoginPage() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { email, password } = useContext(UserContext);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log(emailInput, "  ", passwordInput);
    if (emailInput === email && passwordInput === password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      router.push("/");
    } else {
      alert("try again");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        rowGap: "10px",
        margin: "3rem auto",
        flexDirection: "column",
        width: "400px",
        border: "1px solid #F2F2F2",
        padding: "2.5rem 2rem",
      }}
    >
      <Image src={HeaderLogo} alt={"header-logo"} />

      <Typography
        text={"Enter your email address"}
        color={"#E62429"}
        variant="body2"
        sx={{ margin: "1rem 0", textTransform: "uppercase" }}
      />

      <TextField
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        placeholder="Email"
      />
      <TextField
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Password"
      />
      <Button
        onClick={handleLogin}
        text={"continue"}
        sx={{ marginTop: "10px" }}
      />
    </Box>
  );
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <NoLayout>{page}</NoLayout>;
};
