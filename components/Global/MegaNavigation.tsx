// Imports
import {
	initial,
	stagger,
	navigationMenuStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IMegaNavigation} from "@/types/components";

const MegaNavigation: FC<IMegaNavigation> = ({menuActive, setMenuActive}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={menuActive ? "megaMenu-active" : "megaMenu hidden"}>
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
						<div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-24">
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
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													// viewport={{once: false}}
													variants={navigationMenuStaggerChildren}
													className="self-start"
												>
													<Link
														href={`${item?.node?.url}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														aria-label={`${item?.node?.label}`}
														className="font-XenonNueExtraBold font-extrabold tracking-[-0.05rem] leading-none text-white hover:text-black text-xl sm:text-5xl lg:text-7xl xl:text-9xl text-center uppercase"
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
							<div className="w-full lg:w-1/2"></div>
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
