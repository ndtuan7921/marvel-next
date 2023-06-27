import MainLayout from "./MainLayout";
import NoLayout from "./NoLayout";
export const Layouts = {
  Main: MainLayout,
  NoLayout: NoLayout,
};
export type LayoutKeys = keyof typeof Layouts; // "Main" | "NoLayout"
