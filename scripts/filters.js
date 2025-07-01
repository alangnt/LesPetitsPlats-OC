import { recipes } from "../data/recipes.js";

const getIngredients = () => {
	const ingredientsSelect = document.getElementById("ingredients");
	const ingredientsList = [];
	
	for (let recipe of recipes) {
		for (let ingredient of recipe.ingredients) {
			if (!ingredient.ingredient) continue;
			else if (ingredientsList.includes(ingredient.ingredient)) continue;
			else {
				const option = document.createElement("option");
				option.value = ingredient.ingredient;
				option.innerText = ingredient.ingredient;
				
				ingredientsList.push(ingredient.ingredient);
				ingredientsSelect.appendChild(option);
			}
		}
	}
	
	return ingredientsSelect;
}

const getApparels = () => {
	const apparelsSelect = document.getElementById("appareils");
	const apparelsList = [];
	
	for (let recipe of recipes) {
		if (!recipe.appliance) continue;
		else if (apparelsList.includes(recipe.appliance)) continue;
		else {
			const option = document.createElement("option");
			option.value = recipe.appliance;
			option.innerText = recipe.appliance;
			
			apparelsList.push(recipe.appliance);
			apparelsSelect.appendChild(option);
		}
	}
	
	return apparelsSelect;
}

const getUstensils = () => {
	const ustensilsSelect = document.getElementById("ustensils");
	const ustensilsList = [];
	
	for (let recipe of recipes) {
		if (!recipe.ustensils) continue;
		else {
			for (let ustensil of recipe.ustensils) {
				if (ustensilsList.includes(ustensil)) continue;
				else {
					const option = document.createElement("option");
					option.value = ustensil;
					option.innerText = ustensil;
					
					ustensilsList.push(ustensil);
					ustensilsSelect.appendChild(option);
				}
			}
		}
	}
	
	return ustensilsSelect;
}

const runFilters = () => {
	getIngredients();
	getApparels();
	getUstensils();
}

runFilters();
