const getIngredients = (paramMeal) => {
	let ingredients = [];

	for (const key in paramMeal) {
		if (
			key.includes("Ingredient") &&
			paramMeal[key] &&
			paramMeal[key].trim() != ""
		)
			ingredients.push(paramMeal[key]);
	}
	return ingredients;
};

const getMeasures = (paramMeal) => {
	let measures = [];

	for (const key in paramMeal) {
		if (
			key.includes("Measure") &&
			paramMeal[key] &&
			paramMeal[key].trim() != ""
		)
			measures.push(paramMeal[key]);
	}
	return measures;
};

const getIngredientsMeasures = (paramMeal) => {
	const ingredients = getIngredients(paramMeal);
	const measures = getMeasures(paramMeal);
	const length = Math.min(ingredients.length, measures.length);
	let ingredientsMeasures = [];
	for (let i = 0; i < length; i++) {
		ingredientsMeasures.push({
			ingredient: ingredients[i],
			measure: measures[i],
		});
	}
	return ingredientsMeasures;
};

module.exports = {
	getIngredients,
	getMeasures,
	getIngredientsMeasures,
};
