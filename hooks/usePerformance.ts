import { useCallback, useMemo, useRef, useEffect, useState } from "react";

/**
 * Custom hook for performance optimization utilities
 */
export function usePerformance() {
  // Simple memoized callback creator
  const createMemoizedCallback = useCallback(
    <T extends (...args: any[]) => any>(callback: T): T => {
      return callback;
    },
    [],
  );

  // Simple memoized value creator
  const createMemoizedValue = useCallback(<T>(factory: () => T): T => {
    return factory();
  }, []);

  return {
    createMemoizedCallback,
    createMemoizedValue,
  };
}

/**
 * Hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook for throttling callbacks
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): T {
  const lastCallRef = useRef<number>(0);

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now;
        return callback(...args);
      }
    }) as T,
    [callback, delay],
  );
}

/**
 * Hook for optimizing expensive calculations
 */
export function useExpensiveCalculation<T>(
  calculation: () => T,
  dependencies: React.DependencyList,
): T {
  return useMemo(calculation, dependencies);
}

/**
 * Hook for memoizing objects to prevent unnecessary re-renders
 */
export function useMemoizedObject<T extends Record<string, any>>(
  obj: T,
  dependencies: React.DependencyList,
): T {
  return useMemo(() => obj, dependencies);
}

/**
 * Hook for memoizing arrays to prevent unnecessary re-renders
 */
export function useMemoizedArray<T>(
  arr: T[],
  dependencies: React.DependencyList,
): T[] {
  return useMemo(() => arr, dependencies);
}
