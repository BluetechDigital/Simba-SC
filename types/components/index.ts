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
export type IVisitStore = {
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
export type INewsSingle = {
	title: string;
	readTime: string;
	paragraph: string;
	articleType: string;
	boldParagraph: string;
};
export type ISimbaTVBanner = {
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
export type ILatestNewsGrid = {
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
export type ISocialMediaGrid = {
	title: string;
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
export type ITrophyCabinetBanner = {
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
	export type IAboutSimba = {
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

	export type IAboutTheClubGrid = {
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

	export type IAboutTheClubCard = {
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
