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
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={styles.navbar + ` z-[999] w-full fixed group bg-white`}
			></div>
		</>
	);
};

export default Navbar;
