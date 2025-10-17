import { z } from "zod";
import { createEmailSchema, createPasswordSchema } from '@/features/auth/auth.schemas';

export const createSignUpSchema = (t: (key: string) => string) =>
    z.object({
        email: createEmailSchema(t),
        password: createPasswordSchema(t),
        confirmPassword: z.string().min(1, t("confirm_password_required")),
        first_name: z.string().optional(),
        last_name: z.string().optional(),
        phone: z.string().optional(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: t("passwords_must_match"),
        path: ["confirmPassword"],
    });
