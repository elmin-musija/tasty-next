import React from "react";
import { useRef, useContext } from "react";
import NotificationContext from "../../context/context";
import styles from "./newsletter-form.module.css";

const NewsletterForm = () => {
	const inputEmailNewsletterRef = useRef();
	const { displayNotification } = useContext(NotificationContext);

	const onSubmitNewsletterHandler = async (event) => {
		event.preventDefault();
		const req = await fetch("/api/newsletter/register", {
			method: "POST",
			headers: { "Application-Type": "application/json" },
			body: JSON.stringify({ email: inputEmailNewsletterRef.current.value }),
		});
		const res = await req.json();
		/**
		 * TODO: handle response...
		 */
		if (res.success) {
			displayNotification({
				type: "success",
				message: "Successfully registrated for newsletter",
			});
		} else if (res.error) {
			displayNotification({
				type: "error",
				message: "Could not registrate for newsletter",
			});
		}
	};

	const focusHandlerEmail = () => {
		inputEmailNewsletterRef.current.focus();
	};

	return (
		<div className={styles.newsletter}>
			<h2>Newsletter</h2>
			<p>
				Subscribe to the Tasty newsletter and we keep you updated with brand new
				recipies.
			</p>
			<form onSubmit={onSubmitNewsletterHandler} className={styles.form}>
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
						ref={inputEmailNewsletterRef}
						placeholder="Email"
						required
					/>
				</div>
				<input type="submit" value="Subscribe" className={styles.btn} />
			</form>
		</div>
	);
};

export default NewsletterForm;
