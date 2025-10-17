"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Layout, Menu, Button, Image } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import IconCollapsed from "@/components/icons/icon-collapsed";
import IconDashboard from "@/components/icons/icon-dashboard";
import IconOrder from "@/components/icons/icon-order";
import IconTicket from "@/components/icons/icon-ticket";
import IconSearch from "@/components/icons/icon-search";
import { ROUTER } from "@/consts/route.const";

const { Sider } = Layout;

export const AuthenticatedSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Remove locale from pathname to match menu keys
    const pathWithoutLocale = useMemo(() => {
        const segments = pathname.split('/').filter(Boolean);
        // Remove locale (first segment like 'en', 'vi', etc.)
        if (segments.length > 0 && segments[0].length === 2) {
            return '/' + segments.slice(1).join('/');
        }
        return pathname;
    }, [pathname]);

    // Get the selected key for the menu
    const selectedKey = useMemo(() => {
        if (pathWithoutLocale.startsWith(ROUTER.SEARCH_TICKETS)) {
            return ROUTER.SEARCH_TICKETS;
        }
        return pathWithoutLocale;
    }, [pathWithoutLocale]);

    // Helper function to check if current path matches menu item
    const isPathActive = useCallback((menuKey: string) => {
        if (menuKey === ROUTER.DASHBOARD || menuKey === ROUTER.ORDERS || menuKey === ROUTER.TICKETS) {
            return pathWithoutLocale === menuKey;
        }
        // For search-tickets, check if path starts with the menu key
        if (menuKey === ROUTER.SEARCH_TICKETS) {
            return pathWithoutLocale.startsWith(menuKey);
        }
        return pathWithoutLocale === menuKey;
    }, [pathWithoutLocale]);

    // Create menu items
    const menuItems = useMemo(() => [
        {
            key: ROUTER.DASHBOARD,
            label: "Dashboard",
            icon: <IconDashboard size={20} />,
        },
        {
            key: ROUTER.ORDERS,
            label: "Quản lý Đơn hàng",
            icon: <IconOrder size={20} />,
        },
        {
            key: ROUTER.TICKETS,
            label: "Danh sách vé",
            icon: <IconTicket size={20} />,
        },
        {
            key: ROUTER.SEARCH_TICKETS,
            label: "Tra cứu vé",
            icon: <IconSearch size={20} />,
        },
    ], []);

    // Handle navigation
    const handleLogoClick = useCallback(() => {
        router.push('/');
    }, [router]);

    const handleMenuClick = useCallback(({ key }: { key: string }) => {
        if (typeof key === "string" && key.startsWith("/")) {
            router.push(key);
        }
    }, [router]);

    const toggleCollapsed = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={240}
            collapsedWidth={80}
            style={{
                background: '#fff',
                borderRight: '1px solid #f0f0f0',
            }}
        >
            {/* Header with Logo and Collapse Button */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: collapsed ? 'center' : 'space-between',
                padding: '16px',
                borderBottom: '1px solid #f0f0f0',
            }}>
                {!collapsed && (
                    <Image
                        src="https://rxmedia.blob.core.windows.net/rxmedia/logo.svg"
                        alt="Sun World Logo"
                        width={132}
                        height={20}
                        style={{ cursor: 'pointer' }}
                        onClick={handleLogoClick}
                        preview={false}
                    />
                )}

                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={toggleCollapsed}
                    style={{
                        width: 32,
                        height: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
            </div>

            {/* Navigation Menu */}
            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                items={menuItems}
                onClick={handleMenuClick}
                style={{
                    border: 'none',
                    background: 'transparent',
                }}
            />
        </Sider>
    );
};

export default AuthenticatedSidebar;