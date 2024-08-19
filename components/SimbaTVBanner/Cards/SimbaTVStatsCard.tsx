// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {stagger, initial} from "@/animations/animations";

// Components
import CountUpStats from "@/components/SimbaTVBanner/Elements/CountUpStats";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SimbaTVStatsCard: FC = () => {
	return (
		<>
			<ScrollYProgressReveal tailwindStyling="mx-auto w-full px-4 py-20 md:py-24">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-0"
				>
					<CountUpStats number={606} suffix="K" paragraph="Subscribers" />
					<div className="hidden md:block h-[1px] w-12 bg-lightGreyTwo sm:h-32 sm:w-[1px]" />
					<CountUpStats
						number={94.3}
						decimals={1}
						suffix="M"
						paragraph="Views"
					/>
					<div className="hidden md:block h-[1px] w-12 bg-lightGreyTwo sm:h-32 sm:w-[1px]" />
					<CountUpStats
						number={2.9}
						decimals={1}
						suffix="K"
						paragraph="Videos"
					/>
				</motion.div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVStatsCard;
