import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../components/logo/logo";
import Loader from "../components/loader/loader";
import styles from "./index.module.css";

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
		<div className={styles.splashScreen}>
			<Logo />
			<Loader />
		</div>
	);
}

export default SplashScreen;
