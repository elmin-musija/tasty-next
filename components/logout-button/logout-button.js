import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./logout-button.module.css";

function LogoutButton() {
	const router = useRouter();
	const onLogoutHandler = async () => {
		const redirect = await signOut({ redirect: false, callbackUrl: "/home" });
		router.push(redirect.url);
	};

	return (
		<button onClick={onLogoutHandler} className={styles.btn}>
			Logout
		</button>
	);
}

export default LogoutButton;
