// Imports
import { ReadonlyURLSearchParams } from "next/navigation";

// Ensure Start With
export const ensureStartWith = (stringToCheck: string, startsWith: string) => {
    try {
      return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to creating url"
      );
    }
}
  
// Create Url
export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    try {
      const paramsString = params.toString();
      const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

      return `${pathname}${queryString}`;
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to creating url"
      );
    }
  };
