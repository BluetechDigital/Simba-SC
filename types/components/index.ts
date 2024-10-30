// Imports
import {MotionProps, Transition, Variant} from "framer-motion";

// Components
export type IHero = {
	heroSlider: [
		{
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IHeroThree = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type INewsSingle = {
	title: string;
	readTime: string;
	paragraph: string;
	articleType: string;
	boldParagraph: string;
};
export type ISponsorsLogos = {
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type INewsletterBanner = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ILastThreeFixtures = {
	title: string;
};
export type INewOfficialKitCta = {
	title: string;
	ctaTitle: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOfficialMembershipsCta = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	bulletPoints: {
		point: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	}[];
};
export type IClubCardMembershipCTA = {
	title: string;
	displayVideo: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	video: {
		link: string;
		title: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	clubCardMembershipText: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};

// About Sub & Main Components
export namespace IAbout {
	export type ISimbaProps = {
		title: string;
		titleTwo: string;
		paragraph: string;
		paragraphTwo: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ITheClubGrid = {
		aboutGrid: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}[];
	};
	export type ITheClubCard = {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}
export namespace IVideoBlock {
	export type IProps = {
		title: string;
		video: {
			link: string;
			title: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		subtitle: string;
		paragraph: string;
		displayVideo: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		videoBackgroundImage: {
			sourceUrl: string;
		};
	};
	export type IVideoWrapper = {
		children: React.ReactNode;
	};
}
export namespace ILatestNews {
	export type IGridProps = {
		title: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		ctaLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		slug: string;
		date: string;
		title: string;
		className: string;
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
}
export namespace IVisitStore {
	export type IProps = {
		title: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}
export namespace IContactForm {
	export type IProps = {
		title: string;
		formTitle: string;
		paragraph: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type IForm = {
		formTitle: string;
	};
}
export namespace IClubPartners {
	export type IClubPartnersGrid = {
		slug: string;
		title: string;
		excerpt: string;
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
	export type ICard = {
		slug: string;
		title: string;
		excerpt: string;
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
	export type ITitleContentImage = {
		content: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
}
export namespace ISimbaTVBanner {
	export type IProps = {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		youtubeButton: {
			url: string;
			title: string;
			target: string;
		};
		podcastsButton: {
			url: string;
			title: string;
			target: string;
		};
		fansButton: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		fansButton: IProps[`fansButton`];
		youtubeButton: IProps[`youtubeButton`];
		podcastsButton: IProps[`podcastsButton`];
	};
	export type IStatsCard = {};
	export type IVideos = {
		children: React.ReactNode[];
		className?: string;
		transition?: Transition;
		activeIndex: number;
		variants?: {enter: Variant; center: Variant; exit: Variant};
	} & MotionProps;
	export type ICountUpStats = {
		number: string;
		suffix?: string;
		decimals?: number;
		paragraph: string;
	};
}
export namespace ISocialMediaGrid {
	export type IProps = {
		title: string;
	};
	export type ICard = {
		index: number;
		caption: string;
		media_url: string;
		permalink: string;
		media_type: string;
		thumbnail_url: string;
	};
}
export namespace IGeneralInformation {
	export type IProps = {
		title: string;
		paragraph: string;
		informationGrid: {
			title: string;
			paragraph: string;
		}[];
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		title: string;
		paragraph: string;
	};
}
export namespace ITrophyCabinetBanner {
	export type IProps = {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		trophyCabinet: {
			name: string;
			totalAmount: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}[];
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		index: number;
		name: string;
		totalAmount: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}
