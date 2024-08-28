"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {stagger, initial} from "@/animations/animations";

// Components
import CountUpStats from "@/components/SimbaTVBanner/Elements/CountUpStats";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SimbaTVStatsCard: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<ScrollYProgressReveal tailwindStyling="mx-auto w-full px-4 py-20 md:py-24 border-t border-white">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-0"
				>
					<CountUpStats
						suffix=""
						decimals={0}
						paragraph="Subscribers"
						number={
							globalContext?.youtubeChannelInfo?.statistics?.subscriberCount
						}
					/>
					<div className="hidden md:block h-[1px] w-12 bg-lightGreyTwo sm:h-32 sm:w-[1px]" />
					<CountUpStats
						decimals={0}
						suffix=""
						paragraph="Views"
						number={globalContext?.youtubeChannelInfo?.statistics?.viewCount}
					/>
					<div className="hidden md:block h-[1px] w-12 bg-lightGreyTwo sm:h-32 sm:w-[1px]" />
					<CountUpStats
						decimals={1}
						suffix=""
						paragraph="Videos"
						number={globalContext?.youtubeChannelInfo?.statistics?.videoCount}
					/>
				</motion.div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVStatsCard;
