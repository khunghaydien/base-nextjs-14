"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { signUp, clearError, clearAll } from "./sign-up.slice";
import { getMe } from "@/features/auth/auth.slice";
import { createSignUpSchema } from "./sign-up.schema";

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export function useSignUp() {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  
  // Get state from Redux store
  const { isLoading, error } = useAppSelector((state) => state.signUp);

  const schema = createSignUpSchema(t);

  const form = useForm<SignUpData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignUpData) => {
    // Clear previous messages
    dispatch(clearAll());
    
    // Dispatch the sign up thunk
    const result = await dispatch(signUp({
      email: data.email,
      password: data.password,
    }));

    // If successful, redirect
    if (signUp.fulfilled.match(result)) {
      // Get user data after successful sign-up
      await dispatch(getMe());
      window.location.href = '/';
    }
  };

  // Helper functions to clear messages
  const handleClearError = () => dispatch(clearError());
  const handleClearAll = () => dispatch(clearAll());

  return {
    form,
    error,
    isLoading,
    onSubmit,
    clearError: handleClearError,
    clearAll: handleClearAll,
  };
}
