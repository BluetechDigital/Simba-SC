// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {FC, memo, Fragment} from "react";
import {IAllPodcastsVideos} from "@/components/CMS/Fans/AllPodcastsVideos/types/index";

// Styling
import styles from "@/components/CMS/Fans/AllPodcastsVideos/styles/AllPodcastsVideos.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Card from "@/components/CMS/Fans/AllPodcastsVideos/fragments/Recommendations/fragments/Card";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Recommendations: FC<IAllPodcastsVideos.IRecommendations.IProps> = memo(({
	cta,
	className,
	podcastsVideos,
}) => {
	return (
		<motion.div
			className={className}
			viewport={{once: true}}
			initial={slideInRightInitial}
			whileInView={slideInRightFinish}
		>
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
						className={`${cta.link?.url ? styles.buttonStyling : "hidden"}`}
					>
						{cta.link?.title}
					</Link>
				</motion.div>
			</div>
			<div className={styles.recommendationContent}>
				<motion.h4
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={styles.title}
				>
					Video Recommendations
				</motion.h4>
				{podcastsVideos?.length > 0 ? (
					podcastsVideos?.slice(0, 4)?.map((item: any, index: number) => (
						<Fragment key={index}>
							<motion.div
								custom={index}
								initial={initial}
								className="w-full"
								whileInView="animate"
								viewport={{once: true}}
								variants={arrayLoopStaggerChildren}
							>
								<Card
									videoId={item?.videoId}
									snippet={item?.snippet}
									statistics={item?.statistics}
								/>
							</motion.div>
						</Fragment>
					))
				) : null}
			</div>
		</motion.div>
	);
});

Recommendations.displayName = 'Recommendations';

export default Recommendations;