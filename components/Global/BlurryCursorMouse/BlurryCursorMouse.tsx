"use client";

// Imports
import gsap from "gsap";
import Image from "next/image";
import React, {FC, useEffect, useRef, useCallback} from "react";

// Styling
import styles from "@/components/Global/BlurryCursorMouse/styles/BlurryCursorMouse.module.scss";

const BlurryCursorMouse: FC = () => {
	const size = 15;
	const circle = useRef<HTMLDivElement>(null);
	const rafId = useRef<number | null>(null);
	const mouse = useRef({x: 0, y: 0});
	const delayedMouse = useRef({x: 0, y: 0});

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const moveCircle = useCallback((x: number, y: number) => {
		if (circle.current) {
			gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50});
		}
	}, []);

	const manageMouseMove = useCallback(
		(e: MouseEvent) => {
			const {clientX, clientY} = e;
			mouse.current = {x: clientX, y: clientY};
			moveCircle(mouse.current.x, mouse.current.y);
		},
		[moveCircle]
	);

	const animate = useCallback(() => {
		delayedMouse.current = {
			x: lerp(delayedMouse.current.x, mouse.current.x, 0.2),
			y: lerp(delayedMouse.current.y, mouse.current.y, 0.2),
		};

		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
		rafId.current = window.requestAnimationFrame(animate);
	}, [moveCircle]);

	useEffect(() => {
		animate();
		window.addEventListener("mousemove", manageMouseMove);

		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
			if (rafId.current) window.cancelAnimationFrame(rafId.current);
		};
	}, [animate, manageMouseMove]);

	return (
		<div className={styles.blurryCursorMouse}>
			<div
				ref={circle}
				style={{
					width: size,
					height: size,
					borderRadius: "100%",
					backgroundColor: "#fa0008",
					transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
				}}
				className={styles.element}
			>
				{/* <span className={styles.wrapper} style={{color: "#00072d"}}>
					<Image
						width={1000}
						height={1000}
						className={styles.image}
						alt="Bluetech Digital Ltd Logo"
						src="/svg/logo/BluetechDigital-Logo-color.svg"
					/>
				</span> */}
			</div>
		</div>
	);
};

export default BlurryCursorMouse;
