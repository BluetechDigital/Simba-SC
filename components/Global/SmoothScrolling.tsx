"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import useWindowSize from "@/Hooks/useWindowSize";
import {ISmoothScrolling} from "@/types/components/Global";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	const {width}: any = useWindowSize();

	return (
		<ReactLenis
			root
			options={{
				lerp: 0.01,
				duration: width > 1080 ? 1.75 : 0.5,
				syncTouch: true,
			}}
		>
			<main>{children}</main>
		</ReactLenis>

		// <main>{children}</main>
	);
};

export default SmoothScrolling;
