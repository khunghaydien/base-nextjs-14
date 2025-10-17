"use client";

import { useTranslations } from "next-intl";
import { Box, Typography, Divider, Button, Link, Stack } from "@mui/material";
import { useSocialAuth } from "./social-sign-in.hook";
import { IconFacebook, IconGoogle } from "@/components/icons";

export function SocialSignIn() {
  const t = useTranslations();
  const { signInWithGoogle, signInWithFacebook, isLoading, error } =
    useSocialAuth();

  return (
    <Box>
      <Stack spacing={3}>
        {/* Divider */}
        <Box display="flex" alignItems="center" gap={2}>
          <Divider sx={{ flex: 1 }} />
          <Typography color="text.secondary" sx={{ px: 2 }}>
            {t("or")}
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Social buttons */}
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={signInWithGoogle}
            disabled={isLoading.google || isLoading.facebook}
            startIcon={<IconGoogle />}
            sx={{ justifyContent: "flex-start" }}
          >
            {isLoading.google ? t("loading") : t("google")}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={signInWithFacebook}
            disabled={isLoading.google || isLoading.facebook}
            startIcon={<IconFacebook />}
            sx={{ justifyContent: "flex-start" }}
          >
            {isLoading.facebook ? t("loading") : t("facebook")}
          </Button>
        </Box>

        {/* Terms and policies */}
        <Typography color="text.secondary" textAlign="center">
          {t("by_continuing")}{" "}
          <Link
            href="/terms-and-policies"
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            {t("terms_and_policies")}
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

export default SocialSignIn;
