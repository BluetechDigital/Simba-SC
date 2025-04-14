"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import { useGlobalContext } from "@/context/global";

// Styling
import styles from "@/components/Global/Footer/styles/Footer.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import SocialLinksWrapper from "@/components/Global/Footer/fragments/SocialLinksWrapper";
import FooterLinksWrapper from "@/components/Global/Footer/fragments/FooterLinksWrapper";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

    return (
        <footer className={styles.footer}>
			<div className={styles.topContent}>
				<Link href="/" target="_self" aria-label={`Simba SC Homepage Link`}>
					<Image
						priority
						width={1000}
						height={1000}
						alt="Simba SC Logo"
						className={styles.logo}
						src="/img/logos/simba-sc-logo.png"
					/>
				</Link>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.socialLinks}
				>
					<SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.facebookLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.twitterLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.linkedinLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.instagramLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.tiktokLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.youtubeLink}/>
				</motion.div>
			</div>
			<div className={styles.divider} />
			<div className={styles.bottomContent}>
				<motion.div
					initial={initialTwo}
					viewport={{once: true}}
					whileInView={fadeIn}
					className={styles.copyrightText}
				>
					<Paragraph
						className={styles.text}
						content={globalContext?.themesOptionsContent?.copyrightText}
					/>
				</motion.div>
				<motion.ul
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.ul}
				>
					<Link
						target="_Blank"
						className={styles.link}
						aria-label="Apple App Store Link"
						href="https://apps.apple.com/us/app/simba-sc/id1564389213"
					>
						<Image
							width={500}
							height={500}
							className={styles.image}
							alt="Apple App Store Logo"
							src="/svg/apple-app-store.svg"
						/>
					</Link>
					<Link
						target="_Blank"
						className={styles.link}
						aria-label="Google Play App Store Link"
						href="https://play.google.com/store/apps/details?id=com.simbasc"
					>
						<Image
							width={500}
							height={500}
							className={styles.imageTwo}
							alt="Google Play App Store Logo"
							src="/svg/google-play-app-store.svg"
						/>
					</Link>
				</motion.ul>
				<div className={styles.rightSideContent}>
                    <FooterLinksWrapper sublinks={globalContext?.copyrightLinks} />
					<Paragraph
						className={styles.paragraph}
						content={globalContext?.themesOptionsContent?.copyrightText}
					/>
					<Link
						target="_blank"
						className={styles.bluetechDigital}
						href={`https://bluetech-digital.co.uk`}
					>
						<span className={styles.span}>
							<Image
								priority
								width={500}
								height={500}
								className={styles.image}
								alt="BluetechDigital Logo"
								src="/img/logos/BluetechDigital-Logo-color.png"
							/>
							<Paragraph className={styles.text} content={`BluetechDigital`} />
						</span>
					</Link>
				</div>
			</div>
		</footer>
    );
}

export default Footer;