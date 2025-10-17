import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface MetricCardProps {
  title: string;
  value: string | number;
  color?: "primary" | "secondary" | "success" | "warning" | "info" | "error";
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  color = "primary",
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color={`${color}.main`}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
