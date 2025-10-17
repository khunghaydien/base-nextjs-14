import { z } from "zod";
import { createPasswordSchema } from "../../auth.schemas";

export const createChangePasswordSchema = (t: (key: string) => string) =>
  z
    .object({
      currentPassword: createPasswordSchema(t),
      newPassword: createPasswordSchema(t),
      confirmNewPassword: z.string().min(1, t("confirm_new_password_required")),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: t("new_passwords_must_match"),
      path: ["confirmNewPassword"],
    });
