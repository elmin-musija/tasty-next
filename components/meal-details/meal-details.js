import React from "react";
import Image from "next/image";
import { uid } from "uid";
import { useSession } from "next-auth/react";
import FavoritesButton from "../../components/favorites-button/favorites-button";
import { getIngredients, getMeasures } from "../../utils/data";

const MealDetails = (props) => {
	const { data: session, status } = useSession();
	const { meal } = props;
	const ingredients = getIngredients(meal);
	const measures = getMeasures(meal);
	return (
		<div key={uid()}>
			<h1>{meal.strMeal}</h1>
			<Image
				src={meal.strMealThumb}
				alt={meal.strMeal}
				width={250}
				height={250}
				priority
			/>
			<p key={uid()}>{meal?.strCategory}</p>
			<p key={uid()}>{meal?.strArea}</p>
			<p key={uid()}>{meal?.strInstructions}</p>
			<p key={uid()}>{meal?.strTags}</p>
			<a href={meal?.strYoutube} target="_blank">
				Link to Youtube
			</a>
			{session && status === "authenticated" && <FavoritesButton meal={meal} />}
			<p key={uid()}>Ingredients</p>
			{ingredients.map((element) => (
				<p key={uid()}>{element}</p>
			))}
			<p key={uid()}>Measures</p>
			{measures.map((element) => (
				<p key={uid()}>{element}</p>
			))}
		</div>
	);
};

export default MealDetails;
