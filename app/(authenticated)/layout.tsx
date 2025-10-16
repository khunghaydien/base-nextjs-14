"use client";
import AuthGate from "@/features/auth/components/auth-gate/auth-gate";
import SignIn from "@/features/auth/components/sign-in";
import UserProfile from "@/features/auth/components/user-profile";
import { useMounted } from "@/hooks/use-mounted";
export default function AuthenticatedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const mounted = useMounted();

  if (!mounted) {
    console.log("AuthenticatedLayout not mounted");
    return null;
  }
  return (
    <AuthGate requireAuth fallback={<SignIn />}>
      <UserProfile /> 
      {children}
    </AuthGate>
  );
}
