import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/features/auth/auth.service';

// Types
export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ChangePasswordState {
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

// Initial state
const initialState: ChangePasswordState = {
  isLoading: false,
  error: null,
  success: null,
};

// Async thunk for changing password
export const changePassword = createAsyncThunk(
  'changePassword/changePassword',
  async (data: { currentPassword: string; newPassword: string }, { rejectWithValue }) => {
    try {
      const response = await AuthService.changePassword(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to change password');
    }
  }
);

// Slice
const changePasswordSlice = createSlice({
  name: 'changePassword',
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
      // Change password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = 'Password changed successfully';
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.success = null;
      });
  },
});

// Export actions
export const { clearError, clearSuccess, clearMessages } = changePasswordSlice.actions;

// Export reducer
export default changePasswordSlice.reducer;
