// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IClubCardMembershipCTA} from "@/types/components/index";

const ClubCardMembershipCTA: FC<IClubCardMembershipCTA> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
	clubCardMembership,
}) => {
	return (
		<>
			<div></div>
		</>
	);
};

export default ClubCardMembershipCTA;
