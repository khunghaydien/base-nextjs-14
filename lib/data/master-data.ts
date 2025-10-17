"use server"

import { sdk } from "../config"
import { getAuthHeaders } from "./cookies"

export interface ProductTypeDropdown {
  id: string
  value: string
  label: string
  metadata?: Record<string, any>
}

/**
 * Fetch locations from Store API endpoint with pagination
 */
export async function getLocationsDropdown(page: number = 1, limit: number = 10) {
  try {
    const headers = {
      ...(await getAuthHeaders()),
    }

    const offset = (page - 1) * limit

    const response = await sdk.client.fetch<{
      locations: Array<{
        id: string
        name: string
        country: string
        region: string
        is_active: boolean
        metadata?: Record<string, any>
        parks: Array<{
          id: string
          name: string
          code: string
          type: string
          description?: string
          open_time?: string
          close_time?: string
        }>
      }>
      count: number
      offset: number
      limit: number
    }>(`/store/locations?offset=${offset}&limit=${limit}`, {
      method: "GET",
      headers,
      cache: "no-cache",
    })
    
    return response.locations || []
  } catch (error) {
    console.error('❌ Error fetching locations:', error)
    return []
  }
}

/**
 * Fetch product types from Store API (for collection types)
 */
export async function getProductTypesFromStore() {
  try {
    const headers = {
      ...(await getAuthHeaders()),
    }

    const response = await sdk.client.fetch<{
      product_types: Array<{
        id: string
        value: string
        metadata?: Record<string, any>
      }>
    }>(`/store/product-types`, {
      method: "GET",
      headers,
      cache: "force-cache",
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    const productTypes: ProductTypeDropdown[] = response.product_types.map((pt) => ({
      id: pt.id,
      value: pt.value,
      label: pt.value,
      metadata: pt.metadata,
    }))

    return productTypes
  } catch (error) {
    console.error('❌ Error fetching product types from store:', error)
    return []
  }
}

/**
 * Fetch collections from Store API (for ticket categories)
 */
export async function getCollectionsFromStore(page: number = 1, limit: number = 100) {
  try {
    const headers = {
      ...(await getAuthHeaders()),
    }

    const offset = (page - 1) * limit

    const response = await sdk.client.fetch<{
      collections: Array<{
        id: string
        title: string
        handle: string
        metadata?: Record<string, any>
      }>
      count: number
      offset: number
      limit: number
    }>(`/store/collections?offset=${offset}&limit=${limit}`, {
      method: "GET",
      headers,
      cache: "force-cache",
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    return response.collections || []
  } catch (error) {
    console.error('❌ Error fetching collections:', error)
    return []
  }
}

/**
 * Fetch product option values for age_type (độ tuổi)
 */
export async function getAgeTypeOptions(locale: string = 'vi') {
  try {
    const headers = {
      ...(await getAuthHeaders()),
    }

    const response = await sdk.client.fetch<{
      product_option_config: {
        id: string
        title: string
        values: Array<{
          id: string
          code: string
          translation_key: string,
          title: string
        }>
      }
    }>(`/store/product-options/age_type?locale=${locale}`, {
      method: "GET",
      headers,
      cache: "force-cache",
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    return response.product_option_config?.values || []
  } catch (error) {
    console.error('❌ Error fetching age type options:', error)
    return []
  }
}

/**
 * Fetch product categories from Store API (for tabs/filters)
 */
export async function getProductCategories() {
  try {
    const headers = {
      ...(await getAuthHeaders()),
    }

    const response = await sdk.client.fetch<{
      product_categories: Array<{
        id: string
        name: string
        handle: string
        rank: number
        parent_category_id: string | null
        category_children?: Array<{
          id: string
          name: string
          handle: string
        }>
        metadata?: Record<string, any>
      }>
      count: number
    }>(`/store/product-categories?fields=handle,name,rank,parent_category_id,category_children`, {
      method: "GET",
      headers,
      cache: "force-cache",
      next: { revalidate: 3600 }, // Cache for 1 hour
    })
    return response.product_categories || []
  } catch (error) {
    console.error('❌ Error fetching product categories:', error)
    return []
  }
}