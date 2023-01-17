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

module.exports = {
	getIngredients,
	getMeasures,
};
