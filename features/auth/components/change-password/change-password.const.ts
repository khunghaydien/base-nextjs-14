import { FormFieldConfig } from '../../auth.types';
import { CURRENT_PASSWORD_FIELD, NEW_PASSWORD_FIELD, CONFIRM_NEW_PASSWORD_FIELD } from '../../auth.const';

export const CHANGE_PASSWORD_FIELDS: FormFieldConfig[] = [
    CURRENT_PASSWORD_FIELD,
    NEW_PASSWORD_FIELD,
    CONFIRM_NEW_PASSWORD_FIELD
];
