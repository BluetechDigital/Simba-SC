// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IVisitStore} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import VisitStoreCard from "@/components/VisitStore/Cards/VisitStoreCard";

const VisitStore: FC<IVisitStore> = ({title, buttonLink, backgroundImage}) => {
	return (
		<>
			<div
				className="bg-white px-4 py-32 min-h-[50vh] lg:px-10 bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `linear-gradient( 0deg, rgb(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className="lg:container px-0 mx-auto flex flex-col gap-8">
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-2 font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-5xl tracking-[-0.02rem] text-white font-semibold leading-tight"
					>
						{title}
					</motion.h2>
					<VisitStoreCard />
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						className={`${
							buttonLink?.url ? "buttonStyling-alt-two mx-auto" : "hidden"
						}`}
					>
						{buttonLink?.title}
					</Link>
				</div>
			</div>
		</>
	);
};

export default VisitStore;
