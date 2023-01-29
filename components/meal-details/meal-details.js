import React, { useState } from "react";
import Image from "next/image";
import { uid } from "uid";
import { useSession } from "next-auth/react";
import FavoritesButton from "../../components/favorites-button/favorites-button";
import IngredientMeasure from "../ingredient-measure-table/ingredient-measure-table";
import styles from "./meal-details.module.css";

const MealDetails = (props) => {
	const { data: session, status } = useSession();
	const { meal } = props;

	const [btnIngredients, setBtnIngredients] = useState(true);
	const [btnInstructions, setBtnInstructions] = useState(false);

	const toggleHandler = () => {
		setBtnIngredients(!btnIngredients);
		setBtnInstructions(!btnInstructions);
	};

	return (
		<div key={uid()} className={styles.details}>
			<Image
				src={meal.strMealThumb}
				alt={meal.strMeal}
				width={250}
				height={250}
				priority
			/>

			{/* ------------------------------ Meal Header ------------------------------ */}
			<div className={styles.mealInfo}>
				<div className={styles.mealHeader}>
					<h3>{meal.strMeal}</h3>
					<p className={styles.category} key={uid()}>
						{meal?.strCategory}
					</p>
					<p className={styles.area} key={uid()}>
						{meal?.strArea}
					</p>
					{session && status === "authenticated" && (
						<FavoritesButton meal={meal} />
					)}
				</div>

				{/* ------------------------------ Toggle Menu ------------------------------ */}
				<div className={styles.toggle}>
					<button
						onClick={toggleHandler}
						className={
							btnIngredients
								? styles.toggleBtn
								: `${styles.toggleBtn} ${styles.toggleBtnInactive}`
						}
					>
						Ingredients
					</button>
					<button
						onClick={toggleHandler}
						className={
							btnInstructions
								? styles.toggleBtn
								: `${styles.toggleBtn} ${styles.toggleBtnInactive}`
						}
					>
						Instructions
					</button>
				</div>

				{/* ------------------------------ Ingredients ------------------------------ */}
				<div>
					<p key={uid()}>Ingredients - Measures</p>
					<IngredientMeasure meal={meal} />
				</div>

				{/* ------------------------------ Instructions ------------------------------ */}
				<p key={uid()}>{meal?.strInstructions}</p>
				<p key={uid()}>{meal?.strTags}</p>
				<a href={meal?.strYoutube} target="_blank">
					Link to Youtube
				</a>
			</div>
		</div>
	);
};

export default MealDetails;
