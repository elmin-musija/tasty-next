import React from "react";
import IngredientMeasureItem from "../ingredient-measure-item/ingredient-measure-item";
import { getIngredientsMeasures } from "../../utils/data";
import { uid } from "uid";

const IngredientMeasureTable = ({ meal }) => {
	const ingredientsMeasures = getIngredientsMeasures(meal);
	return ingredientsMeasures?.map((element) => (
		<IngredientMeasureItem item={element} key={uid()} />
	));
};

export default IngredientMeasureTable;
