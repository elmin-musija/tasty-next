import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<div>
			<Link href="/">Home</Link>
			<Link href="/search">Search</Link>
			<Link href="/favorites">Favorites</Link>
		</div>
	);
};

export default Footer;
