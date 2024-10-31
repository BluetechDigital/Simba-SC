"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ISimbaTVBanner} from "@/types/components";
import {stagger, initial} from "@/animations/animations";

// Styling
import styles from "@/styles/components/SimbaTVBanner.module.scss";

// Components
import CountUpStats from "@/components/SimbaTVBanner/Elements/CountUpStats";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SimbaTVStatsCard: FC<ISimbaTVBanner.IStatsCard> = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<ScrollYProgressReveal className={styles.statsCard}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.content}
				>
					<CountUpStats
						decimals={0}
						paragraph="Subscribers"
						number={globalContext?.youtubeChannelInfo?.subscriberCount}
					/>
					<div className={styles.divider} />
					<CountUpStats
						decimals={2}
						paragraph="Views"
						number={globalContext?.youtubeChannelInfo?.viewCount}
					/>
					<div className={styles.divider} />
					<CountUpStats
						decimals={1}
						paragraph="Videos"
						number={globalContext?.youtubeChannelInfo?.videoCount}
					/>
				</motion.div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVStatsCard;
