"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuthGate } from "../use-auth-gate";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type AuthGateProps = {
  requireAuth: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export default function AuthGate({ requireAuth, fallback, children }: AuthGateProps) {
  const { isAuthenticated, isLoading } = useAuthGate();
  const router = useRouter();
  const t = useTranslations();

  if (isLoading) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="200px" gap={2}>
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


