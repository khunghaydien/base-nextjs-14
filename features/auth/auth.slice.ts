import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/features/auth/auth.service";
import { signIn } from "@/features/auth/components/sign-in/sign-in.slice";
import { signUp } from "@/features/auth/components/sign-up/sign-up.slice";

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

// Async thunk for getting current user
export const getMe = createAsyncThunk(
  "auth/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.getMe();
      return {
        id: response.data.id,
        name: response.data.username,
        email: response.data.email,
        image: response.data.id,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to get user info");
    }
  },
);

// Async thunk for sign out
export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.signOut();
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to sign out");
    }
  },
);

// Async thunk for refresh token
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.refreshToken();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to refresh token");
    }
  },
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get me
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      // Sign out
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Refresh token
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      // Listen to sign-in and sign-up success
      .addCase(signIn.fulfilled, (state) => {
        // Trigger getMe to fetch user data after successful sign-in
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        // Trigger getMe to fetch user data after successful sign-up
        state.isLoading = true;
      });
  },
});

// Export actions
export const { clearError, setUser, clearUser, setLoading } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
