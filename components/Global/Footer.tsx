// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer
			className={
				styles.footer +
				" py-4 px-0 overflow-hidden bg-white border-t-4 border-black border-solid"
			}
		>
			<section className="pt-20">
				<div className="container mx-auto px-4">
					<div className="mb-16 pb-6 border-b border-grey">
						<div className="flex flex-wrap items-center -m-4">
							<div className="w-full lg:w-auto p-4">
								<Link
									href="/"
									target="_self"
									aria-label={`Simba SC Homepage Link`}
								>
									<Image
										priority
										width={1000}
										height={1000}
										alt="Simba SC Logo"
										src="/img/logos/simba-sc-logo.png"
										className="object-contain object-center w-[65px] md:w-[75px] h-[60px] sm:h-[65px] lg:h-[75px]"
									/>
								</Link>
							</div>
							<div className="w-full lg:flex-1 p-4">
								<ul className="flex flex-wrap justify-end h-24 lg:h-auto overflow-y-auto gap-4 lg:gap-14">
									<li className="w-full lg:w-auto">
										<Link
											href="#"
											className="text-lg hover:text-grey font-medium transition duration-200"
										>
											Our features
										</Link>
									</li>
									<li className="w-full lg:w-auto">
										<Link
											href="#"
											className="text-lg hover:text-grey font-medium transition duration-200"
										>
											How to use?
										</Link>
									</li>
									<li className="w-full lg:w-auto">
										<Link
											href="#"
											className="text-lg hover:text-grey font-medium transition duration-200"
										>
											Use cases
										</Link>
									</li>
									<li className="w-full lg:w-auto">
										<Link
											href="#"
											className="text-lg hover:text-grey font-medium transition duration-200"
										>
											Plans &amp; pricing
										</Link>
									</li>
									<li className="w-full lg:w-auto">
										<Link
											href="#"
											className="text-lg hover:text-grey font-medium transition duration-200"
										>
											Help center
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center -m-12 divide-x divide-grey pb-20">
						<div className="w-full sm:w-1/2 lg:w-1/3 p-12">
							<h2 className="mb-10 font-XenonNueExtraBold text-2xl leading-snug">
								Subscribe to our newsletter and receive the latest news and
								exclusive insight every week.{" "}
							</h2>
							<div className="relative p-1.5 max-w-md mx-auto md:ml-0 bg-grey rounded-2xl focus-within:ring-4 focus-within:ring-primary-default md:rounded-full transition duration-200">
								<div className="relative">
									<input
										type="text"
										id="footers-input-03-1"
										className="py-4 md:px-6 md:pl-6 md:pr-40 w-full text-black placeholder-black font-semibold text-center md:text-left bg-transparent outline-none"
										placeholder="Your email address"
									/>
									<Link
										href="/"
										target="_self"
										className="md:absolute md:top-0 md:right-0 inline-flex justify-center items-center text-center w-full md:w-auto h-14 md:h-full py-2 px-6 font-semibold text-white hover:text-white focus:text-white bg-primary-default hover:bg-primary-default focus:bg-primary-default rounded-2xl md:rounded-full transition duration-200"
									>
										Get started
									</Link>
								</div>
							</div>
						</div>
						<div className="w-full sm:w-1/2 lg:w-1/3 p-12">
							<h3 className="mb-8 font-XenonNueExtraBold text-2xl font-bold">
								Contact
							</h3>
							<ul>
								<li className="mb-4 flex items-center gap-4">
									<div className="flex items-center justify-center w-10 h-10 text-lg text-grey hover:text-grey font-medium bg-primary-default rounded-full transition duration-200">
										<svg
											className="h-4"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<g clip-path="url(#clip0_333_552)">
												<path
													d="M15.3335 7.33329C15.1567 7.33329 14.9872 7.26305 14.8621 7.13802C14.7371 7.013 14.6669 6.84343 14.6669 6.66662C14.6655 5.25256 14.1031 3.89683 13.1032 2.89694C12.1033 1.89705 10.7476 1.3347 9.33353 1.33329C9.15672 1.33329 8.98715 1.26305 8.86213 1.13802C8.7371 1.013 8.66686 0.84343 8.66686 0.666619C8.66686 0.489808 8.7371 0.320239 8.86213 0.195215C8.98715 0.0701903 9.15672 -4.75928e-05 9.33353 -4.75928e-05C11.101 0.00189347 12.7956 0.704896 14.0454 1.95472C15.2953 3.20454 15.9983 4.89911 16.0002 6.66662C16.0002 6.84343 15.93 7.013 15.8049 7.13802C15.6799 7.26305 15.5103 7.33329 15.3335 7.33329ZM13.3335 6.66662C13.3335 5.60575 12.9121 4.58834 12.162 3.83819C11.4118 3.08805 10.3944 2.66662 9.33353 2.66662C9.15672 2.66662 8.98715 2.73686 8.86213 2.86188C8.7371 2.98691 8.66686 3.15647 8.66686 3.33329C8.66686 3.5101 8.7371 3.67967 8.86213 3.80469C8.98715 3.92971 9.15672 3.99995 9.33353 3.99995C10.0408 3.99995 10.7191 4.2809 11.2191 4.781C11.7192 5.2811 12.0002 5.95938 12.0002 6.66662C12.0002 6.84343 12.0704 7.013 12.1955 7.13802C12.3205 7.26305 12.4901 7.33329 12.6669 7.33329C12.8437 7.33329 13.0132 7.26305 13.1383 7.13802C13.2633 7.013 13.3335 6.84343 13.3335 6.66662ZM14.7889 14.776L15.3955 14.0766C15.7817 13.6892 15.9985 13.1646 15.9985 12.6176C15.9985 12.0707 15.7817 11.546 15.3955 11.1586C15.3749 11.138 13.7709 9.90395 13.7709 9.90395C13.3859 9.53751 12.8746 9.33346 12.3431 9.3342C11.8116 9.33495 11.3008 9.54043 10.9169 9.90795L9.6462 10.9786C8.60898 10.5493 7.66679 9.9194 6.87372 9.12496C6.08065 8.33053 5.45234 7.38724 5.02486 6.34929L6.09153 5.08262C6.45934 4.69873 6.66506 4.18787 6.66593 3.65622C6.6668 3.12457 6.46275 2.61304 6.0962 2.22795C6.0962 2.22795 4.86086 0.625952 4.8402 0.605286C4.45983 0.222451 3.94412 0.00463375 3.40448 -0.0011044C2.86485 -0.00684256 2.34462 0.199959 1.9562 0.574619L1.18953 1.24129C-3.3398 6.49595 6.41353 16.174 11.8415 16C12.3897 16.0031 12.9329 15.8965 13.4391 15.6862C13.9453 15.476 14.4042 15.1665 14.7889 14.776Z"
													fill="white"
												></path>
											</g>
											<defs>
												<clipPath id="clip0_333_552">
													<rect width="16" height="16" fill="white"></rect>
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-xl font-medium">+44 7911 552 774</span>
								</li>
								<li className="mb-6 flex items-center gap-4">
									<div className="flex items-center justify-center w-10 h-10 text-lg text-grey hover:text-grey font-medium bg-accent-default rounded-full transition duration-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<g clip-path="url(#clip0_333_563)">
												<path
													d="M15.9693 3.6947L10.3573 9.3067C9.73158 9.93087 8.88383 10.2814 8 10.2814C7.11617 10.2814 6.26842 9.93087 5.64267 9.3067L0.0306667 3.6947C0.0213333 3.80004 0 3.89537 0 4.00004V12C0.00105857 12.8838 0.352588 13.731 0.97748 14.3559C1.60237 14.9808 2.4496 15.3323 3.33333 15.3334H12.6667C13.5504 15.3323 14.3976 14.9808 15.0225 14.3559C15.6474 13.731 15.9989 12.8838 16 12V4.00004C16 3.89537 15.9787 3.80004 15.9693 3.6947Z"
													fill="white"
												></path>
												<path
													d="M9.41476 8.36396L15.5041 2.27396C15.2091 1.78484 14.7931 1.37998 14.2961 1.09845C13.7991 0.816908 13.2379 0.668186 12.6668 0.666626H3.33343C2.76224 0.668186 2.20109 0.816908 1.70411 1.09845C1.20713 1.37998 0.791079 1.78484 0.496094 2.27396L6.58543 8.36396C6.96114 8.73817 7.46982 8.94827 8.00009 8.94827C8.53037 8.94827 9.03905 8.73817 9.41476 8.36396Z"
													fill="white"
												></path>
											</g>
											<defs>
												<clipPath id="clip0_333_563">
													<rect width="16" height="16" fill="white"></rect>
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-xl font-medium">
										hello@filytreck.uk
									</span>
								</li>
							</ul>
						</div>
						<div className="w-full sm:w-1/2 lg:w-1/3 p-12">
							<h3 className="mb-8 font-XenonNueExtraBold text-2xl font-bold">
								Social media
							</h3>
							<ul>
								<li className="mb-4 flex items-center gap-4">
									<Link href="#" className="group flex items-center gap-4">
										<div className="flex items-center justify-center w-10 h-10 bg-grey rounded-full">
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.3731 1.20056H14.7039L9.61187 7.02038L15.6022 14.9398H10.9118L7.23814 10.1367L3.03463 14.9398H0.702494L6.14886 8.71489L0.402344 1.20056H5.21177L8.53245 5.59079L12.3731 1.20056ZM11.5551 13.5448H12.8466L4.51001 2.52235H3.12411L11.5551 13.5448Z"
													fill="#060918"
												></path>
											</svg>
										</div>
										<span className="text-xl group-hover:text-grey font-medium transition duration-200">
											X-Crop
										</span>
									</Link>
								</li>
								<li className="mb-6 flex items-center gap-4">
									<Link href="#" className="group flex items-center gap-4">
										<div className="flex items-center justify-center w-10 h-10 bg-grey rounded-full">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="17"
												height="17"
												viewBox="0 0 17 17"
												fill="none"
											>
												<g clip-path="url(#clip0_323_395)">
													<path
														d="M0.25 1.89813C0.25 1.35919 0.438632 0.914572 0.815878 0.564277C1.19313 0.213966 1.68356 0.0388184 2.28716 0.0388184C2.87999 0.0388184 3.35963 0.211266 3.72611 0.556193C4.10336 0.911888 4.29199 1.37536 4.29199 1.94664C4.29199 2.46401 4.10876 2.89515 3.74228 3.24007C3.36503 3.59577 2.86921 3.77362 2.25483 3.77362H2.23866C1.64583 3.77362 1.16619 3.59577 0.79971 3.24007C0.433231 2.88438 0.25 2.43706 0.25 1.89813ZM0.460183 16.0451V5.2449H4.04947V16.0451H0.460183ZM6.03813 16.0451H9.62741V10.0144C9.62741 9.63718 9.67053 9.34616 9.75676 9.14138C9.90765 8.7749 10.1367 8.46501 10.4439 8.21172C10.7511 7.95842 11.1364 7.83177 11.5999 7.83177C12.8071 7.83177 13.4107 8.64555 13.4107 10.2731V16.0451H17V9.85277C17 8.25752 16.6228 7.04763 15.8682 6.22306C15.1137 5.3985 14.1167 4.98621 12.8772 4.98621C11.4867 4.98621 10.4035 5.58443 9.62741 6.78086V6.81319H9.61125L9.62741 6.78086V5.2449H6.03813C6.05968 5.58981 6.07046 6.66228 6.07046 8.46232C6.07046 10.2623 6.05968 12.7899 6.03813 16.0451Z"
														fill="#060918"
													></path>
												</g>
												<defs>
													<clipPath id="clip0_323_395">
														<rect
															width="16.75"
															height="16.0063"
															fill="white"
															transform="translate(0.25 0.0388184)"
														></rect>
													</clipPath>
												</defs>
											</svg>
										</div>
										<span className="text-xl group-hover:text-grey font-medium transition duration-200">
											Linkedin
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="border-t border-grey bg-white bg-opacity-5">
					<div className="container mx-auto px-4">
						<div className="py-6">
							<div className="flex flex-wrap justify-between -m-2">
								<div className="w-auto p-2">
									<Paragraph
										content={globalContext?.themesOptionsContent?.copyrightText}
										tailwindStyling="max-w-lg mx-0 text-black text-base text-center lg:text-left"
									/>
								</div>
								<div className="w-auto p-2">
									<Link
										href="#"
										className="flex flex-wrap items-center gap-2.5 hover:text-grey font-medium transition duration-200"
									>
										<span className="text-lg font-medium">Go to the top</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="13"
											viewBox="0 0 12 13"
											fill="none"
										>
											<g clip-path="url(#clip0_360_171)">
												<path
													d="M0.688287 9.48329C0.761831 9.56169 0.84933 9.62392 0.945735 9.66639C1.04214 9.70885 1.14554 9.73071 1.24998 9.73071C1.35442 9.73071 1.45782 9.70885 1.55423 9.66639C1.65063 9.62392 1.73813 9.56169 1.81168 9.48329L5.435 5.65234C5.50855 5.57394 5.59604 5.51172 5.69245 5.46925C5.78885 5.42679 5.89226 5.40492 5.9967 5.40492C6.10113 5.40492 6.20454 5.42679 6.30094 5.46925C6.39735 5.51172 6.48484 5.57394 6.55839 5.65234L10.1817 9.48329C10.2553 9.56169 10.3428 9.62392 10.4392 9.66638C10.5356 9.70885 10.639 9.73071 10.7434 9.73071C10.8478 9.73071 10.9513 9.70885 11.0477 9.66638C11.1441 9.62392 11.2316 9.56169 11.3051 9.48329C11.4525 9.32657 11.5352 9.11457 11.5352 8.89359C11.5352 8.67262 11.4525 8.46061 11.3051 8.3039L7.67387 4.46458C7.22886 3.99466 6.62564 3.73071 5.99669 3.73071C5.36775 3.73071 4.76453 3.99466 4.31952 4.46458L0.688287 8.3039C0.54094 8.46062 0.458234 8.67262 0.458234 8.89359C0.458234 9.11457 0.54094 9.32657 0.688287 9.48329Z"
													fill="currentColor"
												></path>
											</g>
											<defs>
												<clipPath id="clip0_360_171">
													<rect
														width="12"
														height="12"
														fill="white"
														transform="translate(12 12.5) rotate(180)"
													></rect>
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
