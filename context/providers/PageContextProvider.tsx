"use client";

// Imports
import {IPage} from "@/context/types/context";
import { FC, useMemo, createContext, useContext } from "react";

export const PageContext = createContext<IPage.IContext | undefined>(undefined);

export const usePageContext = () => {
	const content = useContext(PageContext);

	if (content === undefined) {
		throw new Error(`useDynamicPageContext must be used to render content.`);
	}

	return content;
};

export const PageContextProvider: FC<IPage.IContextProvider> = ({
	content,
	children,
	postTypeFlexibleContent,
}) => {

	// Memoize the context value
    const memoizedValues = useMemo(() => {
        return {
            content: content,
            postTypeFlexibleContent: postTypeFlexibleContent,
        };
	}, [content, postTypeFlexibleContent]); // Dependencies are the props passed to the provider
	
	return (
		<PageContext.Provider value={{memoizedValues}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageContextProvider;
