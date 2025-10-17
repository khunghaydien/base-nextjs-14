'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { login } from "@/lib/data/customer";
import { createSignInSchema } from "./sign-in.schema";
import { useRouter } from "next/navigation";

export interface SignInData {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export function useSignIn() {
    const t = useTranslations();
    const router = useRouter();
    
    // Local state management - following Medusa pattern
    const [error, setError] = useState<string | null>(null);

    const schema = createSignInSchema(t);

    const form = useForm<SignInData>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    const onSubmit = async (data: SignInData) => {
        setError(null);

        try {
            // Create FormData as required by Medusa login function
            const formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);

            // Use Medusa's login function directly
            const result = await login(formData);
            
            // If login returns an error string, show it
            if (result) {
                setError(result);
                return;
            }

            // Success - redirect to dashboard
            console.log('Sign in successful');
            router.push('/');
            
        } catch (error: any) {
            setError(error.message || 'Failed to sign in');
        }
    };

    // Helper functions
    const clearError = () => setError(null);
    const clearAll = () => setError(null);

    return {
        form,
        error,
        isLoading: form.formState.isSubmitting,
        onSubmit,
        clearError,
        clearAll,
    };
}