import React, { memo } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface MetricCardProps {
  title: string;
  value: string | number;
  color?: "primary" | "secondary" | "success" | "warning";
  icon?: React.ReactNode;
  trend?: {
    value: number;
    direction: "up" | "down";
  };
}

const MetricCard = memo<MetricCardProps>(
  ({ title, value, color = "primary", icon, trend }) => {
    const getColorValue = () => {
      switch (color) {
        case "secondary":
          return "secondary.main";
        case "success":
          return "success.main";
        case "warning":
          return "warning.main";
        default:
          return "primary.main";
      }
    };

    return (
      <Card
        elevation={2}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: 4,
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {title}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                color: getColorValue(),
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              {value}
            </Typography>

            {icon && (
              <Box
                sx={{
                  color: getColorValue(),
                  opacity: 0.8,
                }}
              >
                {icon}
              </Box>
            )}
          </Box>

          {trend && (
            <Box display="flex" alignItems="center" mt={1}>
              <Typography
                variant="body2"
                sx={{
                  color:
                    trend.direction === "up" ? "success.main" : "error.main",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {trend.direction === "up" ? "↗" : "↘"}
                {Math.abs(trend.value)}%
              </Typography>
              <Typography variant="body2" color="text.secondary" ml={1}>
                vs last month
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    );
  },
);

MetricCard.displayName = "MetricCard";

export default MetricCard;
