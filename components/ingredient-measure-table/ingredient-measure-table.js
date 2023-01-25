import React from "react";
import IngredientMeasureItem from "../ingredient-measure-item/ingredient-measure-item";
import { getIngredientsMeasures } from "../../utils/data";
import styles from "./ingredient-measure-table.module.css";

const IngredientMeasureTable = ({ meal }) => {
	const ingredientsMeasures = getIngredientsMeasures(meal);
	return ingredientsMeasures?.map((element) => (
		<IngredientMeasureItem item={element} />
	));
};

export default IngredientMeasureTable;
