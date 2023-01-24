import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import styles from "./meal-gallery.module.css";

const MealGallery = ({ category, meals }) => {
	return (
		<div key={uid()} className={styles.mealGallery}>
			<h3>{category}</h3>
			<div className={styles.grid}>
				{meals.map((element) => (
					<div key={uid()} className={styles.mealItem}>
						<Link href={`/details/${element.idMeal}`}>
							<Image
								src={element.strMealThumb}
								alt={element.strMeal}
								width={100}
								height={100}
								priority
							/>
							<div className={styles.mealNameContainer}>
								<p>{element.strMeal}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default MealGallery;
