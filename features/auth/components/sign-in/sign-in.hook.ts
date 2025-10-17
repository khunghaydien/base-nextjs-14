"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { signIn, clearError, clearAll } from "./sign-in.slice";
import { getMe } from "@/features/auth/auth.slice";
import { createSignInSchema } from "./sign-in.schema";

export interface SignInData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export function useSignIn() {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  // Get state from Redux store
  const { isLoading, error } = useAppSelector((state) => state.signIn);

  const schema = createSignInSchema(t);

  const form = useForm<SignInData>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit = async (data: SignInData) => {
    // Clear previous messages
    dispatch(clearAll());

    // Dispatch the sign in thunk
    const result = await dispatch(
      signIn({
        email: data.email,
        password: data.password,
      }),
    );

    // If successful, redirect
    if (signIn.fulfilled.match(result)) {
      // Get user data after successful sign-in
      await dispatch(getMe());
      window.location.href = "/";
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
