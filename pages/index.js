import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/loader/loader";
import styles from "./index.module.css";
import AnimatedLogo from "../components/animated-logo/animated-logo";
import { motion } from "framer-motion";

function SplashScreen() {
	const router = useRouter();
	useEffect(() => {
		const timer = setTimeout(() => {
			router.push("/onboarding");
		}, 3000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className={styles.splashScreen}
		>
			<AnimatedLogo />
			<Loader />
		</motion.div>
	);
}

export default SplashScreen;
