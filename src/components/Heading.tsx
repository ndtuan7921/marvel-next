"use client";

import Typography, { TypographyProps } from "./Typography";

interface HeadingProps extends TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}
function Heading(props: HeadingProps) {
  return <Typography {...props} />;
}

export default Heading;
