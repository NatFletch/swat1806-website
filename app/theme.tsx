"use client";

import { createTheme, ThemeProvider } from "@mui/material";

type ClientThemeProvider = {
  children: React.ReactNode;
};

const darkTheme = createTheme({
  // Theme settings
  palette: {
    mode: "dark",
  },
});

const ClientThemeProvider = (props: ClientThemeProvider) => {
  return <ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider>;
};

export default ClientThemeProvider;
