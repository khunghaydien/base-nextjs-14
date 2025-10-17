import { Container, Typography, Grid } from "@mui/material";
import MetricCard from "@/components/ui/metric-card";
import WelcomeSection from "@/components/ui/welcome-section";

const METRICS = [
  { title: "Total Users", value: "1,234", color: "primary" as const },
  { title: "Active Sessions", value: "567", color: "secondary" as const },
  { title: "Revenue", value: "$12,345", color: "success" as const },
  { title: "Orders", value: "89", color: "warning" as const },
];

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {METRICS.map((metric, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              color={metric.color}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <WelcomeSection
            title="Welcome to your Dashboard"
            description="This is a sample dashboard built with Material-UI components. You can customize this layout according to your application needs."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
