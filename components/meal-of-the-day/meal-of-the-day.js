import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { uid } from "uid";
import styles from "./meal-of-the-day.module.css";

const MealOfTheDay = ({ randomMeal }) => {
	return (
		<div>
			<h2>Meal of the Day</h2>
			<div key={uid()} className={styles.mealOfDayItem}>
				<Link href={`/details/${randomMeal.idMeal}`}>
					{/* <Image
						src={randomMeal.strMealThumb}
						alt={randomMeal.strMeal}
						width={50}
						height={50}
					/> */}
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
