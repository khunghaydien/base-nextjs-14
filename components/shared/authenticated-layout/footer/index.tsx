import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import IconAddressFill from "@/components/icons/icon-address-fill";
import Image from "next/image";
import IconGlobal from "@/components/icons/icon-global";

const { Footer } = Layout;
const { Text, Title } = Typography;

export const AuthenticatedFooter = () => {
    const policyLinks = [
        "Chính sách thanh toán",
        "Chính sách giao nhận",
        "Điều khoản và điều kiện",
        "Kiểm hàng, đổi trả/hoàn tiền",
        "Bảo mật thông tin"
    ];

    const offices = [
        {
            title: "Văn phòng Sun World Hà Nội",
            address: "Tầng 2, toà nhà Ancora, 03 Lương Yên, Hai Bà Trưng, TP. Hà Nội, Việt Nam"
        },
        {
            title: "Văn phòng Sun World Đà Nẵng",
            address: "Tầng L1M Khách sạn Novotel Đà Nẵng, 36-38 Bạch Đằng, Thạch Thang, Hải Châu, Đà Nẵng"
        }
    ];

    return (
        <Footer style={{ 
            background: '#fff', 
            padding: '64px 24px 24px',
            borderTop: '1px solid #f0f0f0'
        }}>
            <Row gutter={[48, 24]}>
                {/* Company Info */}
                <Col xs={24} md={10}>
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Image
                            src="https://rxmedia.blob.core.windows.net/rxmedia/logo.svg"
                            alt="Sun World Logo"
                            width={260}
                            height={40}
                            priority
                        />

                        <Title level={5} style={{ margin: 0, fontWeight: 500 }}>
                            CÔNG TY TNHH TẬP ĐOÀN SUN WORLD
                        </Title>

                        <Text type="secondary" style={{ maxWidth: 430, display: 'block' }}>
                            Thông tin đăng ký doanh nghiệp: Giấy chứng nhận đăng ký doanh nghiệp mã số 0401805040 ngày 14/12/2016 (đăng ký lần đầu). Đăng ký các lần thay đổi theo từng thời điểm
                        </Text>

                        <Space wrap>
                            <Text type="secondary">
                                Hotline: <Text strong>1800 1000</Text>
                            </Text>
                            <Text type="secondary">
                                Email: <Text strong>booking@sunworld.vn</Text>
                            </Text>
                        </Space>
                    </Space>
                </Col>

                {/* Policy Links */}
                <Col xs={24} sm={12} md={7}>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <Title level={5} style={{ margin: 0, color: '#1890ff' }}>
                            Chính sách
                        </Title>
                        {policyLinks.map((link, index) => (
                            <Text 
                                key={index} 
                                type="secondary" 
                                style={{ 
                                    display: 'block',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                {link}
                            </Text>
                        ))}
                    </Space>
                </Col>

                {/* Office Locations */}
                <Col xs={24} sm={12} md={7}>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <Title level={5} style={{ margin: 0, color: '#1890ff' }}>
                            Địa chỉ
                        </Title>
                        {offices.map((office, index) => (
                            <div key={index}>
                                <Space align="start" style={{ marginBottom: 8 }}>
                                    <IconAddressFill fill="#1890ff" size={16} />
                                    <Text strong style={{ color: '#1890ff' }}>
                                        {office.title}
                                    </Text>
                                </Space>
                                <Text 
                                    type="secondary" 
                                    style={{ 
                                        display: 'block',
                                        marginLeft: 24,
                                        fontSize: '14px'
                                    }}
                                >
                                    {office.address}
                                </Text>
                            </div>
                        ))}
                    </Space>
                </Col>
            </Row>

            <Divider style={{ margin: '32px 0 24px' }} />

            {/* Footer Bottom */}
            <Row justify="space-between" align="middle">
                <Col>
                    <Text type="secondary">
                        © 2025 Sun World Copyright. All Rights Reserved.
                    </Text>
                </Col>
                <Col>
                    <Space>
                        <IconGlobal fill="#1890ff" size={16} />
                        <Text 
                            type="secondary" 
                            style={{ 
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Tiếng Việt
                        </Text>
                        <Text 
                            type="secondary" 
                            style={{ 
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            English
                        </Text>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
};