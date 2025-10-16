"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { AuthService } from "@/fetch/services/auth.service";

export interface ForgotPasswordData {
  email: string;
}

export function useForgotPassword() {
  const t = useTranslations();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const schema = z.object({
    email: z
      .string()
      .min(1, t("email_required"))
      .email(t("email_invalid")),
  });

  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      setError(null);

      await AuthService.forgotPassword(data.email);
      setSuccess(t("reset_email_sent"));
    } catch (error: any) {
      setError(error.message);
    }
  };

  return {
    form,
    error,
    success,
    onSubmit,
    setError,
    setSuccess,
  };
}
