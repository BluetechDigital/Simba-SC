// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISponsorsLogos} from "@/types/components/index";

// Components
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SponsorsLogos: FC<ISponsorsLogos> = ({logoGrid}) => {
	return (
		<>
			<div className="bg-white px-4 py-6 lg:px-10">
				<ScrollYProgressReveal tailwindStyling="container px-0 mx-auto flex flex-col items-center justify-center gap-4">
					<div className="max-w-3xl mx-auto">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-8 lg:justify-between"
						>
							{logoGrid?.length > 0 ? (
								logoGrid?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: false}}
											variants={arrayLoopStaggerChildren}
										>
											<Image
												src={item?.image?.sourceUrl}
												alt={`${item?.image?.altText}`}
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
												className={
													item?.image?.sourceUrl
														? `block w-full lg:h-[125px] object-contain object-center`
														: `hidden`
												}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</ScrollYProgressReveal>
			</div>
		</>
	);
};

export default SponsorsLogos;
