import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./footer.module.css";

const Footer = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const url = router.pathname;

	return (
		<div className={styles.footer}>
			<Link href="/">
				{url === "/" ? (
					<img src="/home-colored.svg" alt="home" className={styles.icon} />
				) : (
					<img src="/home.svg" alt="home" className={styles.icon} />
				)}
			</Link>

			<Link href="/search">
				{url === "/search" ? (
					<img src="/search-colored.svg" alt="search" className={styles.icon} />
				) : (
					<img src="/search.svg" alt="search" className={styles.icon} />
				)}
			</Link>

			<Link href="/favorites">
				{url === "/favorites" ? (
					<img
						src="/heart-colored.svg"
						alt="favourites"
						className={styles.icon}
					/>
				) : (
					<img src="/heart.svg" alt="favourites" className={styles.icon} />
				)}
			</Link>

			{session && status === "authenticated" && url !== "/profile" && (
				<Link href="/profile">
					<img src="/profile.svg" alt="profile" className={styles.icon} />
				</Link>
			)}
			{session && status === "authenticated" && url === "/profile" && (
				<Link href="/profile">
					<img
						src="/profile-colored.svg"
						alt="profile"
						className={styles.icon}
					/>
				</Link>
			)}
			{!session && (
				<Link href="/profile">
					<img src="/profile.svg" alt="profile" className={styles.icon} />
				</Link>
			)}
		</div>
	);
};

export default Footer;
