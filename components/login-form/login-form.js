import React from "react";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./login-form.module.css";

const LoginForm = (props) => {
	const router = useRouter();
	const inputEmailRef = useRef();
	const inputPasswordRef = useRef();

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		await signIn("credentials", {
			email: inputEmailRef.current.value,
			password: inputPasswordRef.current.value,
			callbackUrl: "/favorites",
		});
		inputEmailRef.current.value = "";
		inputPasswordRef.current.value = "";
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={onSubmitHandler} className={styles.form}>
				<input
					type="email"
					name="input-email"
					id="input-email"
					placeholder="email address"
					ref={inputEmailRef}
				/>
				<input
					type="password"
					name="input-password"
					id="input-password"
					placeholder="password"
					ref={inputPasswordRef}
				/>
				<input type="submit" value="login" />
				<input
					type="button"
					onClick={() => {
						router.push("/auth/signin");
					}}
					value="No Account? Sign up now!"
				/>
			</form>
		</div>
	);
};

export default LoginForm;
