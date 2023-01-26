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

	const focusHandlerFirstName = () => {
		inputFirstNameRef.current.focus();
	};

	const focusHandlerLastName = () => {
		inputLastNameRef.current.focus();
	};

	const focusHandlerEmail = () => {
		inputEmailRef.current.focus();
	};

	const focusHandlerPasswordFirst = () => {
		inputPasswordFirstRef.current.focus();
	};

	const focusHandlerPasswordSecond = () => {
		inputPasswordSecondRef.current.focus();
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
		<div className={styles.signinPage}>
			<h3>Sign in</h3>
			<form className={styles.form} onSubmit={onSubmitHandler}>
				<div
					onClick={focusHandlerFirstName}
					className={styles.inputFieldContainer}
				>
					<div className={styles.inputIconContainer}>
						<img src="/user.png" alt="user icon" className={styles.inputIcon} />
					</div>
					<input
						type="text"
						name="input-firstname"
						id="input-firstname"
						placeholder="Firstname"
						ref={inputFirstNameRef}
						required
					/>
				</div>

				<div
					onClick={focusHandlerLastName}
					className={styles.inputFieldContainer}
				>
					<div className={styles.inputIconContainer}>
						<img src="/user.png" alt="user icon" className={styles.inputIcon} />
					</div>
					<input
						type="text"
						name="input-lastname"
						id="input-lastname"
						placeholder="Lastname"
						ref={inputLastNameRef}
						required
					/>
				</div>

				<div onClick={focusHandlerEmail} className={styles.inputFieldContainer}>
					<div className={styles.inputIconContainer}>
						<img
							src="/email.svg"
							alt="email icon"
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
					onClick={focusHandlerPasswordFirst}
					className={styles.inputFieldContainer}
				>
					<div className={styles.inputIconContainer}>
						<img src="/lock.svg" alt="lock icon" className={styles.inputIcon} />
					</div>
					<input
						type="password"
						name="input-password-first"
						id="input-password-first"
						placeholder="Password"
						ref={inputPasswordFirstRef}
						required
					/>
				</div>

				<div
					onClick={focusHandlerPasswordSecond}
					className={styles.inputFieldContainer}
				>
					<div className={styles.inputIconContainer}>
						<img src="/lock.svg" alt="lock icon" className={styles.inputIcon} />
					</div>
					<input
						type="password"
						name="input-password-second"
						id="input-password-second"
						placeholder="Repeat password"
						ref={inputPasswordSecondRef}
						required
					/>
				</div>

				<input type="submit" value="Sign in" />
				<p>
					Already have an account?{" "}
					<input type="button" onClick={() => signIn()} value="Log in" />.
				</p>
			</form>
			{!passwordIsValid && <p>Wrong Password</p>}
			{passwordIsValid && userCreated && <p>User created</p>}
		</div>
	);
}

export default SigninForm;
