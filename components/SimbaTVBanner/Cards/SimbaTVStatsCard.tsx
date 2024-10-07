"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ISimbaTVBanner} from "@/types/components";
import {stagger, initial} from "@/animations/animations";

// Components
import CountUpStats from "@/components/SimbaTVBanner/Elements/CountUpStats";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SimbaTVStatsCard: FC<ISimbaTVBanner.IStatsCard> = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<ScrollYProgressReveal className="mx-auto w-full px-4 py-20 md:py-24 border-t border-white">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-0"
				>
					<CountUpStats
						decimals={0}
						paragraph="Subscribers"
						number={globalContext?.youtubeChannelInfo?.subscriberCount}
					/>
					<div className="hidden md:block h-[1px] w-12 bg-lightGreyTwo sm:h-32 sm:w-[1px]" />
					<CountUpStats
						decimals={2}
						paragraph="Views"
						number={globalContext?.youtubeChannelInfo?.viewCount}
					/>
					<div className="hidden md:block h-[1px] w-12 bg-lightGreyTwo sm:h-32 sm:w-[1px]" />
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
