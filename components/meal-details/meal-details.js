import React from "react";
import Image from "next/image";
import { uid } from "uid";
import { useSession } from "next-auth/react";
import FavoritesButton from "../../components/favorites-button/favorites-button";
import IngredientMeasure from "../ingredient-measure-table/ingredient-measure-table";

const MealDetails = (props) => {
	const { data: session, status } = useSession();
	const { meal } = props;

	return (
		<div key={uid()}>
			<h2>{meal.strMeal}</h2>
			<Image
				src={meal.strMealThumb}
				alt={meal.strMeal}
				width={250}
				height={250}
				priority
			/>
			<h3 key={uid()}>{meal?.strCategory}</h3>
			<h3 key={uid()}>{meal?.strArea}</h3>
			<p key={uid()}>{meal?.strInstructions}</p>
			<h3 key={uid()}>{meal?.strTags}</h3>
			<a href={meal?.strYoutube} target="_blank">
				Link to Youtube
			</a>
			{session && status === "authenticated" && <FavoritesButton meal={meal} />}

			<div>
				<h3 key={uid()}>Ingredients - Measures</h3>
				<IngredientMeasure meal={meal} />
			</div>
		</div>
	);
};

export default MealDetails;
