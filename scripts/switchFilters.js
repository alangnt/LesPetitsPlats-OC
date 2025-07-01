import { recipes } from "../data/recipes.js";
import { getRecipesCards } from "./main.js";

const ingredientsElement = document.getElementById("ingredients");
ingredientsElement.addEventListener("change", () => { filterBy(ingredientsElement.value, "ingredient"); });

const apparelsElement = document.getElementById("appareils");
apparelsElement.addEventListener("change", () => { filterBy(apparelsElement.value, "apparels"); });

const ustensilsElement = document.getElementById("ustensils");
ustensilsElement.addEventListener("change", () => { filterBy(ustensilsElement.value, "ustensils"); });

const filterBy = (filter, type) => {
	const currentCards = document.getElementById("recipesList");
	currentCards.innerHTML = "";
	
	const newCards = [];
	
	switch (type) {
		case "ingredient":
			for (let recipe of recipes) {
				for (let ingredient of recipe.ingredients) {
					if (ingredient.ingredient === filter) newCards.push(recipe);
				}
			}
			break;
		case "apparels":
			for (let recipe of recipes) {
				if (recipe.appliance === filter) newCards.push(recipe);
			}
			break;
		case "ustensils":
			for (let recipe of recipes) {
				for (let ustensil of recipe.ustensils) {
					if (ustensil === filter) newCards.push(recipe);
				}
			}
			break;
		default:
			return;
	}
	
	return getRecipesCards(newCards);
}
