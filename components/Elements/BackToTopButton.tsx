"use client";

// Imports
import Link from "next/link";
import {FC, useEffect, useState} from "react";
import {IBackButtons} from "@/types/components/Elements";

// Styling
import styles from "@/styles/components/Elements/Buttons.module.scss";

const BackToTopButton: FC<IBackButtons.IProps> = ({link}) => {
	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={
					scrollPosition > 1000
						? "relative w-fit h-fit xl:block z-[998]"
						: "hidden"
				}
			>
				<div className="fixed right-6 z-20 bottom-[2.5rem] flex justify-center">
					<Link
						target="_self"
						href={`${link}`}
						aria-label={`back to the top Button`}
						className={styles.backToTopButton}
					>
						<span className={styles.span}>
							<svg
								id="Layer_1"
								width="200px"
								version="1.1"
								height="200px"
								fill="#ffffff"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[30px] h-[30px] object-center object-contain rotate-[90deg]"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<polygon points="12,17 11,17 11,15 9,15 9,13 21,13 21,11 9,11 9,9 11,9 11,7 12,7 12,5 9,5 9,7 7,7 7,9 5,9 5,10 4,10 4,11 3,11 3,13 4,13 4,14 5,14 5,15 7,15 7,17 9,17 9,19 12,19 "></polygon>{" "}
								</g>
							</svg>
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default BackToTopButton;
