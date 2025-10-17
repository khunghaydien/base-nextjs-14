"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ConfigProvider } from 'antd'
import { useTheme } from 'next-themes'
import { darkTheme } from "./dark-theme"
import { lightTheme } from "./light-theme"

// Internal Ant Design Theme Provider Component
function AntdProviderWrapper({ children }: { children: React.ReactNode }) {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Return a theme provider with default theme to avoid hydration mismatch
        return (
            <ConfigProvider theme={lightTheme}>
                {children}
            </ConfigProvider>
        )
    }

    // Determine which theme to use
    const currentTheme = theme === 'system' ? systemTheme : theme
    const antdTheme = currentTheme === 'dark' ? darkTheme : lightTheme

    return (
        <ConfigProvider theme={antdTheme}>
            {children}
        </ConfigProvider>
    )
}

// Main Theme Provider that combines Next Themes and Ant Design
export function AntdProvider({ children, ...props }: any) {
    return (
        <NextThemesProvider {...props}>
            <AntdProviderWrapper>
                {children}
            </AntdProviderWrapper>
        </NextThemesProvider>
    )
}
