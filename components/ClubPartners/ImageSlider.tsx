// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IClubPartners} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/pages/ClubPartners/Partners.module.scss";

// Components

const ImageSlider: FC<IClubPartners.IImageSlider> = ({imageSlider}) => {
	return (
		<>
			<div className={styles.imageSlider}>
				<div className={styles.container}></div>
			</div>
		</>
	);
};

export default ImageSlider;
