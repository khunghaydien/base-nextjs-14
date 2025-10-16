"use client";

import { useTranslations } from "next-intl";
import { Link, Button, Alert } from "@mui/material";
import { useSignIn } from "./use-sign-in";
import FormInput from "@/components/ui/form-input";

export function SignIn() {
  const t = useTranslations();
  const { form, error, onSubmit } = useSignIn();
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

      {/* Remember Me and Forgot Password Row */}
      <div className="flex items-center justify-between">
        <FormInput
          name="rememberMe"
          type="checkbox"
          label={t("remember_me")}
          form={form}
        />
        <Link
          href="/forgot-password"
          className="cursor-pointer"
        >
          {t("forgot_password")}
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        className="mt-4"
      >
        {isSubmitting ? t("loading") : t("sign_in")}
      </Button>
    </form>
  );
}

export default SignIn;
