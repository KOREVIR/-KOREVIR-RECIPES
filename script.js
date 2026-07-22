// ===============================
// KOREVIR Recipes
// Search + Category Filter
// ===============================

const searchInput = document.getElementById("search");
const recipeCards = document.querySelectorAll(".recipe-card");
const categoryButtons = document.querySelectorAll(".categories button");

let activeCategory = "All Recipes";

// -------------------------------
// SEARCH
// -------------------------------

function filterRecipes() {

    const searchText = searchInput.value.toLowerCase();

    recipeCards.forEach(card => {

        const title = card.querySelector("h2").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText);

        const matchesCategory =
            activeCategory === "All Recipes" ||
            category === activeCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}

searchInput.addEventListener("keyup", filterRecipes);
