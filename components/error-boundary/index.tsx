"use client";

import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="400px"
      p={4}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, textAlign: "center" }}>
        <Typography variant="h4" color="error" gutterBottom>
          Oops! Something went wrong
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          We&apos;re sorry, but something unexpected happened. Please try again.
        </Typography>

        {process.env.NODE_ENV === "development" && (
          <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
            <Typography
              variant="caption"
              component="pre"
              sx={{ fontSize: "0.75rem" }}
            >
              {error.message}
            </Typography>
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={resetErrorBoundary}
          sx={{ mt: 2 }}
        >
          Try Again
        </Button>
      </Paper>
    </Box>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export default function ErrorBoundary({
  children,
  fallback: Fallback = ErrorFallback,
  onError,
}: ErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === "production") {
      console.error("Error caught by boundary:", error, errorInfo);
      // TODO: Send to error monitoring service (Sentry, LogRocket, etc.)
    } else {
      console.error("Error caught by boundary:", error, errorInfo);
    }

    onError?.(error, errorInfo);
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={Fallback}
      onError={handleError}
      onReset={() => {
        // Clear any error state
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
