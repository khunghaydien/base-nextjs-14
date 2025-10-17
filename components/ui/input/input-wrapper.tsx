import React from 'react';
import { Form, Typography } from 'antd';

const { Item } = Form;
const { Text } = Typography;

interface FormInputWrapperProps {
    label?: string;
    required?: boolean;
    type: string;
    error?: string;
    children: React.ReactNode;
    className?: string;
}

export const FormInputWrapper: React.FC<FormInputWrapperProps> = ({
    label,
    required,
    type,
    error,
    children,
    className
}) => {
    const hasError = !!error;

    // For checkbox inputs, don't wrap in Form.Item
    if (type === 'checkbox') {
        return (
            <div className={className}>
                {children}
                {hasError && (
                    <Text type="danger" style={{ fontSize: '12px', marginTop: 4, display: 'block' }}>
                        {error}
                    </Text>
                )}
            </div>
        );
    }

    return (
        <Item
            label={label}
            required={required}
            validateStatus={hasError ? 'error' : ''}
            help={error}
            className={className}
        >
            {children}
        </Item>
    );
};