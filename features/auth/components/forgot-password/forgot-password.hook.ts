"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  forgotPassword,
  clearError,
  clearSuccess,
  clearMessages,
} from "@/lib/redux/slices/forgot-password.slice";
import { createForgotPasswordSchema } from "./forgot-password.schema";

export interface ForgotPasswordData {
  email: string;
}

export function useForgotPassword() {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  // Get state from Redux store
  const { isLoading, error, success } = useAppSelector(
    (state) => state.forgotPassword,
  );

  const schema = createForgotPasswordSchema(t);

  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    // Clear previous messages
    dispatch(clearMessages());

    // Dispatch the forgot password thunk
    const result = await dispatch(forgotPassword(data.email));

    // If successful, reset form
    if (forgotPassword.fulfilled.match(result)) {
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
