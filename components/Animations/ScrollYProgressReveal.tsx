"use client";

// Imports
import {FC, useRef} from "react";
import {motion, useScroll} from "framer-motion";
import {IScrollYProgressReveal} from "@/types/components/Global";
import {fadeIn, offsetFinish, offsetStart} from "@/animations/animations";

const ScrollYProgressReveal: FC<IScrollYProgressReveal> = ({
	children,
	tailwindStyling,
}) => {
	const container = useRef(null);

	const {scrollYProgress} = useScroll({
		target: container,
		offset: [`start ${offsetStart}`, `start ${offsetFinish}`],
	});

	return (
		<motion.div
			ref={container}
			style={{opacity: fadeIn ? scrollYProgress : 1}}
			className={children ? `${tailwindStyling}` : `hidden`}
		>
			{children}
		</motion.div>
	);
};

export default ScrollYProgressReveal;
