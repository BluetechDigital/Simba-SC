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
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IClubPartners} from "@/types/components/index";

// Styling
import styles from "@/styles/components/ClubPartnersGrid.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleContentImage: FC<IClubPartners.ITitleContentImage> = ({
	titleContentImage: content,
}) => {
	return (
		<>
			<div className={styles.titleContentImage}>
				<div className={styles.wrapper}></div>
			</div>
		</>
	);
};

export default TitleContentImage;
