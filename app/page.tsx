"use client";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations();
  return <div>{t("dashboard")}</div>;
}
