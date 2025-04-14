"use client";

// Imports
import {MotionValue} from "framer-motion";
import {useState, useEffect} from "react";

type IUseScrollYColorSwitch = {
	containerRef: React.RefObject<HTMLDivElement>;
	scrollYProgress: MotionValue<number>;
	colorBefore: string;
	colorAfter: string;
};

export const useScrollYColorSwitch = ({
	scrollYProgress,
	colorAfter,
	colorBefore,
	containerRef,
}: IUseScrollYColorSwitch): string => {
	const [color, setColor] = useState(colorBefore);

	useEffect(() => {
		const updateColor = () => {
			if (containerRef.current) {
				const containerOffsetTop = containerRef.current.offsetTop;
				const containerHeight = containerRef.current.offsetHeight;
				/* Slightly before 50% or Halfway Point ( divide by / 2)
				 would be Halfway Point of the selected element / div */
				const halfwayPoint = containerOffsetTop + containerHeight / 2.25;

				setColor(
					scrollYProgress.get() >= halfwayPoint ? colorAfter : colorBefore
				);
			}
		};

		const unsubscribe = scrollYProgress.onChange(updateColor);

		return () => unsubscribe();
	}, [containerRef, scrollYProgress, colorBefore, colorAfter]);

	return color;
};
