import { recipes } from '../data/recipes.js';

const getRecipesCount = () => {
	const recipesCountHTML = document.getElementById('recipesCount');
	recipesCountHTML.innerText = `${recipes.length} recettes`;
	
	return recipesCountHTML;
};

const getRecipeCard = (recipe) => {
	const section = document.getElementById('recipesList');
	
	const article = document.createElement("article");
	article.classList.add("bg-white", "rounded-lg", "overflow-hidden", "relative");
	
	const articleDurationPill = document.createElement("div");
	articleDurationPill.innerText = recipe.time + "min";
	articleDurationPill.classList.add("absolute", "top-4", "right-4", "bg-yellow-300", "rounded-full", "py-1", "px-2", "text-sm");
	
	const articleImageBody = document.createElement("div");
	articleImageBody.classList.add("w-full", "aspect-video", "overflow-hidden");
	
	const articleImage = document.createElement("img");
	articleImage.src = `assets/recipes/${recipe.image}`;
	articleImage.alt = `Recette ${recipe.name}`;
	articleImage.classList.add("w-full");
	
	articleImageBody.appendChild(articleImage);
	
	const articleBody = document.createElement("div");
	articleBody.classList.add("p-4", "text-md");
	
	const bodyTitle = document.createElement("h3");
	bodyTitle.innerText = recipe.name;
	bodyTitle.classList.add("text-lg", "pt-4", "pb-8");
	
	const bodyDescriptionTitle = document.createElement("h4");
	bodyDescriptionTitle.innerText = 'RECETTE';
	bodyDescriptionTitle.classList.add("mb-4");
	
	const bodyDescription = document.createElement("p");
	bodyDescription.innerText = recipe.description;
	bodyDescription.classList.add("mb-8", "line-clamp-4");
	
	const bodyIngredientsTitle = document.createElement("h4");
	bodyIngredientsTitle.innerText = 'INGREDIENTS';
	bodyIngredientsTitle.classList.add("mb-4");
	
	const ingredientsBody = document.createElement("div");
	ingredientsBody.classList.add("grid", "grid-cols-2", "gap-4", "mb-4");
	
	for (let ingredient of recipe.ingredients) {
		if (!ingredient.quantity) continue;
		else {
			const ingredientBody = document.createElement("div");
			
			const ingredientTitle = document.createElement("h5");
			ingredientTitle.innerText = ingredient.ingredient;
			
			const ingredientDescription = document.createElement("p");
			ingredientDescription.innerText = ingredient.quantity + (ingredient.unit ? ingredient.unit : "");
			ingredientDescription.classList.add("text-gray-500");
			
			ingredientBody.appendChild(ingredientTitle);
			ingredientBody.appendChild(ingredientDescription);
			
			ingredientsBody.appendChild(ingredientBody);
		}
	}
	
	articleBody.appendChild(bodyTitle);
	articleBody.appendChild(bodyDescriptionTitle);
	articleBody.appendChild(bodyDescription);
	articleBody.appendChild(bodyIngredientsTitle);
	articleBody.appendChild(ingredientsBody);
	
	article.appendChild(articleDurationPill);
	article.appendChild(articleImageBody);
	article.appendChild(articleBody);
	
	section.appendChild(article);
	
	return section;
};

export const getRecipesCards = (recipesList) => {
	for (let recipe of recipesList) getRecipeCard(recipe);
}

const run = () => {
	getRecipesCount();
	getRecipesCards(recipes);
};

run();
