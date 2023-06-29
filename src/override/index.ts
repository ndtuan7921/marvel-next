import Muitypography from "./typography";
import MuiPagination from "./pagination";
import MuiButton from "./button";
import MuiLink from "./link";
import MuiInputBase from "./input";
import MuiCard from "./card";

const OverrideThem = Object.assign(
  Muitypography,
  MuiPagination,
  MuiButton,
  MuiLink,
  MuiInputBase,
  MuiCard
);

export default OverrideThem;
