"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  signInWithGoogle,
  signInWithFacebook,
  clearError,
  clearAuthUrl,
  clearAll,
} from "./social-sign-in.slice";

export type SocialProvider = "google" | "facebook";

export function useSocialAuth() {
  const dispatch = useAppDispatch();

  // Get state from Redux store
  const { isLoading, error, authUrl } = useAppSelector(
    (state) => state.socialSignIn,
  );

  const handleSignInWithProvider = async (provider: SocialProvider) => {
    // Clear previous messages
    dispatch(clearAll());

    let result;
    if (provider === "google") {
      result = await dispatch(signInWithGoogle());
    } else if (provider === "facebook") {
      result = await dispatch(signInWithFacebook());
    }

    // If successful, redirect to auth URL
    if (
      result &&
      (signInWithGoogle.fulfilled.match(result) ||
        signInWithFacebook.fulfilled.match(result))
    ) {
      const authData = result.payload?.data as { authUrl: string };
      if (authData?.authUrl) {
        window.location.href = authData.authUrl;
      }
    }
  };

  const signInWithGoogleHandler = () => handleSignInWithProvider("google");
  const signInWithFacebookHandler = () => handleSignInWithProvider("facebook");

  // Helper functions to clear messages
  const handleClearError = () => dispatch(clearError());
  const handleClearAuthUrl = () => dispatch(clearAuthUrl());
  const handleClearAll = () => dispatch(clearAll());

  return {
    signInWithGoogle: signInWithGoogleHandler,
    signInWithFacebook: signInWithFacebookHandler,
    isLoading,
    error,
    authUrl,
    clearError: handleClearError,
    clearAuthUrl: handleClearAuthUrl,
    clearAll: handleClearAll,
  };
}
