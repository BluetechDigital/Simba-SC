/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {UseTiltEffect} from "@/types/animations";

// Tilt animation effect
export const useTiltEffect = (): UseTiltEffect => {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
	const [translateX, setTranslateX] = useState(0);
	const [translateY, setTranslateY] = useState(0);

	let targetRotateX = 0;
	let targetRotateY = 0;
	let targetTranslateX = 0;
	let targetTranslateY = 0;

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			// Calculate target rotations based on mouse position
			const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

			// Tilt effect (rotation)
			targetRotateX = mouseY * 15; // Max tilt angle
			targetRotateY = mouseX * 15;

			// Translation effect (movement)
			targetTranslateX = mouseX * 50; // Max translation on X axis
			targetTranslateY = mouseY * 50; // Max translation on Y axis
		};

		const updateTilt = () => {
			// Slow down the response by increasing the lag and making it more fluid
			setRotateX((prevX) => prevX + (targetRotateX - prevX) * 0.05); // Slower response
			setRotateY((prevY) => prevY + (targetRotateY - prevY) * 0.05);

			// Slow down the translation (movement) as well
			setTranslateX((prevX) => prevX + (targetTranslateX - prevX) * 0.05);
			setTranslateY((prevY) => prevY + (targetTranslateY - prevY) * 0.05);

			requestAnimationFrame(updateTilt);
		};

		window.addEventListener("mousemove", handleMouseMove);
		updateTilt(); // Start animation loop

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return {rotateX, rotateY, translateX, translateY};
};
