// Imports
import {IFixtures} from "@/types/context/Fixtures";

export const getLastThreeFixturesContent = async (): Promise<
	IFixtures | undefined
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
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const fixtures = await response.json();
		return fixtures;
	} catch (error: unknown) {
		console.error(error);
	}
};
