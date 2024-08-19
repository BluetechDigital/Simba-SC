"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
	navigationMenuStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {IMegaNavigation} from "@/types/components/Global";

// Styling
import styles from "@/styles/components/Elements/NavigationMenu.module.scss";

// Components
import MegaNavVideoWrapper from "@/components/Elements/MegaNavVideoWrapper";

const MegaNavigation: FC<IMegaNavigation> = ({menuActive, setMenuActive}) => {
	const globalContext = useGlobalContext();

	const [aboutTheClubSublinksOpen, setAboutTheClubSublinksOpen]: any =
		useState(false);
	const [newsSublinksOpen, setNewsSublinksOpen]: any = useState(false);
	const [fansSublinksOpen, setFansSublinksOpen] = useState(false);
	const [communitySublinksOpen, setCommunitySublinksOpen]: any =
		useState(false);
	const [ourHistorySublinksOpen, setOurHistorySublinksOpen]: any =
		useState(false);
	const [
		benjaminMkapaStadiumSublinksOpen,
		setBenjaminMkapaStadiumSublinksOpen,
	]: any = useState(false);
	const [
		partnershipsAdvertisingSublinksOpen,
		setPartnershipsAdvertisingSublinksOpen,
	]: any = useState(false);

	// Hides or Display About The Club Sublinks
	const displayAboutTheClubSublinks = () => {
		setNewsSublinksOpen(false);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(!aboutTheClubSublinksOpen);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	// Hides or Display News Sublinks
	const displayNewsSublinks = () => {
		setNewsSublinksOpen(!newsSublinksOpen);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	// Hides or Display Fans Sublinks
	const displayFansSublinks = () => {
		setNewsSublinksOpen(false);
		setFansSublinksOpen(!fansSublinksOpen);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	// Hides or Display Community Sublinks
	const displayCommunitySublinks = () => {
		setNewsSublinksOpen(false);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(!communitySublinksOpen);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	// Hides or Display Our History Sublinks
	const displayOurHistorySublinks = () => {
		setNewsSublinksOpen(false);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(!ourHistorySublinksOpen);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	// Hides or Display Benjamin Mkapa Stadium Sublinks
	const displayBenjaminMkapaStadiumSublinks = () => {
		setNewsSublinksOpen(false);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(!benjaminMkapaStadiumSublinksOpen);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	// Hides or Display Partnerships Advertising Sublinks
	const displayPartnershipsAdvertisingSublinks = () => {
		setNewsSublinksOpen(false);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(
			!partnershipsAdvertisingSublinksOpen
		);
	};

	const resetMenu = () => {
		setMenuActive(false);
		setNewsSublinksOpen(false);
		setFansSublinksOpen(false);
		setCommunitySublinksOpen(false);
		setOurHistorySublinksOpen(false);
		setAboutTheClubSublinksOpen(false);
		setBenjaminMkapaStadiumSublinksOpen(false);
		setPartnershipsAdvertisingSublinksOpen(false);
	};

	return (
		<>
			<div
				className={
					menuActive
						? styles.megaNavigation + " megaMenu-active"
						: styles.megaNavigation + " megaMenu hidden"
				}
			>
				<div
					className="megaMenu-content overflow-y-visible overflow-x-hidden min-h-screen h-full w-full py-20 px-10 flex flex-col bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `linear-gradient(
						0deg,
						rgba(234, 29, 37, 0),
						rgba(234, 29, 37, 0),
						rgba(234, 29, 37, 0),
						rgba(234, 29, 37, 0.10),
						rgba(234, 29, 37, 0.10),
						rgba(234, 29, 37, 0.45),
						rgba(234, 29, 37, 0.50)),
						url("/img/background/red-background-dots.png")`,
					}}
				>
					<div className="max-w-9xl mx-auto h-full w-full px-0 lg:px-10 pb-32 pt-32 lg:pt-20 lg:pb-0 flex flex-col justify-between gap-20 lg:gap-10">
						<div className="flex flex-col lg:flex-row items-start lg:gap-10 xl:gap-24">
							{/* Mobile */}
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: false}}
								className={
									menuActive
										? "w-full lg:w-1/2 flex flex-col items-baseline justify-end gap-2"
										: "hidden"
								}
							>
								{globalContext?.megaNavigationLinks?.length > 0 ? (
									globalContext?.megaNavigationLinks?.map(
										(item: any, index: number) => (
											<Fragment key={index}>
												{item?.node?.url === "/about-the-club" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayAboutTheClubSublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																aboutTheClubSublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																aboutTheClubSublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{aboutTheClubSublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext?.aboutTheClubSublinks
																			?.length > 0 ? (
																			globalContext?.aboutTheClubSublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : item?.node?.url === "/news" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayNewsSublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																newsSublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																newsSublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{newsSublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext?.newsSublinks?.length > 0 ? (
																			globalContext?.newsSublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : item?.node?.url === "/fans" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayFansSublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																fansSublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																fansSublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{fansSublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext?.fansSublinks?.length > 0 ? (
																			globalContext?.fansSublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : item?.node?.url === "/community" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayCommunitySublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																communitySublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																communitySublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{communitySublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext?.communitySublinks?.length >
																		0 ? (
																			globalContext?.communitySublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : item?.node?.url === "/our-history" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayOurHistorySublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																ourHistorySublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																ourHistorySublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{ourHistorySublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext?.ourHistorySublinks?.length >
																		0 ? (
																			globalContext?.ourHistorySublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : item?.node?.url === "/benjamin-mkapa-stadium" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayBenjaminMkapaStadiumSublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																benjaminMkapaStadiumSublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																benjaminMkapaStadiumSublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{benjaminMkapaStadiumSublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext?.benjaminMkapaStadiumSublinks
																			?.length > 0 ? (
																			globalContext?.benjaminMkapaStadiumSublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : item?.node?.url === "/partnerships-advertising" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															onClick={displayPartnershipsAdvertisingSublinks}
															aria-label={`${item?.node?.label}`}
															className={`${
																partnershipsAdvertisingSublinksOpen
																	? "text-tertiary-two"
																	: "text-white"
															} font-OnestBlack cursor-pointer font-extrabold tracking-[-0.05rem] leading-none hover:text-pureBlack text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-left uppercase`}
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																partnershipsAdvertisingSublinksOpen
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{partnershipsAdvertisingSublinksOpen ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
																				: "hidden"
																		}
																	>
																		{globalContext
																			?.partnershipsAdvertisingSublinks
																			?.length > 0 ? (
																			globalContext?.partnershipsAdvertisingSublinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								onClick={resetMenu}
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
																</>
															) : (
																<></>
															)}
														</div>
													</>
												) : (
													<></>
												)}
											</Fragment>
										)
									)
								) : (
									<></>
								)}
							</motion.ul>
							{/* Desktop */}
							<div className="hidden lg:flex w-full lg:w-1/2 flex-col gap-12">
								{aboutTheClubSublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.aboutTheClubSublinks?.length > 0 ? (
												globalContext?.aboutTheClubSublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
									</>
								) : newsSublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.newsSublinks?.length > 0 ? (
												globalContext?.newsSublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
									</>
								) : fansSublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: false}}
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.fansSublinks?.length > 0 ? (
												globalContext?.fansSublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
										<motion.div
											viewport={{once: false}}
											initial={slideInRightInitial}
											whileInView={slideInRightFinish}
											className={
												menuActive
													? "h-fit mt-6 lg:mt-0 w-full xl:w-full"
													: "hidden"
											}
										>
											{globalContext?.themesOptionsContent?.megaNavigation
												?.displayFansVideoElement ? (
												<MegaNavVideoWrapper>
													{
														globalContext?.themesOptionsContent?.megaNavigation
															?.fansVideoElement
													}
												</MegaNavVideoWrapper>
											) : (
												<></>
											)}
										</motion.div>
									</>
								) : communitySublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.communitySublinks?.length > 0 ? (
												globalContext?.communitySublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
									</>
								) : ourHistorySublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.ourHistorySublinks?.length > 0 ? (
												globalContext?.ourHistorySublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
									</>
								) : benjaminMkapaStadiumSublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.benjaminMkapaStadiumSublinks?.length >
											0 ? (
												globalContext?.benjaminMkapaStadiumSublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
									</>
								) : partnershipsAdvertisingSublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 my-6 p-4 border-l-2 border-tertiary-two"
													: "hidden"
											}
										>
											{globalContext?.partnershipsAdvertisingSublinks?.length >
											0 ? (
												globalContext?.partnershipsAdvertisingSublinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	onClick={resetMenu}
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-OnestRegular font-normal leading-none text-white hover:text-pureBlack text-lg text-center"
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
									</>
								) : (
									<></>
								)}
							</div>
						</div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: false}}
							className={
								menuActive
									? "flex flex-col items-baseline justify-center gap-6"
									: "hidden"
							}
						>
							<span className="font-OnestThin font-semibold text-paragraph tracking-[0.02rem] text-white text-center">
								About Simba
							</span>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: false}}
								className="flex flex-col gap-0"
							>
								{globalContext?.navbarMenuLinks?.length > 0 ? (
									globalContext?.navbarMenuLinks?.map(
										(item: any, index: number) => (
											<Fragment key={index}>
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: false}}
													variants={navigationMenuStaggerChildren}
												>
													<Link
														onClick={resetMenu}
														href={`${item?.node?.url}`}
														aria-label={`${item?.node?.label}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														className="font-OnestBlack font-extrabold tracking-none leading-none text-tertiary-two hover:text-pureBlack text-5xl text-center uppercase"
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
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: false}}
							className="flex items-center justify-between gap-10"
						>
							<div className="hidden lg:block w-full lg:w-1/4" />
							<div
								className={
									menuActive
										? "w-full flex flex-col items-end justify-center gap-6 py-10 pb-20 lg:pb-10"
										: "hidden"
								}
							>
								<span className="font-OnestThin font-semibold text-paragraph tracking-[0.02rem] text-white text-center">
									Useful Links
								</span>
								<motion.ul
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: false}}
									className={
										menuActive
											? "w-full lg:w-1/2 flex flex-col items-center justify-end gap-0"
											: "hidden"
									}
								>
									{globalContext?.megaNavigationUsefulSublinks?.length > 0 ? (
										globalContext?.megaNavigationUsefulSublinks?.map(
											(item: any, index: number) => (
												<Fragment key={index}>
													<motion.li
														custom={index}
														initial={initial}
														className="self-end"
														whileInView="animate"
														variants={navigationMenuStaggerChildren}
													>
														<Link
															onClick={resetMenu}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															href={`${item?.node?.url}`}
															aria-label={`${item?.node?.label}`}
															className="font-OnestBold leading-none text-white hover:text-pureBlack text-xl lg:text-xl text-center"
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
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MegaNavigation;
