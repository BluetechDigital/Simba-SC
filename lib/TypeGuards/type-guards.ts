// Imports
import { ITypeGuardsTypes } from "@/lib/TypeGuards/types/types";

// is Object
export const isObject = (object: unknown): object is Record<string, unknown> => {
  return (
    typeof object === "object" && object !== null && !Array.isArray(object)
  );
};

// Find Error
export const findError = <T extends object>(error: T): boolean => {
  if (Object.prototype.toString.call(error) === "[object Error]") {
    return true;
  }

  const prototype = Object.getPrototypeOf(error) as T | null;
  return prototype === null ? false : findError(prototype);
};
  
// is Shopify Error
export const isShopifyError = (error: unknown): error is ITypeGuardsTypes.IShopifyErrorLike => {
  if (!isObject(error)) return false;

  if (error instanceof Error) return true;
  return findError(error);
};