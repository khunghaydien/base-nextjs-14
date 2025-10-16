"use client";

import { useAuthGate } from "../use-auth-gate";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function UserProfile() {
    const { user, isAuthenticated, isLoading, signOut } = useAuthGate();
    const t = useTranslations();

    if (isLoading) {
        return (
            <Box className="flex items-center justify-center p-4">
                <Typography>{t("loading")}</Typography>
            </Box>
        );
    }

    if (!isAuthenticated) {
        return null;
    }
    return (
        <Typography onClick={signOut} className="cursor-pointer">{user?.name}</Typography>
    );
}
