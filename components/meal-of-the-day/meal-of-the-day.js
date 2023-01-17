import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";

const MealOfTheDay = ({ randomMeal }) => {
	return (
		<div key={uid()}>
			<Link href={`/details/${randomMeal.idMeal}`}>
				<h2>Meal of the Day</h2>
				<Image
					src={randomMeal.strMealThumb}
					alt={randomMeal.strMeal}
					width={50}
					height={50}
				/>
				<p key={uid()}>{randomMeal.strMeal}</p>
				<p key={uid()}>{randomMeal.strCategory}</p>
				<p key={uid()}>{randomMeal.strArea}</p>
			</Link>
		</div>
	);
};

export default MealOfTheDay;
