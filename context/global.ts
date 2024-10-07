"use client";

// Imports
import {createContext, useContext} from "react";
import {IGlobal} from "@/types/context/Providers";

export const GlobalContext = createContext<IGlobal.IContext | undefined>(
	undefined
);

export const useGlobalContext = () => {
	const content = useContext(GlobalContext);

	if (content === undefined) {
		throw new Error(`Global Context must be used to render content.`);
	}

	return content;
};
