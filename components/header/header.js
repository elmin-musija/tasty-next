import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import LoginButton from "../login-button/login-button";
import LogoutButton from "../logout-button/logout-button";
import Searchbar from "../searchbar/searchbar";
import styles from "./header.module.css";

function Header() {
	const { data: session, status } = useSession();
	const router = useRouter();

	return (
		<>
			<div className={styles.header}>
				{session && status === "authenticated" && (
					<p>{session.user.name || session.user.email}</p>
				)}
				{router.pathname !== "/auth/login" && status !== "authenticated" && (
					<LoginButton />
				)}
				{status === "authenticated" && <LogoutButton />}
			</div>
			{router.pathname !== "/auth/login" && router.pathname !== "/profile" && (
				<Searchbar />
			)}
		</>
	);
}

export default Header;
