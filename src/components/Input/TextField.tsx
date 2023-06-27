"use client";
import { styled, InputBase } from "@mui/material";

import { InputProps as MuiInputProps } from "@mui/material";

type InputBaseProps = Pick<MuiInputProps, "onChange" | "placeholder" | "value">;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#767676",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #d1d5dc",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    width: "100%",
  },
}));

interface TextFieldProps extends InputBaseProps {}

function TextField(props: TextFieldProps) {
  const { value = "", ...rest } = props;
  return <StyledInputBase value={value} {...rest} />;
}

export default TextField;
