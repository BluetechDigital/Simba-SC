const fetch = require("node-fetch");
import NodeCache from "node-cache";

require("dotenv").config();

const cache = new NodeCache();
const CACHE_KEY = "lastThreeFixtures";
const CACHE_DURATION = 24 * 60 * 60; // 24 hours in seconds

export const getLastThreeFixturesContent = async () => {
	const url =
		"https://api-football-v1.p.rapidapi.com/v3/fixtures?league=567&season=2023&team=6432&last=3";
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		},
	};

	// Check if the data is cached
	const cachedData = cache.get(CACHE_KEY);
	if (cachedData) {
		console.log("Returning cached data");
		return cachedData;
	}

	try {
		// Fetch new data from the API
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const fixtures = await response.json();

		// Cache the new data
		cache.set(CACHE_KEY, fixtures, CACHE_DURATION);

		console.log("Returning new data from API");
		return fixtures;
	} catch (error) {
		console.error(error);
		return null;
	}
};
