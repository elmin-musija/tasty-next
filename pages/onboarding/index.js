import Link from "next/link";
import React from "react";
import styles from "./onboarding.module.css";
import { motion } from "framer-motion";

const OnboardingPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={styles.onboarding}
		>
			<div className={styles.onboardingTop}>
				<img src="/onboarding.svg" alt="Meals sketches" />
			</div>
			<div className={styles.onboardingBottom}>
				<div>
					<p>All recipe you needed</p>
					<p>5000+ healthy recipes made by people for your healthy life</p>
				</div>
				<Link href="/home">Get Started</Link>
			</div>
		</motion.div>
	);
};

export default OnboardingPage;
