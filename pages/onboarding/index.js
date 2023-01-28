import Link from "next/link";
import React from "react";
import styles from "./onboarding.module.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
					<p>
						5000+ tasty recipes made by people for your{" "}
						<span>
							<Typewriter
								words={[
									"tasty",
									"healthy",
									"fresh",
									"delicious",
									"sweet",
									"flavourful",
								]}
								loop={2}
								typeSpeed={100}
								deleteSpeed={80}
								delaySpeed={2000}
							/>
						</span>{" "}
						life
					</p>
				</div>
				<Link href="/home">Get Started</Link>
			</div>
		</motion.div>
	);
};

export default OnboardingPage;
