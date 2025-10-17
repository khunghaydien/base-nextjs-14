import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/services/auth.service";

// Types
export interface ForgotPasswordData {
  email: string;
}

export interface ForgotPasswordState {
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

// Initial state
const initialState: ForgotPasswordState = {
  isLoading: false,
  error: null,
  success: null,
};

// Async thunk for forgot password
export const forgotPassword = createAsyncThunk(
  "forgotPassword/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await AuthService.forgotPassword(email);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to send reset email");
    }
  },
);

// Slice
const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = "Reset email sent successfully";
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.success = null;
      });
  },
});

// Export actions
export const { clearError, clearSuccess, clearMessages } =
  forgotPasswordSlice.actions;

// Export reducer
export default forgotPasswordSlice.reducer;
