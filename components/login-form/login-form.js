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

	const onGitHubLoginHandler = async () => {
		await signIn("github", { callbackUrl: "/favorites" });
	};

	const onGoogleLoginHandler = async () => {
		await signIn("google", { callbackUrl: "/favorites" });
	};

	const onDiscordLoginHandler = async () => {
		await signIn("discord", { callbackUrl: "/favorites" });
	};

	return (
		<div className={styles.loginPage}>
			<h3>Login</h3>
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
					className={styles.btn}
				/>
				<div className={styles.loginSignUpBtnContainer}>
					<input type="submit" value="Login" />
					<input
						type="button"
						onClick={() => {
							router.push("/auth/signin");
						}}
						value="No Account? Sign up now!"
					/>
				</div>
			</form>
			<p>
				You can also use an existing account of one the following services
				instead.
			</p>
			<div className={styles.serviceLogInBtnContainer}>
				<button
					onClick={onGitHubLoginHandler}
					className={styles.serviceLogInBtn}
				>
					<img
						src="/github-dark-logo.svg"
						alt="Search Bar Icon"
						className={styles.icon}
					/>
					<p>Github</p>
				</button>
				<button
					onClick={onGoogleLoginHandler}
					className={styles.serviceLogInBtn}
				>
					<img
						src="/google-logo.svg"
						alt="Search Bar Icon"
						className={styles.icon}
					/>
					<p>Google</p>
				</button>
				<button
					onClick={onDiscordLoginHandler}
					className={styles.serviceLogInBtn}
				>
					<img
						src="/discord-logo-blue.svg"
						alt="Search Bar Icon"
						className={styles.icon}
					/>
					<p>Discord</p>
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
