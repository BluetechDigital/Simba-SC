"use client";

// Imports
import {FC} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ISimbaTVBannerVideos} from "@/types/components/Elements";

const SimbaTVBannerVideos: FC<ISimbaTVBannerVideos> = ({
	children,
	className,
	transition,
	variants,
	activeIndex,
	...motionProps
}) => {
	return (
		<>
			<div className={`relative ${className}`}>
				<AnimatePresence
					initial={false}
					mode="popLayout"
					custom={motionProps?.custom}
				>
					<motion.div
						exit="exit"
						initial="enter"
						animate="center"
						{...motionProps}
						key={activeIndex}
						variants={variants}
						transition={transition}
					>
						{children[activeIndex]}
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
};

export default SimbaTVBannerVideos;
