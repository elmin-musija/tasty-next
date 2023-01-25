import React from "react";
import { useState } from "react";
import styles from "./ingredient-measure-item.module.css";

const IngredientMeasureItem = ({ item }) => {
	const [buttonClicked, setButtonClicked] = useState(false);

	const onClickHandler = () => {
		setButtonClicked((prevState) => !prevState);
	};
	const { ingredient, measure } = item;

	return (
		<p
			className={buttonClicked ? styles.clicked : null}
			onClick={onClickHandler}
		>
			{ingredient} - {measure}
		</p>
	);
};

export default IngredientMeasureItem;
