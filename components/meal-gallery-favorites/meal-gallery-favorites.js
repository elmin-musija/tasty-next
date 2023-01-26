import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import styles from "./meal-gallery-favorites.module.css";

const MealGalleryFavorites = ({ category, meals }) => {
	return (
		<div key={uid()} className={styles.mealGallery}>
			<h2>{category}</h2>
			<div className={styles.favContainer}>
				{meals.map((element) => (
					<div key={uid()} className={styles.mealItem}>
						<Image
							src={element.strMealThumb}
							alt={element.strMeal}
							width={100}
							height={100}
							priority
							className={styles.mealImg}
						/>
						<div className={styles.mealNameContainer}>
							<p className={styles.mealName}>{element.strMeal}</p>
							<div>
								<div className={styles.circle}></div>
								<p>{element.strCategory}</p>
							</div>
						</div>
						<Link href={`/details/${element.idMeal}`}>
							<img
								src="/arrow-right.svg"
								alt="arrow"
								className={styles.arrow}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default MealGalleryFavorites;
