'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { AuthService } from "@/fetch/services/auth.service";

export interface SignInData {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export function useSignIn() {
    const t = useTranslations();
    const [error, setError] = useState<string | null>(null);

    const schema = z.object({
        email: z
            .string()
            .min(1, t("email_required"))
            .email(t("email_invalid")),
        password: z
            .string()
            .min(1, t("password_required"))
            .min(6, t("password_min_length")),
        rememberMe: z.boolean().optional(),
    });

    const form = useForm<SignInData>({
        resolver: zodResolver(schema),
        defaultValues: {
        },
    });

    const onSubmit = async (data: SignInData) => {
        try {
            setError(null);
            await AuthService.signIn({
                email: data.email,
                password: data.password,
            });
            window.location.href = '/'
        } catch (error: any) {
            setError(error.message);
        }
    };

    return {
        form,
        error,
        onSubmit,
        setError,
    };
}
