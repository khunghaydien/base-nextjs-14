"use client";
import AuthenticatedLayout from "@/components/shared/authenticated-layout";
import AuthGate from "@/features/auth/components/auth-gate/auth-gate";
import SignIn from "@/features/auth/components/sign-in";
export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGate requireAuth fallback={<SignIn />}>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </AuthGate>
  );
}
