"use client";

// Imports
import {useEffect, useState} from "react";

const useLocaleTime = (): string => {
	const [time, setTime] = useState("");

	useEffect(() => {
		// Update the time every second
		const interval = setInterval(() => {
			const londonTime = new Date().toLocaleTimeString("en-US", {
				timeZone: "Europe/London",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true, // Ensures 12-hour format with AM/PM
			});
			setTime(londonTime);
		}, 1000);

		// Clear the interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return time;
};

export default useLocaleTime;
