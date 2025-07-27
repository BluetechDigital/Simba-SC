// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
 } from "@/animations/animations";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import {ITitleContentImage} from "@/components/CMS/TitleContentImage/types/index";


// Styling
import styles from "@/components/CMS/TitleContentImage/styles/TitleContentImage.module.scss";

// Components
import TitleContentImageCard from "@/components/CMS/TitleContentImage/fragments/Card";

const TitleContentImage: FC<ITitleContentImage.IProps> = memo(({
	title,
	image,
	subtitle,
	textTitle,
	paragraph,
	buttonLink,
	displayContentOption,
	displayParagraphColor,
	displayBackgroundColor,
}) => {
	let backgroundColor;
	let paragraphColor;

	switch (displayBackgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGreyTwo";
			break;
		default:
			backgroundColor = "bg-white";
			break;
	}

	switch (displayParagraphColor) {
		case "Black":
			paragraphColor = "text-pureBlack";
			break;
		case "Grey":
			paragraphColor = "text-darkGrey";
			break;
		default:
			paragraphColor = "text-pureBlack";
			break;
	}

	return (
		<div className={styles.titleContentImage + ` ${backgroundColor}`}>
			<div className={styles.container}>
				<div className={title ? styles.topContent : "hidden"}>
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.subtitle}
					>
						{subtitle}
					</motion.h4>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h3>
				</div>
				<div
					className={
						styles.bottomContent +
						` ${
							displayContentOption == "Right"
								? "flex-col-reverse"
								: "flex-col"
						}`
					}
				>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						style={{backgroundImage: `url(${image?.sourceUrl})`}}
						className={`${
							displayContentOption == "Right" ? styles.image : "hidden"
						}`}
					/>
					{displayContentOption == "Left" ? (
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className={
								styles.mainContent +
								` ${
									displayContentOption == "Left"
										? "lg:items-end"
										: "lg:items-start"
								}`
							}
						>
							<TitleContentImageCard
								title={title}
								textTitle={textTitle}
								paragraph={paragraph}
								buttonLink={buttonLink}
								paragraphColor={paragraphColor}
								displayContentOption={displayContentOption}
							/>
						</motion.div>
					) : (
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className={
								styles.mainContent +
								` ${
									displayContentOption == "Right"
										? "lg:items-end"
										: "lg:items-start"
								}`
							}
						>
							<TitleContentImageCard
								title={title}
								textTitle={textTitle}
								paragraph={paragraph}
								buttonLink={buttonLink}
								paragraphColor={paragraphColor}
								displayContentOption={displayContentOption}
							/>
						</motion.div>
					)}
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						style={{backgroundImage: `url(${image?.sourceUrl})`}}
						className={`${
							displayContentOption == "Left" ? styles.image : "hidden"
						}`}
					/>
				</div>
			</div>
		</div>
	);
});

TitleContentImage.displayName = 'TitleContentImage';

export default TitleContentImage;
