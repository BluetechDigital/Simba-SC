// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IParagraph} from "@/types/components/Elements";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Elements/Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({content, className}) => {
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
			className={content ? styles.paragraph + ` block ${className}` : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
