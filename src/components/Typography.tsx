"use client";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyBaseProps = Pick<MuiTypographyProps, "variant" | "color" | "sx">;

export interface TypographyProps extends TypographyBaseProps {
  text: string;
}

function Typography(props: TypographyProps) {
  const { text = "default text", variant, color = "#000000", sx } = props;

  return (
    <MuiTypography color={color} variant={variant} sx={{ ...sx }}>
      {text}
    </MuiTypography>
  );
}

export default Typography;
