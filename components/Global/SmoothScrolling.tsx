"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import useWindowSize from "@/Hooks/useWindowSize";
import {ISmoothScrolling} from "@/types/components/Global";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	const {width}: any = useWindowSize();

	return (
		<ReactLenis root>
			<main>{children}</main>
		</ReactLenis>
	);
};

export default SmoothScrolling;
