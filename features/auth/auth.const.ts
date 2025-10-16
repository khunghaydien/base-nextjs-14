import { FormFieldConfig } from "./auth.types";

// Common form field configurations
export const EMAIL_FIELD: FormFieldConfig = {
    name: "email",
    type: "email",
    labelKey: "email",
    placeholderKey: "email",
    required: true
};

export const PASSWORD_FIELD: FormFieldConfig = {
    name: "password",
    type: "password",
    labelKey: "password",
    placeholderKey: "password",
    required: true
};

export const CONFIRM_PASSWORD_FIELD: FormFieldConfig = {
    name: "confirmPassword",
    type: "password",
    labelKey: "confirm_password",
    placeholderKey: "confirm_password",
    required: true
};

export const CURRENT_PASSWORD_FIELD: FormFieldConfig = {
    name: "currentPassword",
    type: "password",
    labelKey: "current_password",
    placeholderKey: "current_password",
    required: true
};

export const NEW_PASSWORD_FIELD: FormFieldConfig = {
    name: "newPassword",
    type: "password",
    labelKey: "new_password",
    placeholderKey: "new_password",
    required: true
};

export const CONFIRM_NEW_PASSWORD_FIELD: FormFieldConfig = {
    name: "confirmNewPassword",
    type: "password",
    labelKey: "confirm_new_password",
    placeholderKey: "confirm_new_password",
    required: true
};
