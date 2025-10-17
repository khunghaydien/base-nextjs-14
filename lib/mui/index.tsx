"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "next-themes";
import { darkTheme } from "./theme/dark.them";
import { lightTheme } from "./theme/light.theme";
import NoSSR from "@/components/no-ssr";
// Internal MUI Theme Provider Component
function MuiProviderWrapper({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();

  // Determine which theme to use
  const currentTheme = theme === "system" ? systemTheme : theme;
  const muiTheme = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

// Main Theme Provider that combines Next Themes and MUI
export function MuiProvider({ children, ...props }: any) {
  return (
    <NextThemesProvider {...props} suppressHydrationWarning>
      <NoSSR
        fallback={
          <MuiThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
          </MuiThemeProvider>
        }
      >
        <MuiProviderWrapper>{children}</MuiProviderWrapper>
      </NoSSR>
    </NextThemesProvider>
  );
}
