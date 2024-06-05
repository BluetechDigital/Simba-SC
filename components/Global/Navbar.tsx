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
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import MegaNavigation from "./MegaNavigation";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	const [menuActive, setMenuActive] = useState(false);

	const handleClick = () => {
		setMenuActive(!menuActive);
	};

	return (
		<>
			<div
				className={styles.navbar + ` z-[999] w-full fixed group bg-transparent`}
			>
				<div className="py-0 bg-white flex items-center justify-between gap-4 px-4">
					<div className="flex items-center justify-between gap-4">
						{globalContext?.themesOptionsContent?.topNavigation?.sponsorsIcons
							?.length > 0 ? (
							globalContext?.themesOptionsContent?.topNavigation?.sponsorsIcons?.map(
								(item: any, index: number) => (
									<Fragment key={index}>
										<Image
											alt={item?.altText}
											src={item?.sourceUrl}
											width={
												item?.mediaDetails?.width
													? item?.mediaDetails?.width
													: 1000
											}
											height={
												item?.mediaDetails?.height
													? item?.mediaDetails?.height
													: 1000
											}
											className="object-contain object-center w-full h-[50px]"
										/>
									</Fragment>
								)
							)
						) : (
							<></>
						)}
					</div>
					<div className="flex items-center justify-between gap-4">
						<Link
							href={`${globalContext?.themesOptionsContent?.topNavigation?.foundationPageLink?.url}`}
							target={`${
								globalContext?.themesOptionsContent?.topNavigation
									?.foundationPageLink?.target
									? globalContext?.themesOptionsContent?.topNavigation
											?.foundationPageLink?.target
									: "_self"
							}`}
							aria-label={`Chelsea Foundation`}
							className="hidden lg:block font-XenonNueRegular tracking-[0.07rem] uppercase text-black hover:hover:text-accent-two text-base text-center transition-all ease-in-out duration-500"
						>
							{
								globalContext?.themesOptionsContent?.topNavigation
									?.foundationPageLink?.title
							}
						</Link>
						<div className="hidden sm:flex mx-6 h-[25px] w-[1px] bg-grey"></div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								styles.socialLinks +
								" hidden sm:flex items-center justify-center gap-6 text-center"
							}
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.facebookLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-primary-default"
									href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
									aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.facebookLink?.target
									}
								>
									<svg
										width="100%"
										height="100%"
										version="1.1"
										viewBox="0 0 512 512"
										style={{
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										className="w-[22.5px] h-[22.5px] fill-primary-default hover:fill-primary-dark transition-all duration-500 ease-in-out"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.twitterLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-primary-default"
									href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
									aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.twitterLink?.target
									}
								>
									<svg
										version="1.1"
										id="Layer_1"
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										style={{
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										xmlns="http://www.w3.org/2000/svg"
										className="w-[22.5px] h-[22.5px] fill-primary-default hover:fill-primary-dark transition-all duration-500 ease-in-out"
									>
										<path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
									</svg>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.linkedinLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-primary-default"
									href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
									aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink.title}`}
									target={
										globalContext?.themesOptionsContent?.linkedinLink?.target
									}
								>
									<svg
										height="100%"
										width="100%"
										version="1.1"
										viewBox="0 0 512 512"
										style={{
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										className="w-[22.5px] h-[22.5px] fill-primary-default hover:fill-primary-dark transition-all duration-500 ease-in-out"
									>
										<path
											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.instagramLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-primary-default"
									href={`${globalContext?.themesOptionsContent?.instagramLink?.url}`}
									aria-label={`Instagram Social Media Link ${globalContext?.themesOptionsContent?.instagramLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.instagramLink?.target
									}
								>
									<svg
										fill="#ea1d25"
										viewBox="0 0 32 32"
										xmlns="http://www.w3.org/2000/svg"
										className="w-[30px] h-[30px] fill-primary-default hover:fill-primary-dark transition-all duration-500 ease-in-out"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
											<path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
										</g>
									</svg>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.tiktokLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-primary-default"
									href={`${globalContext?.themesOptionsContent?.tiktokLink?.url}`}
									aria-label={`Tiktok Social Media Link ${globalContext?.themesOptionsContent?.tiktokLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.tiktokLink?.target
									}
								>
									<svg
										id="icons"
										fill="#ea1d25"
										viewBox="0 0 512 512"
										className="w-[22.5px] h-[22.5px] fill-primary-default hover:fill-primary-dark transition-all duration-500 ease-in-out"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
										</g>
									</svg>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`${
									globalContext?.themesOptionsContent?.youtubeLink
										? "block"
										: "hidden"
								}`}
							>
								<Link
									className="inline-block text-primary-default"
									href={`${globalContext?.themesOptionsContent?.youtubeLink?.url}`}
									aria-label={`Youtube Social Media Link ${globalContext?.themesOptionsContent?.youtubeLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.youtubeLink?.target
									}
								>
									<svg
										version="1.1"
										fill="#000000"
										viewBox="0 -7 48 48"
										className="w-[28px] h-[28px]"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<g
												id="Icons"
												stroke="none"
												strokeWidth="1"
												fill="none"
												fillRule="evenodd"
											>
												<g
													id="Color-"
													transform="translate(-200.000000, -368.000000)"
													className="fill-primary-default hover:fill-primary-dark transition-all duration-500 ease-in-out"
												>
													<path
														d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
														id="Youtube"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</div>
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
															className="font-XenonNueExtraBold font-extrabold tracking-[0.05rem] text-black hover:text-primary-default text-paragraph text-center uppercase transition-all ease-in-out duration-500"
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
									<span className="mt-[1px] text-white uppercase font-XenonNueBold tracking-[0.05rem]">
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
							<span className="text-white uppercase font-XenonNueBold tracking-[0.05rem]">
								{menuActive ? "Close" : "Menu"}
							</span>
						</button>
					</motion.div>
				</div>
				{/* Hidden Mega Navigation Menu */}
				<MegaNavigation menuActive={menuActive} setMenuActive={setMenuActive} />
			</div>
		</>
	);
};

export default Navbar;
