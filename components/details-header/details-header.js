import React from "react";
import { uid } from "uid";
import { useSession } from "next-auth/react";
import FavoritesButton from "../../components/favorites-button/favorites-button";
import styles from "./details-header.module.css";

const DetailsHeader = ({ meal }) => {
	const { data: session, status } = useSession();
	return (
		<div className={styles.mealHeader} key={uid()}>
			<h3>{meal.strMeal}</h3>
			<p className={styles.category} key={uid()}>
				{meal?.strCategory}
			</p>
			<p className={styles.area} key={uid()}>
				{meal?.strArea}
			</p>
			{session && status === "authenticated" && <FavoritesButton meal={meal} />}
		</div>
	);
};

export default DetailsHeader;
