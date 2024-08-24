// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";
import {ITrophyCabinetBanner} from "@/types/components/index";

// Styling
import styles from "@/styles/components/TrophyCabinetBanner.module.scss";

// Components
import Title from "@/components/Elements/Title";

const TrophyCabinetBanner: FC<ITrophyCabinetBanner> = ({
	title,
	paragraph,
	buttonLink,
	trophyCabinet,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className={
					styles.trophyCabinetBanner +
					" trophyCabinetBanner bg-primary-default bg-no-repeat bg-cover bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className="lg:max-w-[1700px] mx-auto py-14 px-4 flex flex-col gap-8">
					<Title
						content={title}
						tailwindStyling="title max-w-2xl font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-pureBlack leading-tight"
					/>
					<div className="flex flex-col lg:flex-row items-center justify-center"></div>
				</div>
			</div>
		</>
	);
};

export default TrophyCabinetBanner;
