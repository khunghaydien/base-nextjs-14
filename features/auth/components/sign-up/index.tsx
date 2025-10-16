"use client";

import { useTranslations } from "next-intl";
import { Button, Alert } from "@mui/material";
import { useSignUp } from "./use-sign-up";
import FormInput from "@/components/ui/form-input";

export function SignUp() {
  const t = useTranslations();
  const { form, error, onSubmit } = useSignUp();
  const { formState: { isSubmitting } } = form;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Error Display */}
      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}

      {/* Email Field */}
      <FormInput
        name="email"
        type="email"
        label={t("email")}
        placeholder={t("email")}
        form={form}
        required
      />

      {/* Password Field */}
      <FormInput
        name="password"
        type="password"
        label={t("password")}
        placeholder={t("password")}
        form={form}
        required
      />

      {/* Confirm Password Field */}
      <FormInput
        name="confirmPassword"
        type="password"
        label={t("confirm_password")}
        placeholder={t("confirm_password")}
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
        {isSubmitting ? t("loading") : t("create_account")}
      </Button>
    </form>
  );
}

export default SignUp;
