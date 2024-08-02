"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import useWindowSize from "@/Hooks/useWindowSize";
import {ISmoothScrolling} from "@/types/components/Global";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	const {width}: any = useWindowSize();

	return (
		<>
			{width > 1080 ? (
				<ReactLenis
					root
					options={{
						lerp: 0.01,
						duration: 1.5,
						syncTouch: true,
					}}
				>
					<main>{children}</main>
				</ReactLenis>
			) : (
				<ReactLenis
					root
					options={{
						lerp: 0.01,
						duration: 0.5,
						syncTouch: true,
					}}
				>
					<main>{children}</main>
				</ReactLenis>
			)}
		</>

		// <main>{children}</main>
	);
};

export default SmoothScrolling;
