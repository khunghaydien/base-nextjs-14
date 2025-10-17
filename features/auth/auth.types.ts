// Shared form field configuration interface
export interface FormFieldConfig {
  name: string;
  type: string;
  labelKey: string;
  placeholderKey: string;
  required?: boolean;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

// Common auth form data interfaces
export interface BaseAuthData {
  email: string;
}

export interface PasswordAuthData extends BaseAuthData {
  password: string;
}

export interface ConfirmPasswordAuthData extends PasswordAuthData {
  confirmPassword: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
