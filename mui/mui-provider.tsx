"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from 'next-themes'
import { lightTheme } from "./mui-theme/light-theme"
import { darkTheme } from "./mui-theme/dark-theme"
// Internal MUI Theme Provider Component
function MuiProviderWrapper({ children }: { children: React.ReactNode }) {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Return a theme provider with default theme to avoid hydration mismatch
        return (
            <MuiThemeProvider theme={lightTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        )
    }

    // Determine which theme to use
    const currentTheme = theme === 'system' ? systemTheme : theme
    const muiTheme = currentTheme === 'dark' ? darkTheme : lightTheme

    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}

// Main Theme Provider that combines Next Themes and MUI
export function MuiProvider({ children, ...props }: any) {
    return (
        <NextThemesProvider {...props}>
            <MuiProviderWrapper>
                {children}
            </MuiProviderWrapper>
        </NextThemesProvider>
    )
}