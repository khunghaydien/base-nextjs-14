import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/features/auth/auth.service';

// Types
export type SocialProvider = "google" | "facebook";

export interface SocialSignInState {
  isLoading: { [key in SocialProvider]?: boolean };
  error: string | null;
  authUrl: string | null;
}

// Initial state
const initialState: SocialSignInState = {
  isLoading: {},
  error: null,
  authUrl: null,
};

// Async thunk for Google sign in
export const signInWithGoogle = createAsyncThunk(
  'socialSignIn/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.googleSignIn();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to get Google auth URL');
    }
  }
);

// Async thunk for Facebook sign in
export const signInWithFacebook = createAsyncThunk(
  'socialSignIn/signInWithFacebook',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.facebookSignIn();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to get Facebook auth URL');
    }
  }
);

// Slice
const socialSignInSlice = createSlice({
  name: 'socialSignIn',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearAuthUrl: (state) => {
      state.authUrl = null;
    },
    clearAll: (state) => {
      state.error = null;
      state.authUrl = null;
    },
    setLoading: (state, action: { payload: { provider: SocialProvider; loading: boolean } }) => {
      state.isLoading[action.payload.provider] = action.payload.loading;
    },
  },
  extraReducers: (builder) => {
    builder
      // Google sign in
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading.google = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.isLoading.google = false;
        state.authUrl = action.payload?.data?.authUrl || null;
        state.error = null;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isLoading.google = false;
        state.error = action.payload as string;
        state.authUrl = null;
      })
      // Facebook sign in
      .addCase(signInWithFacebook.pending, (state) => {
        state.isLoading.facebook = true;
        state.error = null;
      })
      .addCase(signInWithFacebook.fulfilled, (state, action) => {
        state.isLoading.facebook = false;
        state.authUrl = action.payload?.data?.authUrl || null;
        state.error = null;
      })
      .addCase(signInWithFacebook.rejected, (state, action) => {
        state.isLoading.facebook = false;
        state.error = action.payload as string;
        state.authUrl = null;
      });
  },
});

// Export actions
export const { clearError, clearAuthUrl, clearAll, setLoading } = socialSignInSlice.actions;

// Export reducer
export default socialSignInSlice.reducer;
