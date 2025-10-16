import { FormFieldConfig } from '@/features/auth/auth.types';
import { EMAIL_FIELD, PASSWORD_FIELD, CONFIRM_PASSWORD_FIELD } from '@/features/auth/auth.const';

export const SIGN_UP_FIELDS: FormFieldConfig[] = [
    EMAIL_FIELD,
    PASSWORD_FIELD,
    CONFIRM_PASSWORD_FIELD
];
