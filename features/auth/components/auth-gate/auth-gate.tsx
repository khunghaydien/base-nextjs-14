"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { retrieveCustomer } from "@/lib/data/customer";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { HttpTypes } from "@medusajs/types";

type AuthGateProps = {
  requireAuth: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export default function AuthGate({ requireAuth, fallback, children }: AuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<HttpTypes.StoreCustomer | null>(null);
  
  const router = useRouter();
  const t = useTranslations();

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const customer = await retrieveCustomer();
        if (customer) {
          setUser(customer);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

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
    router.push("/");
    return null;
  }

  return <>{children}</>;
}