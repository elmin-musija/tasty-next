import React, { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import styles from "./signin-form.module.css";

function SigninForm() {
	const [passwordIsValid, setPasswordIsValid] = useState(true);
	const [userCreated, setUserCreated] = useState(false);
	const inputFirstNameRef = useRef();
	const inputLastNameRef = useRef();
	const inputEmailRef = useRef();
	const inputPasswordFirstRef = useRef();
	const inputPasswordSecondRef = useRef();

	const comparePasswords = () => {
		return (
			inputPasswordFirstRef.current.value ===
			inputPasswordSecondRef.current.value
		);
	};
	const resetPasswordField = () => {
		inputPasswordFirstRef.current.value = "";
		inputPasswordSecondRef.current.value = "";
	};
	const resetEmailField = () => {
		inputEmailRef.current.value = "";
	};
	const resetNameFields = () => {
		inputFirstNameRef.current.value = "";
		inputLastNameRef.current.value = "";
	};

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		if (!comparePasswords()) {
			setPasswordIsValid(false);
			inputPasswordFirstRef.current.focus();
			resetPasswordField();
			return;
		}

		setUserCreated(true);

		const req = await fetch("/api/auth/signup", {
			method: "POST",
			headers: { "Application-Type": "application/json" },
			body: JSON.stringify({
				firstname: inputFirstNameRef.current.value,
				lastname: inputLastNameRef.current.value,
				email: inputEmailRef.current.value,
				password: inputPasswordFirstRef.current.value,
			}),
		});

		const resp = await req.json();

		if (resp.success) {
			setUserCreated(true);
			resetEmailField();
			resetPasswordField();
			resetNameFields();
			signIn();
		} else {
			setUserCreated(false);
		}
	};

	return (
		<div>
			<h1>Signin</h1>
			<form className={styles.form} onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="input-firstname"
					id="input-firstname"
					placeholder="your firstname"
					ref={inputFirstNameRef}
					required
				/>
				<input
					type="text"
					name="input-lastname"
					id="input-lastname"
					placeholder="your lastname"
					ref={inputLastNameRef}
					required
				/>
				<input
					type="email"
					name="input-email"
					id="input-email"
					placeholder="email address"
					ref={inputEmailRef}
					required
				/>
				<input
					type="password"
					name="input-password-first"
					id="input-password-first"
					placeholder="password"
					ref={inputPasswordFirstRef}
					required
				/>
				<input
					type="password"
					name="input-password-second"
					id="input-password-second"
					placeholder="repeat password"
					ref={inputPasswordSecondRef}
				/>
				<input type="submit" value="Signin" />
				<input
					type="button"
					onClick={() => signIn()}
					value="Already have an account?"
				/>
			</form>
			{!passwordIsValid && <p>Wrong Password</p>}
			{passwordIsValid && userCreated && <p>User created</p>}
		</div>
	);
}

export default SigninForm;
