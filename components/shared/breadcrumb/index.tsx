"use client"
import { cn } from "@/lib/utils"
import LocalizedClientLink from "@/components/shared/breadcrumb/localized-link"
import IconRight from "@/components/icons/icon-right";
interface BreadcrumbsProps {
    items: { label: string; path: string }[]
    className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav className={cn("flex mb-3", className)} aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2">
                {items.map(({ path, label }, index) => {
                    return (
                        <li key={path} className="inline-flex items-center">
                            {index > 0 && <IconRight size={16} />}
                            <LocalizedClientLink
                                href={path}
                                className={cn(
                                    "inline-flex items-center label-md hover:text-primary text-black font-medium text-[12px]",
                                    index > 0 && "ml-2",
                                    index === items.length - 1 && "text-gray-500"
                                )}
                            >
                                {label}
                            </LocalizedClientLink>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
