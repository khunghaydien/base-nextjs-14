import { UseFormReturn } from "react-hook-form";

// All supported input types
export type InputType =
  | "text"
  | "email"
  | "password"
  | "textarea"
  | "number"
  | "tel"
  | "date"
  | "datetime-local"
  | "select"
  | "multiselect"
  | "checkbox";

// Option for select/multiselect
export interface SelectOption {
  value: string | number;
  label: string;
}

export interface FormInputProps {
  name: string;
  type: InputType;
  label?: string;
  placeholder?: string;
  form: UseFormReturn<any>;
  required?: boolean;
  disabled?: boolean;
  className?: string;

  // For textarea
  rows?: number;
  multiline?: boolean;

  // For select/multiselect
  options?: SelectOption[];

  // For checkbox
  size?: "small" | "medium";
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "default";
  labelPlacement?: "end" | "start" | "top" | "bottom";
}
