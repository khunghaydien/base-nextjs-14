"use client";

import { useUserProfile } from "./user-profile.hook";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useTranslations } from "next-intl";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, signOut } = useUserProfile();
  const t = useTranslations();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <CircularProgress size={20} sx={{ mr: 1 }} />
        <Typography>{t("loading")}</Typography>
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Typography
      onClick={signOut}
      sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
    >
      {user?.name}
    </Typography>
  );
}
