import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/features/auth/auth.service";

// Types
export interface SignInData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignInState {
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: SignInState = {
  isLoading: false,
  error: null,
};

// Async thunk for sign in
export const signIn = createAsyncThunk(
  "signIn/signIn",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await AuthService.signIn(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to sign in");
    }
  },
);

// Slice
const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearAll: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { clearError, clearAll } = signInSlice.actions;

// Export reducer
export default signInSlice.reducer;
