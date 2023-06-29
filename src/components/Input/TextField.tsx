import {
  styled,
  InputBase,
  Input,
  TextField as MuiTextField,
} from "@mui/material";

import { InputProps as MuiInputProps } from "@mui/material";

type InputBaseProps = Pick<MuiInputProps, "onChange" | "placeholder" | "value">;

interface TextFieldProps extends InputBaseProps {}

function TextField(props: TextFieldProps) {
  const { value = "", ...rest } = props;
  return <InputBase value={value} {...rest} />;
}

export default TextField;
