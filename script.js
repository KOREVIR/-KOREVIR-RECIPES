// ============================================================
// KOREVIR – PREMIUM BRAND EXPERIENCE
// ============================================================

// AMAZON LINK
const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0HCZRBFY7';
const AMAZON_TEXT = '🛒 Shop on Amazon';

// ============================================================
// RECIPES – 50 TARİF (MEVCUT VERİNİZİ AYNEN KORUYUN)
// ============================================================
// ↓↓↓ Bu kısmı kendi RECIPES dizinizle değiştirin ↓↓↓
const RECIPES = [
    {
        id: 'chicken-parmigiana',
        title: 'Chicken Parmigiana',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '30 min',
        serves: 4,
        description: 'A crispy golden chicken breast topped with rich tomato sauce and melted mozzarella cheese.',
        ingredients: ['4 chicken breast fillets', '1 cup plain flour', '2 eggs, beaten', '1 1/2 cups breadcrumbs', '1/2 cup grated Parmesan cheese', '2 cups tomato passata', '1 tsp garlic, minced', '1 tsp dried oregano', '1 cup shredded mozzarella cheese', '2 tbsp olive oil', 'Salt & pepper to taste'],
        method: ['Preheat oven to 200°C. Season chicken, coat in flour, egg, breadcrumbs. Fry until golden. Top with sauce and cheese. Bake 20-25 minutes.']
    },
    // ... 49 tarif daha (kendi veriniz)
];
// ↑↑↑ Yukarıdaki RECIPES dizisini kendi verinizle değiştirin ↑↑↑

// ============================================================
// FAVORİLER (localStorage)
// ============================================================
function getFavorites() {
    return JSON.parse(localStorage.getItem('korevir_favorites') || '[]');
}

function toggleFavorite(recipeId) {
    let favs = getFavorites();
    const index = favs.indexOf(recipeId);
    if (index > -1) {
        favs.splice(index, 1);
    } else {
        favs.push(recipeId);
    }
    localStorage.setItem('korevir_favorites', JSON.stringify(favs));
    renderRecipes(RECIPES);
}

function isFavorite(recipeId) {
    return getFavorites().includes(recipeId);
}

// ============================================================
// FEATURED RECIPE
// ============================================================
function renderFeatured() {
    const container = document.getElementById('featuredCard');
    if (!container || RECIPES.length === 0) return;
    const featured = RECIPES[0];
    container.innerHTML = `
        <div class="featured-card-image">
            <i class="fas fa-utensils"></i>
        </div>
        <div class="featured-card-content">
            <span class="category-tag">${featured.category}</span>
            <h3>${featured.title}</h3>
            <p>${featured.description}</p>
            <div class="featured-meta">
                <span>⏱ Prep ${featured.prep}</span>
                <span>🍳 Cook ${featured.cook}</span>
                <span>👨‍👩‍👧 Serves ${featured.serves}</span>
            </div>
            <a href="#" class="view-recipe" onclick="openModal('${featured.id}')">View Full Recipe →</a>
        </div>
    `;
}

