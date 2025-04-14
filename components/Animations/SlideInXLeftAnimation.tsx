// Imports
import {FC, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {fadeIn, offsetFinish, offsetStart} from "@/animations/animations";

type IProps = {
	style?: any;
	className?: string;
	children: React.ReactNode;
};

const SlideInXLeftAnimation: FC<IProps> = ({style, children, className}) => {
	const container = useRef(null);
	const {scrollYProgress} = useScroll({
		target: container,
		offset: [`start ${offsetStart}`, `start ${offsetFinish}`],
	});

	// Transform scrollYProgress to control horizontal sliding
	const slideInX = useTransform(scrollYProgress, [0, 1], ["-500px", "0px"]);

	return (
		<motion.div
			ref={container}
			className={children ? ` ${className}` : `hidden`}
			style={{x: slideInX, opacity: fadeIn ? scrollYProgress : 1}}
		>
			{children}
		</motion.div>
	);
};

export default SlideInXLeftAnimation;
