"use client";

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
import styles from "@/styles/components/Navbar.module.scss";

// Components
import TopNavigation from "@/components/Global/TopNavigation";
import MegaNavigation from "@/components/Global/MegaNavigation";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	const [menuActive, setMenuActive] = useState(false);

	const handleClick = () => {
		setMenuActive(!menuActive);
	};

	return (
		<>
			<nav
				className={
					styles.navbar + ` navbar z-[999] w-full fixed group bg-transparent`
				}
			>
				<TopNavigation />
				<div className="flex items-center justify-between bg-lightGreyTwo pl-2 lg:pl-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: false}}
						className={styles.logo}
					>
						<Link href="/" target="_self" aria-label={`Simba SC Homepage Link`}>
							<Image
								priority
								width={1000}
								height={1000}
								alt="Simba SC Logo"
								src="/img/logos/simba-sc-logo.png"
								className={styles.image}
							/>
						</Link>
					</motion.div>
					<div className={styles.navigation}>
						<div className={styles.wrapper}>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								className={styles.ul}
								viewport={{once: false}}
							>
								{globalContext?.navbarMenuLinks?.length > 0 ? (
									globalContext?.navbarMenuLinks?.map(
										(item: any, index: number) => (
											<Fragment key={index}>
												<motion.li
													custom={index}
													initial={initial}
													whileInView="animate"
													className={styles.li}
													viewport={{once: false}}
													variants={arrayLoopStaggerChildren}
												>
													<Link
														className={styles.link}
														href={`${item?.node?.url}`}
														aria-label={`${item?.node?.label}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
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
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						onClick={handleClick}
						viewport={{once: false}}
						className={
							styles.megaNavigationMenuButton +
							` ${menuActive ? "bg-tertiary-two" : "bg-primary-default"}`
						}
						style={{
							backgroundImage: `url(${
								menuActive ? "none" : "/img/background/red-background-dots.png"
							})`,
						}}
					>
						<button className={styles.button}>
							<span className={styles.hamburgerIcon}>
								<span
									className={menuActive ? styles.iconOneActive : styles.iconOne}
								/>
								<span
									className={menuActive ? styles.iconTwoActive : styles.iconTwo}
								/>
								<span
									className={
										menuActive ? styles.iconThreeActive : styles.iconThree
									}
								/>
							</span>
							<span className={styles.text}>
								{menuActive ? "Close" : "Menu"}
							</span>
						</button>
					</motion.div>
				</div>
				{/* Hidden Mega Navigation Menu */}
				<MegaNavigation menuActive={menuActive} setMenuActive={setMenuActive} />
			</nav>
		</>
	);
};

export default Navbar;
