import Link from "next/link";
import React from "react";

const OnboardingPage = () => {
	return (
		<div>
			<h1>All recipe you needed</h1>
			<h2>5000+ healthy recipes made by people for your healthy life</h2>
			<Link href="/home">Get Started</Link>
		</div>
	);
};

export default OnboardingPage;
