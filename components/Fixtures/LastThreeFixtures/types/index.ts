export namespace ILastThreeFixtures {
	export type IProps = {
		title: string;
	};
	export type ICard = {
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
}