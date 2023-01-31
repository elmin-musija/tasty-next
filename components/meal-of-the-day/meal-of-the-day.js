import React from "react";
import Link from "next/link";
import { uid } from "uid";
import styles from "./meal-of-the-day.module.css";

const MealOfTheDay = ({ randomMeal }) => {
	return (
		<div className={styles.mealOfDay}>
			<h2>Meal of the Day</h2>
			<div key={uid()} className={styles.mealOfDayItem}>
				<Link href={`/details/${randomMeal.idMeal}`}>
					<div>
						<p key={uid()} className={styles.mealHeading}>
							{randomMeal.strMeal}
						</p>
						<div className={styles.mealDetailsContainer}>
							<div className={styles.categoryContainer}>
								<div className={styles.circle}></div>
								<p key={uid()}>{randomMeal.strCategory}</p>
							</div>
							<p key={uid()}>{randomMeal.strArea}</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MealOfTheDay;
