import Link from "next/link";
import React from "react";
import styles from "./onboarding.module.css";

const OnboardingPage = () => {
	return (
		<div className={styles.onboarding}>
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
		</div>
	);
};

export default OnboardingPage;
