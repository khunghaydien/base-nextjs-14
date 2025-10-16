import { z } from "zod";
import { createEmailSchema } from '@/features/auth/auth.schemas';

export const createForgotPasswordSchema = (t: (key: string) => string) =>
    z.object({
        email: createEmailSchema(t),
    });
