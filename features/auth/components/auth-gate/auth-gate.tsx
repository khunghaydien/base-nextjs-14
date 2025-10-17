"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type AuthGateProps = {
  children: React.ReactNode;
};

export default function AuthGate({ children }: AuthGateProps) {
  // Get state directly from Redux store
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const t = useTranslations();

  if (isLoading) {
    return (
      <Box className="flex flex-col items-center justify-center min-h-[200px] gap-2">
        <CircularProgress />
        <Typography className="text-secondary">{t("loading")}</Typography>
      </Box>
    );
  }

  if (!isAuthenticated) {
    router.push("/sign-in");
    return null;
  }
  return <>{children}</>;
}
