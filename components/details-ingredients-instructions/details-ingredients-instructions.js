import React from "react";
import { useState } from "react";
import { uid } from "uid";
import IngredientMeasure from "../ingredient-measure-table/ingredient-measure-table";
import styles from "./details-ingredients-instructions.module.css";

export const DetailsIngredientsInstructions = ({ meal }) => {
	const [btnIngredients, setBtnIngredients] = useState(true);
	const [btnInstructions, setBtnInstructions] = useState(false);

	const toggleHandler = () => {
		setBtnIngredients((prevState) => !prevState);
		setBtnInstructions((prevState) => !prevState);
	};

	return (
		<div key={uid()}>
			<div className={styles.toggle} key={uid()}>
				<button
					onClick={toggleHandler}
					className={
						btnIngredients
							? styles.toggleBtn
							: `${styles.toggleBtn} ${styles.toggleBtnInactive}`
					}
					key={uid()}
				>
					Ingredients
				</button>
				<button
					onClick={toggleHandler}
					className={
						btnInstructions
							? styles.toggleBtn
							: `${styles.toggleBtn} ${styles.toggleBtnInactive}`
					}
					key={uid()}
				>
					Instructions
				</button>
			</div>
			{btnIngredients && <IngredientMeasure meal={meal} />}

			{btnInstructions && (
				<div key={uid()}>
					{meal?.strInstructions.split("\n").map((paragraph) => (
						<p key={uid()} className={styles.instructionParagraph}>
							{" "}
							{paragraph}
						</p>
					))}
					<p key={uid()}>{meal?.strTags}</p>
				</div>
			)}
		</div>
	);
};
