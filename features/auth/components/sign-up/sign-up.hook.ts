'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { signup } from "@/lib/data/customer";
import { createSignUpSchema } from "./sign-up.schema";
import { useRouter } from "next/navigation";

export interface SignUpData {
    email: string;
    password: string;
    confirmPassword: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
}

export function useSignUp() {
    const t = useTranslations();
    const router = useRouter();
    
    // Local state management - following Medusa pattern
    const [error, setError] = useState<string | null>(null);

    const schema = createSignUpSchema(t);

    const form = useForm<SignUpData>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    const onSubmit = async (data: SignUpData) => {
        setError(null);

        try {
            // Create FormData as required by Medusa signup function
            const formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("first_name", data.first_name || "");
            formData.append("last_name", data.last_name || "");
            formData.append("phone", data.phone || "");

            // Use Medusa's signup function directly
            const result = await signup(formData);
            
            // If signup returns an error string, show it
            if (result) {
                setError(result);
                return;
            }

            // Success - redirect to dashboard
            console.log('Sign up successful');
            router.push('/');
            
        } catch (error: any) {
            setError(error.message || 'Failed to sign up');
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