import React from "react";
import { Box, Typography } from "@mui/material";

interface FormInputWrapperProps {
  label?: string;
  required?: boolean;
  type: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormInputWrapper: React.FC<FormInputWrapperProps> = ({
  label,
  required,
  type,
  error,
  children,
  className,
}) => {
  const hasError = !!error;

  return (
    <Box
      sx={{ position: "relative", flex: 1, ...(className && { className }) }}
    >
      {/* Label */}
      {label && type !== "checkbox" && (
        <Typography
          variant="body2"
          component="label"
          sx={{
            display: "block",
            fontWeight: 500,
            mb: 1,
            color: "text.primary",
          }}
        >
          {label}
          {required && (
            <Typography component="span" sx={{ color: "error.main", ml: 0.5 }}>
              *
            </Typography>
          )}
        </Typography>
      )}

      {/* Input Component */}
      {children}

      {/* Error Message */}
      {hasError && (
        <Typography
          variant="caption"
          sx={{
            color: "error.main",
            position: "absolute",
            bottom: -20,
            left: 0,
            fontSize: "0.75rem",
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};
