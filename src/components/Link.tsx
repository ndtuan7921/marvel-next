import React from "react";
import NextLink from "next/link";
import { LinkProps as MuiLinkProps, Link as MuiLink } from "@mui/material";

type LinkBaseProps = Pick<
  MuiLinkProps,
  "underline" | "sx" | "children" | "TypographyClasses"
>;
export interface LinkProps extends LinkBaseProps {
  href: string;
  style?: {};
}
function Link({ href, style, children }: LinkProps) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <MuiLink style={style}>{children}</MuiLink>
    </NextLink>
  );
}

export default Link;
