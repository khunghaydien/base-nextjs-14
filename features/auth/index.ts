// Auth Components
export { default as SignIn } from './components/sign-in';
export { default as SignUp } from './components/sign-up/index';
export { default as ForgotPassword } from './components/forgot-password/index';
export { default as ChangePassword } from './components/change-password/index';

// Auth Hooks
export { useSignIn } from './components/sign-in/use-sign-in';
export { useSignUp } from './components/sign-up/use-sign-up';
export { useChangePassword } from './components/change-password/use-change-password';
export { useForgotPassword } from './components/forgot-password/use-forgot-password';
export { useAuthGate } from './components/use-auth-gate';

// Auth Gate (replace HOCs)
export { default as AuthGate } from './components/auth-gate/auth-gate';

// Auth Types
export type { SignInData } from './components/sign-in/use-sign-in';
export type { SignUpData } from './components/sign-up/use-sign-up';
export type { ChangePasswordData } from './components/change-password/use-change-password';
export type { ForgotPasswordData } from './components/forgot-password/use-forgot-password';

