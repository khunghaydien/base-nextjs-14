import React from "react";
import { Paper, Typography } from "@mui/material";

interface WelcomeSectionProps {
  title: string;
  description: string;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  title,
  description,
}) => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

export default WelcomeSection;
