import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Typography from "../Typography";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "color" | "fullWidth" | "sx"
>;

interface ButtonProps extends ButtonBaseProps {
  text: string;
  onClick: any;
}

function Button(props: ButtonProps) {
  const { text = "Load more", onClick } = props;

  return (
    <MuiButton variant="contained" onClick={onClick}>
      <Typography text={text} color={"#ffffff"} />
    </MuiButton>
  );
}

export default Button;
