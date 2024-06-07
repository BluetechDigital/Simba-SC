// Imports
import fadeInUp, {
	fadeIn,
	initial,
	initialTwo,
} from "../../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

import dateFormat from "dateformat";

const LastThreeFixtures: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="relative z-[60] max-w-[80%] w-full mx-auto mt-[-200px] px-8 py-4 bg-white min-h-[25vh] flex flex-col"
			>
				<motion.h4
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="font-XenonNueBold text-center lg:text-left uppercase text-medium sm:text-lg md:text-3xl text-pureBlack font-semibold"
				>
					Fixtures
				</motion.h4>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center lg:gap-10">
					{globalContext?.lastThreeFixtures?.response?.length > 0 ? (
						globalContext?.lastThreeFixtures?.response?.map(
							(fixture: any, index: number) => (
								<Fragment key={index}>
									<div className="flex flex-col items-center justify-center gap-5">
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className=""
										>
											<Image
												priority
												width={1000}
												height={1000}
												src={fixture?.league?.logo}
												alt={`${fixture?.league?.name} league Logo`}
												className="object-contain object-center w-full h-[75px]"
											/>
										</motion.div>
										<div className="flex items-center justify-center gap-12 lg:gap-12">
											<div className="flex flex-col items-center justify-center gap-2">
												<Image
													priority
													width={1000}
													height={1000}
													src={fixture?.teams?.home?.logo}
													alt={`${fixture?.teams?.home?.name} club Logo`}
													className="object-contain object-center w-full h-[75px]"
												/>
												<span className="text-pureBlack text-base font-XenonNueRegular text-center">
													{fixture?.teams?.home?.name}
												</span>
												<span className="text-pureBlack text-base font-XenonNueRegular text-center">
													{fixture?.teams?.home?.winner}
												</span>
											</div>
											<div className="bg-pureBlack p-4 rounded-lg flex items-center justify-center gap-2">
												<motion.span
													initial={initial}
													whileInView={fadeInUp}
													viewport={{once: true}}
													className="text-white text-2xl font-XenonNueExtraBold text-center"
												>
													{fixture?.goals?.home}
												</motion.span>
												<span className="text-white text-2xl font-XenonNueExtraBold text-center">
													-
												</span>
												<motion.span
													initial={initial}
													whileInView={fadeInUp}
													viewport={{once: true}}
													className="text-white text-2xl font-XenonNueExtraBold text-center"
												>
													{fixture?.goals?.away}
												</motion.span>
											</div>
											<div className="flex flex-col items-center justify-center gap-2">
												<Image
													priority
													width={1000}
													height={1000}
													src={fixture?.teams?.away?.logo}
													alt={`${fixture?.teams?.away?.name} club Logo`}
													className="object-contain object-center w-[65px] md:w-[75px] h-[60px] sm:h-[65px] lg:h-[75px]"
												/>
												<span className="text-pureBlack text-base font-XenonNueRegular text-center">
													{fixture?.teams?.away?.name}
												</span>
												<span className="text-pureBlack text-base font-XenonNueRegular text-center">
													{fixture?.teams?.away?.winner}
												</span>
											</div>
										</div>
										<div className="flex items-center justify-center gap-1">
											<span className="text-pureBlack text-base font-XenonNueRegular text-center">
												{fixture?.league?.name},
											</span>
											<span className="text-pureBlack text-base font-XenonNueRegular text-center">
												{dateFormat(
													fixture?.fixture?.date,
													"dddd, mmmm d, yyyy"
												)}
											</span>
										</div>
									</div>
								</Fragment>
							)
						)
					) : (
						<div
							role="status"
							className="h-full flex flex-col items-center justify-center"
						>
							<svg
								fill="none"
								aria-hidden="true"
								viewBox="0 0 100 101"
								xmlns="http://www.w3.org/2000/svg"
								className="inline w-12 h-12 text-lightGrey animate-spin dark:text-pureBlack fill-primary-two"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<p className="font-bold font-OverusedGroteskLight text-paragraph text-black">
								Loading...
							</p>
						</div>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default LastThreeFixtures;
