"use client";

// Imports
import { FC } from "react";
import {ReactLenis} from "lenis/react";

export type ISmoothScrolling = {
	children: React.ReactNode;
};

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		<ReactLenis
			root
			options={{
				// Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
				lerp: 0.05,
				//   infinite: true,
				//   syncTouch: true,
			}}
		>
			{children}
		</ReactLenis>
	);
};

export default SmoothScrolling;
