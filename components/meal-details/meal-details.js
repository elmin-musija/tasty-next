import React from "react";
import Image from "next/image";
import { uid } from "uid";
import { DetailsIngredientsInstructions } from "../details-ingredients-instructions/details-ingredients-instructions";
import DetailsHeader from "../details-header/details-header";
import styles from "./meal-details.module.css";

const MealDetails = ({ meal }) => {
	return (
		<div key={uid()} className={styles.details}>
			<Image
				src={meal.strMealThumb}
				alt={meal.strMeal}
				width={250}
				height={250}
				priority
			/>
			<div className={styles.mealInfo}>
				<DetailsHeader meal={meal} />
				<DetailsIngredientsInstructions meal={meal} />
			</div>
		</div>
	);
};

export default MealDetails;