// ============================================================
// RENDER RECIPES (EDITORIAL TEK SIRA)
// ============================================================
function renderRecipes(recipes) {
    const container = document.getElementById('recipesList');
    if (!container) return;

    container.innerHTML = recipes.map(recipe => `
        <div class="recipe-item" data-id="${recipe.id}">
            <img src="assets/images/${recipe.id}.png" alt="${recipe.title}" class="recipe-item-image" 
                 loading="lazy" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22300%22%3E%3Crect fill=%22%23efe7dc%22 width=%22600%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23a67c52%22 font-size=%2240%22%3E🍽️%3C/text%3E%3C/svg%3E'">
            <div class="recipe-item-content" onclick="openModal('${recipe.id}')">
                <span class="category-tag">${recipe.category}</span>
                <h3>${recipe.title}</h3>
                <div class="recipe-item-meta">
                    <span>⏱ Prep ${recipe.prep}</span>
                    <span>🍳 Cook ${recipe.cook}</span>
                    <span>👨‍👩‍👧 Serves ${recipe.serves}</span>
                </div>
                <p class="recipe-item-description">${recipe.description}</p>
                <div class="recipe-item-footer">
                    <span class="view-recipe">View Full Recipe →</span>
                    <span class="amazon-tag">
                        🛒 <a href="#" onclick="event.stopPropagation(); showAmazon();">Shop KOREVIR</a>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================================
// OPEN MODAL
// ============================================================
function openModal(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)];

    body.innerHTML = `
        <h2>${recipe.title}</h2>
        <div class="modal-meta">
            <span>⏱ Prep ${recipe.prep}</span>
            <span>🍳 Cook ${recipe.cook}</span>
            <span>👨‍👩‍👧 Serves ${recipe.serves}</span>
            <span>📊 ${difficulty}</span>
        </div>
        <img src="assets/images/${recipe.id}.png" alt="${recipe.title}" class="modal-image" loading="lazy" 
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22700%22 height=%22300%22%3E%3Crect fill=%22%23efe7dc%22 width=%22700%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23a67c52%22 font-size=%2260%22%3E🍽️%3C/text%3E%3C/svg%3E'">
        
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
            <button class="btn-primary" onclick="startCookMode('${recipe.id}')">👨‍🍳 Start Cooking</button>
            <button class="btn-secondary" onclick="toggleFavorite('${recipe.id}')" 
                    style="${isFavorite(recipe.id) ? 'background:#A67C52;color:white;' : ''}">
                ${isFavorite(recipe.id) ? '❤️ Saved' : '♡ Save Recipe'}
            </button>
        </div>

        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>

        <h3>Method</h3>
        <ol>${recipe.method.map((step, index) => `<li>${step}</li>`).join('')}</ol>

        <div class="modal-shop">
            <p>🍽️ Make this recipe perfect with <strong>KOREVIR</strong> wooden spoons</p>
            <a href="#" class="btn-primary" onclick="showAmazon();">Shop KOREVIR on Amazon AU</a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================================
// CLOSE MODAL
// ============================================================
function closeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ============================================================
// START COOK MODE
// ============================================================
function startCookMode(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    alert(`👨‍🍳 Cook Mode: ${recipe.title}\n\n${recipe.method.map((s,i) => `${i+1}. ${s}`).join('\n')}`);
}

// ============================================================
// SEARCH & FILTER
// ============================================================
function filterRecipes() {
    const searchTerm = document.getElementById('search')?.value.toLowerCase().trim() || '';
    const activeCategory = document.querySelector('.category-pill.active')?.dataset.category || 'all';

    const filtered = RECIPES.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                              recipe.description.toLowerCase().includes(searchTerm) ||
                              recipe.category.toLowerCase().includes(searchTerm) ||
                              (recipe.ingredients && recipe.ingredients.some(i => i.toLowerCase().includes(searchTerm)));
        const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    renderRecipes(filtered);
}

// ============================================================
// AMAZON SHOW
// ============================================================
function showAmazon() {
    if (AMAZON_LINK === '#') {
        alert('🍽️ KOREVIR Wooden Spoons are coming soon to Amazon AU!');
    } else {
        window.open(AMAZON_LINK, '_blank');
    }
}

// ============================================================
// EVENT LISTENERS & INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // HEADER SCROLL
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // MOBILE MENU
    const menuToggle = document.getElementById('mobileMenu');
    const nav = document.querySelector('.header-nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // MODAL CLOSE
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('recipeModal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', function(e) { if (e.target === this) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

    // SEARCH
    const searchInput = document.getElementById('search');
    if (searchInput) searchInput.addEventListener('input', filterRecipes);

    // CATEGORY PILLS
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            filterRecipes();
        });
    });

    // NEWSLETTER FORM
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            if (input && input.value) {
                alert('🎉 Thank you for subscribing to KOREVIR updates!');
                input.value = '';
            }
        });
    }

    // CURRENT YEAR
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (nav) nav.classList.remove('active');
                }
            }
        });
    });

    // INITIAL RENDER
    renderRecipes(RECIPES);
    renderFeatured();
});
