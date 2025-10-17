"use client";
import { useMounted } from "@/hooks/use-mounted";
export default function DashboardPage() {
  const mounted = useMounted();

  if (!mounted) {
    console.log("DashboardPage not mounted");
    return null;
  }
  return <div>Dashboard</div>;
}
