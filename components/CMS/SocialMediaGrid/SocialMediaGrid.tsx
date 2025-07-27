"use client";

// Imports
import { motion } from "framer-motion";
import { FC, memo, Fragment} from "react";
import { useGlobalContext } from "@/context/global";
import {stagger, initial } from "@/animations/animations";
import {ISocialMediaGrid} from "@/components/CMS/SocialMediaGrid/types/index";

// Styling
import styles from "@/components/CMS/SocialMediaGrid/styles/SocialMediaGrid.module.scss";

// Components
import Title from "../../Global/Elements/Title";
import Card from "@/components/CMS/SocialMediaGrid/fragments/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const SocialMediaGrid: FC<ISocialMediaGrid.IProps> = memo(({
	title
}) => {
	const globalContext = useGlobalContext();

	return (
		<motion.div
			initial={initial}
			variants={stagger}
			whileInView="animate"
			viewport={{once: true}}
			className={styles.socialMediaGrid}
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(255, 255, 255, 0.50),
				rgba(255, 255, 255, 0.85),rgba(255, 255, 255, 0.90)),url("/svg/background/grid-background-12.svg")`,
			}}
		>
			<ScrollYProgressReveal className={styles.container}>
				<ContentSliceRevealMaskAnimation>
					<Title content={title} className={styles.title} />
				</ContentSliceRevealMaskAnimation>
				{/* API ROUTE */}
				<div className={styles.instagramFeedCGrid}>
					{globalContext?.instagramFeed?.length > 0 ? (
						globalContext?.instagramFeed
							?.slice(0, 10)
							?.map((item: any, index: number) => (
								<Fragment key={index}>
									<Card
										index={item?.title}
										caption={item?.caption}
										media_url={item?.media_url}
										permalink={item?.permalink}
										media_type={item?.media_type}
										thumbnail_url={item?.permalink}
										/>
								</Fragment>
							))
					) : (
						<></>
					)}
				</div>
			</ScrollYProgressReveal>
		</motion.div>
	);
});

SocialMediaGrid.displayName = 'SocialMediaGrid';

export default SocialMediaGrid;
