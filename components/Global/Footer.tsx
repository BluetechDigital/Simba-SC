// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer
			className={styles.footer + " py-4 px-0 overflow-hidden bg-white"}
		></footer>
	);
};

export default Footer;
