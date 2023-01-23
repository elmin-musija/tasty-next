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
			{/* Prüfen, ob eingeloggt: dementsprechend Pofile-Icon anzeigen */}
			{/* <Link href="/profile">
				{session && status === "authenticated" && SVG_farbig}
			</Link>
			<Link href="/profile">{!session && SVG_ausgegraut}</Link> */}
		</div>
	);
};

export default Footer;
