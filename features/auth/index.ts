// Auth Components
export { default as SignIn } from './components/sign-in';
export { default as SignUp } from './components/sign-up/index';
export { default as ForgotPassword } from './components/forgot-password/index';
export { default as ChangePassword } from './components/change-password/index';

// Auth Hooks
export { useSignIn } from './components/sign-in/sign-in.hook';
export { useSignUp } from './components/sign-up/sign-up.hook';
export { useChangePassword } from './components/change-password/change-password.hook';
export { useForgotPassword } from './components/forgot-password/forgot-password.hook';
export { useUserProfile } from './components/user-profile/user-profile.hook';

// Auth Gate (replace HOCs)
export { default as AuthGate } from './components/auth-gate/auth-gate';

// Auth Types
export type { SignInData } from './components/sign-in/sign-in.hook';
export type { SignUpData } from './components/sign-up/sign-up.hook';
export type { ChangePasswordData } from './components/change-password/change-password.hook';
export type { ForgotPasswordData } from './components/forgot-password/forgot-password.hook';

