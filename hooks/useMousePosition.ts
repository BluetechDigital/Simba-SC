"use client";

// Imports
import {useState, useEffect, useRef} from "react";

type IUseMousePosition = {
	x: number | null;
	y: number | null;
};

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<IUseMousePosition>({
		x: null,
		y: null,
	});
	const requestRef = useRef<number | null>(null);

	const updateMousePosition = (event: MouseEvent) => {
		setMousePosition({x: event.clientX, y: event.clientY});
		requestRef.current = null;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!requestRef.current) {
			requestRef.current = requestAnimationFrame(() =>
				updateMousePosition(event)
			);
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	});

	return mousePosition;
};

export default useMousePosition;
