"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { AuthService } from "@/fetch/services/auth.service";

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export function useSignUp() {
  const t = useTranslations();
  const [error, setError] = useState<string | null>(null);

  const schema = z.object({
    email: z
      .string()
      .min(1, t("email_required"))
      .email(t("email_invalid")),
    password: z
      .string()
      .min(1, t("password_required"))
      .min(6, t("password_min_length")),
    confirmPassword: z
      .string()
      .min(1, t("confirm_password_required")),
  }).refine((data) => data.password === data.confirmPassword, {
    message: t("passwords_must_match"),
    path: ["confirmPassword"],
  });

  const form = useForm<SignUpData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignUpData) => {
    try {
      setError(null);
      await AuthService.signUp({
        email: data.email,
        password: data.password,
      });
      window.location.href = '/'
    } catch (error: any) {
      setError(error.message);
    }
  };

  return {
    form,
    error,
    onSubmit,
    setError,
  };
}
