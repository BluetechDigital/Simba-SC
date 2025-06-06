// Imports
import Link from "next/link";
import { FC, memo } from "react";
import {motion} from "framer-motion";
import {IHeroFour} from "@/components/HeroFour/types/index";
import {initialTwo, fadeIn} from "@/animations/animations";

// Styling
import styles from "@/components/HeroFour/styles/HeroFour.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import VideoCard from "@/components/HeroFour/fragments/VideoCard";

const Card: FC<IHeroFour.ICard> = memo(({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
}) => {
	return (
		<>
            <VideoCard video={video} displayVideo={displayVideo} />
			<div
				className={
					styles.content +
					` ${displayVideo ? "items-center" : "lg:items-start"}`
				}
			>
				<Title
					content={title}
					className={
						styles.title + ` ${paragraph ? styles.after : styles.before}`
					}
				/>
				<Paragraph content={paragraph} className={styles.paragraph} />
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={styles.buttonSection}
				>
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						aria-label={`${buttonLink?.title}`}
						className={`${buttonLink?.url ? "buttonStyling" : "hidden"}`}
					>
						{buttonLink?.title}
					</Link>
					<Link
						href={`${buttonLinkTwo?.url}`}
						target={buttonLinkTwo?.target}
						aria-label={`${buttonLinkTwo?.title}`}
						className={`${buttonLinkTwo?.url ? "buttonStyling" : "hidden"}`}
					>
						{buttonLinkTwo?.title}
					</Link>
				</motion.div>
			</div>
		</>
	);
});

Card.displayName = 'Card';

export default Card;