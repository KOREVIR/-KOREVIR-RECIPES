// ===== KOREVIR RECIPES - MAIN SCRIPT =====

// ===== AMAZON LINK =====
const AMAZON_LINK = '#';
const AMAZON_TEXT = '🛒 Shop KOREVIR on Amazon AU';

// ===== 20 TARİF =====
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
            'Oil for deep frying',
            '4 large potatoes, peeled',
            '1 tsp salt (for chips)',
            '1/2 cup mayonnaise',
            '1 tbsp gherkins, finely chopped',
            '1 tsp capers, finely chopped',
            '1 tsp lemon juice'
        ],
        method: [
            'Cut potatoes into thick chips. Rinse in cold water and pat dry.',
            'Heat oil in a deep fryer or large pot to 160°C. Fry chips for 5-6 minutes until soft but not coloured. Remove and drain.',
            'Increase oil temperature to 180°C. Fry chips again for 4-5 minutes until golden and crispy. Drain on paper towel and season with salt.',
            'Pat fish fillets dry and season lightly with salt and pepper.',
            'In a bowl, whisk together flour, cornflour, baking powder, salt and pepper. Gradually add sparkling water and whisk until you have a smooth, thick batter.',
            'Heat oil to 180°C. Dip fish fillets in the batter, allowing excess to drip off. Carefully place in hot oil. Fry for 4-5 minutes or until golden and cooked through. Drain on paper towel.',
            'For the tartare sauce, mix all ingredients in a bowl. Serve fish and chips hot with tartare sauce and lemon wedges.'
        ]
    },
    {
        id: 'aussie-beef-burger',
        title: 'Aussie Beef Burger',
        category: 'Main Dishes',
        prep: '25 min',
        cook: '20 min',
        serves: 4,
        description: 'A classic Aussie beef burger with juicy beef patty, melted cheese, fresh veggies and tangy beetroot.',
        image: 'assets/images/aussie-burger.jpg',
        ingredients: [
            '500g beef mince (80/20)',
            '1 tbsp BBQ sauce',
            '1 tsp Worcestershire sauce',
            '1 tsp garlic powder',
            '1/2 tsp onion powder',
            'Salt & black pepper to taste',
            '4 burger buns',
            '4 slices cheddar cheese',
            '4 leaves iceberg lettuce',
            '1 large tomato, sliced',
            '1 small red onion, thinly sliced',
            '4 slices beetroot',
            '4 tbsp burger sauce or aioli',
            '4 large potatoes, peeled (for chips)'
        ],
        method: [
            'In a bowl, combine beef mince, BBQ sauce, Worcestershire sauce, garlic powder, onion powder, salt and pepper. Mix well.',
            'Divide into 4 equal portions and shape into patties slightly larger than the buns.',
            'Heat a barbecue or large frypan over medium-high heat. Cook patties for 3-4 minutes each side or until cooked to your liking.',
            'In the last minute of cooking, place a slice of cheese on each patty and let it melt.',
            'For the chips, cut potatoes into thick chips. Rinse in cold water and pat dry. Heat oil to 160°C. Fry chips for 5-6 minutes until soft. Increase oil to 180°C. Fry again for 3-4 minutes until golden and crispy.',
            'Toast burger buns lightly on the grill or in a pan.',
            'Spread burger sauce or aioli on the base of each bun. Layer with lettuce, tomato, onion, beetroot, cheesy beef patty and top bun.',
            'Serve hot with crispy chips.'
        ]
    },
    {
        id: 'sausage-roll',
        title: 'Sausage Roll',
        category: 'Snacks',
        prep: '25 min',
        cook: '25 min',
        serves: 12,
        description: 'A classic Aussie sausage roll with seasoned beef sausage meat wrapped in golden, flaky pastry.',
        image: 'assets/images/sausage-roll.jpg',
        ingredients: [
            '500g beef mince',
            '1 small onion, finely chopped',
            '1 garlic clove, minced',
            '1 tbsp Worcestershire sauce',
            '1 tbsp tomato sauce',
            '1 tsp dried thyme',
            '1/2 tsp smoked paprika',
            'Salt & black pepper to taste',
            '2 sheets puff pastry, thawed',
            '1 egg, beaten (for egg wash)',
            'Sesame seeds (optional)'
        ],
        method: [
            'Preheat oven to 200°C (fan-forced) and line a baking tray with baking paper.',
            'Heat a little oil in a pan over medium heat. Add onion and garlic, cook for 2-3 minutes until soft.',
            'Add beef mince and cook, breaking it up with a spoon, until browned.',
            'Stir in Worcestershire sauce, tomato sauce, thyme, smoked paprika, salt and pepper. Cook for another 2 minutes.',
            'Remove from heat and allow to cool completely.',
            'Cut each puff pastry sheet in half to make 4 rectangles.',
            'Spoon the cooled filling along the centre of each pastry rectangle.',
            'Brush edges with egg wash, fold over to seal and press edges with a fork.',
            'Place sausage rolls seam-side down on the tray. Brush with egg wash and sprinkle with sesame seeds.',
            'Bake for 20-25 minutes or until golden, puffed and cooked through.'
        ]
    },
    {
        id: 'chicken-schnitzel',
        title: 'Chicken Schnitzel',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '15 min',
        serves: 4,
        description: 'A true Aussie classic. Golden, crispy and perfectly seasoned. Tender chicken in a crunchy coating.',
        image: 'assets/images/chicken-schnitzel.jpg',
        ingredients: [
            '4 chicken breast fillets',
            '1/2 cup plain flour',
            '2 eggs',
            '1 1/2 cups breadcrumbs',
            '1/2 cup panko breadcrumbs',
            '1 tsp garlic powder',
            '1 tsp paprika',
            'Salt & black pepper to taste',
            'Oil for cooking',
            'Lemon wedges (to serve)'
        ],
        method: [
            'Place chicken between two sheets of baking paper and gently pound to an even thickness (about 1cm). Season with salt and pepper.',
            'Place flour in a shallow bowl. In a second bowl, whisk eggs. In a third bowl, combine breadcrumbs, panko, garlic powder and paprika.',
            'Coat each chicken piece in flour, shaking off excess. Dip in egg, then coat in breadcrumb mixture, pressing gently to adhere.',
            'Heat oil in a large frying pan over medium heat. Cook schnitzels for 3-4 minutes each side or until golden brown and cooked through.',
            'Transfer to a plate lined with paper towel to drain any excess oil.',
            'Serve hot with lemon wedges and your choice of salad or coleslaw.'
        ]
    },
    {
        id: 'potato-cakes',
        title: 'Potato Cakes (Potato Scallops)',
        category: 'Snacks',
        prep: '20 min',
        cook: '20 min',
        serves: 12,
        description: 'Crispy on the outside, soft and fluffy on the inside. A true Aussie favourite, perfect as a side or snack.',
        image: 'assets/images/potato-cakes.jpg',
        ingredients: [
            '1 kg potatoes, peeled',
            '1/2 cup plain flour',
            '1/4 cup cornflour',
            '1 egg',
            '1/2 tsp salt',
            '1/4 tsp black pepper',
            '1/4 tsp garlic powder (optional)',
            '2 tbsp chopped chives or spring onion (optional)',
            '1/2 cup plain flour (for coating)',
            '1 egg, lightly beaten (for coating)',
            '1 cup breadcrumbs (for coating)',
            'Oil for shallow frying'
        ],
        method: [
            'Boil or steam potatoes until tender. Drain well and mash until smooth. Allow to cool slightly.',
            'In a large bowl, combine potato, flour, cornflour, egg, salt, pepper, garlic powder and chives. Mix until just combined.',
            'Shape mixture into even-sized rounds about 1cm thick.',
            'Place flour in a shallow bowl. Place beaten egg in a second bowl. Place breadcrumbs in a third bowl.',
            'Lightly coat each potato cake in flour, dip in egg, then coat in breadcrumbs.',
            'Heat oil in a large non-stick frying pan over medium heat.',
            'Cook potato cakes in batches for 3-4 minutes each side or until golden brown and crispy.',
            'Remove and drain on paper towel. Serve hot with tomato sauce and sour cream.'
        ]
    },
    {
        id: 'roast-lamb-rosemary',
        title: 'Roast Lamb with Rosemary',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '90 min',
        serves: 6,
        description: 'A timeless classic. Tender, juicy lamb infused with garlic and rosemary, roasted to perfection.',
        image: 'assets/images/roast-lamb.jpg',
        ingredients: [
            '1.5 kg lamb leg (bone-in or boneless)',
            '4 garlic cloves, minced',
            '2 tbsp fresh rosemary, chopped',
            '2 tbsp olive oil',
            '1 tsp salt',
            '1/2 tsp black pepper',
            '1 tsp Dijon mustard (optional)',
            '1 tbsp lemon juice',
            '1 large onion, cut into wedges',
            '1 whole head of garlic, halved',
            'Fresh rosemary sprigs',
            '1/2 cup beef or lamb stock'
        ],
        method: [
            'Preheat oven to 200°C (fan-forced).',
            'In a small bowl, mix garlic, rosemary, olive oil, salt, pepper, Dijon mustard and lemon juice. Rub the mixture all over the lamb.',
            'Place onion wedges and garlic halves in a roasting pan. Place lamb on top. Scatter rosemary sprigs around the lamb. Pour stock into the bottom of the pan.',
            'Roast for 20 minutes at 200°C. Reduce oven temperature to 165°C.',
            'Continue roasting for 1 to 1 1/4 hours (20 minutes per 500g for medium) or until the lamb is tender and cooked to your liking.',
            'Remove from oven and cover loosely with foil. Rest for 15 minutes.',
            'Carve and serve with mint sauce, gravy and extra rosemary.'
        ]
    },
    {
        id: 'macadamia-fish',
        title: 'Macadamia Crusted Fish',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '18 min',
        serves: 4,
        description: 'Crispy, golden and full of flavour. Delicate white fish topped with a crunchy macadamia crust.',
        image: 'assets/images/macadamia-fish.jpg',
        ingredients: [
            '600g white fish fillets (barramundi, flathead or snapper)',
            '1 tbsp olive oil',
            '1 tbsp lemon juice',
            '1/2 tsp salt',
            '1/4 tsp black pepper',
            '1 cup macadamias, chopped',
            '1/2 cup panko breadcrumbs',
            '1/4 cup grated Parmesan cheese',
            '1 tbsp fresh parsley, finely chopped',
            '1 tsp lemon zest',
            '1/2 tsp garlic powder',
            '2 tbsp mayonnaise'
        ],
        method: [
            'Preheat oven to 200°C (fan-forced). Line a baking tray with baking paper.',
            'Pat fish dry with paper towel and place on the tray. Brush lightly with olive oil and lemon juice. Season with salt and pepper.',
            'In a bowl, combine macadamias, panko, Parmesan, parsley, lemon zest and garlic powder. Stir in mayonnaise until mixture holds together.',
            'Press the macadamia mixture firmly onto the top of each fish fillet. Drizzle a little olive oil over the crust.',
            'Bake for 15-18 minutes or until the fish is cooked through and the crust is golden and crispy.',
            'Serve immediately with lemon wedges, salad or vegetables and tartare sauce if desired.'
        ]
    },
    {
        id: 'pumpkin-soup',
        title: 'Pumpkin Soup',
        category: 'Soups',
        prep: '15 min',
        cook: '30 min',
        serves: 6,
        description: 'A warm and creamy Australian pumpkin soup made with simple ingredients and packed with flavour.',
        image: 'assets/images/pumpkin-soup.jpg',
        ingredients: [
            '1 kg pumpkin, peeled, deseeded and chopped',
            '1 brown onion, chopped',
            '2 garlic cloves, minced',
            '2 tbsp olive oil',
            '4 cups vegetable stock',
            '1 cup thickened cream (optional)',
            '1 tsp salt',
            '1/2 tsp black pepper',
            '1/4 tsp ground nutmeg (optional)'
        ],
        method: [
            'Heat olive oil in a large pot over medium heat. Add onion and cook for 5 minutes until soft. Add garlic and cook for 1 minute until fragrant.',
            'Add pumpkin and stir for 2 minutes. Pour in vegetable stock, bring to a boil, then reduce heat and simmer for 20 minutes or until pumpkin is tender.',
            'Use a stick blender to blend until smooth. Stir in cream, season with salt, pepper and nutmeg.',
            'Simmer for a further 2-3 minutes, then serve hot with warm crusty bread.'
        ]
    },
    {
        id: 'banana-bread',
        title: 'Banana Bread',
        category: 'Breakfast',
        prep: '15 min',
        cook: '55 min',
        serves: 10,
        description: 'Moist, flavourful and perfectly sweet. A classic homemade favourite that\'s loved across Australia.',
        image: 'assets/images/banana-bread.jpg',
        ingredients: [
            '3 ripe bananas, mashed',
            '1/3 cup vegetable oil or melted butter',
            '1/4 cup white sugar',
            '2 eggs',
            '1 tsp vanilla extract',
            '1 3/4 cups plain flour',
            '1 tsp baking soda',
            '1/2 tsp salt',
            '1/2 tsp ground cinnamon (optional)',
            '1/2 cup walnuts or choc chips (optional)'
        ],
        method: [
            'Preheat oven to 175°C (fan-forced). Grease and line a loaf tin (22cm x 11cm).',
            'In a large bowl, mash the bananas until smooth. Add oil (or butter), brown sugar, white sugar, eggs and vanilla. Whisk until well combined.',
            'In another bowl, sift together flour, baking soda, salt and cinnamon.',
            'Add the dry ingredients to the wet ingredients and mix gently until just combined. Fold in walnuts or chocolate chips if using.',
            'Pour the batter into the prepared tin and smooth the top.',
            'Bake for 50-60 minutes or until a skewer inserted in the centre comes out clean.',
            'Cool in the tin for 10 minutes, then transfer to a wire rack to cool completely. Slice and enjoy warm with a little butter.'
        ]
    },
    {
        id: 'kangaroo-steak',
        title: 'Grilled Kangaroo Steak',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '10 min',
        serves: 4,
        description: 'Lean, tender and packed with protein. A true Aussie delicacy - full of flavour and perfect on the grill.',
        image: 'assets/images/kangaroo-steak.jpg',
        ingredients: [
            '4 kangaroo steaks (150-180g each)',
            '2 tbsp olive oil',
            '2 cloves garlic, minced',
            '1 tbsp Worcestershire sauce',
            '1 tbsp lemon juice',
            '1 tsp salt',
            '1/2 tsp black pepper',
            '1 tsp fresh rosemary, chopped'
        ],
        method: [
            'Combine all marinade ingredients in a bowl. Place steaks in a dish, pour over marinade, cover and refrigerate for 30 minutes.',
            'Remove steaks from the fridge and let rest at room temperature for 10 minutes.',
            'Preheat grill or BBQ to high heat. Brush steaks lightly with olive oil. Season both sides with salt and pepper.',
            'Grill for 2-3 minutes on each side for medium-rare (or longer to your preference).',
            'Rest steaks for 5 minutes before serving. Serve with lemon wedges and your choice of salad or vegetables.'
        ]
    },
    {
        id: 'vegemite-scrolls',
        title: 'Vegemite Scrolls',
        category: 'Breakfast',
        prep: '20 min',
        cook: '20 min',
        serves: 12,
        description: "An iconic Aussie favourite! Soft, fluffy scrolls with a rich Vegemite and cheesy filling.",
        image: 'assets/images/vegemite-scrolls.jpg',
        ingredients: [
            '3 cups plain flour',
            '1 tbsp caster sugar',
            '2 tsp instant dry yeast',
            '1 tsp salt',
            '1 cup warm milk',
            '2 tbsp unsalted butter, melted',
            '3-4 tbsp Vegemite',
            '1 cup grated cheddar cheese',
            '2 tbsp unsalted butter, softened'
        ],
        method: [
            'In a large bowl, mix flour, sugar, yeast and salt. Add warm milk and melted butter. Stir and knead for 8-10 minutes until smooth and elastic.',
            'Cover and leave to rise for 1 hour, or until doubled in size.',
            'Roll the dough out on a floured surface into a rectangle (about 30 x 40 cm).',
            'Spread softened butter over the dough, then evenly spread Vegemite. Sprinkle with grated cheddar cheese.',
            'Roll up tightly from the long side and cut into 12 equal scrolls.',
            'Place scrolls on a lined baking tray, cover and rest for 15 minutes.',
            'Bake in a preheated oven at 180°C for 18-20 minutes, until golden brown. Serve warm.'
        ]
    },
    {
        id: 'bush-tomato-relish',
        title: 'Australian Bush Tomato Relish',
        category: 'Salads',
        prep: '15 min',
        cook: '50 min',
        serves: 20,
        description: 'A bold and flavourful relish made with native Australian ingredients. Perfect with BBQ meats.',
        image: 'assets/images/bush-tomato-relish.jpg',
        ingredients: [
            '500g bush tomatoes, finely chopped',
            '1 red capsicum, finely chopped',
            '1 brown onion, finely chopped',
            '2 cloves garlic, minced',
            '1 red chilli, finely chopped (optional)',
            '1/2 cup apple cider vinegar',
            '1/2 cup brown sugar',
            '1/4 cup olive oil',
            '1 tsp salt',
            '1/2 tsp black pepper',
            '1 tsp mustard seeds'
        ],
        method: [
            'Heat olive oil in a large saucepan over medium heat. Add onion and cook for 5 minutes until soft. Add garlic and chilli, cook for 1 minute.',
            'Add bush tomatoes, capsicum, vinegar, brown sugar, salt, pepper, mustard seeds and optional native ingredients. Stir well to combine.',
            'Bring to the boil, then reduce heat and simmer uncovered for 40-50 minutes, stirring occasionally, until thick and glossy.',
            'Remove from heat and let cool slightly. Spoon into sterilised jars while hot. Seal and let cool completely before storing.'
        ]
    },
    {
        id: 'chocolate-caramel-slice',
        title: 'Chocolate Caramel Slice',
        category: 'Desserts',
        prep: '30 min',
        cook: '20 min',
        serves: 20,
        description: 'A classic Aussie treat with three irresistible layers - crunchy biscuit base, gooey caramel centre and smooth chocolate topping.',
        image: 'assets/images/chocolate-caramel-slice.jpg',
        ingredients: [
            '250g plain tea biscuits, crushed',
            '125g unsalted butter, melted',
            '2 tbsp desiccated coconut (optional)',
            '395g sweetened condensed milk',
            '125g unsalted butter (for caramel)',
            '2 tbsp golden syrup',
            '200g milk chocolate, chopped',
            '50g dark chocolate, chopped',
            '1 tsp vegetable oil'
        ],
        method: [
            'Line a 20cm x 30cm slice tin with baking paper, leaving some overhang.',
            'In a bowl, combine crushed biscuits, melted butter and coconut. Mix well. Press firmly into the base of the prepared tin. Refrigerate for 15 minutes.',
            'To make the caramel, combine condensed milk, butter and golden syrup in a saucepan over medium heat. Stir continuously for 8-10 minutes until the mixture thickens and turns golden.',
            'Pour caramel over the biscuit base and smooth the top. Refrigerate for 1 hour.',
            'To make the topping, melt chocolate and oil in a heatproof bowl over simmering water (or in the microwave in 30 second bursts). Stir until smooth.',
            'Pour over the chilled caramel layer and spread evenly. Refrigerate for at least 2 hours or until set.',
            'Lift out using the baking paper and cut into 20 slices. Store in an airtight container in the fridge.'
        ]
    },
    {
        id: 'prawn-cocktail',
        title: 'Prawn Cocktail',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '3 min',
        serves: 4,
        description: 'A retro classic done right. Juicy prawns with a creamy, tangy sauce, crisp lettuce and a hint of lemon.',
        image: 'assets/images/prawn-cocktail.jpg',
        ingredients: [
            '500g cooked prawns, peeled & deveined',
            '1 tbsp lemon juice',
            '1/2 tsp salt',
            '1/4 tsp black pepper',
            '1/2 cup mayonnaise',
            '2 tbsp tomato sauce (ketchup)',
            '1 tbsp lemon juice (for sauce)',
            '1 tsp Worcestershire sauce',
            '1 tsp brandy (optional)',
            '1/2 tsp paprika',
            'Salt & black pepper to taste',
            '1 small cos lettuce or iceberg lettuce, shredded',
            'Lemon wedges',
            'Fresh parsley, chopped'
        ],
        method: [
            'If prawns are not cooked, bring a pot of salted water to the boil. Add prawns and cook for 2-3 minutes or until pink and opaque. Drain and rinse under cold water. Pat dry.',
            'Toss prawns with lemon juice, salt and black pepper. Set aside.',
            'In a bowl, whisk together mayonnaise, tomato sauce, lemon juice, Worcestershire sauce, brandy (if using) and paprika. Season with salt and black pepper to taste.',
            'Refrigerate the sauce for at least 30 minutes to allow the flavours to develop.',
            'To serve, spoon a layer of shredded lettuce into serving glasses or bowls.',
            'Add a generous spoonful of sauce on top of the lettuce.',
            'Arrange prawns over the sauce.',
            'Garnish with lemon wedges and chopped parsley.',
            'Serve immediately, chilled.'
        ]
    }
];

