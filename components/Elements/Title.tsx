// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IElements} from "@/types/components/Elements";
import {fadeIn, initialTwo} from "@/animations/animations";

const Title: FC<IElements.ITitle> = ({content, className, style}) => {
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
			style={style ? style : ""}
			dangerouslySetInnerHTML={createTitleMarkup(content)}
			className={content ? `block ${className}` : `hidden`}
		/>
	);
};

export default Title;
