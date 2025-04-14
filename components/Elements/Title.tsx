// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {MotionValue} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, initialTwo} from "@/animations/animations";

type ITitle = {
	content: string;
	className: string;
	styleTextColor?: MotionValue<string> | string;
};

const Title: FC<ITitle> = ({content, className, styleTextColor}) => {
	/* Sanitize the WYSIWYG title content */
	function createTitleMarkup(titleContent: string) {
		return {
			__html: DOMPurify.sanitize(titleContent),
		};
	}

	return (
		<motion.div
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			style={{
				color: styleTextColor,
			}}
			className={content ? className : `hidden`}
			dangerouslySetInnerHTML={createTitleMarkup(content)}
		/>
	);
};

export default Title;
