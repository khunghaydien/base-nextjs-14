import React from 'react';
import { FormInputProps } from './types';
import { inputRenderers } from './input-renderers';
import { FormInputWrapper } from './input-wrapper';

const FormInput: React.FC<FormInputProps> = (props) => {
    const { name, form, type, label, required = false, className } = props;
    const { register, formState: { errors } } = form;
    const error = errors[name]?.message as string;

    // Get the static renderer for this input type
    const renderInput = inputRenderers[type];
    const inputElement = renderInput({ props, register: register(name), error });

    return (
        <FormInputWrapper
            label={label}
            required={required}
            type={type}
            error={error}
            className={className}
        >
            {inputElement}
        </FormInputWrapper>
    );
};

export default FormInput;
export type { InputType, SelectOption } from './types';