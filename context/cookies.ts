"use client";

// Imports
import {createContext, useContext} from "react";
import {ICookiePolicy} from "@/context/types/context";

export const CookiePolicyContext = createContext<ICookiePolicy.IContext | null>(null);

export const useCookiePolicy = () => {
	const context = useContext(CookiePolicyContext);
	
  	if (context === null) {
    	throw new Error("useCookiePolicy must be used within a CookiePolicyProvider");
	}
	
  return context;
};