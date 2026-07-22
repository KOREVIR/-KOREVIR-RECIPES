// ======================================
// KOREVIR RECIPES
// Search + Category Filter
// ======================================

const searchInput = document.getElementById("search");
const recipeCards = document.querySelectorAll(".recipe-card");
const categoryButtons = document.querySelectorAll(".categories button");

let activeCategory = "All Recipes";

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

searchInput.addEventListener("input", filterRecipes);
// ======================================
// CATEGORY BUTTONS
// ======================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        activeCategory = button.dataset.category;

        filterRecipes();

    });

});
// ======================================
// INITIALIZE
// ======================================

// Sayfa ilk açıldığında tüm tarifleri göster
filterRecipes();

// Enter tuşuna basıldığında form gönderimini engelle
if (searchInput) {

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            e.preventDefault();

        }

    });

}

// İleride yeni tarif kartları eklendiğinde tekrar filtrelemek için
window.addEventListener("load", () => {

    filterRecipes();

});
