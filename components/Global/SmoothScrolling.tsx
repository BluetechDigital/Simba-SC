"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import {ISmoothScrolling} from "@/types/components/Global";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		<ReactLenis root>
			<main>{children}</main>
		</ReactLenis>
	);
};

export default SmoothScrolling;
