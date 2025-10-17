"use client";

import { useTranslations } from "next-intl";
import { useSignIn } from "./sign-in.hook";
import Form from "@/components/ui/form";
import FormInput from "@/components/ui/input";
import { SIGN_IN_FIELDS } from "./sign-in.const";
import { AuthLayout } from "../layout";

export function SignIn() {
    const t = useTranslations();
    const { form, error, onSubmit } = useSignIn();
    const { formState: { isSubmitting } } = form;
    return (
        <AuthLayout>
            <Form error={error} onSubmit={form.handleSubmit(onSubmit)}>
                <Form.Error />

                <Form.Fields
                    form={form}
                    fields={SIGN_IN_FIELDS}
                    translations={t}
                />

                {/* Remember Me */}
                <Form.Content>
                    <FormInput
                        name="rememberMe"
                        type="checkbox"
                        label={t("remember_me")}
                        form={form}
                    />
                </Form.Content>

                <Form.Submit
                    isLoading={isSubmitting}
                    loadingText={t("loading")}
                    submitText={t("sign_in")}
                />
            </Form>
        </AuthLayout>
    );
}

export default SignIn;
