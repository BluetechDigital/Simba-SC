// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {ITitle} from "@/types/components/Elements";
import {fadeIn, initialTwo} from "@/animations/animations";

const Title: FC<ITitle> = ({content, className}) => {
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
			className={content ? `block ${className}` : `hidden`}
			dangerouslySetInnerHTML={createTitleMarkup(content)}
		/>
	);
};

export default Title;
