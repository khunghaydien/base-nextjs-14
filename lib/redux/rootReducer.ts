import { combineReducers } from "@reduxjs/toolkit";
import changePasswordReducer from "@/features/auth/components/change-password/change-password.slice";
import forgotPasswordReducer from "@/features/auth/components/forgot-password/forgot-password.slice";
import signInReducer from "@/features/auth/components/sign-in/sign-in.slice";
import signUpReducer from "@/features/auth/components/sign-up/sign-up.slice";
import socialSignInReducer from "@/features/auth/components/social-sign-in/social-sign-in.slice";
import authReducer from "@/features/auth/auth.slice";

// Root reducer
export const rootReducer = combineReducers({
  changePassword: changePasswordReducer,
  forgotPassword: forgotPasswordReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  socialSignIn: socialSignInReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
