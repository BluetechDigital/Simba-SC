"use client";

// Imports
import {FC} from "react";
import {ISimbaTVBanner} from "@/types/components";
import {motion, AnimatePresence} from "framer-motion";

const SimbaTVBannerVideos: FC<ISimbaTVBanner.IVideos> = ({
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
