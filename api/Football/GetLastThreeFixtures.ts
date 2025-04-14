// FOOTBALL FIXTURES
// Sub-Components
export namespace IFixtures {
	export type IProps = {
		get: string;
		parameters: {
			league: string;
			season: string;
			last: string;
			team: string;
		};
		errors: [];
		results: number;
		paging: {
			current: number;
			total: number;
		};
		response: [
			{
				fixture: {
					id: number;
					referee: string;
					timezone: string;
					date: string;
					timestamp: number;
				};
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
				score: {
					halftime: {
						home: number;
						away: number;
					};
					fulltime: {
						home: number;
						away: number;
					};
					extratime: {
						home: number;
						away: number;
					};
					penalty: {
						home: number;
						away: number;
					};
				};
			}
		];
	};
}
export const getLastThreeFixturesContent = async (): Promise<IFixtures.IProps |
	any
> => {
	const rapidApiEndpoint = `${process.env.X_RAPIDAPI_URL}`;
	const team = `${process.env.X_RAPIDAPI_TEAM_ID}`;
	const league = `${process.env.X_RAPIDAPI_LEAGUE_ID}`;
	const season = `${process.env.X_RAPIDAPI_SEASON}`;
	const quantity = `${process.env.X_RAPIDAPI_QUANTITY_AMOUNT}`;

	const url = `${rapidApiEndpoint}?league=${league}&season=${season}&team=${team}&last=${quantity}`;
	const options: any = {
		method: "GET",
		next: {revalidate: 86400}, // 24 hours in seconds
		headers: {
			"x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		},
	};

	// Fetch new data from the API
	try {
		// const response = await fetch(url, options);
		// if (!response.ok) {
		// 	throw new Error(`HTTP error! status: ${response.status}`);
		// }
		// const fixtures = await response.json();
		// return fixtures;
		return "fixtures";
	} catch (error: unknown) {
		console.error(error);
	}
};
