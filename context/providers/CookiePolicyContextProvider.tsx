"use client";

// Imports
import { FC, useEffect, useState } from "react";
import {ICookiePolicy} from "@/context/types/context";
import { CookiePolicyContext } from "@/context/cookies";

const CookiePolicyContextProvider: FC<ICookiePolicy.IContextProvider> = ({
	children,
}) => {
	const [hasConsent, setHasConsent] = useState<boolean | null>(null); // null, true, or false

	useEffect(() => {
		const cookiesAccepted = document.cookie.includes("cookies-accepted");
		const cookiesRefused = document.cookie.includes("cookies-refused");

		if (cookiesAccepted) {
			setHasConsent(true);
		} else if (cookiesRefused) {
			setHasConsent(false);
		} else {
			setHasConsent(null); // No decision has been made yet
		}
	}, []);

	// Accept Cookies Duration is One Month (2,592,000 seconds)
	const acceptCookies = () => {
		document.cookie = "cookie-consent=accepted; max-age=2592000; path=/";
		setHasConsent(true);
	};

	// Refuse Cookies Duration is One Month (2,592,000 seconds)
	const refuseCookies = () => {
		document.cookie = "cookie-consent=refused; max-age=2592000; path=/";
		setHasConsent(false);
	};

	const value = {
		hasConsent,
		acceptCookies,
		refuseCookies
	};

  return (
    <CookiePolicyContext.Provider value={value}>
      {children}
    </CookiePolicyContext.Provider>
  );
};

CookiePolicyContextProvider.displayName = 'CookiePolicyContextProvider';

export default CookiePolicyContextProvider;
