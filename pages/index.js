import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

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
		<div>
			<h1>Tasty</h1>
		</div>
	);
}

export default SplashScreen;
