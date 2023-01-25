import React from "react";
import { signIn } from "next-auth/react";
import styles from "./login-button.module.css";

function LoginButton() {
	const onLogoutHandler = () => {
		signIn();
	};

	return (
		<button onClick={onLogoutHandler} className={styles.btn}>
			Login
		</button>
	);
}

export default LoginButton;
