import { recipes } from "../data/recipes.js";

const getIngredients = () => {
	const ingredientsSelect = document.getElementById("ingredients");
	const ingredientsList = [];
	
	for (let recipe of recipes) {
		for (let ingredient of recipe.ingredients) {
			if (!ingredient.ingredient) continue;
			else if (ingredientsList.includes(ingredient.ingredient)) continue;
			else ingredientsList.push(ingredient.ingredient);
		}
	}
	
	ingredientsList.sort().forEach((ingredient) => {
		const option = document.createElement("option");
		option.value = ingredient;
		option.innerText = ingredient;
		
		ingredientsSelect.appendChild(option);
	});
	
	return ingredientsSelect;
}

const getApparels = () => {
	const apparelsSelect = document.getElementById("appareils");
	const apparelsList = [];
	
	for (let recipe of recipes) {
		if (!recipe.appliance) continue;
		else if (apparelsList.includes(recipe.appliance)) continue;
		else apparelsList.push(recipe.appliance);
	}
	
	apparelsList.sort().forEach((appliance) => {
		const option = document.createElement("option");
		option.value = appliance;
		option.innerText = appliance;
		
		apparelsSelect.appendChild(option);
	});
	
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
				else ustensilsList.push(ustensil);
			}
		}
	}
	
	ustensilsList.sort().forEach((ustensil) => {
		const option = document.createElement("option");
		option.value = ustensil;
		option.innerText = ustensil;
		
		ustensilsSelect.appendChild(option);
	})
	
	return ustensilsSelect;
}

const runFilters = () => {
	getIngredients();
	getApparels();
	getUstensils();
}

runFilters();
