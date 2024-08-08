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
			<div className="py-5 px-6 w-full h-full flex flex-col items-center lg:items-start justify-center gap-5 bg-lightGrey">
				<div className="flex items-center justify-center lg:justify-baseline gap-1">
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-primary-default text-tiny font-OnestBlack text-center uppercase"
					>
						Game Day /
					</motion.span>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-pureBlack/35 text-tiny font-OnestBold text-center uppercase"
					>
						{dateFormat(date, "mmmm d, yyyy")}
					</motion.span>
				</div>
				<div className="grid grid-cols-3 items-center justify-center gap-12 lg:gap-12">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col items-center justify-center gap-2"
					>
						<Image
							width={1000}
							height={1000}
							src={teams?.home?.logo}
							alt={`${teams?.home?.name} club Logo`}
							className="object-contain object-center w-full h-[75px]"
						/>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-primary-default text-medium font-OnestBlack text-center uppercase italic leading-tight"
						>
							{teams?.home?.name}
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-pureBlack text-tiny font-OnestRegular text-center"
						>
							{teams?.home?.winner}
						</motion.span>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="p-4 grid grid-cols-3 items-center justify-center gap-2"
					>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-pureBlack text-2xl font-OnestBlack text-center"
						>
							{goals?.home}
						</motion.span>
						<span className="text-pureBlack text-2xl font-OnestBlack text-center">
							-
						</span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-pureBlack text-2xl font-OnestBlack text-center"
						>
							{goals?.away}
						</motion.span>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col items-center justify-center gap-2"
					>
						<Image
							width={1000}
							height={1000}
							src={teams?.away?.logo}
							alt={`${teams?.away?.name} club Logo`}
							className="object-contain object-center w-[65px] md:w-[75px] h-[60px] sm:h-[65px] lg:h-[75px]"
						/>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-pureBlack text-medium font-OnestBlack text-center uppercase italic leading-tight"
						>
							{teams?.away?.name}
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-pureBlack text-tiny font-OnestRegular text-center"
						>
							{teams?.away?.winner}
						</motion.span>
					</motion.div>
				</div>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="w-full mx-auto text-pureBlack text-base font-OnestBlack text-center uppercase"
				>
					{league?.name}
				</motion.span>
			</div>
		</>
	);
};

export default LastThreeFixturesCard;
