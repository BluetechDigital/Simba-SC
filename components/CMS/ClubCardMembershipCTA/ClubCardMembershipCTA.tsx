// Imports
import { FC, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fadeInUp, { initial } from "@/animations/animations";
import {IClubCardMembershipCTA} from "@/components/CMS/ClubCardMembershipCTA/types/index";

// Styling
import styles from "@/components/CMS/ClubCardMembershipCTA/styles/ClubCardMembershipCTA.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Button from "@/components/Global/Elements/Button/Button";
import VideoCard from "@/components/CMS/ClubCardMembershipCTA/fragments/VideoCard";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideUpDivMaskReveal from "@/components/Animations/SlideUpDivMaskReveal/SlideUpDivMaskReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const ClubCardMembershipCTA: FC<IClubCardMembershipCTA.IProps> = memo(({
	title,
	video,
	buttonLink,
	displayVideo,
	backgroundImage,
	clubCardMembershipText,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: backgroundImage?.sourceUrl ? `linear-gradient(0deg,rgba(45, 90, 49, 0),
		rgba(45, 90, 49, 0.5), rgba(45, 90, 49, 0.80)), url("${backgroundImage.sourceUrl}")` : 'none',
	}), [backgroundImage?.sourceUrl]);

	return (
		<div className={styles.clubCardMembershipCta}
			style={{
				backgroundImage: `url("/svg/background/layered-peaks-haikei-red.svg")`,
			}}
		>
			<div className={styles.container}>
				<div className={styles.titleSection}>
					<ContentSliceRevealMaskAnimation>
						<Title content={title} className={styles.title} />
					</ContentSliceRevealMaskAnimation>
				</div>
				<div className={styles.content}>
					<AnimatePresence mode="wait">
						<SlideUpDivMaskReveal
							triggerOnce={true}
							style={backgroundImageStyle}
							className={styles.cardWrapper}
							backgroundColor={"bg-lightGreyTwo"}
						>
							<VideoCard video={video} displayVideo={displayVideo} />
							<ScrollYProgressReveal className={styles.card}>
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={styles.title}
								>
									{clubCardMembershipText}
								</motion.h4>
								<ScrollYProgressReveal className={styles.buttonLink}>
									<Button styleNumber={1} link={buttonLink}/>
								</ScrollYProgressReveal>
							</ScrollYProgressReveal>
						</SlideUpDivMaskReveal>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
});

ClubCardMembershipCTA.displayName = 'ClubCardMembershipCTA';

export default ClubCardMembershipCTA;
