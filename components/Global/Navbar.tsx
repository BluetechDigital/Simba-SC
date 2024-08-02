"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

// Components
import MegaNavigation from "@/components/Global/MegaNavigation";
import TopNavigation from "@/components/Global/TopNavigation";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	const [menuActive, setMenuActive] = useState(false);

	const handleClick = () => {
		setMenuActive(!menuActive);
	};

	return (
		<>
			<nav
				className={
					styles.navbar + ` navbar z-[999] w-full fixed group bg-transparent`
				}
			>
				<TopNavigation />
				<div className="flex items-center justify-between bg-lightGreyTwo pl-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="w-auto"
					>
						<Link href="/" target="_self" aria-label={`Simba SC Homepage Link`}>
							<Image
								priority
								width={1000}
								height={1000}
								alt="Simba SC Logo"
								src="/img/logos/simba-sc-logo.png"
								className="object-contain object-center w-[65px] md:w-[75px] h-[60px] sm:h-[65px] lg:h-[75px]"
							/>
						</Link>
					</motion.div>
					<div className="w-auto">
						<div className="flex flex-wrap items-center">
							<div className="w-auto hidden lg:block">
								<motion.ul
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="flex items-center gap-8"
								>
									{globalContext?.navbarMenuLinks?.length > 0 ? (
										globalContext?.navbarMenuLinks?.map(
											(item: any, index: number) => (
												<Fragment key={index}>
													<motion.li
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
														className="hidden lg:block"
													>
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className="font-OnestBold font-extrabold text-black hover:text-primary-default tracking-[-0.02rem] text-lg text-center uppercase transition-all ease-in-out duration-500"
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
							</div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="w-auto lg:hidden"
							>
								<button
									onClick={handleClick}
									className="relative z-50 w-auto lg:w-1/12 h-full py-2 px-12 flex flex-col items-center justify-center bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500"
								>
									<span className="hamburger-icon">
										<span
											className={menuActive ? "iconOne-active" : "iconOne"}
										/>
										<span
											className={menuActive ? "iconTwo-active" : "iconTwo"}
										/>
										<span
											className={menuActive ? "iconThree-active" : "iconThree"}
										/>
										<span className="clear" />
									</span>
									<span className="mt-[1px] text-white uppercase font-OnestBold">
										{menuActive ? "Close" : "Menu"}
									</span>
								</button>
							</motion.div>
						</div>
					</div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={handleClick}
						className="w-auto lg:w-1/12 h-full hidden lg:flex flex-col items-center justify-center cursor-pointer p-4 bg-primary-default hover:bg-primary-dark bg-fill bg-no-repeat bg-center transition-all ease-in-out duration-500"
						style={{
							backgroundImage: `url("/svg/background/red-background-dots.png")`,
						}}
					>
						<button className="relative z-50 flex flex-col items-center justify-center">
							<span className="hamburger-icon">
								<span className={menuActive ? "iconOne-active" : "iconOne"} />
								<span className={menuActive ? "iconTwo-active" : "iconTwo"} />
								<span
									className={menuActive ? "iconThree-active" : "iconThree"}
								/>
							</span>
							<span className="text-white uppercase font-OnestBold">
								{menuActive ? "Close" : "Menu"}
							</span>
						</button>
					</motion.div>
				</div>
				{/* Hidden Mega Navigation Menu */}
				<MegaNavigation menuActive={menuActive} setMenuActive={setMenuActive} />
			</nav>
		</>
	);
};

export default Navbar;
