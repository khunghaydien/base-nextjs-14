"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { AuthService } from "@/fetch/services/auth.service";

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export function useChangePassword() {
  const t = useTranslations();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const schema = z.object({
    currentPassword: z
      .string()
      .min(1, t("current_password_required")),
    newPassword: z
      .string()
      .min(1, t("new_password_required"))
      .min(6, t("password_min_length")),
    confirmNewPassword: z
      .string()
      .min(1, t("confirm_new_password_required")),
  }).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: t("passwords_must_match"),
    path: ["confirmNewPassword"],
  });

  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ChangePasswordData) => {
    try {
      setError(null);

      await AuthService.changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      setSuccess(t("password_changed_success"));
      form.reset();
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
