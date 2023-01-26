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

	const focusHandlerEmail = () => {
		inputEmailRef.current.focus();
	};

	const focusHandlerPassword = () => {
		inputPasswordRef.current.focus();
	};

	return (
		<div className={styles.loginPage}>
			<div className={styles.header}>
				<h3>Login</h3>
				<div className={styles.serviceLogInBtnContainer}>
					<button
						onClick={onGoogleLoginHandler}
						className={styles.serviceLogInBtn}
					>
						<img
							src="/google-logo.svg"
							alt="Search Bar Icon"
							className={styles.serviceIcon}
						/>
					</button>
					<button
						onClick={onDiscordLoginHandler}
						className={styles.serviceLogInBtn}
					>
						<img
							src="/discord-logo-square.png"
							alt="Search Bar Icon"
							className={styles.serviceIcon}
						/>
					</button>
					<button
						onClick={onGitHubLoginHandler}
						className={styles.serviceLogInBtn}
					>
						<img
							src="/github-dark-logo.svg"
							alt="Search Bar Icon"
							className={styles.serviceIcon}
						/>
					</button>
				</div>
			</div>
			<form onSubmit={onSubmitHandler} className={styles.form}>
				<div onClick={focusHandlerEmail} className={styles.inputFieldContainer}>
					<div className={styles.inputIconContainer}>
						<img
							src="/email.svg"
							alt="Search Bar Icon"
							className={styles.inputIcon}
						/>
					</div>
					<input
						type="email"
						name="input-email"
						id="input-email"
						placeholder="Email"
						ref={inputEmailRef}
						required
					/>
				</div>
				<div
					onClick={focusHandlerPassword}
					className={styles.inputFieldContainer}
				>
					<div className={styles.inputIconContainer}>
						<img
							src="/lock.svg"
							alt="Search Bar Icon"
							className={styles.inputIcon}
						/>
					</div>
					<input
						type="password"
						name="input-password"
						id="input-password"
						placeholder="Password"
						ref={inputPasswordRef}
						className={styles.btn}
						required
					/>
				</div>
				<input type="submit" value="Login" />

				<p>
					No Account?{" "}
					<input
						type="button"
						onClick={() => {
							router.push("/auth/signin");
						}}
						value="Sign up"
					/>{" "}
					now.
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
