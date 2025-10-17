import { FormFieldConfig } from "./auth.types";

// Common form field configurations
export const EMAIL_FIELD: FormFieldConfig = {
    name: "email",
    type: "email",
    labelKey: "Email",
    placeholderKey: "Email",
    required: true
};

export const PASSWORD_FIELD: FormFieldConfig = {
    name: "password",
    type: "password",
    labelKey: "Password",
    placeholderKey: "Password",
    required: true
};

export const CONFIRM_PASSWORD_FIELD: FormFieldConfig = {
    name: "confirmPassword",
    type: "password",
    labelKey: "Confirm Password",
    placeholderKey: "Confirm Password",
    required: true
};

export const CURRENT_PASSWORD_FIELD: FormFieldConfig = {
    name: "currentPassword",
    type: "password",
    labelKey: "Current Password",
    placeholderKey: "Current Password",
    required: true
};

export const NEW_PASSWORD_FIELD: FormFieldConfig = {
    name: "newPassword",
    type: "password",
    labelKey: "New Password",
    placeholderKey: "New Password",
    required: true
};

export const CONFIRM_NEW_PASSWORD_FIELD: FormFieldConfig = {
    name: "confirmNewPassword",
    type: "password",
    labelKey: "Confirm New Password",
    placeholderKey: "Confirm New Password",
    required: true
};

// Medusa signup fields
export const FIRST_NAME_FIELD: FormFieldConfig = {
    name: "first_name",
    type: "text",
    labelKey: "First Name",
    placeholderKey: "First Name",
    required: true
};

export const LAST_NAME_FIELD: FormFieldConfig = {
    name: "last_name",
    type: "text",
    labelKey: "Last Name",
    placeholderKey: "Last Name",
    required: true
};

export const PHONE_FIELD: FormFieldConfig = {
    name: "phone",
    type: "tel",
    labelKey: "Phone",
    placeholderKey: "Phone",
    required: true
};
