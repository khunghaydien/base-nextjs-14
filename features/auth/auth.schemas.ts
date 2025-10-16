import { z } from "zod";

// Shared email schema
export const createEmailSchema = (t: (key: string) => string) =>
    z.string()
        .min(1, t("email_required"))
        .email(t("email_invalid"));

// Shared password schema
export const createPasswordSchema = (t: (key: string) => string) =>
    z.string()
        .min(1, t("password_required"))
        .min(6, t("password_min_length"));

// Shared confirm password validation
export const createConfirmPasswordValidation = (t: (key: string) => string, fieldName: string = "confirmPassword") =>
    z.object({
        [fieldName]: z.string().min(1, t("confirm_password_required")),
    }).refine((data) => {
        const password = fieldName === "confirmPassword" ? data.password : data.newPassword;
        return password === data[fieldName];
    }, {
        message: t("passwords_must_match"),
        path: [fieldName],
    });
