// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISponsorsLogos} from "@/types/components/index";

const SponsorsLogos: FC<ISponsorsLogos> = ({logoGrid}) => {
	return (
		<>
			<div className="bg-white px-4 py-6 lg:px-10">
				<div className="container px-0 mx-auto flex flex-col items-center justify-center gap-4 max-w-6xl">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-2 gap-x-8 lg:justify-between"
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
													? `block w-full h-full object-contain object-center`
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
			</div>
		</>
	);
};

export default SponsorsLogos;
