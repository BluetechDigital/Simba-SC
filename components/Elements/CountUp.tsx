"use client";

// Imports
import React, {FC, useEffect, useRef} from "react";
import {motion, animate, useInView} from "framer-motion";
import { initialTwo, fadeIn } from "@/animations/animations";

type ICountUp = {
	number: string;
	suffix?: string;
	decimals?: number;
	className: string;
};
	
const CountUp: FC<ICountUp> = ({
	number,
	suffix,
	decimals = 0,
	className,
}) => {
	const ref: any = useRef(null);
	const isInView = useInView(ref);

	// Formatting function to convert numbers to short form (e.g., 613k)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const formatNumber = (num: number): string => {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(decimals) + "M";
		} else if (num >= 1000) {
			return (num / 1000).toFixed(decimals) + "k";
		}
		return num.toString();
	};

	useEffect(() => {
		if (!isInView) return;

		animate(0, Number(number), {
			duration: 1.5,
			onUpdate(value) {
				if (!ref.current) return;

				// Update the text content with the formatted value
				ref.current.textContent = formatNumber(
					parseFloat(value.toFixed(decimals))
				);
			},
		});
	}, [number, decimals, isInView, formatNumber]);

	return (
		<motion.h4
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			className={className}
		>
			<span ref={ref}></span>
			{suffix ? (
				<span className="pl-1">{suffix}</span>
			) : (
				<></>
			)}
		</motion.h4>
	);
};

export default CountUp;
