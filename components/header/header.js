import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import LoginButton from "../login-button/login-button";
import LogoutButton from "../logout-button/logout-button";
import Searchbar from "../searchbar/searchbar";
import styles from "./header.module.css";

function Header() {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (
		router.pathname === "/" ||
		router.pathname === "/privacy-policy" ||
		router.pathname === "/onboarding"
	) {
		return;
	}

	return (
		<>
			<h1 className={styles.heading1}>Tasty</h1>
			<div className={styles.header}>
				<Link href="/home">
					<img src="/logo-blue.svg" alt="Logo" className={styles.logo} />
				</Link>
				<div className={styles.user}>
					{session &&
						status === "authenticated" &&
						router.pathname !== "/profile" && (
							<Link href="/profile">
								{session.user.name || session.user.email}
							</Link>
						)}
					{router.pathname !== "/auth/login" &&
						router.pathname !== "/auth/signin" &&
						status !== "authenticated" && <LoginButton />}
					{status === "authenticated" && <LogoutButton />}
				</div>
			</div>
			{router.pathname !== "/auth/login" &&
				router.pathname !== "/auth/signin" &&
				router.pathname !== "/profile" &&
				router.pathname !== "/details/[detailsId]" && <Searchbar />}
		</>
	);
}

export default Header;
