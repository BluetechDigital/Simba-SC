// Imports
import {FC} from "react";
import Link from "next/link";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ILatestNews} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

const LatestNewsGridCard: FC<ILatestNews.ICard> = ({
	slug,
	date,
	title,
	className,
	featuredImage,
}) => {
	return (
		<Link
			target={"_blank"}
			href={`/news/${slug}`}
			aria-label={`${title} link ${slug}`}
		>
			<div
				className={`${className} py-8 px-4 xl:p-8 bg-no-repeat bg-cover bg-center h-full w-full flex flex-col items-baseline justify-end`}
				style={{
					backgroundImage: `linear-gradient(
										0deg,
										rgba(0, 0, 0, 0.70),
										rgba(0, 0, 0, 0.60),
										rgba(0, 0, 0, 0.50),
										rgba(0, 0, 0, 0.30),
										rgba(0, 0, 0, 0.20),
										rgba(0, 0, 0, 0.15)
									),url("${featuredImage?.node?.sourceUrl}")`,
				}}
			>
				<div className="max-w-xs mx-0 flex flex-col gap-2">
					<span className="font-OnestRegular font-normal text-white text-tiny">
						{dateFormat(date, "dddd, mmmm d, yyyy")}
					</span>
					<span className="h-[5px] bg-primary-default w-full"></span>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="font-OnestBlack text-left uppercase text-base tracking-[-0.02rem] text-white font-semibold leading-4"
					>
						{title}
					</motion.h2>
				</div>
			</div>
		</Link>
	);
};

export default LatestNewsGridCard;
