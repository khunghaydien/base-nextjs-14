"use client"
import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { ROUTER } from "@/consts/route.const"

interface BreadcrumbItem {
  label: string
  path: string
}

// Mapping từ ticketType param sang label tiếng Việt
export const TICKET_TYPE_LABELS: Record<string, string> = {
  park: "Công viên du lịch",
  cultural: "Địa điểm văn hoá", 
  show: "Show & Event",
  sport: "Vé sân vận động",
  hotel: "Hotel",
  flight: "Flight"
}

// Mapping từ path sang label breadcrumb
const PATH_LABELS: Record<string, string> = {
  "/search-tickets": "Tìm kiếm vé",
  "/dashboard": "Dashboard",
  "/orders": "Đơn hàng",
  "/tickets": "Vé của tôi"
}

export const useBreadcrumbs = () => {
  const pathname = usePathname()

  const breadcrumbs = useMemo(() => {
    const items: BreadcrumbItem[] = []
    
    // Remove locale from pathname
    const segments = pathname.split('/').filter(Boolean)
    const pathWithoutLocale = segments.length > 0 && segments[0].length === 2 
      ? '/' + segments.slice(1).join('/')
      : pathname

    // Add home breadcrumb
    items.push({
      label: "Trang chủ",
      path: "/"
    })

    // Handle tickets routes
    if (pathWithoutLocale.startsWith('/tickets')) {
      // Add tickets breadcrumb
      items.push({
        label: "Vé của tôi",
        path: "/tickets"
      })

      // Check if we're on a specific ticket detail page
      if (pathWithoutLocale.includes('/tickets/') && pathWithoutLocale !== '/tickets') {
        items.push({
          label: "Chi tiết vé",
          path: pathWithoutLocale
        })
      }
    } else if (pathWithoutLocale.startsWith('/search-tickets')) {
      // Add search-tickets breadcrumb
      items.push({
        label: "Tìm kiếm vé",
        path: ROUTER.SEARCH_TICKETS
      })

      // Check if we're on a specific ticket type by matching the path
      const ticketType = segments[segments.length - 1] // Last segment after removing locale
      if (ticketType && TICKET_TYPE_LABELS[ticketType]) {
        items.push({
          label: TICKET_TYPE_LABELS[ticketType],
          path: pathWithoutLocale
        })
      }
    } else {
      // Handle other routes
      const label = PATH_LABELS[pathWithoutLocale]
      if (label) {
        items.push({
          label,
          path: pathWithoutLocale
        })
      }
    }

    return items
  }, [pathname])

  return breadcrumbs
}
