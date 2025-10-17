import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/features/auth/auth.service";

// Types
export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpState {
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: SignUpState = {
  isLoading: false,
  error: null,
};

// Async thunk for sign up
export const signUp = createAsyncThunk(
  "signUp/signUp",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await AuthService.signUp(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to sign up");
    }
  },
);

// Slice
const signUpSlice = createSlice({
  name: "signUp",
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
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { clearError, clearAll } = signUpSlice.actions;

// Export reducer
export default signUpSlice.reducer;
