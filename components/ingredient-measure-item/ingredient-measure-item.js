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
		<div
			className={
				buttonClicked
					? `${styles.ingrItem} ${styles.ingrItemActive}`
					: styles.ingrItem
			}
			onClick={onClickHandler}
		>
			{measure} {ingredient}
		</div>
	);
};

export default IngredientMeasureItem;
