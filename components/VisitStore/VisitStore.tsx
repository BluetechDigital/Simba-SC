// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn, initialTwo} from "@/animations/animations";
import {IVisitStore} from "@/components/VisitStore/types/index";

// Styling
import styles from "@/components/VisitStore/styles/VisitStore.module.scss";

// Components
import Card from "@/components/VisitStore/fragments/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const VisitStore: FC<IVisitStore.IProps> = ({
	title,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<div
			className={styles.visitStore}
			style={{
				backgroundImage: `linear-gradient( 0deg, rgb(0, 0, 0, 0.80),
				rgba(0, 0, 0, 0.80)),url("${backgroundImage?.sourceUrl}")`,
			}}
		>
			<div className={styles.container}>
				<ContentSliceRevealMaskAnimation>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h2>
				</ContentSliceRevealMaskAnimation>
				<Card />
				<ScrollYProgressReveal className={styles.buttonLink}>
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						className={`${
							buttonLink?.url
								? styles.link + " buttonStyling-alt-two"
								: "hidden"
						}`}
					>
						{buttonLink?.title}
					</Link>
				</ScrollYProgressReveal>
			</div>
		</div>
	);
};

export default VisitStore;
