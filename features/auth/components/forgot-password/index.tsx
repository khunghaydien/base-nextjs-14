"use client";

import { useTranslations } from "next-intl";
import { Link, Button, Alert } from "@mui/material";
import { useForgotPassword } from "./use-forgot-password";
import FormInput from "@/components/ui/form-input";

export function ForgotPassword() {
  const t = useTranslations();
  const { form, error, success, onSubmit } = useForgotPassword();
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

      {/* Email Field */}
      <FormInput
        name="email"
        type="email"
        label={t("email")}
        placeholder={t("email")}
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
        {isSubmitting ? t("loading") : t("send_reset_email")}
      </Button>

      {/* Back to Sign In Link */}
      <div className="text-center mt-4">
        <Link
          href="/sign-in"
          className="cursor-pointer"
        >
          {t("back_to_sign_in")}
        </Link>
      </div>
    </form>
  );
}

export default ForgotPassword;