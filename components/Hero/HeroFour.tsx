// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {initialTwo, fadeIn} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const HeroCard: FC<IHero.IHeroFourCard> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
}) => {
	return (
		<>
			<motion.video
				muted
				autoPlay
				loop={true}
				controls={false}
				playsInline
				controlsList="nofullscreen"
				aria-label={`Video Element: ${video?.title}`}
				className={displayVideo ? styles.video : "hidden"}
			>
				<source
					src={video?.link}
					type="video/mp4"
					width={video?.mediaDetails?.width ? video?.mediaDetails?.width : 550}
					height={
						video?.mediaDetails?.height ? video?.mediaDetails?.height : 550
					}
				/>
			</motion.video>
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
};

const HeroFour: FC<IHero.IHeroFour> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.heroFour}>
				<div
					className={styles.container}
					style={{
						backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),
						rgba(0, 0, 0, 0.5)),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="relative w-full h-full">
						<div className="sticky top-0 w-full h-full">
							<div className={styles.contentWrapper}>
								<HeroCard
									title={title}
									video={video}
									paragraph={paragraph}
									buttonLink={buttonLink}
									displayVideo={displayVideo}
									buttonLinkTwo={buttonLinkTwo}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroFour;
