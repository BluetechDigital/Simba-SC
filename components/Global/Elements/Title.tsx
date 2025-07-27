// Imports
import { FC, memo, useMemo } from "react"; // Added useMemo
import DOMPurify from "isomorphic-dompurify";
import { motion, MotionValue } from "framer-motion";
import { fadeIn, initialTwo } from "@/animations/animations";

type ITitle = {
    content: string;
    className?: string;
    styleTextColor?: MotionValue<string> | string;
};

const Title: FC<ITitle> = memo(({
    content,
    styleTextColor,
    className = '',
}) => {

    /* Sanitize the WYSIWYG title content */
    // Use useMemo to prevent re-sanitizing content on every render
    const cleanMarkup = useMemo(() => {
        // Only sanitize if content exists, otherwise return empty HTML
        return content ? { __html: DOMPurify.sanitize(content) } : { __html: '' };
	}, [content]);
	
    const titleClasses = useMemo(() => {
        if (!content) {
            return 'hidden';
        }
        return className.trim();
    }, [content, className]);

    return (
        <motion.div
            initial={initialTwo}
            whileInView={fadeIn}
            viewport={{once: true}}
            className={titleClasses}
            style={{ color: styleTextColor}}
            dangerouslySetInnerHTML={cleanMarkup}
        />
    );
});

Title.displayName = 'Title';

export default Title;