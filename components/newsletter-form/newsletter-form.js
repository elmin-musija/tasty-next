import React from "react";
import { useRef } from "react";

const NewsletterForm = () => {
	const inputEmailNewsletterRef = useRef();

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
	};

	return (
		<form onSubmit={onSubmitNewsletterHandler}>
			<input
				type="email"
				name="input-email"
				id="input-email"
				ref={inputEmailNewsletterRef}
				placeholder="Subscribe for the tasty newsletter"
				required
			/>
			<input type="submit" value="Subscribe" />
		</form>
	);
};

export default NewsletterForm;
