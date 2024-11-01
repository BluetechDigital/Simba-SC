// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IElements} from "@/types/components/Elements";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Elements/Paragraph.module.scss";

const Paragraph: FC<IElements.IParagraph> = ({content, className, style}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<motion.div
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			style={style ? style : ""}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
			className={content ? styles.paragraph + ` block ${className}` : `hidden`}
		/>
	);
};

export default Paragraph;
