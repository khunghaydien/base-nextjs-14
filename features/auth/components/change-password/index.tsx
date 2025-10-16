"use client";

import { useTranslations } from "next-intl";
import { Button, Alert } from "@mui/material";
import { useChangePassword } from "./use-change-password";
import FormInput from "@/components/ui/form-input";

export function ChangePassword() {
  const t = useTranslations();
  const { form, error, success, onSubmit } = useChangePassword();
  const { formState: { isSubmitting } } = form;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Error Display */}
      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}

      {/* Success Display */}
      {success && (
        <Alert severity="success" className="mb-4">
          {success}
        </Alert>
      )}

      {/* Current Password Field */}
      <FormInput
        name="currentPassword"
        type="password"
        label={t("current_password")}
        placeholder={t("current_password")}
        form={form}
        required
      />

      {/* New Password Field */}
      <FormInput
        name="newPassword"
        type="password"
        label={t("new_password")}
        placeholder={t("new_password")}
        form={form}
        required
      />

      {/* Confirm New Password Field */}
      <FormInput
        name="confirmNewPassword"
        type="password"
        label={t("confirm_new_password")}
        placeholder={t("confirm_new_password")}
        form={form}
        required
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        className="mt-4"
      >
        {isSubmitting ? t("loading") : t("change_password")}
      </Button>
    </form>
  );
}

export default ChangePassword;