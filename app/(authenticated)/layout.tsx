"use client";
import AuthGate from "@/features/auth/components/auth-gate/auth-gate";
import SignIn from "@/features/auth/components/sign-in";
import UserProfile from "@/features/auth/components/user-profile";

export default function AuthenticatedLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGate requireAuth fallback={<SignIn />}>
      <UserProfile /> 
      {children}
    </AuthGate>
  );
}
