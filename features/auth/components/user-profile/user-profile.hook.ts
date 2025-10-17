"use client";

import { useState, useEffect } from "react";
import { signout } from "@/lib/data/customer";
import { retrieveCustomer } from "@/lib/data/customer";
import { HttpTypes } from "@medusajs/types";
import { useRouter } from "next/navigation";

export function useUserProfile() {
    const router = useRouter();
    const [user, setUser] = useState<HttpTypes.StoreCustomer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load user data on mount
    useEffect(() => {
        const loadUser = async () => {
            try {
                const customer = await retrieveCustomer();
                if (customer) {
                    setUser(customer);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Failed to load user:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadUser();
    }, []);

    const handleSignOut = async () => {
        try {
            await signout();
            setUser(null);
            setIsAuthenticated(false);
            router.push('/sign-in');
        } catch (error) {
            console.error('Failed to sign out:', error);
        }
    };

    return {
        user,
        isLoading,
        isAuthenticated,
        signOut: handleSignOut,
    };
}