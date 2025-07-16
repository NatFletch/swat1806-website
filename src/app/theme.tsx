"use client";

import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

type ThemeContextType = {
  paletteMode: PaletteMode;
  setPaletteMode: Dispatch<SetStateAction<PaletteMode>>;
  toggleTheme: () => void;
  getOppositeTheme: () => PaletteMode;
};

const ThemeContext = createContext<ThemeContextType>({
  paletteMode: "dark",
  setPaletteMode: () => {},
  toggleTheme: () => {},
  getOppositeTheme: () => "light",
});

// Custom hook that encapsulates all theme logic
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>("dark");

  const toggleTheme = useCallback(() => {
    setPaletteMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const getOppositeTheme = useCallback((): PaletteMode => {
    return paletteMode === "dark" ? "light" : "dark";
  }, [paletteMode]);

  const theme = createTheme({
    palette: {
      mode: paletteMode,
    },
  });

  const value = {
    paletteMode,
    setPaletteMode,
    toggleTheme,
    getOppositeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
