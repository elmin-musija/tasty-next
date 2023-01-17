import { createContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider(props) {
	const [favorites, setFavorites] = useState([]);

	const checkIfMealExists = (paramMeal) => {
		for (const meals of favorites) {
			if (meals.idMeal === paramMeal.idMeal) {
				return true;
			}
		}
		return false;
	};

	const removeFromFavorites = (paramMeal) => {
		const newFavorites = favorites.filter(
			(element) => element.idMeal !== paramMeal.idMeal
		);
		setFavorites(newFavorites);
	};

	const addToFavorites = (paramMeal) => {
		if (!checkIfMealExists(paramMeal)) {
			setFavorites((prevState) => [...prevState, paramMeal]);
		} else {
			removeFromFavorites(paramMeal);
		}
	};

	return (
		<AppContext.Provider
			value={{ favorites, addToFavorites, checkIfMealExists }}
		>
			{props.children}
		</AppContext.Provider>
	);
}

export default AppContext;
