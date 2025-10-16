"use client";
import AuthGate from "@/features/auth/components/auth-gate/auth-gate";

export default function UnauthenticatedLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGate requireAuth={false}>{children}</AuthGate>
  );
}