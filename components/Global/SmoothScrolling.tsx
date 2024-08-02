"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import {ISmoothScrolling} from "@/types/components/Global";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		// <ReactLenis root options={{lerp: 0.01, duration: 0.5, syncTouch: true}}>
		// 	<main>{children}</main>
		// </ReactLenis>

		<main>{children}</main>
	);
};

export default SmoothScrolling;
