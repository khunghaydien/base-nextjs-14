// Auth Components - Only Medusa supported features
export { default as SignIn } from './components/sign-in';
export { default as SignUp } from './components/sign-up/index';
export { default as UserProfile } from './components/user-profile/index';

// Auth Hooks - Only Medusa supported features
export { useSignIn } from './components/sign-in/sign-in.hook';
export { useSignUp } from './components/sign-up/sign-up.hook';
export { useUserProfile } from './components/user-profile/user-profile.hook';

// Auth Gate (replace HOCs)
export { default as AuthGate } from './components/auth-gate/auth-gate';

// Auth Types - Only Medusa supported features
export type { SignInData } from './components/sign-in/sign-in.hook';
export type { SignUpData } from './components/sign-up/sign-up.hook';