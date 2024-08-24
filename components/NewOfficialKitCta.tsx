// Imports
import {
	fadeIn,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {INewOfficialKitCta} from "@/types/components/index";

const NewOfficialKitCta: FC<INewOfficialKitCta> = ({
	title,
	link,
	image,
	ctaTitle,
	imageTwo,
}) => {
	return (
		<div
			className="bg-primary-default px-4 py-32 lg:px-10 bg-no-repeat bg-cover bg-center"
			style={{
				backgroundImage: `url("/svg/background/stacked-steps-haikei-red.svg")`,
			}}
		>
			<div className="px-0 flex flex-col gap-8">
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-white leading-tight"
				>
					{title}
				</motion.h2>
				<div className="relative p-6 bg-pureBlack overflow-hidden">
					<div className="flex flex-wrap p-8 -m-7">
						<div className="w-full lg:w-3/12 p-7">
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className="lg:pt-7 max-w-md"
							>
								<motion.h2
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="font-OnestBlack text-left uppercase text-3xl lg:text-5xl tracking-[-0.02rem] text-white font-semibold leading-tight mb-6 lg:mb-12"
								>
									{ctaTitle}
								</motion.h2>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex flex-wrap gap-4"
								>
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className={`${link?.url ? "buttonStyling" : "hidden"}`}
									>
										{link?.title}
									</Link>
								</motion.div>
							</motion.div>
						</div>
						<div className="w-full lg:w-9/12 lg:p-7">
							<motion.div
								viewport={{once: true}}
								initial={slideInRightInitial}
								whileInView={slideInRightFinish}
								className="flex flex-col md:flex-row -m-3"
							>
								<div className="w-full md:w-1/2 lg:w-9/12 p-3">
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className="group"
									>
										<div className="relative overflow-hidden h-[550px]">
											<Image
												src={image?.sourceUrl}
												alt={`${image?.altText}`}
												width={
													image?.mediaDetails?.width
														? image?.mediaDetails?.width
														: 500
												}
												height={
													image?.mediaDetails?.height
														? image?.mediaDetails?.height
														: 500
												}
												className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-1000 ease-in-out"
											/>
											<div className="absolute w-full h-full p-6 bottom-0 bg-pureBlack/20 group-hover:bg-pureBlack/30 flex flex-col items-center lg:items-baseline justify-end transition-all duration-1000 ease-in-out">
												<span className="h-[5px] bg-primary-default w-full  max-w-xs"></span>
												<motion.h3
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className="font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-5xl tracking-[-0.02rem] text-white font-semibold"
												>
													t-shirt woman
												</motion.h3>
											</div>
										</div>
									</Link>
								</div>
								<div className="w-full md:w-1/2 lg:w-3/12 p-3">
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className="group"
									>
										<div className="relative overflow-hidden h-[550px]">
											<Image
												src={imageTwo?.sourceUrl}
												alt={`${imageTwo?.altText}`}
												width={
													imageTwo?.mediaDetails?.width
														? imageTwo?.mediaDetails?.width
														: 500
												}
												height={
													imageTwo?.mediaDetails?.height
														? imageTwo?.mediaDetails?.height
														: 500
												}
												className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-1000 ease-in-out"
											/>
											<div className="flex flex-col gap-2 absolute left-1/2 bottom-2 transform -translate-x-1/2">
												<span className="h-[5px] bg-primary-default w-full"></span>
												<motion.h3
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className="font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-lg tracking-[-0.02rem] text-white font-semibold whitespace-nowrap"
												>
													Away Kit 24/25
												</motion.h3>
											</div>
										</div>
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewOfficialKitCta;
