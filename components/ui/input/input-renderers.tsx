import React from 'react';
import {
    Input,
    Select,
    Checkbox,
    DatePicker,
    InputNumber,
    Typography
} from 'antd';
import { FormInputProps } from './types';

const { TextArea } = Input;
const { Option } = Select;
const { Text } = Typography;

// Shared Input renderer for all Input-based inputs
const createInput = (inputType: string, extraProps?: any) => 
    ({ props, register, error }: { props: FormInputProps; register: any; error?: string }) => (
        <Input
            type={inputType}
            placeholder={props.placeholder}
            disabled={props.disabled}
            status={error ? 'error' : ''}
            {...extraProps}
            {...register}
        />
    );

// Select input renderer
const SelectInput: React.FC<{ props: FormInputProps; register: any; error?: string }> = ({ props, register, error }) => (
    <Select
        placeholder={props.placeholder}
        disabled={props.disabled}
        status={error ? 'error' : ''}
        {...register}
    >
        {props.options?.map((option) => (
            <Option key={option.value} value={option.value}>
                {option.label}
            </Option>
        ))}
    </Select>
);

// Multi-select input renderer
const MultiSelectInput: React.FC<{ props: FormInputProps; register: any; error?: string }> = ({ props, register, error }) => (
    <Select
        mode="multiple"
        placeholder={props.placeholder}
        disabled={props.disabled}
        status={error ? 'error' : ''}
        {...register}
    >
        {props.options?.map((option) => (
            <Option key={option.value} value={option.value}>
                {option.label}
            </Option>
        ))}
    </Select>
);

// Checkbox input renderer
const CheckboxInput: React.FC<{ props: FormInputProps; register: any; error?: string }> = ({ props, register, error }) => (
    <div>
        <Checkbox
            disabled={props.disabled}
            {...register}
        >
            {props.label}
        </Checkbox>
        {error && (
            <Text type="danger" style={{ fontSize: '12px', marginTop: 4, display: 'block' }}>
                {error}
            </Text>
        )}
    </div>
);

// Textarea input renderer
const TextareaInput: React.FC<{ props: FormInputProps; register: any; error?: string }> = ({ props, register, error }) => (
    <TextArea
        placeholder={props.placeholder}
        disabled={props.disabled}
        rows={props.rows || 4}
        status={error ? 'error' : ''}
        {...register}
    />
);

// Number input renderer
const NumberInput: React.FC<{ props: FormInputProps; register: any; error?: string }> = ({ props, register, error }) => (
    <InputNumber
        placeholder={props.placeholder}
        disabled={props.disabled}
        status={error ? 'error' : ''}
        style={{ width: '100%' }}
        {...register}
    />
);

// Date input renderer
const DateInput: React.FC<{ props: FormInputProps; register: any; error?: string }> = ({ props, register, error }) => (
    <DatePicker
        placeholder={props.placeholder}
        disabled={props.disabled}
        status={error ? 'error' : ''}
        style={{ width: '100%' }}
        {...register}
    />
);

// Static input renderers object - no recreation on each render
export const inputRenderers = {
    text: createInput('text'),
    email: createInput('email'),
    password: createInput('password'),
    number: NumberInput,
    tel: createInput('tel'),
    date: DateInput,
    'datetime-local': DateInput,
    textarea: TextareaInput,
    select: SelectInput,
    multiselect: MultiSelectInput,
    checkbox: CheckboxInput,
} as const;