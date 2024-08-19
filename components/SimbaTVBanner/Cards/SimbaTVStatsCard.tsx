// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";

// Components
import CountUpStats from "@/components/SimbaTVBanner/Elements/CountUpStats";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SimbaTVStatsCard: FC = () => {
	return (
		<>
			<ScrollYProgressReveal tailwindStyling="mx-auto max-w-7xl px-4 py-20 md:py-24">
				<div className="flex flex-col items-center justify-center sm:flex-row">
					<CountUpStats
						number={45}
						suffix="%"
						paragraph="Lorem ipsum dolor sit amet consectetur"
					/>
					<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
					<CountUpStats
						number={15.5}
						decimals={1}
						suffix="K+"
						paragraph="Lorem ipsum dolor sit amet consectetur"
					/>
					<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
					<CountUpStats
						number={20}
						suffix="B+"
						paragraph="Lorem ipsum dolor sit amet consectetur"
					/>
				</div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVStatsCard;
