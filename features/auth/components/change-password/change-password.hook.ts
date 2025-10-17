"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  changePassword,
  clearError,
  clearSuccess,
  clearMessages,
} from "@/lib/redux/slices/change-password.slice";
import { createChangePasswordSchema } from "./change-password.schema";

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export function useChangePassword() {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  // Get state from Redux store
  const { isLoading, error, success } = useAppSelector(
    (state) => state.changePassword,
  );

  const schema = createChangePasswordSchema(t);

  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ChangePasswordData) => {
    // Clear previous messages
    dispatch(clearMessages());

    // Dispatch the change password thunk
    const result = await dispatch(
      changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
    );

    // If successful, reset form
    if (changePassword.fulfilled.match(result)) {
      form.reset();
    }
  };

  // Helper functions to clear messages
  const handleClearError = () => dispatch(clearError());
  const handleClearSuccess = () => dispatch(clearSuccess());
  const handleClearMessages = () => dispatch(clearMessages());

  return {
    form,
    error,
    success,
    isLoading,
    onSubmit,
    clearError: handleClearError,
    clearSuccess: handleClearSuccess,
    clearMessages: handleClearMessages,
  };
}
