// Imports
import {
	fadeIn,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {FC, Fragment, Suspense} from "react";
import {useGlobalContext} from "@/context/global";
import {ILastThreeFixtures} from "@/types/components";

// Components
import LastThreeFixturesCard from "@/components/Fixtures/Cards/LastThreeFixturesCard";

const LastThreeFixtures: FC<ILastThreeFixtures> = ({title}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="bg-white">
				<div className="lg:container mx-auto px-0">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full mx-auto px-4 pt-10 pb-10 lg:px-10 min-h-[25vh] flex flex-col"
					>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-8 font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-5xl tracking-[-0.05rem] text-pureBlack font-semibold xl:leading-[3.75rem]"
						>
							{title}
						</motion.h3>
						<div className="py-0 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center lg:gap-4">
							<Suspense fallback={"...Loading"}>
								{globalContext?.lastThreeFixtures?.response?.length > 0 ? (
									globalContext?.lastThreeFixtures?.response?.map(
										(fixture: any, index: number) => (
											<Fragment key={index}>
												<motion.div
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													className="w-full h-full"
													variants={arrayLoopStaggerChildren}
												>
													<LastThreeFixturesCard
														goals={fixture?.goals}
														teams={fixture?.teams}
														league={fixture?.league}
														date={fixture?.fixture?.fixture?.date}
													/>
												</motion.div>
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
										<p className="font-bold font-OnestThin text-paragraph text-pureBlack">
											Loading...
										</p>
									</div>
								)}
							</Suspense>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default LastThreeFixtures;
