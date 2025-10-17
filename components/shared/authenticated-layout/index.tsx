"use client"
import React from "react";
import { Layout } from "antd";
import { HttpTypes } from "@medusajs/types";
import { useBreadcrumbs } from "@/components/shared/breadcrumb/breadcrumb.hook";
import { AuthenticatedFooter } from "./footer";
import AuthenticatedHeader from "./header";
import AuthenticatedSidebar from "./sidebar";
import { Breadcrumbs } from "@/components/shared/breadcrumb";
import { useUserProfile } from "@/features/auth/components/user-profile/user-profile.hook";

const { Content } = Layout;

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
    const breadcrumbs = useBreadcrumbs();
    const { user } = useUserProfile();
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AuthenticatedSidebar />
            <Layout>
                {user && <AuthenticatedHeader user={user as HttpTypes.StoreCustomer} />}
                <Content style={{ padding: '24px' }}>
                    <Breadcrumbs items={breadcrumbs} />
                    {children}
                </Content>
                <AuthenticatedFooter />
            </Layout>
        </Layout>
    );
};

export default AuthenticatedLayout;