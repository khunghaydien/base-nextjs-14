"use client";

import { useState, useEffect } from "react";
import { AuthService } from "@/fetch/services/auth.service";

interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
}

interface UseAuthGateReturn {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signOut: () => Promise<void>;
}

export function useAuthGate(): UseAuthGateReturn {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            setIsLoading(true);
            const response = await AuthService.getMe();
            console.log(response.data);
            setUser({
                id: response.data.id,
                name: response.data.username,
                email: response.data.email,
                image: response.data.id,
            });
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Auth check failed:', error);
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = async () => {
        try {
            await AuthService.signOut();
        } catch (error) {
            console.error('Sign out failed:', error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            window.location.href = '/sign-in';
        }
    };

    return {
        user,
        isLoading,
        isAuthenticated,
        signOut,
    };
}