// ===== RENDER RECIPES =====
function renderRecipes(recipes) {
    const grid = document.getElementById('recipesGrid');
    if (!grid) return;
    
    grid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card" data-id="${recipe.id}" onclick="openModal('${recipe.id}')">
            <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22320%22 height=%22220%22%3E%3Crect fill=%22%23fdf8f0%22 width=%22320%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23d4a24c%22 font-size=%2240%22%3E🍽️%3C/text%3E%3C/svg%3E'">
            <div class="recipe-info">
                <h2>${recipe.title}</h2>
                <div class="recipe-meta">
                    <span>⏱ Prep ${recipe.prep}</span>
                    <span>🍳 Cook ${recipe.cook}</span>
                    <span>👨‍👩‍👧 Serves ${recipe.serves}</span>
                </div>
                <div class="recipe-footer">
                    <span class="view-recipe">View Full Recipe →</span>
                    <span class="amazon-tag">
                        🛒 <a href="#" onclick="event.stopPropagation(); showAmazon();">Shop KOREVIR</a>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
    
    const count = document.getElementById('resultsCount');
    if (count) {
        count.textContent = `Showing ${recipes.length} recipe${recipes.length > 1 ? 's' : ''}`;
    }
}

// ===== OPEN MODAL =====
function openModal(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const modal = document.getElementById('recipeModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;
    
    body.innerHTML = `
        <h2>${recipe.title}</h2>
        <div class="modal-meta">
            <span>⏱ Prep ${recipe.prep}</span>
            <span>🍳 Cook ${recipe.cook}</span>
            <span>👨‍👩‍👧 Serves ${recipe.serves}</span>
        </div>
        <img src="${recipe.image}" alt="${recipe.title}" class="modal-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22700%22 height=%22300%22%3E%3Crect fill=%22%23fdf8f0%22 width=%22700%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23d4a24c%22 font-size=%2260%22%3E🍽️%3C/text%3E%3C/svg%3E'">
        
        <h3>📋 Ingredients</h3>
        <ul>
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
        
        <h3>👨‍🍳 Method</h3>
        <ol>
            ${recipe.method.map((step, index) => `<li>${step}</li>`).join('')}
        </ol>
        
        <div class="modal-shop">
            <p>🍽️ Make this recipe perfect with <strong>KOREVIR</strong> wooden spoons</p>
            <a href="#" class="btn-primary" onclick="showAmazon();">
                🛒 Shop KOREVIR on Amazon AU
                <span class="coming-badge">Coming Soon</span>
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
function closeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Event listeners for modal
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('recipeModal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
    
    // ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
    // ===== SEARCH & FILTER =====
    const searchInput = document.getElementById('search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterRecipes);
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterRecipes();
        });
    });
    
    // ===== INIT =====
    renderRecipes(RECIPES);
});

function filterRecipes() {
    const searchTerm = document.getElementById('search')?.value.toLowerCase().trim() || '';
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    
    const filtered = RECIPES.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                             recipe.description.toLowerCase().includes(searchTerm) ||
                             recipe.category.toLowerCase().includes(searchTerm);
        
        const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderRecipes(filtered);
}

// ===== AMAZON SHOW =====
function showAmazon() {
    if (AMAZON_LINK === '#') {
        alert('🍽️ KOREVIR Wooden Spoons are coming soon to Amazon AU!\n\nBe the first to know when we launch. Follow us for updates!');
    } else {
        window.open(AMAZON_LINK, '_blank');
    }
}

// ===== SMOOTH SCROLL FOR NAV =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
