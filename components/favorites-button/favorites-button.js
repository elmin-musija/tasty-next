import React, { useState, useEffect } from "react";
import styles from "./favorites-button.module.css";

const FavoritesButton = ({ meal }) => {
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
		};
		const options = {
			method: "POST",
			headers: { "Application-Type": "application/json" },
			body: JSON.stringify(meal),
		};
		fetch("/api/favorites", options)
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
		fetch(`/api/favorites/${meal.idMeal}`, options)
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
		<button
			className={button ? styles.checked : ""}
			onClick={() => onClickHandler(meal)}
		>
			Add to Favorites
		</button>
	);
};

export default FavoritesButton;
