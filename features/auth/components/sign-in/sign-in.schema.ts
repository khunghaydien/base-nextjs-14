import { z } from "zod";
import {
  createEmailSchema,
  createPasswordSchema,
} from "@/features/auth/auth.schemas";

export const createSignInSchema = (t: (key: string) => string) =>
  z.object({
    email: createEmailSchema(t),
    password: createPasswordSchema(t),
    rememberMe: z.boolean().optional(),
  });
