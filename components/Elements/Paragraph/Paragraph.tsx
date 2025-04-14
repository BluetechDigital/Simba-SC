// Imports
import {FC, useRef} from "react";
import {MotionValue} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {motion, useScroll} from "framer-motion";

// Styling
import styles from "@/components/Elements/Paragraph/Styles/Paragraph.module.scss";

type IParagraph = {
	fadeIn?: boolean;
	content: string;
	className: string;
	offsetStart?: number;
	offsetFinish?: number;
	styleTextColor?: MotionValue<string> | string;
};

const Paragraph: FC<IParagraph> = ({
	fadeIn,
	content,
	className,
	offsetStart,
	offsetFinish,
	styleTextColor,
}) => {
	const container = useRef(null);

	const {scrollYProgress} = useScroll({
		target: container,
		offset: [`start ${offsetStart || 0.9}`, `start ${offsetFinish || 0.5}`],
	});

	/* Sanitize the WYSIWYG paragraph content */
	const createParagraphMarkup = (paragraphContent: string) => {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	};
	return (
		<motion.div
			ref={container}
			style={{
				color: styleTextColor || "",
				opacity: fadeIn ? scrollYProgress : 1,
			}}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
			className={content ? styles.paragraph + ` block ${className}` : `hidden`}
		/>
	);
};

export default Paragraph;
