import React from "react";
import Image from "next/image";
import { uid } from "uid";
import { DetailsIngredientsInstructions } from "../details-ingredients-instructions/details-ingredients-instructions";
import DetailsHeader from "../details-header/details-header";
import styles from "./meal-details.module.css";
import { motion } from "framer-motion";

const MealDetails = ({ meal }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			key={uid()}
			className={styles.details}
		>
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
		</motion.div>
	);
};

export default MealDetails;
