// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";

// Components
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const SimbaTVBannerCard: FC = () => {
	return (
		<>
			<ScrollYProgressReveal>
				<div className=""></div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVBannerCard;
