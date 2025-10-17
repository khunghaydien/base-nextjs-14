import { combineReducers } from "@reduxjs/toolkit";
import changePasswordReducer from "@/lib/redux/slices/change-password.slice";
import forgotPasswordReducer from "@/lib/redux/slices/forgot-password.slice";
import signInReducer from "@/lib/redux/slices/sign-in.slice";
import signUpReducer from "@/lib/redux/slices/sign-up.slice";
import socialSignInReducer from "@/lib/redux/slices/social-sign-in.slice";
import authReducer from "@/lib/redux/slices/auth.slice";

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
