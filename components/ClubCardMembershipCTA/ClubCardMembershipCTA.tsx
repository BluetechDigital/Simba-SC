// Imports
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import fadeInUp, {initial} from "@/animations/animations";
import {IClubCardMembershipCTA} from "@/components/ClubCardMembershipCTA/types/index";

// Styling
import styles from "@/components/ClubCardMembershipCTA/styles/ClubCardMembershipCTA.module.scss";

// Components
import Title from "@/components/Elements/Title";
import VideoCard from "@/components/ClubCardMembershipCTA/fragments/VideoCard";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const ClubCardMembershipCTA: FC<IClubCardMembershipCTA.IProps> = ({
	title,
	video,
	buttonLink,
	displayVideo,
	backgroundImage,
	clubCardMembershipText,
}) => {

	return (
		<div
			className={styles.clubCardMembershipCta}
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
					<motion.div
						className={styles.cardWrapper}
						style={{
							backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),
							rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${backgroundImage?.sourceUrl}")`,
						}}
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
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									className={`${
										buttonLink?.url
											? styles.link + " buttonStyling-alt"
											: "hidden"
									}`}
								>
									{buttonLink?.title}
								</Link>
							</ScrollYProgressReveal>
						</ScrollYProgressReveal>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ClubCardMembershipCTA;
