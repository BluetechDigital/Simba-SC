"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Error: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<section
			className="relative h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.10),rgba(0, 0, 0, 0.10)),url("${globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl}")`,
			}}
		>
			<div className="relative z-50 px-10 my-auto overflow-hidden py-44">
				<div className="lg:container p-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="lg:container relative flex flex-col items-baseline justify-center px-4 m-auto"
					>
						<div className="max-w-3xl mx-auto">
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="font-OnestBlack text-center uppercase text-3xl lg:text-7xl 2xl:text-8xl tracking-[-0.02rem] text-white font-semibold xl:leading-[3.75rem]"
							>
								{globalContext?.themesOptionsContent?.errorPageContent?.title}
							</motion.h1>
						</div>
						<div className="max-w-xl mx-auto">
							<Paragraph
								content={
									globalContext?.themesOptionsContent?.errorPageContent
										?.paragraph
								}
								tailwindStyling="mb-6 py-6 font-OnestRegular leading-tight text-white text-lg text-center"
							/>
						</div>
					</motion.div>
					<div className="flex flex-col items-center justify-center mx-auto md:max-w-max">
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							<Link
								href={`${globalContext?.themesOptionsContent?.errorPageContent?.buttonLink?.url}`}
								target={
									globalContext?.themesOptionsContent?.errorPageContent
										?.buttonLink?.target
								}
								aria-label={`${globalContext?.themesOptionsContent?.errorPageContent?.buttonLink?.title}`}
								className={`${
									globalContext?.themesOptionsContent?.errorPageContent
										?.buttonLink?.url
										? ""
										: "hidden"
								} `}
							>
								{
									globalContext?.themesOptionsContent?.errorPageContent
										?.buttonLink?.title
								}
							</Link>
						</motion.span>
					</div>
				</div>
			</div>
			<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-pureBlack from-5% via-pureBlack via-10% to-pureBlack- to-100%" />
		</section>
	);
};

export default Error;
