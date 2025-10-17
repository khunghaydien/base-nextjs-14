"use client"
import React, { useState } from "react";
import { Layout, Avatar, Dropdown, Menu, Typography, Space, Button } from "antd";
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";
import IconDown from "@/components/icons/icon-down";

const { Header } = Layout;
const { Text } = Typography;

export const AuthenticatedHeader = ({ user }: { user: HttpTypes.StoreCustomer }) => {
    const pathname = usePathname();
    const isSearchTicket = pathname.includes("/search-tickets");

    const handleMenuClick = ({ key }: { key: string }) => {
        switch (key) {
            case 'profile':
                console.log('Profile clicked');
                break;
            case 'settings':
                console.log('Settings clicked');
                break;
            case 'logout':
                console.log('Logout clicked');
                break;
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
                Sign Out
            </Menu.Item>
        </Menu>
    );

    return (
        <Header style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '0 24px',
            background: '#fff',
            borderBottom: '1px solid #f0f0f0'
        }}>
            {/* Left side - Logo/Brand */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    src="https://rxmedia.blob.core.windows.net/rxmedia/logo.svg"
                    alt="Sun World"
                    width={120}
                    height={32}
                    priority
                />
            </div>

            {/* Right side - User Profile */}
            {user ? (
                <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                    <Button type="text" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Space>
                            <Avatar
                                src="https://rxmedia.blob.core.windows.net/rxmedia/Avatar.svg"
                                alt="User Avatar"
                                size={40}
                            />
                            <div style={{ textAlign: 'left' }}>
                                <div>
                                    <Text strong style={{ color: '#1890ff' }}>
                                        {user.first_name} {user.last_name}
                                    </Text>
                                </div>
                                <div>
                                    <Text type="secondary" style={{ fontSize: '12px' }}>
                                        {user.email}
                                    </Text>
                                </div>
                                {user.phone && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        <Image 
                                            src="/icon-coin.svg" 
                                            alt="phone" 
                                            width={12} 
                                            height={12} 
                                        />
                                        <Text type="secondary" style={{ fontSize: '11px', color: '#fa8c16' }}>
                                            {user.phone}
                                        </Text>
                                    </div>
                                )}
                            </div>
                            <IconDown size={12} />
                        </Space>
                    </Button>
                </Dropdown>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Text type="secondary">Guest</Text>
                </div>
            )}
        </Header>
    );
};

export default AuthenticatedHeader;