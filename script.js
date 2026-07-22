// ===== KOREVIR RECIPES - MAIN SCRIPT =====

// ===== AMAZON LINK (Tek bir yerde!) =====
const AMAZON_LINK = '#'; // Linkin gelince buraya yapıştır
const AMAZON_TEXT = '🛒 Shop KOREVIR on Amazon AU';

// ===== 20 TARİF (PDF'ten tam listesi) =====
const RECIPES = [
    {
        id: 'chicken-parmigiana',
        title: 'Chicken Parmigiana',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '30 min',
        serves: 4,
        description: 'A crispy golden chicken breast topped with rich tomato sauce and melted mozzarella cheese.',
        image: 'assets/images/chicken-parmigiana.jpg',
        ingredients: [
            '4 chicken breast fillets',
            '1 cup plain flour',
            '2 eggs, beaten',
            '1 1/2 cups breadcrumbs',
            '1/2 cup grated Parmesan cheese',
            '2 cups tomato passata',
            '1 tsp garlic, minced',
            '1 tsp dried oregano',
            '1 cup shredded mozzarella cheese',
            '2 tbsp olive oil',
            'Salt & pepper to taste'
        ],
        method: [
            'Preheat oven to 200°C (fan-forced). Line a baking tray with parchment paper.',
            'Season chicken with salt and pepper. Coat in flour, dip in egg, then coat in a mixture of breadcrumbs and Parmesan.',
            'Heat olive oil in a large skillet over medium-high heat. Cook chicken for 3-4 minutes each side until golden.',
            'Spread tomato passata in a baking dish. Place chicken on top, spoon extra sauce over each piece.',
            'Sprinkle mozzarella cheese over chicken.',
            'Bake for 20-25 minutes until cheese is melted and bubbly.'
        ]
    },
    {
        id: 'meat-pie',
        title: 'Meat Pie',
        category: 'Main Dishes',
        prep: '30 min',
        cook: '25 min',
        serves: 6,
        description: 'A classic Aussie-style meat pie with a rich, savoury filling wrapped in golden, flaky pastry.',
        image: 'assets/images/meat-pie.jpg',
        ingredients: [
            '500g beef mince',
            '1 onion, finely chopped',
            '1 garlic clove, minced',
            '1 carrot, finely diced',
            '1 celery stalk, finely diced',
            '2 tbsp tomato paste',
            '1 tbsp Worcestershire sauce',
            '1 cup beef stock',
            '1 tsp dried thyme',
            'Salt & pepper to taste',
            '2 sheets puff pastry',
            '1 egg, beaten (for egg wash)'
        ],
        method: [
            'Heat oil in a large pan over medium heat. Add onion, garlic, carrot and celery. Cook until softened.',
            'Add beef mince and cook until browned. Stir in tomato paste and cook for 1 minute.',
            'Pour in beef stock and Worcestershire sauce. Add thyme, salt and pepper. Simmer for 10-15 minutes until thickened. Let cool slightly.',
            'Preheat oven to 200°C (fan-forced). Spoon the meat filling into pie dishes.',
            'Top with pastry lid. Seal edges and cut a small vent in the top.',
            'Brush with beaten egg. Bake for 20-25 minutes or until pastry is golden and crisp.'
        ]
    },
    {
        id: 'barramundi-lemon-butter',
        title: 'Barramundi with Lemon Butter Sauce',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '15 min',
        serves: 4,
        description: 'A light and flavourful Australian favourite with tender barramundi and a zesty lemon butter sauce.',
        image: 'assets/images/barramundi.jpg',
        ingredients: [
            '4 barramundi fillets (skin on)',
            'Salt & pepper to taste',
            '1 tbsp olive oil',
            '60g unsalted butter',
            '2 garlic cloves, minced',
            'Juice of 1 lemon',
            'Zest of 1 lemon',
            '2 tbsp capers, drained',
            '1 tbsp fresh parsley, chopped'
        ],
        method: [
            'Pat barramundi fillets dry. Season both sides with salt and pepper.',
            'Heat olive oil in a large skillet over medium-high heat.',
            'Place fish skin-side down and cook for 4-5 minutes until the skin is crispy and golden. Flip and cook for another 2-3 minutes. Remove and set aside.',
            'In the same pan, reduce heat to medium. Add butter and garlic. Sauté for 30 seconds until fragrant.',
            'Add lemon juice, zest and capers. Stir and simmer for 1-2 minutes.',
            'Return fish to the pan and spoon the sauce over the fillets.',
            'Garnish with fresh parsley. Serve immediately.'
        ]
    },
    {
        id: 'lamingtons',
        title: 'Lamingtons',
        category: 'Desserts',
        prep: '30 min',
        cook: '35 min',
        serves: 12,
        description: "Australia's iconic sponge cake squares coated in chocolate sauce and rolled in desiccated coconut.",
        image: 'assets/images/lamingtons.jpg',
        ingredients: [
            '125g unsalted butter, softened',
            '1 cup caster sugar',
            '2 tsp vanilla extract',
            '4 eggs',
            '1 1/4 cups self-raising flour',
            '1/2 cup milk',
            '1 cup caster sugar (for sauce)',
            '1/2 cup unsweetened cocoa powder',
            '125g unsalted butter (for sauce)',
            '1 cup milk (for sauce)',
            '1 tsp vanilla extract (for sauce)',
            '2 cups desiccated coconut'
        ],
        method: [
            'Preheat oven to 180°C (fan-forced). Grease and line a 20cm square cake tin.',
            'Beat butter, sugar and vanilla until light and creamy. Add eggs one at a time, beating well after each addition.',
            'Fold in flour and milk alternately until just combined. Pour into prepared tin and smooth the top.',
            'Bake for 30-35 minutes or until a skewer comes out clean. Cool in the tin, then transfer to a wire rack.',
            'For the chocolate sauce, combine sugar, cocoa, butter and milk in a saucepan over medium heat. Stir until smooth and the mixture just comes to a boil. Remove from heat and stir in vanilla.',
            'Cut the cake into even squares. Dip each square into the warm chocolate sauce, allowing excess to drip off, then roll in desiccated coconut. Place on a wire rack to set.'
        ]
    },
    {
        id: 'beef-stir-fry',
        title: 'Beef Stir-Fry',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '15 min',
        serves: 4,
        description: 'A quick and flavourful stir-fry with tender beef and crisp vegetables in a savoury soy-ginger sauce.',
        image: 'assets/images/beef-stir-fry.jpg',
        ingredients: [
            '500g beef sirloin, thinly sliced',
            '2 tbsp vegetable oil',
            '1 red capsicum, sliced',
            '1 green capsicum, sliced',
            '1 carrot, julienned',
            '1 broccoli, cut into florets',
            '4 garlic cloves, minced',
            '1 tbsp fresh ginger, grated',
            '4 tbsp soy sauce',
            '1 tbsp oyster sauce',
            '1 tsp sesame oil',
            '1 tbsp brown sugar',
            '1 tbsp cornflour mixed with 2 tbsp water',
            '3 green onions, sliced',
            'Sesame seeds (optional)'
        ],
        method: [
            'Mix beef with cornflour mixture and set aside.',
            'Heat 1 tbsp of oil in a wok or large pan over high heat. Add beef in a single layer and stir-fry for 2-3 minutes until browned. Remove and set aside.',
            'Add remaining oil. Stir-fry garlic and ginger for 30 seconds until fragrant.',
            'Add carrots and broccoli. Stir-fry for 3-4 minutes until just tender.',
            'Add capsicums and stir-fry for another 2 minutes until crisp-tender.',
            'Return beef to the pan. Add soy sauce, oyster sauce, sesame oil and brown sugar. Stir well to coat.',
            'Cook for 1-2 minutes until sauce thickens slightly. Add green onions and toss to combine.',
            'Sprinkle with sesame seeds and serve hot with steamed rice.'
        ]
    },
    {
        id: 'pavlova',
        title: 'Pavlova',
        category: 'Desserts',
        prep: '25 min',
        cook: '90 min',
        serves: 8,
        description: 'A light and airy meringue with a crisp crust and soft, marshmallow centre, topped with whipped cream and fresh fruits.',
        image: 'assets/images/pavlova.jpg',
        ingredients: [
            '4 egg whites, at room temperature',
            '1 cup caster sugar',
            '1 tsp white vinegar',
            '1 tsp cornstarch',
            '1 tsp vanilla extract',
            '300ml thickened cream',
            '1 tsp vanilla extract (for topping)',
            '2 tbsp icing sugar',
            'Fresh fruits (strawberries, blueberries, kiwi, passionfruit)'
        ],
        method: [
            'Preheat oven to 120°C (fan-forced). Line a baking tray with baking paper and draw a 20cm circle.',
            'Beat egg whites in a clean, dry bowl until soft peaks form.',
            'Gradually add sugar, 1 tablespoon at a time, beating well after each addition until the meringue is thick, glossy and sugar has dissolved.',
            'Gently fold in vinegar, cornstarch and vanilla extract.',
            'Spoon the meringue onto the prepared tray within the circle. Shape into a round with a slight dip in the centre.',
            'Bake for 75-90 minutes or until the outside is crisp and the meringue lifts easily from the paper.',
            'Turn off the oven and leave the pavlova inside with the door slightly open to cool completely.',
            'Whip cream with vanilla and icing sugar until soft peaks form. Top the cooled pavlova with whipped cream and fresh fruits. Slice and serve immediately.'
        ]
    },
    {
        id: 'fish-and-chips',
        title: 'Fish & Chips',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '20 min',
        serves: 4,
        description: "Australia's favourite crispy battered fish served with golden chips and tartare sauce.",
        image: 'assets/images/fish-and-chips.jpg',
        ingredients: [
            '600g white fish fillets (cod, hoki or barramundi)',
            '1 cup plain flour',
            '1/2 cup cornflour',
            '1 tsp baking powder',
            '1/2 tsp salt',
            '1/2 tsp black pepper',
            '1 cup cold sparkling water',
            'Oil for deep frying
