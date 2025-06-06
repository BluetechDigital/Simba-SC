// Imports
import { FC } from "react"; 
import Link from "next/link";

// Styling
import styles from "@/components/Elements/Button/styles/Button.module.scss";

type IButton = {
    styleNumber: number;
    link: {
		url: string;
		title: string;
		target: string;
	};
};
    
const Button: FC<IButton> = ({ link, styleNumber }) => {
    
    let buttonStyle: string;

    switch (styleNumber) {
		case 0:
			buttonStyle = styles.buttonStyling;
            break;
        case 1:
			buttonStyle = styles.buttonStylingAlt;
            break;
        case 2:
			buttonStyle = styles.buttonStylingAltTwo;
            break;
        case 2.5:
			buttonStyle = styles.buttonStylingAltTwoSlim;
            break;
        case 3:
			buttonStyle = styles.buttonStylingAltThree;
            break;
        case 4:
			buttonStyle = styles.buttonStylingAltFour;
            break;
        case 5:
			buttonStyle = styles.buttonStylingAltFive;
            break;
        case 5.5:
			buttonStyle = styles.buttonStylingAltFiveActive;
            break;
		default:
			buttonStyle = styles.buttonStyling;
			break;
	}
	
    return (
		<Link
			href={`${link?.url}`}
			aria-label={`${link?.title}`}
			target={link?.target || "_self"}
			className={link?.url ? styles.linkWrapper : `hidden`}
		>
			<span className={buttonStyle}>
				{link?.title}
			</span>
		</Link>
    );
}

export default Button;