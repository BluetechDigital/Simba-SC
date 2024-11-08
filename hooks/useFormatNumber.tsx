"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IElements} from "@/types/components/Elements";
import {initialTwo, fadeIn} from "@/animations/animations";

const useFormatNumber: FC<IElements.IFormatNumber> = ({
	number,
	decimals = 0,
	className,
}) => {
	// Formatting function to convert numbers to short form (e.g., 613k)
	const formatNumber = (num: number): string => {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(decimals) + "M";
		} else if (num >= 1000) {
			return (num / 1000).toFixed(decimals) + "k";
		}
		return num.toString();
	};

	// Ensure `number` is treated as a number type
	const formattedNumber = formatNumber(parseFloat(number.toString()));

	return (
		<motion.h4
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			className={className}
		>
			{formattedNumber}
		</motion.h4>
	);
};

export default useFormatNumber;
