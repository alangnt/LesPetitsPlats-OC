import { recipes } from "../data/recipes.js";
import { getRecipesCards } from "./main.js";

const ingredientsElement = document.getElementById("ingredients");
ingredientsElement.addEventListener("change", () => { filterBy(ingredientsElement.value, "ingredient"); });

const apparelsElement = document.getElementById("appareils");
apparelsElement.addEventListener("change", () => { filterBy(apparelsElement.value, "apparels"); });

const ustensilsElement = document.getElementById("ustensils");
ustensilsElement.addEventListener("change", () => { filterBy(ustensilsElement.value, "ustensils"); });

const filtersList = [];

const deleteFilter = (filter) => {
	const index = filtersList.indexOf(filter);
	if (index !== -1) {
		filtersList.splice(index, 1);
	}
	document.getElementById(filter).remove();
	applyFilters();
};

const createFilter = (filter) => {
	const filters = document.getElementById("filtersList");
	
	const filterBody = document.createElement("div");
	filterBody.id = filter;
	filterBody.classList.add("flex", "items-center", "gap-4", "bg-yellow-300", "rounded-lg", "p-4");
	
	const filterTitle = document.createElement("p");
	filterTitle.innerText = filter;
	
	const filterDeleteButton = document.createElement("button");
	filterDeleteButton.addEventListener("click", () => deleteFilter(filter));
	filterDeleteButton.innerText = "X";
	filterDeleteButton.classList.add("hover:font-bold", "transition-all", "duration-150");
	
	filterBody.appendChild(filterTitle);
	filterBody.appendChild(filterDeleteButton);
	
	filters.appendChild(filterBody);
}

const applyFilters = () => {
	const currentCards = document.getElementById("recipesList");
	currentCards.innerHTML = "";
	
	let filteredRecipes = recipes;
	
	for (let filter of filtersList) {
		filteredRecipes = filteredRecipes.filter((recipe) => {
			const hasIngredient = recipe.ingredients.some(i => i.ingredient === filter);
			const hasAppliance = recipe.appliance === filter;
			const hasUstensil = recipe.ustensils.includes(filter);
			return hasIngredient || hasAppliance || hasUstensil;
		});
	}
	
	const recipesCount = document.getElementById("recipesCount");
	recipesCount.innerText = `${filteredRecipes.length} recette${filteredRecipes.length > 1 ? "s" : ""}`;
	
	getRecipesCards(filteredRecipes);
};

const resetSelectValue = (type) => {
	switch (type) {
		case "ingredient":
			ingredientsElement.value = "";
			break;
		case "apparels":
			apparelsElement.value = "";
			break;
		case "ustensils":
			ustensilsElement.value = "";
			break;
		default:
			break;
	}
}

const filterBy = (filter, type) => {
	resetSelectValue(type);
	
	if (filtersList.includes(filter)) return;
	
	filtersList.push(filter);
	createFilter(filter);
	
	applyFilters();
};
