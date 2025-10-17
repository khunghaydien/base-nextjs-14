"use client";
import AuthGate from "@/features/auth/components/auth-gate/auth-gate";
import { useMounted } from "@/hooks/use-mounted";
export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mounted = useMounted();

  if (!mounted) {
    console.log("UnauthenticatedLayout not mounted");
    return null;
  }
  return <AuthGate requireAuth={false}>{children}</AuthGate>;
}
