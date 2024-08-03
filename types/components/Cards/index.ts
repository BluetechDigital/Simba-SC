export type ILatestNewsGridCard = {
	slug: string;
	date: string;
	title: string;
	tailwindStyling: string;
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
export type ILastThreeFixturesCard = {
	date: string;
	league: {
		id: number;
		name: string;
		country: string;
		logo: string;
		flag: string;
		season: number;
		round: string;
	};
	teams: {
		home: {
			id: number;
			name: string;
			logo: string;
			winner: boolean;
		};
		away: {
			id: number;
			name: string;
			logo: string;
			winner: boolean;
		};
	};
	goals: {
		home: number;
		away: number;
	};
};
