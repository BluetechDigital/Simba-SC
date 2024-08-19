"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ILatestNewsGrid} from "@/types/components/index";

// Components
import LatestNewsGridCard from "@/components/Cards/LatestNewsGridCard";

const LatestNewsGrid: FC<ILatestNewsGrid> = ({
	title,
	image,
	ctaLink,
	buttonLink,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="bg-pureBlack px-4 py-14 lg:px-10 mx-auto flex flex-col gap-8">
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-5xl tracking-[-0.02rem] text-white font-semibold xl:leading-[3.75rem]"
				>
					{title}
				</motion.h2>
				<div className="flex flex-col-reverse lg:flex-xol gap-2 lg:flex-row">
					<div className="flex flex-col gap-2 w-full lg:w-1/4">
						{globalContext?.news?.length > 0 ? (
							globalContext?.news
								?.slice(1, 3)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											className="w-full"
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<LatestNewsGridCard
												slug={item?.node?.slug}
												date={item?.node?.date}
												title={item?.node?.title}
												featuredImage={item?.node?.featuredImage}
												tailwindStyling={"w-full h-fill min-h-[375px]"}
											/>
										</motion.div>
									</Fragment>
								))
						) : (
							<></>
						)}
						<Link
							href={`${ctaLink?.url}`}
							target={ctaLink?.target}
							aria-label={`${ctaLink?.title}`}
							className="block lg:hidden"
						>
							<Image
								src={image?.sourceUrl}
								alt={`${image?.altText}`}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 500
								}
								className={
									image?.sourceUrl
										? `bg-white block w-full h-fill max-h-[375px] object-cover object center`
										: `hidden`
								}
							/>
						</Link>
					</div>
					<div className="flex flex-col w-full lg:w-1/2">
						{globalContext?.news?.length > 0 ? (
							globalContext?.news
								?.slice(0, 1)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											className="w-full"
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<LatestNewsGridCard
												slug={item?.node?.slug}
												date={item?.node?.date}
												title={item?.node?.title}
												featuredImage={item?.node?.featuredImage}
												tailwindStyling={
													"w-full h-fill min-h-[375px] lg:min-h-[758px]"
												}
											/>
										</motion.div>
									</Fragment>
								))
						) : (
							<></>
						)}
					</div>
					<div className="hidden lg:flex flex-col gap-2 w-full lg:w-1/2">
						<Link
							href={`${ctaLink?.url}`}
							target={ctaLink?.target}
							aria-label={`${ctaLink?.title}`}
						>
							<Image
								src={image?.sourceUrl}
								alt={`${image?.altText}`}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 500
								}
								className={
									image?.sourceUrl
										? `bg-white block w-full h-fill max-h-[375px] object-cover object center`
										: `hidden`
								}
							/>
						</Link>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
							{globalContext?.news?.length > 0 ? (
								globalContext?.news
									?.slice(3, 5)
									?.map((item: any, index: number) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												className="w-full"
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<LatestNewsGridCard
													slug={item?.node?.slug}
													date={item?.node?.date}
													title={item?.node?.title}
													featuredImage={item?.node?.featuredImage}
													tailwindStyling={"w-full h-fill min-h-[375px]"}
												/>
											</motion.div>
										</Fragment>
									))
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
				<Link
					href={`${buttonLink?.url}`}
					target={buttonLink?.target}
					className={`${
						buttonLink?.url ? "buttonStyling-alt mt-5 mx-auto" : "hidden"
					}`}
				>
					{buttonLink?.title}
				</Link>
			</div>
		</>
	);
};

export default LatestNewsGrid;
