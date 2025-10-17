export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <div className="w-full max-w-lg">
                {children}
            </div>
        </div>
    );
}