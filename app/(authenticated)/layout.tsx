"use client";
import AuthGate from "@/features/auth/components/auth-gate/auth-gate";
import UserProfile from "@/features/auth/components/user-profile";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGate>
      <UserProfile />
      {children}
    </AuthGate>
  );
}
