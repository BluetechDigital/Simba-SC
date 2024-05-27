"use client";

// Imports
import Image from "next/image";
import postHog from "posthog-js";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import Paragraph from "../Elements/Paragraph";
import {fadeInUp, initial, stagger} from "@/animations/animations";

const CookiePolicyCard: FC = () => {
	const [showCookiePolicyCard, setShowCookiePolicyCard] = useState(true);

	const acceptCookies = () => {
		postHog.opt_in_capturing();
		setShowCookiePolicyCard(false);
	};

	const refuseCookies = () => {
		postHog.opt_out_capturing();
		setShowCookiePolicyCard(false);
	};

	return (
		<>
			<div
				className={
					showCookiePolicyCard
						? `fixed bottom-0 left-0 right-0 mx-auto max-w-7xl px-0 z-[999]`
						: `hidden`
				}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="px-6 py-4 mb-3 mx-3 lg:mr-3 bg-white flex flex-col items-center justify-center gap-10 lg:gap-2 border-l-[5px] lg:border-l-[5px] border-solid border-primary-default bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage:
							"url(/svg/background/low-poly-grid-haikei-white-grey.svg)",
					}}
				>
					<div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-10">
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="lg:min-w-[10rem] font-bold font-OverusedGroteskExtraBold text-5xl uppercase tracking-tight text-black leading-none text-center lg:text-left"
						>
							Our Cookie Policies
						</motion.h3>
						<div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
							<Paragraph
								content={`<p>This website uses cookies to enhance the user experience and ensure the proper functioning of the site. By using this website, you agree to the use of cookies in accordance with this <a href="/cookie-policy">Cookie Policy</a>.</p>`}
								tailwindStyling="w-full lg:w-2/3 py-0 text-base text-center lg:text-left text-black"
							/>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="w-full lg:w-1/3 flex items-center justify-center gap-4"
							>
								<motion.button
									onClick={acceptCookies}
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="inline-block px-6 py-3 font-OverusedGroteskExtraBold uppercase text-tiny leading-tight text-white transition-all duration-200 ease-in-out bg-primary-default hover:bg-primary-two"
								>
									Accept Cookies
								</motion.button>
								<motion.button
									onClick={refuseCookies}
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="inline-block px-6 py-3 font-OverusedGroteskExtraBold uppercase text-tiny leading-tight text-white bg-primary-two hover:bg-primary-dark"
								>
									Refuse Cookies
								</motion.button>
							</motion.div>
						</div>
					</div>
					<div className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6 w-full">
						<div className="w-full lg:w-1/2">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-bold font-OverusedGroteskExtraBold text-4xl sm:text-5xl uppercase tracking-tight text-black leading-tight text-center lg:text-left leading-none"
							>
								Discover Highlights & More
							</motion.h3>
						</div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full lg:w-1/2 py-3 px-5 flex flex-col lg:flex-row items-center justify-between gap-4 bg-black rounded-lg bg-center bg-no-repeat bg-cover"
							style={{
								backgroundImage:
									"linear-gradient(0deg,rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0.85)),url(/svg/background/grid-background-12-white.svg)",
							}}
						>
							<span className="font-bold font-OverusedGroteskExtraBold uppercase text-xl text-white">
								Sponsored By
							</span>
							<div className="flex items-center justify-center gap-4">
								<Image
									width={1000}
									height={1000}
									alt="M-Bet Sponsor Logo"
									src="/img/logos/mbet_logo_white.png"
									className="object-contain object-center w-full h-[40px]"
								/>
								<Image
									width={1000}
									height={1000}
									alt="M-Bet Sponsor Logo"
									src="/img/logos/azam_white.png"
									className="object-contain object-center w-full h-[40px]"
								/>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default CookiePolicyCard;
