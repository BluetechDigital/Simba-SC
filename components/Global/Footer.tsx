"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
	navigationMenuStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer
			className={styles.footer + " footer p-0 h-full min-h-[50vh] bg-white"}
		>
			<div className="min-h-[50vh]"></div>
			<div className="lg:container mx-auto px-4 py-10 lg:pb-2">
				<div className="flex flex-col lg:flex-row lg:items-center justify-between">
					<motion.ul
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center lg:justify-start -m-5 px-6 py-2 gap-6"
					>
						{globalContext?.megaNavigationUsefulSublinks?.length > 0 ? (
							globalContext?.megaNavigationUsefulSublinks?.map(
								(item: any, index: number) => (
									<Fragment key={index}>
										<motion.li
											custom={index}
											initial={initial}
											whileInView="animate"
											variants={navigationMenuStaggerChildren}
										>
											<Link
												target={`${
													item?.node?.target ? item?.node?.target : "_self"
												}`}
												href={`${item?.node?.url}`}
												aria-label={`${item?.node?.label}`}
												className="font-OnestBold leading-none text-pureBlack hover:text-primary-default text-xl text-center"
											>
												{item?.node?.label}
											</Link>
										</motion.li>
									</Fragment>
								)
							)
						) : (
							<></>
						)}
					</motion.ul>
					<motion.ul
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col sm:flex-row -m-6 w-auto gap-2 sm:gap-6 p-6"
					>
						{globalContext?.copyrightLinks?.length > 0 ? (
							globalContext?.copyrightLinks?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.li
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Link
											href={`${item?.node?.url}`}
											aria-label={`${item?.node?.label}`}
											target={`${
												item?.node?.target ? item?.node?.target : "_self"
											}`}
											className="font-OnestRegular text-pureBlack transition-all duration-200 ease-in-out text-tiny hover:text-primary-default"
										>
											{item?.node?.label}
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.ul>
				</div>
				<div className="py-2 border-b border-primary-default" />
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center justify-between py-2">
					<motion.div
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={fadeIn}
						className="w-full flex flex-col sm:flex-row  items-center justify-start p-3"
					>
						<Paragraph
							content={globalContext?.themesOptionsContent?.copyrightText}
							tailwindStyling="font-OnestRegular max-w-lg mx-auto lg:mx-0 text-pureBlack text-tiny text-center lg:text-left"
						/>
					</motion.div>
					<motion.ul
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full p-3 flex flex-col sm:flex-row  items-center justify-center gap-4"
					>
						{globalContext?.themesOptionsContent?.simbaApps?.length > 0 ? (
							globalContext?.themesOptionsContent?.simbaApps?.map(
								(item: any, index: number) => (
									<Fragment key={index}>
										<motion.li
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Link
												href={`${item?.link?.url}`}
												aria-label={`${item?.link?.label}`}
												target={`${
													item?.link?.target ? item?.link?.target : "_self"
												}`}
												className="font-OnestRegular text-pureBlack transition-all duration-200 ease-in-out text-tiny hover:text-primary-default"
											>
												<Image
													width={
														item?.image?.mediaDetails?.width
															? item?.image?.mediaDetails?.width
															: 500
													}
													height={
														item?.image?.mediaDetails?.height
															? item?.image?.mediaDetails?.height
															: 500
													}
													src={item?.image?.sourceUrl}
													alt={`${item?.image?.altText}`}
													className="object-contain object-center w-full h-[40px]"
												/>
											</Link>
										</motion.li>
									</Fragment>
								)
							)
						) : (
							<></>
						)}
					</motion.ul>
					<div className="w-full flex flex-col sm:flex-row items-center justify-end p-3">
						<Link
							target="_blank"
							href={`https://bluetech-digital.co.uk`}
							className="lg:inline-block items-center justify-center text-pureBlack hover:text-accent-default hover:underline"
						>
							<span className="flex items-center justify-center lg:justify-left gap-2">
								<Image
									priority
									width={500}
									height={500}
									alt="BluetechDigital Logo"
									src="/img/logos/BluetechDigital-Logo-color.png"
									className="object-contain object-center w-[25px] h-[25px]"
								/>
								<Paragraph
									content={`BluetechDigital`}
									tailwindStyling="font-OnestRegular max-w-lg mx-auto lg:mx-0 text-tiny text-center lg:text-left"
								/>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
