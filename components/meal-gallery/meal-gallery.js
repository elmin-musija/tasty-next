import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";

const MealGallery = ({ category, meals }) => {
	return (
		<div key={uid()}>
			<h1>{category}</h1>
			{meals.map((element) => (
				<Link key={uid()} href={`/details/${element.idMeal}`}>
					<Image
						src={element.strMealThumb}
						alt={element.strMeal}
						width={100}
						height={100}
						priority
					/>
					<p>{element.strMeal}</p>
				</Link>
			))}
		</div>
	);
};

export default MealGallery;
