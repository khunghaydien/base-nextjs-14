"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { signOut } from "@/features/auth/auth.slice";

export function useUserProfile() {
    const dispatch = useAppDispatch();
    
    // Get state directly from Redux store
    const { user, isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

    const handleSignOut = async () => {
        const result = await dispatch(signOut());
        
        // If successful, redirect to sign in
        if (signOut.fulfilled.match(result)) {
            window.location.href = '/sign-in';
        }
    };

    return {
        user,
        isLoading,
        isAuthenticated,
        signOut: handleSignOut,
    };
}
