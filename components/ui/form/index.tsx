import React, { createContext, useContext } from 'react';
import { Form as AntForm, Alert, Button, Space } from 'antd';
import FormInput from '@/components/ui/input';

// Context for form state
interface FormContextType {
    error?: string | null;
    success?: string | null;
    onSubmit: (e: React.FormEvent) => void;
}

const FormContext = createContext<FormContextType | null>(null);

// Hook to use Form context
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within Form');
    }
    return context;
};

// Main Form component
interface FormProps {
    children: React.ReactNode;
    error?: string | null;
    success?: string | null;
    onSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> & {
    Error: typeof FormError;
    Success: typeof FormSuccess;
    Fields: typeof FormFields;
    Submit: typeof FormSubmit;
    Content: typeof FormContent;
} = ({ children, error, success, onSubmit }) => {
    const contextValue: FormContextType = {
        error,
        success,
        onSubmit
    };

    return (
        <FormContext.Provider value={contextValue}>
            <AntForm
                layout="vertical"
                onFinish={(values) => {
                    const event = new Event('submit') as any;
                    event.preventDefault = () => {};
                    onSubmit(event);
                }}
            >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {children}
                </Space>
            </AntForm>
        </FormContext.Provider>
    );
};

// Error sub-component
const FormError: React.FC = () => {
    const { error } = useFormContext();

    if (!error) return null;

    return (
        <Alert
            message={error}
            type="error"
            showIcon
        />
    );
};

// Success sub-component
const FormSuccess: React.FC = () => {
    const { success } = useFormContext();

    if (!success) return null;

    return (
        <Alert
            message={success}
            type="success"
            showIcon
        />
    );
};

// Fields sub-component
const FormFields: React.FC<{
    form: any;
    fields: Array<{
        name: string;
        type: string;
        labelKey: string;
        placeholderKey: string;
        required?: boolean;
    }>;
    translations: (key: string) => string;
}> = ({ form, fields, translations }) => {
    return (
        <>
            {fields.map((field) => (
                <FormInput
                    key={field.name}
                    name={field.name}
                    type={field.type as any}
                    label={translations(field.labelKey)}
                    placeholder={translations(field.placeholderKey)}
                    form={form}
                    required={field.required}
                />
            ))}
        </>
    );
};

// Submit button sub-component
const FormSubmit: React.FC<{
    isLoading: boolean;
    loadingText: string;
    submitText: string;
    disabled?: boolean;
}> = ({ isLoading, loadingText, submitText, disabled = false }) => {
    return (
        <Button
            type="primary"
            htmlType="submit"
            block
            loading={isLoading}
            disabled={disabled}
            style={{ marginTop: 16 }}
        >
            {isLoading ? loadingText : submitText}
        </Button>
    );
};

// Content wrapper sub-component
const FormContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};

// Attach sub-components to main component
Form.Error = FormError;
Form.Success = FormSuccess;
Form.Fields = FormFields;
Form.Submit = FormSubmit;
Form.Content = FormContent;

export default Form;