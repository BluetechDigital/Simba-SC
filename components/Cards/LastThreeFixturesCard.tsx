// Imports
import {FC} from "react";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {initial, fadeInUp} from "@/animations/animations";
import {ILastThreeFixturesCard} from "@/types/components/Cards";

const LastThreeFixturesCard: FC<ILastThreeFixturesCard> = ({
	date,
	goals,
	teams,
	league,
}) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-5">
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
				>
					<Image
						priority
						width={1000}
						height={1000}
						src={league?.logo}
						alt={`${league?.name} league Logo`}
						className="object-contain object-center w-full h-[75px]"
					/>
				</motion.div>
				<div className="flex items-center justify-center gap-12 lg:gap-12">
					<div className="flex flex-col items-center justify-center gap-2">
						<Image
							priority
							width={1000}
							height={1000}
							src={teams?.home?.logo}
							alt={`${teams?.home?.name} club Logo`}
							className="object-contain object-center w-full h-[75px]"
						/>
						<span className="text-pureBlack text-base font-OnestRegular text-center">
							{teams?.home?.name}
						</span>
						<span className="text-pureBlack text-base font-OnestRegular text-center">
							{teams?.home?.winner}
						</span>
					</div>
					<div className="bg-pureBlack p-4 rounded-lg flex items-center justify-center gap-2">
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-white text-2xl font-OnestBlack text-center"
						>
							{goals?.home}
						</motion.span>
						<span className="text-white text-2xl font-OnestBlack text-center">
							-
						</span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-white text-2xl font-OnestBlack text-center"
						>
							{goals?.away}
						</motion.span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<Image
							priority
							width={1000}
							height={1000}
							src={teams?.away?.logo}
							alt={`${teams?.away?.name} club Logo`}
							className="object-contain object-center w-[65px] md:w-[75px] h-[60px] sm:h-[65px] lg:h-[75px]"
						/>
						<span className="text-pureBlack text-base font-OnestRegular text-center">
							{teams?.away?.name}
						</span>
						<span className="text-pureBlack text-base font-OnestRegular text-center">
							{teams?.away?.winner}
						</span>
					</div>
				</div>
				<div className="flex items-center justify-center gap-1">
					<span className="text-pureBlack text-base font-OnestRegular text-center">
						{league?.name},
					</span>
					<span className="text-pureBlack text-base font-OnestRegular text-center">
						{dateFormat(date, "dddd, mmmm d, yyyy")}
					</span>
				</div>
			</div>
		</>
	);
};

export default LastThreeFixturesCard;
