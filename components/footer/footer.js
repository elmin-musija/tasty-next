import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Footer = () => {
	const { data: session, status } = useSession();
	return (
		<div>
			<Link href="/">Home</Link>
			<Link href="/search">Search</Link>
			<Link href="/favorites">Favorites</Link>
		</div>
	);
};

export default Footer;
