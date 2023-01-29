import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "./favorites-button.module.css";

const FavoritesButton = ({ meal }) => {
	const { data: session, status } = useSession();
	const [button, setButton] = useState(false);

	const onClickHandler = (paramMeal) => {
		// optimistic....
		setButton((prevState) => !prevState);
		const meal = {
			idMeal: paramMeal.idMeal,
			strMeal: paramMeal.strMeal,
			strArea: paramMeal.strArea,
			strCategory: paramMeal.strCategory,
			strCategory: paramMeal.strCategory,
			strMealThumb: paramMeal.strMealThumb,
			user: session.user.email,
		};
		const options = {
			method: "POST",
			headers: { "Application-Type": "application/json" },
			body: JSON.stringify(meal),
		};
		fetch("/api/favorites/favorites", options)
			.then((res) => res.json())
			.then((result) => {
				if (result.inserted) {
					setButton(true);
				} else if (result.deleted) {
					setButton(false);
				}
			});
	};

	useEffect(() => {
		const options = {
			method: "GET",
			headers: { "Application-Type": "application/json" },
		};
		fetch(`/api/favorites/favorites/${meal.idMeal}`, options)
			.then((res) => res.json())
			.then((result) => {
				if (result.present) {
					setButton(true);
				}
				if (!result.present) {
					setButton(false);
				}
			});
	}, []);

	return (
		<button className={styles.btn} onClick={() => onClickHandler(meal)}>
			{button ? (
				<img src="/heart-colored.svg" alt="Heart" />
			) : (
				<img src="/heart.svg" alt="Heart" />
			)}
		</button>
	);
};

export default FavoritesButton;
