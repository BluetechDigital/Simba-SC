"use client";

// Imports
import {useEffect, useState, useRef} from "react";

type IUseTiltEffect = {
	rotateX: number;
	rotateY: number;
	translateX: number;
	translateY: number;
};

// Tilt animation effect
export const useTiltEffect = (): IUseTiltEffect => {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
	const [translateX, setTranslateX] = useState(0);
	const [translateY, setTranslateY] = useState(0);

	const targetRotateX = useRef(0);
	const targetRotateY = useRef(0);
	const targetTranslateX = useRef(0);
	const targetTranslateY = useRef(0);

	const isUpdating = useRef(false);

	// Throttling the mousemove event using setTimeout
	useEffect(() => {
		let lastMoveTime = 0;

		const handleMouseMove = (event: MouseEvent) => {
			const now = Date.now();

			// Only handle the event if at least 16ms have passed (60fps)
			if (now - lastMoveTime >= 16) {
				const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
				const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

				targetRotateX.current = mouseY * 2;
				targetRotateY.current = mouseX * 2;
				targetTranslateX.current = mouseX * 2;
				targetTranslateY.current = mouseY * 2;

				lastMoveTime = now;
			}
		};

		const updateTilt = () => {
			if (isUpdating.current) return;

			isUpdating.current = true;

			// Update the state with easing for smoother transitions
			setRotateX((prevX) => prevX + (targetRotateX.current - prevX) * 0.1);
			setRotateY((prevY) => prevY + (targetRotateY.current - prevY) * 0.1);
			setTranslateX(
				(prevX) => prevX + (targetTranslateX.current - prevX) * 0.1
			);
			setTranslateY(
				(prevY) => prevY + (targetTranslateY.current - prevY) * 0.1
			);

			// Reset the throttling flag after a short delay
			setTimeout(() => {
				isUpdating.current = false;
			}, 16); // 16ms throttle (roughly 60fps)
		};

		window.addEventListener("mousemove", handleMouseMove);
		const interval = setInterval(updateTilt, 16); // Throttled updates every 16ms (60fps)

		return () => {
			clearInterval(interval);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return {rotateX, rotateY, translateX, translateY};
};
