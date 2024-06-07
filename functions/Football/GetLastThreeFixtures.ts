export const getLastThreeFixturesContent = async () => {
	const url =
		"https://api-football-v1.p.rapidapi.com/v3/fixtures?league=567&season=2023&team=6432&last=3";
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": `${process.env.X_RAPIDAPI_KEY}`,
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const fixtures = await response.text();
		console.log(fixtures);

		return fixtures;
	} catch (error) {
		console.error(error);
	}
};
