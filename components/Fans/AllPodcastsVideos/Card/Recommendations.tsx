"use client";

// Imports
import {fadeIn, initialTwo} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IFans} from "@/types/components";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Title from "@/components/Elements/Title";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Recommendations: FC<IFans.IAllPodcastsVideos.IRecommendations> = ({
	cta,
}) => {
	return (
		<>
			<div className={styles.recommendation}>
				<div
					className={styles.cta}
					style={{
						backgroundImage: `url("/svg/background/low-poly-grid-haikei-red.svg")`,
					}}
				>
					<ContentSliceRevealMaskAnimation>
						<Title content={cta.text} className={styles.title} />
					</ContentSliceRevealMaskAnimation>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2"
					>
						<Link
							href={`${cta.link?.url}`}
							target={cta.link?.target}
							aria-label={`${cta.link?.title}`}
							className={`${
								cta.link?.url ? "buttonStyling-alt-three" : "hidden"
							}`}
						>
							{cta.link?.title}
						</Link>
					</motion.div>
				</div>
				<div className={styles.content}>Enter</div>
			</div>
		</>
	);
};

export default Recommendations;
