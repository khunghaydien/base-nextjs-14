"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type AuthGateProps = {
  requireAuth: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export default function AuthGate({
  requireAuth,
  fallback,
  children,
}: AuthGateProps) {
  // Get state directly from Redux store
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const t = useTranslations();

  if (isLoading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="200px"
        gap={2}
      >
        <CircularProgress />
        <Typography color="textSecondary">{t("loading")}</Typography>
      </Box>
    );
  }

  if (requireAuth) {
    if (!isAuthenticated) {
      return fallback ?? null;
    }
    return <>{children}</>;
  }

  // Guest-only: if user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    router.push("/dashboard");
    return null;
  }

  return <>{children}</>;
}
