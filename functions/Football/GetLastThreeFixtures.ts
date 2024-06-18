// Imports
import fetch from "node-fetch";
import NodeCache from "node-cache";

require("dotenv").config();

const cache = new NodeCache();
const CACHE_KEY = "lastThreeFixtures";
const CACHE_DURATION = 24 * 60 * 60; // 24 hours in seconds

export const getLastThreeFixturesContent = async () => {
	const url =
		"https://api-football-v1.p.rapidapi.com/v3/fixtures?league=567&season=2023&team=6432&last=3";
	const options: any = {
		method: "GET",
		headers: {
			"x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		},
	};

	// Retrieve cached data
	const cachedData: unknown | any = cache.get(CACHE_KEY);
	const now = Date.now();

	if (cachedData) {
		const {timestamp, data} = cachedData;
		// Check if 24 hours have passed since the last fetch
		if (now - timestamp < CACHE_DURATION) {
			console.log("Returning cached data");
			return data;
		}
	} else {
		// Fetch new data from the API
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const fixtures = await response.json();

			// Cache the new data with the current timestamp
			cache.set(CACHE_KEY, {data: fixtures, timestamp: now});

			console.log("Returning new data from API");
			return fixtures;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
};
