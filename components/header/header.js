import React, { useState } from "react";
import LoginButton from "../login-button/login-button";
import LogoutButton from "../logout-button/logout-button";
import { useSession } from "next-auth/react";
import styles from "./header.module.css";
import { useRouter } from "next/router";

function Header() {
	const { data: session, status } = useSession();
	const router = useRouter();

	return (
		<div className={styles.header}>
			{session && status === "authenticated" && (
				<p>You're logged in as {session.user.name || session.user.email}</p>
			)}
			{router.pathname !== "/auth/login" && status !== "authenticated" && (
				<LoginButton />
			)}
			{status === "authenticated" && <LogoutButton />}
		</div>
	);
}

export default Header;
