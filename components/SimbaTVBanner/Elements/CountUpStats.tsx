"use client";

// Imports
import React, {FC, useEffect, useRef} from "react";
import {motion, animate, useInView} from "framer-motion";
import {ICountUpStats} from "@/types/components/Elements";
import {initialTwo, fadeIn} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const CountUpStats: FC<ICountUpStats> = ({
	number,
	suffix,
	decimals = 0,
	paragraph,
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
			duration: 2.5,
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
		<>
			<div className="flex w-full flex-col items-center py-8 px-8 sm:py-0 gap-8">
				<motion.h4
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="font-OnestBlack text-center uppercase text-[16vw] md:text-[5vw] tracking-[-0.02rem] text-white font-semibold"
				>
					<span ref={ref}></span>
					{suffix}
				</motion.h4>
				<Paragraph
					content={paragraph}
					tailwindStyling="font-OnestBlack uppercase leading-tight text-lightGreyTwo text-paragraph lg:text-lg text-center"
				/>
			</div>
		</>
	);
};

export default CountUpStats;
