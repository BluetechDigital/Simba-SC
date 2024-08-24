// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IVisitStore} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import VisitStoreCard from "@/components/VisitStore/Cards/VisitStoreCard";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const VisitStore: FC<IVisitStore> = ({title, buttonLink, backgroundImage}) => {
	return (
		<>
			<div
				className="bg-white px-4 py-32 min-h-[50vh] lg:px-10 bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `linear-gradient( 0deg, rgb(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className="px-0 flex flex-col gap-8">
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-2 font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-white leading-tight"
					>
						{title}
					</motion.h2>
					<VisitStoreCard />
					<ScrollYProgressReveal tailwindStyling="flex flex-col items-center">
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={`${
								buttonLink?.url ? "buttonStyling-alt-two mx-auto" : "hidden"
							}`}
						>
							{buttonLink?.title}
						</Link>
					</ScrollYProgressReveal>
				</div>
			</div>
		</>
	);
};

export default VisitStore;
