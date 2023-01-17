const getRandomMeal = async () => {
	const randomMealPromise = await fetch(
		"http://www.themealdb.com/api/json/v1/1/random.php"
	);
	const randomMeal = await randomMealPromise.json();

	return randomMeal.meals[0];
};

const getMealByID = async (paramID) => {
	const mealByIDPromise = await fetch(
		`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramID}`
	);
	const mealByID = await mealByIDPromise.json();
	return mealByID.meals[0];
};

const getAllCategories = async () => {
	const allCategoriesPromise = await fetch(
		"http://www.themealdb.com/api/json/v1/1/categories.php"
	);
	const allCategories = await allCategoriesPromise.json();
	return allCategories.categories;
};

const getAllMealsByCategory = async (paramCategory) => {
	const allMealsByCategoryPromise = await fetch(
		`http://www.themealdb.com/api/json/v1/1/filter.php?c=${paramCategory}`
	);
	const allMealsByCategory = await allMealsByCategoryPromise.json();
	return allMealsByCategory.meals;
};

const getAllAreas = async () => {
	const allAreasPromise = await fetch(
		`http://www.themealdb.com/api/json/v1/1/list.php?a=list`
	);
	const allAreas = await allAreasPromise.json();
	return allAreas.meals;
};

const getAllMealsByArea = async (paramArea) => {
	const allMealsByAreaPromise = await fetch(
		`http://www.themealdb.com/api/json/v1/1/filter.php?a=${paramArea}`
	);
	const allMealsByArea = await allMealsByAreaPromise.json();
	return allMealsByArea.meals;
};

const getMealByTitleSearch = async (paramSearch) => {
	const mealByTitleSearchPromise = await fetch(
		`http://www.themealdb.com/api/json/v1/1/search.php?s=${paramSearch}`
	);
	const mealByTitleSearch = await mealByTitleSearchPromise.json();
	if (mealByTitleSearch.meals) {
		return mealByTitleSearch.meals[0];
	} else {
		return null;
	}
};

module.exports = {
	getRandomMeal,
	getMealByID,
	getAllCategories,
	getAllMealsByCategory,
	getAllAreas,
	getAllMealsByArea,
	getMealByTitleSearch,
};
