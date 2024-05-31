// Imports
import {
	initial,
	stagger,
	initialTwo,
	fadeIn,
	slideInRightFinish,
	slideInRightInitial,
	navigationMenuStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {IMegaNavigation} from "@/types/components";
import MegaNavVideoWrapper from "../Elements/MegaNavVideoWrapper";

const MegaNavigation: FC<IMegaNavigation> = ({menuActive, setMenuActive}) => {
	const globalContext = useGlobalContext();

	const [fansMenuVideo, setFansMenuVideo] = useState(false);
	const [communitySublinksOpen, setCommunitySublinksOpen]: any =
		useState(false);

	const revealFansMenuVideo = () => {
		setFansMenuVideo(!fansMenuVideo);
		setCommunitySublinksOpen(false);
	};

	// Hides or Display Community Sublinks
	const displayCommunitySublinks = () => {
		setFansMenuVideo(false);
		setCommunitySublinksOpen(!communitySublinksOpen);
	};

	const removeFansMenuVideo = () => {
		setFansMenuVideo(false);
	};

	const toggleMenu = () => {
		setMenuActive(!menuActive);
		setFansMenuVideo(!fansMenuVideo);
	};

	return (
		<>
			<div
				// onMouseLeave={removeFansMenuVideo}
				className={menuActive ? "megaMenu-active" : "megaMenu hidden"}
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
						url("/svg/background/red-background-dots.png")`,
					}}
				>
					<div className="max-w-9xl mx-auto h-full w-full px-0 lg:px-10 pb-32 pt-32 lg:pt-20 lg:pb-0 flex flex-col justify-between gap-20 lg:gap-10">
						<div className="flex flex-col lg:flex-row items-start lg:gap-10 xl:gap-24">
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
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
												{item?.node?.url === "/community" ? (
													<>
														<motion.span
															initial={initialTwo}
															whileInView={fadeIn}
															// viewport={{once: true}}
															onClick={displayCommunitySublinks}
															aria-label={`${item?.node?.label}`}
															className="font-XenonNueExtraBold cursor-pointer font-extrabold tracking-[-0.05rem] leading-none text-white hover:text-black text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-center uppercase"
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
																		// viewport={{once: true}}
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-1 my-6 p-4 border-l-2 border-accent-two"
																				: "hidden"
																		}
																	>
																		<li>
																			<Link
																				target="_self"
																				href={item?.node?.url}
																				aria-label={`${item?.node?.label}`}
																				className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
																			>
																				{item?.node?.label}
																			</Link>
																		</li>
																		{globalContext?.megaNavigationLinks
																			?.length > 0 ? (
																			globalContext?.megaNavigationLinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							// viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
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
															// viewport={{once: true}}
															onClick={revealFansMenuVideo}
															aria-label={`${item?.node?.label}`}
															className="font-XenonNueExtraBold cursor-pointer font-extrabold tracking-[-0.05rem] leading-none text-white hover:text-black text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-center uppercase"
														>
															{item?.node?.label}
														</motion.span>
														<div
															className={
																fansMenuVideo
																	? "w-full flex lg:hidden"
																	: "hidden"
															}
														>
															{fansMenuVideo ? (
																<>
																	<motion.ul
																		initial={initial}
																		variants={stagger}
																		whileInView="animate"
																		// viewport={{once: true}}
																		className={
																			menuActive
																				? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-1 my-6 p-4 border-l-2 border-accent-two"
																				: "hidden"
																		}
																	>
																		<li>
																			<Link
																				target="_self"
																				href={item?.node?.url}
																				aria-label={`${item?.node?.label}`}
																				className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
																			>
																				{item?.node?.label}
																			</Link>
																		</li>
																		{globalContext?.megaNavigationLinks
																			?.length > 0 ? (
																			globalContext?.megaNavigationLinks?.map(
																				(item: any, index: number) => (
																					<Fragment key={index}>
																						<motion.li
																							custom={index}
																							initial={initial}
																							whileInView="animate"
																							// viewport={{once: false}}
																							variants={
																								navigationMenuStaggerChildren
																							}
																						>
																							<Link
																								href={`${item?.node?.url}`}
																								target={`${
																									item?.node?.target
																										? item?.node?.target
																										: "_self"
																								}`}
																								aria-label={`${item?.node?.label}`}
																								className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
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
													<motion.li
														custom={index}
														initial={initial}
														whileInView="animate"
														// viewport={{once: false}}
														variants={navigationMenuStaggerChildren}
														className="self-start"
													>
														<Link
															onClick={toggleMenu}
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className="font-XenonNueExtraBold font-extrabold tracking-[-0.05rem] leading-none text-white hover:text-black text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-center uppercase"
														>
															{item?.node?.label}
														</Link>
													</motion.li>
												)}
											</Fragment>
										)
									)
								) : (
									<></>
								)}
							</motion.ul>
							<div className="hidden lg:flex w-full lg:w-1/2 flex-col gap-12">
								{communitySublinksOpen ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											// viewport={{once: true}}
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-1 my-6 p-4 border-l-2 border-accent-two"
													: "hidden"
											}
										>
											<li>
												<Link
													href="/community"
													target="_self"
													aria-label="Community page link"
													className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
												>
													Community
												</Link>
											</li>
											{globalContext?.megaNavigationLinks?.length > 0 ? (
												globalContext?.megaNavigationLinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																// viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
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
								) : fansMenuVideo ? (
									<>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className={
												menuActive
													? "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-1"
													: "hidden"
											}
										>
											<li>
												<Link
													href="/fans"
													target="_self"
													aria-label="fans page link"
													className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
												>
													Fans
												</Link>
											</li>
											{globalContext?.megaNavigationLinks?.length > 0 ? (
												globalContext?.megaNavigationLinks?.map(
													(item: any, index: number) => (
														<Fragment key={index}>
															<motion.li
																custom={index}
																initial={initial}
																whileInView="animate"
																// viewport={{once: false}}
																variants={navigationMenuStaggerChildren}
															>
																<Link
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	className="font-XenonNueRegular font-normal tracking-[0.05rem] leading-none text-white hover:text-black text-lg text-center"
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
											viewport={{once: true}}
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
								) : (
									<></>
								)}
							</div>
						</div>
						<div
							className={
								menuActive
									? "flex flex-col items-baseline justify-center gap-6"
									: "hidden"
							}
						>
							<span className="font-OverusedGroteskLight font-semibold text-paragraph tracking-[0.02rem] text-white text-center">
								About Simba
							</span>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
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
													// viewport={{once: false}}
													variants={navigationMenuStaggerChildren}
												>
													<Link
														href={`${item?.node?.url}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														aria-label={`${item?.node?.label}`}
														className="font-XenonNueExtraBold font-extrabold tracking-none leading-none text-accent-two hover:text-black text-5xl text-center uppercase"
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
						<div className="flex items-center justify-between gap-10">
							<div className="hidden lg:block w-full lg:w-1/4" />
							<div
								className={
									menuActive
										? "w-full flex flex-col items-end justify-center gap-6 py-10 pb-20 lg:pb-10"
										: "hidden"
								}
							>
								<span className="font-OverusedGroteskLight font-semibold text-paragraph tracking-[0.02rem] text-white text-center">
									Useful Links
								</span>
								<motion.ul
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
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
														whileInView="animate"
														// viewport={{once: true}}
														variants={navigationMenuStaggerChildren}
														className="self-end"
													>
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className="font-XenonNueBold leading-none text-white hover:text-black text-xl lg:text-xl text-center"
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MegaNavigation;
