// ============================================================
// KOREVIR – PREMIUM BRAND EXPERIENCE
// ============================================================

'use strict';

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0HCZRBFY7';

// ============================================================
// 50 TARİF – method'lar elle 8-9 adımlık dizi olarak tanımlandı
// ============================================================
const RECIPES = [
    // 1
    {
        id: 'chicken-parmigiana',
        title: 'Chicken Parmigiana',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '30 min',
        serves: 4,
        description: 'A crispy golden chicken breast topped with rich tomato sauce and melted mozzarella cheese.',
        ingredients: ['4 chicken breast fillets', '1 cup plain flour', '2 eggs, beaten', '1 1/2 cups breadcrumbs', '1/2 cup grated Parmesan cheese', '2 cups tomato passata', '1 tsp garlic, minced', '1 tsp dried oregano', '1 cup shredded mozzarella cheese', '2 tbsp olive oil', 'Salt & pepper to taste'],
        method: [
            'Preheat your oven to 200°C (400°F).',
            'Place each chicken breast between two sheets of baking paper and gently pound to an even thickness of about 1.5 cm.',
            'Season both sides generously with salt and pepper.',
            'Set up three shallow bowls: one with flour, one with beaten eggs, and one with breadcrumbs mixed with Parmesan cheese.',
            'Coat each chicken breast first in flour, then dip in egg, and finally press into the breadcrumb mixture to coat evenly.',
            'Heat olive oil in a large oven-safe skillet over medium-high heat.',
            'Fry the chicken for 3–4 minutes per side until golden brown and crispy.',
            'Spread tomato passata over each breast, sprinkle with garlic and oregano, then top with mozzarella cheese.',
            'Transfer the skillet to the oven and bake for 20–25 minutes until the cheese is melted and bubbly. Rest for 5 minutes before serving.'
        ]
    },
    // 2
    {
        id: 'meat-pie',
        title: 'Meat Pie',
        category: 'Main Dishes',
        prep: '30 min',
        cook: '25 min',
        serves: 6,
        description: 'A classic Aussie-style meat pie with a rich, savoury filling wrapped in golden, flaky pastry.',
        ingredients: ['500g beef mince', '1 onion, finely chopped', '1 garlic clove', '1 carrot, diced', '1 celery stalk', '2 tbsp tomato paste', '1 tbsp Worcestershire sauce', '1 cup beef stock', '1 tsp dried thyme', '2 sheets puff pastry', '1 egg, beaten'],
        method: [
            'Heat a splash of oil in a large frying pan over medium heat.',
            'Cook onion, garlic, carrot, and celery for 5–6 minutes until softened.',
            'Add beef mince and cook, breaking it up with a spoon, until browned all over.',
            'Stir in tomato paste, Worcestershire sauce, beef stock, and dried thyme.',
            'Bring to a simmer and cook for 10–15 minutes until the mixture has thickened. Remove from heat and let cool completely.',
            'Preheat oven to 200°C (400°F). Line a baking tray with baking paper.',
            'Cut puff pastry sheets into rectangles. Spoon the cooled filling onto half of the rectangles, leaving a border.',
            'Brush the edges with beaten egg, place the remaining pastry rectangles on top, and press to seal. Brush tops with egg and cut a small steam slit.',
            'Bake for 20–25 minutes until golden and puffed. Serve warm.'
        ]
    },
    // 3
    {
        id: 'barramundi-with-lemon-butter',
        title: 'Barramundi with Lemon Butter',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '15 min',
        serves: 4,
        description: 'A light and flavourful Australian favourite with tender barramundi and a zesty lemon butter sauce.',
        ingredients: ['4 barramundi fillets', 'Salt & pepper', '1 tbsp olive oil', '60g unsalted butter', '2 garlic cloves', 'Juice of 1 lemon', 'Zest of 1 lemon', '2 tbsp capers', '1 tbsp fresh parsley'],
        method: [
            'Pat barramundi fillets dry with paper towels and season both sides with salt and pepper.',
            'Heat olive oil in a large non-stick skillet over medium-high heat.',
            'Place fish skin-side down and cook for 4–5 minutes until the skin is crispy and golden.',
            'Carefully flip and cook for another 2–3 minutes until just cooked through. Remove fish to a plate.',
            'Reduce heat to medium and add butter to the pan. Let it melt and foam slightly.',
            'Add garlic and cook for 30 seconds until fragrant.',
            'Stir in lemon juice, lemon zest, and capers. Cook for 1–2 minutes until the sauce thickens slightly.',
            'Return the fish to the pan and spoon the sauce over the top.',
            'Garnish with fresh parsley and serve immediately with extra lemon wedges.'
        ]
    },
    // 4
    {
        id: 'lamingtons',
        title: 'Lamingtons',
        category: 'Desserts',
        prep: '30 min',
        cook: '35 min',
        serves: 12,
        description: "Australia's iconic sponge cake squares coated in chocolate sauce and rolled in desiccated coconut.",
        ingredients: ['125g butter', '1 cup caster sugar', '2 tsp vanilla', '4 eggs', '1 1/4 cups self-raising flour', '1/2 cup milk', '1 cup caster sugar (sauce)', '1/2 cup cocoa', '125g butter (sauce)', '1 cup milk (sauce)', '2 cups desiccated coconut'],
        method: [
            'Preheat oven to 180°C (350°F). Grease and line a 20cm square cake tin.',
            'Beat butter, sugar, and vanilla until light and fluffy, about 3–4 minutes.',
            'Add eggs one at a time, beating well after each addition.',
            'Fold in flour and milk alternately, beginning and ending with flour.',
            'Pour the batter into the prepared tin and smooth the top.',
            'Bake for 30–35 minutes until a skewer comes out clean. Cool completely in the tin.',
            'Turn out and cut into 12 even squares.',
            'For the chocolate sauce: combine sugar, cocoa, butter, and milk in a saucepan. Heat gently, stirring until smooth.',
            'Dip each cake square into the warm sauce, then roll in coconut. Place on a wire rack to set.'
        ]
    },
    // 5
    {
        id: 'vegemite-on-toast',
        title: 'Vegemite on Toast',
        category: 'Breakfast',
        prep: '5 min',
        cook: '5 min',
        serves: 2,
        description: 'A true Aussie classic – crispy toast with a thin layer of salty, savoury Vegemite.',
        ingredients: ['4 slices bread', 'Butter', 'Vegemite'],
        method: [
            'Toast the bread slices until golden and crisp.',
            'Spread a generous layer of butter over each slice while still warm.',
            'Using a butter knife, spread a very thin layer of Vegemite over the butter. A little goes a long way.',
            'Cut each slice in half diagonally.',
            'Serve immediately with a cup of tea or coffee.'
        ]
    },
    // 6
    {
        id: 'pavlova',
        title: 'Pavlova',
        category: 'Desserts',
        prep: '25 min',
        cook: '90 min',
        serves: 8,
        description: 'A light and airy meringue with a crisp crust and soft, marshmallow centre, topped with whipped cream and fresh fruits.',
        ingredients: ['4 egg whites', '1 cup caster sugar', '1 tsp vinegar', '1 tsp cornstarch', '1 tsp vanilla', '300ml cream', '2 tbsp icing sugar', 'Fresh fruits'],
        method: [
            'Preheat oven to 120°C (250°F). Line a baking tray with baking paper.',
            'In a very clean bowl, beat egg whites until soft peaks form.',
            'Gradually add caster sugar, one spoonful at a time, beating well after each addition, until thick and glossy.',
            'Fold in vinegar, cornstarch, and vanilla gently.',
            'Spoon the meringue onto the prepared tray and shape into a circle with a slight dip in the centre.',
            'Bake for 75–90 minutes until the outside is crisp and dry but still white.',
            'Turn off the oven and leave the pavlova inside with the door ajar to cool completely.',
            'Whip cream with icing sugar until soft peaks form.',
            'Top the cooled pavlova with whipped cream and fresh fruits just before serving.'
        ]
    },
    // 7
    {
        id: 'fish-and-chips',
        title: 'Fish and Chips',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '20 min',
        serves: 4,
        description: "Australia's favourite crispy battered fish served with golden chips and tartare sauce.",
        ingredients: ['600g white fish', '1 cup plain flour', '1/2 cup cornflour', '1 tsp baking powder', '1 cup sparkling water', '4 potatoes', 'Oil for frying', '1/2 cup mayonnaise', '1 tbsp gherkins', '1 tsp capers', '1 tsp lemon juice'],
        method: [
            'Peel and cut potatoes into thick chips. Soak in cold water for 30 minutes, then drain and pat dry.',
            'Heat oil in a deep fryer or large pot to 160°C (320°F). Fry chips for 5–6 minutes until soft but not browned, then drain and set aside.',
            'Increase oil temperature to 180°C (350°F).',
            'For batter: mix flour, cornflour, baking powder, salt, and pepper in a bowl. Whisk in sparkling water until smooth.',
            'Dip fish fillets into the batter, coating evenly.',
            'Fry fish in batches for 4–5 minutes until golden and crispy. Drain on paper towel.',
            'Return chips to the hot oil and fry for another 4–5 minutes until golden and crisp. Season with salt.',
            'For tartare sauce: mix mayonnaise, chopped gherkins, capers, and lemon juice.',
            'Serve fish and chips with tartare sauce and lemon wedges.'
        ]
    },
    // 8
    {
        id: 'aussie-beef-burger',
        title: 'Aussie Beef Burger',
        category: 'Main Dishes',
        prep: '25 min',
        cook: '20 min',
        serves: 4,
        description: 'A classic Aussie beef burger with juicy beef patty, melted cheese, fresh veggies and tangy beetroot.',
        ingredients: ['500g beef mince', '1 tbsp BBQ sauce', '1 tsp Worcestershire sauce', '1 tsp garlic powder', '4 burger buns', '4 cheese slices', 'Lettuce, tomato, onion, beetroot', '4 tbsp burger sauce', '4 potatoes (for chips)'],
        method: [
            'In a large bowl, combine beef mince, BBQ sauce, Worcestershire sauce, garlic powder, salt, and pepper. Mix well.',
            'Divide the mixture into 4 equal portions and shape into patties slightly larger than the buns.',
            'Preheat a grill or frying pan over medium-high heat. Cook patties for 3–4 minutes per side, adding cheese in the last minute to melt.',
            'While the patties cook, cut potatoes into chips and deep-fry until golden and crisp.',
            'Toast the buns lightly on the grill or in a toaster.',
            'Spread burger sauce on the bottom half of each bun.',
            'Layer with lettuce, tomato slices, onion rings, and beetroot slices.',
            'Place the cheesy patty on top and finish with the bun top.',
            'Serve immediately with the chips on the side.'
        ]
    },
    // 9
    {
        id: 'sausage-roll',
        title: 'Sausage Roll',
        category: 'Snacks',
        prep: '25 min',
        cook: '25 min',
        serves: 12,
        description: 'A classic Aussie sausage roll with seasoned beef sausage meat wrapped in golden, flaky pastry.',
        ingredients: ['500g beef mince', '1 onion, chopped', '1 garlic clove', '1 tbsp Worcestershire sauce', '1 tbsp tomato sauce', '1 tsp thyme', '2 sheets puff pastry', '1 egg, beaten', 'Sesame seeds'],
        method: [
            'Preheat oven to 200°C (400°F). Line a baking tray with baking paper.',
            'Heat a little oil in a pan and cook onion and garlic until soft. Allow to cool.',
            'In a bowl, combine beef mince, cooled onion mixture, Worcestershire sauce, tomato sauce, and thyme. Season with salt and pepper.',
            'Cut each puff pastry sheet in half lengthwise.',
            'Place a log of filling along the centre of each pastry strip.',
            'Brush the edges with beaten egg, fold the pastry over the filling, and press to seal.',
            'Brush the tops with more egg and sprinkle with sesame seeds.',
            'Cut each roll into 3–4 pieces and place on the tray.',
            'Bake for 20–25 minutes until golden and puffed. Serve warm with tomato sauce.'
        ]
    },
    // 10
    {
        id: 'prawn-cocktail',
        title: 'Prawn Cocktail',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '3 min',
        serves: 4,
        description: 'A retro classic done right. Juicy prawns with a creamy, tangy sauce, crisp lettuce and a hint of lemon.',
        ingredients: ['500g cooked prawns', '1 tbsp lemon juice', '1/2 cup mayonnaise', '2 tbsp tomato sauce', '1 tsp Worcestershire sauce', '1/2 tsp paprika', 'Shredded lettuce', 'Lemon wedges', 'Parsley'],
        method: [
            'If using raw prawns, cook them in boiling water for 2–3 minutes until pink, then drain and chill.',
            'Peel and devein the prawns, leaving the tails on for presentation.',
            'Toss prawns with lemon juice in a bowl.',
            'In a separate bowl, mix mayonnaise, tomato sauce, Worcestershire sauce, and paprika until smooth. Season with salt and pepper.',
            'Chill the sauce for at least 30 minutes to allow flavours to meld.',
            'Arrange shredded lettuce in the bottom of four serving glasses or bowls.',
            'Divide the prawns among the glasses, placing them on top of the lettuce.',
            'Spoon the sauce over the prawns.',
            'Garnish with lemon wedges and fresh parsley. Serve chilled.'
        ]
    },
    // 11
    {
        id: 'chicken-schnitzel',
        title: 'Chicken Schnitzel',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '15 min',
        serves: 4,
        description: 'A true Aussie classic. Golden, crispy and perfectly seasoned. Tender chicken in a crunchy coating.',
        ingredients: ['4 chicken breast fillets', '1/2 cup plain flour', '2 eggs', '1 1/2 cups breadcrumbs', '1/2 cup panko', '1 tsp garlic powder', '1 tsp paprika', 'Oil for frying', 'Lemon wedges'],
        method: [
            'Place chicken breasts between two sheets of baking paper and pound to an even thickness of about 1 cm.',
            'Season both sides with salt and pepper.',
            'Set up three shallow bowls: one with flour, one with beaten eggs, and one with breadcrumbs, panko, garlic powder, and paprika mixed together.',
            'Coat each chicken piece in flour, shaking off excess. Dip in egg, then press into the breadcrumb mixture to coat evenly.',
            'Heat a generous amount of oil in a large frying pan over medium heat.',
            'Fry the schnitzels for 3–4 minutes per side until golden brown and cooked through.',
            'Drain on paper towel to remove excess oil.',
            'Serve hot with lemon wedges and your choice of salad or chips.'
        ]
    },
    // 12
    {
        id: 'potato-cakes',
        title: 'Potato Cakes',
        category: 'Snacks',
        prep: '20 min',
        cook: '20 min',
        serves: 12,
        description: 'Crispy on the outside, soft and fluffy on the inside. A true Aussie favourite, perfect as a side or snack.',
        ingredients: ['1 kg potatoes', '1/2 cup plain flour', '1/4 cup cornflour', '1 egg', '1/2 tsp salt', '1/4 tsp pepper', '1 cup breadcrumbs', 'Oil for frying'],
        method: [
            'Boil potatoes in salted water until very tender. Drain and mash until smooth.',
            'Allow the mash to cool slightly, then mix in flour, cornflour, egg, salt, and pepper until a soft dough forms.',
            'Shape the mixture into patties about 1.5 cm thick.',
            'Coat each patty in flour, then dip in beaten egg (use extra egg if needed), and finally coat in breadcrumbs.',
            'Heat oil in a large frying pan over medium heat.',
            'Shallow-fry the patties in batches for 3–4 minutes per side until golden and crispy.',
            'Drain on paper towel and season with extra salt.',
            'Serve warm with sour cream or tomato sauce.'
        ]
    },
    // 13
    {
        id: 'roast-lamb-with-rosemary',
        title: 'Roast Lamb with Rosemary',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '90 min',
        serves: 6,
        description: 'A timeless classic. Tender, juicy lamb infused with garlic and rosemary, roasted to perfection.',
        ingredients: ['1.5 kg lamb leg', '4 garlic cloves', '2 tbsp rosemary', '2 tbsp olive oil', '1 tsp salt', '1/2 tsp pepper', '1 onion', '1/2 cup stock'],
        method: [
            'Preheat oven to 200°C (400°F).',
            'In a small bowl, mix minced garlic, chopped rosemary, olive oil, salt, and pepper to form a paste.',
            'Rub the paste all over the lamb leg, massaging it into the meat.',
            'Place a sliced onion in the bottom of a roasting pan as a trivet, then put the lamb on top.',
            'Roast for 20 minutes, then reduce the oven temperature to 165°C (325°F).',
            'Continue roasting for 1 hour 15 minutes, basting occasionally with the pan juices.',
            'Add stock to the pan halfway through to keep the meat moist.',
            'Remove lamb from the oven, cover loosely with foil, and rest for 15 minutes before carving.',
            'Serve with roasted vegetables and gravy made from the pan juices.'
        ]
    },
    // 14
    {
        id: 'macadamia-crusted-fish',
        title: 'Macadamia Crusted Fish',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '18 min',
        serves: 4,
        description: 'Crispy, golden and full of flavour. Delicate white fish topped with a crunchy macadamia crust.',
        ingredients: ['600g white fish', '1 tbsp olive oil', '1 tbsp lemon juice', '1 cup macadamias, chopped', '1/2 cup panko', '1/4 cup Parmesan', '1 tbsp parsley', '1 tsp lemon zest', '2 tbsp mayonnaise'],
        method: [
            'Preheat oven to 200°C (400°F). Line a baking tray with baking paper.',
            'Pat fish fillets dry and season with salt and pepper. Brush with olive oil and lemon juice.',
            'In a bowl, combine chopped macadamias, panko, Parmesan, parsley, lemon zest, and mayonnaise to form a paste-like crust.',
            'Press the crust mixture evenly onto the top of each fish fillet.',
            'Place the fish on the prepared tray, crust-side up.',
            'Bake for 15–18 minutes until the fish is cooked through and the crust is golden and crisp.',
            'Rest for 2 minutes before serving.',
            'Serve with a simple green salad and lemon wedges.'
        ]
    },
    // 15
    {
        id: 'pumpkin-soup',
        title: 'Pumpkin Soup',
        category: 'Soups',
        prep: '15 min',
        cook: '30 min',
        serves: 6,
        description: 'A warm and creamy Australian pumpkin soup made with simple ingredients and packed with flavour.',
        ingredients: ['1 kg pumpkin', '1 onion', '2 garlic cloves', '2 tbsp olive oil', '4 cups vegetable stock', '1 cup cream (optional)', 'Salt & pepper', '1/4 tsp nutmeg'],
        method: [
            'Peel and dice the pumpkin into 2 cm cubes. Finely chop onion and garlic.',
            'Heat olive oil in a large pot over medium heat. Cook onion and garlic until soft and translucent, about 5 minutes.',
            'Add the pumpkin cubes and cook for another 5 minutes, stirring occasionally.',
            'Pour in the vegetable stock and bring to a boil. Reduce heat and simmer for 20 minutes until pumpkin is very tender.',
            'Using an immersion blender or food processor, blend the soup until completely smooth.',
            'Stir in cream (if using), salt, pepper, and nutmeg. Heat through gently.',
            'Taste and adjust seasoning.',
            'Ladle into bowls and garnish with a swirl of cream or a sprinkle of pumpkin seeds.',
            'Serve hot with crusty bread.'
        ]
    },
    // 16
    {
        id: 'banana-bread',
        title: 'Banana Bread',
        category: 'Breakfast',
        prep: '15 min',
        cook: '55 min',
        serves: 10,
        description: 'Moist, flavourful and perfectly sweet. A classic homemade favourite that\'s loved across Australia.',
        ingredients: ['3 ripe bananas', '1/3 cup oil or butter', '1/4 cup white sugar', '2 eggs', '1 tsp vanilla', '1 3/4 cups plain flour', '1 tsp baking soda', '1/2 tsp salt', '1/2 tsp cinnamon'],
        method: [
            'Preheat oven to 175°C (350°F). Grease a 9×5 inch loaf tin and line with baking paper.',
            'In a large bowl, mash the bananas with a fork until smooth.',
            'Add oil (or melted butter), sugar, eggs, and vanilla. Mix until well combined.',
            'In a separate bowl, whisk together flour, baking soda, salt, and cinnamon.',
            'Fold the dry ingredients into the wet mixture until just combined – do not overmix.',
            'Pour the batter into the prepared loaf tin and smooth the top.',
            'Bake for 50–60 minutes, until a skewer inserted in the centre comes out clean.',
            'Allow to cool in the tin for 10 minutes, then turn out onto a wire rack to cool completely.',
            'Slice and serve with butter or cream cheese.'
        ]
    },
    // 17
    {
        id: 'grilled-kangaroo-steak',
        title: 'Grilled Kangaroo Steak',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '10 min',
        serves: 4,
        description: 'Lean, tender and packed with protein. A true Aussie delicacy – full of flavour and perfect on the grill.',
        ingredients: ['4 kangaroo steaks', '2 tbsp olive oil', '2 garlic cloves', '1 tbsp Worcestershire sauce', '1 tbsp lemon juice', '1 tsp salt', '1/2 tsp pepper', '1 tsp rosemary'],
        method: [
            'In a shallow dish, combine olive oil, minced garlic, Worcestershire sauce, lemon juice, salt, pepper, and rosemary.',
            'Add kangaroo steaks and turn to coat. Marinate for at least 30 minutes, or up to 2 hours in the fridge.',
            'Preheat a grill or barbecue to high heat.',
            'Remove steaks from marinade and shake off excess.',
            'Grill for 2–3 minutes per side for medium-rare (or longer if desired).',
            'Remove from heat and let rest for 5 minutes under foil.',
            'Slice against the grain and serve with a fresh salad and grilled vegetables.'
        ]
    },
    // 18
    {
        id: 'vegemite-scrolls',
        title: 'Vegemite Scrolls',
        category: 'Breakfast',
        prep: '20 min',
        cook: '20 min',
        serves: 12,
        description: "An iconic Aussie favourite! Soft, fluffy scrolls with a rich Vegemite and cheesy filling.",
        ingredients: ['3 cups plain flour', '1 tbsp sugar', '2 tsp yeast', '1 tsp salt', '1 cup warm milk', '2 tbsp butter', '3-4 tbsp Vegemite', '1 cup cheddar cheese'],
        method: [
            'In a large bowl, mix flour, sugar, yeast, and salt.',
            'Add warm milk and melted butter, and mix to form a soft dough.',
            'Knead on a lightly floured surface for 8–10 minutes until smooth and elastic.',
            'Place in a greased bowl, cover, and let rise in a warm place for 1 hour, or until doubled in size.',
            'Roll out the dough into a large rectangle (about 30×40 cm).',
            'Spread Vegemite evenly over the dough, then sprinkle with grated cheese.',
            'Roll up tightly from the long side to form a log.',
            'Cut into 12 slices and place on a lined baking tray, cut-side up.',
            'Bake at 180°C (350°F) for 18–20 minutes until golden and puffed. Serve warm.'
        ]
    },
    // 19
    {
        id: 'australian-bush-tomato-relish',
        title: 'Australian Bush Tomato Relish',
        category: 'Salads',
        prep: '15 min',
        cook: '50 min',
        serves: 20,
        description: 'A bold and flavourful relish made with native Australian ingredients. Perfect with BBQ meats.',
        ingredients: ['500g bush tomatoes', '1 capsicum', '1 onion', '2 garlic cloves', '1 chilli (optional)', '1/2 cup vinegar', '1/2 cup brown sugar', '1/4 cup olive oil', '1 tsp salt', '1 tsp mustard seeds'],
        method: [
            'Roughly chop tomatoes, capsicum, onion, and chilli. Mince garlic.',
            'Heat olive oil in a large saucepan over medium heat. Cook onion and garlic until soft.',
            'Add capsicum and chilli and cook for another 5 minutes.',
            'Add tomatoes, vinegar, brown sugar, salt, and mustard seeds. Stir well.',
            'Bring to a simmer, then reduce heat to low and cook for 40–50 minutes, stirring occasionally, until thickened.',
            'Taste and adjust seasoning if needed.',
            'Spoon the hot relish into sterilised jars and seal immediately.',
            'Allow to cool completely before storing in the fridge.',
            'Serve with cheese, cold meats, or as a burger topping.'
        ]
    },
    // 20
    {
        id: 'chocolate-caramel-slice',
        title: 'Chocolate Caramel Slice',
        category: 'Desserts',
        prep: '30 min',
        cook: '20 min',
        serves: 20,
        description: 'A classic Aussie treat with three irresistible layers – crunchy biscuit base, gooey caramel centre and smooth chocolate topping.',
        ingredients: ['250g tea biscuits', '125g butter', '2 tbsp coconut', '395g condensed milk', '125g butter (caramel)', '2 tbsp golden syrup', '200g milk chocolate', '50g dark chocolate', '1 tsp oil'],
        method: [
            'Preheat oven to 180°C (350°F). Line a 20×30 cm slice tin with baking paper.',
            'Crush biscuits to fine crumbs. Mix with melted butter and coconut. Press firmly into the prepared tin.',
            'Bake base for 10 minutes, then set aside to cool.',
            'For caramel: combine condensed milk, butter, and golden syrup in a saucepan over low heat. Stir continuously for 5–7 minutes until thick and golden.',
            'Pour caramel over the cooled base and spread evenly. Chill in the fridge until firm.',
            'For topping: melt milk chocolate, dark chocolate, and oil together in a heatproof bowl over simmering water or in the microwave.',
            'Pour melted chocolate over the caramel layer and spread evenly.',
            'Chill until set, then cut into slices with a sharp knife.',
            'Store in an airtight container in the fridge.'
        ]
    },
    // 21
    {
        id: 'garlic-butter-prawns',
        title: 'Garlic Butter Prawns',
        category: 'Main Dishes',
        prep: '10 min',
        cook: '10 min',
        serves: 4,
        description: 'Juicy prawns sautéed in rich garlic butter with a hint of lemon. Quick, simple, and full of flavour.',
        ingredients: ['500g prawns', '4 tbsp butter', '4 garlic cloves', '1 tbsp olive oil', '1 tsp chilli flakes', '1 tbsp lemon juice', '2 tbsp parsley', 'Lemon wedges'],
        method: [
            'Peel and devein prawns, leaving tails on if desired. Pat dry with paper towels.',
            'In a large skillet, heat olive oil and 2 tablespoons of butter over medium-high heat.',
            'Add garlic and chilli flakes, cook for 30 seconds until fragrant.',
            'Add prawns in a single layer and cook for 2–3 minutes per side until pink and curled.',
            'Add the remaining butter and lemon juice, stir until melted and bubbling.',
            'Season with salt and pepper to taste.',
            'Remove from heat and sprinkle with fresh parsley.',
            'Serve immediately with lemon wedges and crusty bread to soak up the sauce.'
        ]
    },
    // 22
    {
        id: 'chicken-caesar-wrap',
        title: 'Chicken Caesar Wrap',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '0 min',
        serves: 4,
        description: 'A classic Caesar salad wrapped in a soft tortilla with grilled chicken, cos lettuce, and creamy dressing.',
        ingredients: ['2 chicken breasts, grilled', '4 tortillas', '1 cos lettuce, shredded', '1/2 cup Caesar dressing', '1/4 cup Parmesan'],
        method: [
            'Slice grilled chicken breasts into thin strips.',
            'Warm tortillas in a dry pan or microwave for a few seconds to make them pliable.',
            'Spread a generous amount of Caesar dressing over each tortilla.',
            'Layer with shredded lettuce, chicken strips, and grated Parmesan cheese.',
            'Fold in the sides and roll up tightly to enclose the filling.',
            'Cut each wrap in half diagonally and secure with a toothpick if needed.',
            'Serve immediately with extra dressing on the side.'
        ]
    },
    // 23
    {
        id: 'grilled-snapper',
        title: 'Grilled Snapper',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '12 min',
        serves: 4,
        description: 'Perfectly grilled snapper with a hint of lemon and herbs.',
        ingredients: ['4 snapper fillets', '2 tbsp olive oil', '2 garlic cloves', '1 lemon', 'Fresh herbs', 'Salt & pepper'],
        method: [
            'Season snapper fillets with salt and pepper on both sides.',
            'Mix olive oil, minced garlic, and juice of half a lemon in a small bowl.',
            'Brush the mixture over both sides of the fish.',
            'Preheat a grill or barbecue to medium-high heat.',
            'Grill the fish skin-side down for 5–6 minutes until the skin is crispy.',
            'Flip and cook for another 4–5 minutes until the fish is opaque and flakes easily.',
            'Remove to a serving plate.',
            'Squeeze over remaining lemon juice and scatter with fresh herbs.',
            'Serve with a side of grilled vegetables or a fresh salad.'
        ]
    },
    // 24
    {
        id: 'beef-rissoles',
        title: 'Beef Rissoles',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '15 min',
        serves: 6,
        description: 'Aussie-style beef patties with herbs and spices, perfect for the BBQ.',
        ingredients: ['500g beef mince', '1 onion', '1 carrot', '1 egg', '1/2 cup breadcrumbs', '2 tbsp BBQ sauce', 'Salt & pepper'],
        method: [
            'Grate onion and carrot finely. Place in a large bowl with beef mince, egg, breadcrumbs, BBQ sauce, salt, and pepper.',
            'Mix thoroughly until all ingredients are well combined.',
            'Divide the mixture into 6 equal portions and shape into round patties, slightly flattened.',
            'Heat a little oil in a large frying pan over medium heat.',
            'Cook rissoles for 4–5 minutes per side until browned and cooked through.',
            'Remove and drain on paper towel.',
            'Serve with mashed potatoes, gravy, and steamed vegetables.'
        ]
    },
    // 25
    {
        id: 'corn-fritters',
        title: 'Corn Fritters',
        category: 'Snacks',
        prep: '15 min',
        cook: '10 min',
        serves: 6,
        description: 'Crispy golden corn fritters, perfect for breakfast or brunch.',
        ingredients: ['2 cups corn kernels', '1 cup plain flour', '2 eggs', '1/2 cup milk', '1 tsp baking powder', 'Salt & pepper', 'Oil for frying'],
        method: [
            'In a large bowl, combine flour, baking powder, salt, and pepper.',
            'Whisk in eggs and milk to form a smooth batter.',
            'Stir in corn kernels until well distributed.',
            'Heat oil in a large frying pan over medium heat.',
            'Drop spoonfuls of batter into the oil and flatten slightly.',
            'Fry for 2–3 minutes per side until golden brown and crisp.',
            'Drain on paper towel and season with extra salt.',
            'Serve with sour cream and sweet chilli sauce.'
        ]
    },
    // 26
    {
        id: 'damper-bread',
        title: 'Damper Bread',
        category: 'Breakfast',
        prep: '15 min',
        cook: '30 min',
        serves: 8,
        description: 'Traditional Australian bush bread, simple and hearty.',
        ingredients: ['3 cups self-raising flour', '1 tsp salt', '1 tbsp butter', '1 cup milk', '1/2 cup water'],
        method: [
            'Preheat oven to 200°C (400°F).',
            'In a large bowl, sift flour and salt together. Rub in butter with your fingertips.',
            'Make a well in the centre and pour in milk and water. Mix to form a soft dough.',
            'Turn out onto a lightly floured surface and knead gently for 1–2 minutes.',
            'Shape the dough into a round loaf and place on a baking tray.',
            'Score a deep cross on the top with a knife.',
            'Bake for 25–30 minutes until golden and hollow-sounding when tapped.',
            'Serve warm with butter and golden syrup or jam.'
        ]
    },
    // 27
    {
        id: 'anzac-biscuits',
        title: 'Anzac Biscuits',
        category: 'Desserts',
        prep: '15 min',
        cook: '15 min',
        serves: 24,
        description: 'Classic Australian ANZAC biscuits, chewy and full of oats and coconut.',
        ingredients: ['1 cup rolled oats', '1 cup plain flour', '1 cup coconut', '3/4 cup sugar', '125g butter', '2 tbsp golden syrup', '1 tsp baking soda', '2 tbsp water'],
        method: [
            'Preheat oven to 160°C (320°F). Line two baking trays with baking paper.',
            'In a large bowl, combine oats, flour, coconut, and sugar.',
            'In a small saucepan, melt butter and golden syrup together over low heat.',
            'Dissolve baking soda in boiling water and add to the butter mixture (it will foam).',
            'Pour the wet mixture into the dry ingredients and stir until well combined.',
            'Roll tablespoonfuls of mixture into balls and place on the trays, flattening slightly.',
            'Bake for 15 minutes until golden brown.',
            'Allow to cool on the trays for 5 minutes before transferring to a wire rack.',
            'Store in an airtight container.'
        ]
    },
    // 28
    {
        id: 'beef-and-guinness-pie',
        title: 'Beef & Guinness Pie',
        category: 'Main Dishes',
        prep: '25 min',
        cook: '2 hours 15 min',
        serves: 6,
        description: 'Rich, hearty beef pie with a deep, malty flavour from Guinness, wrapped in golden puff pastry.',
        ingredients: ['800g beef chuck', '1 onion', '2 carrots', '2 garlic cloves', '1 can Guinness', '2 tbsp tomato paste', '1 cup beef stock', '2 sheets puff pastry', '1 egg, beaten'],
        method: [
            'Cut beef into 3 cm cubes and season with salt and pepper.',
            'Heat oil in a large pot over medium-high heat. Brown the beef in batches, then set aside.',
            'In the same pot, cook onion, carrots, and garlic until softened.',
            'Return beef to the pot. Stir in tomato paste and cook for 2 minutes.',
            'Pour in Guinness and beef stock, scraping up any browned bits from the bottom.',
            'Bring to a simmer, then reduce heat to low, cover, and cook for 2 hours until beef is tender.',
            'Preheat oven to 200°C (400°F). Allow the filling to cool slightly.',
            'Spoon the filling into a pie dish. Cover with puff pastry, pressing edges to seal. Brush with beaten egg and cut a steam slit.',
            'Bake for 25–30 minutes until pastry is golden and puffed. Serve with mashed potatoes.'
        ]
    },
    // 29
    {
        id: 'salt-and-pepper-squid',
        title: 'Salt and Pepper Squid',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '5 min',
        serves: 4,
        description: 'Crispy salt and pepper squid with a zesty dipping sauce.',
        ingredients: ['500g squid rings', '1 cup cornflour', '1 tsp salt', '1 tsp pepper', 'Oil for frying', 'Lemon wedges'],
        method: [
            'Pat squid rings dry with paper towels.',
            'In a bowl, mix cornflour, salt, and pepper together.',
            'Toss the squid in the flour mixture until well coated, shaking off excess.',
            'Heat oil in a deep fryer or large pot to 180°C (350°F).',
            'Fry the squid in batches for 2–3 minutes until golden and crispy. Do not overcrowd.',
            'Drain on paper towel and season with a little extra salt.',
            'Serve immediately with lemon wedges and aioli or sweet chilli sauce.'
        ]
    },
    // 30
    {
        id: 'chicken-satay-skewers',
        title: 'Chicken Satay Skewers',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '10 min',
        serves: 4,
        description: 'Grilled chicken skewers with a creamy peanut satay sauce.',
        ingredients: ['500g chicken thigh', '1/4 cup soy sauce', '2 tbsp peanut butter', '1 tbsp curry powder', '1/2 cup coconut milk', 'Skewers'],
        method: [
            'Cut chicken thigh into bite-sized pieces.',
            'In a bowl, combine soy sauce, peanut butter, curry powder, and coconut milk. Mix well to form a marinade.',
            'Add chicken pieces and toss to coat. Marinate for at least 30 minutes.',
            'Thread the chicken onto skewers.',
            'Preheat a grill or barbecue to medium-high heat.',
            'Grill skewers for 5–6 minutes, turning occasionally, until cooked through and charred in places.',
            'Serve with extra satay sauce and a side of cucumber salad.'
        ]
    },
    // 31
    {
        id: 'honey-soy-chicken',
        title: 'Honey Soy Chicken',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '20 min',
        serves: 4,
        description: 'Sticky honey soy chicken with garlic and ginger.',
        ingredients: ['4 chicken thighs', '1/4 cup soy sauce', '2 tbsp honey', '2 garlic cloves', '1 tbsp ginger', '1 tbsp oil'],
        method: [
            'In a small bowl, mix soy sauce, honey, minced garlic, and grated ginger.',
            'Heat oil in a large skillet over medium-high heat.',
            'Season chicken thighs with salt and pepper, then cook skin-side down for 5–6 minutes until golden.',
            'Flip and cook for another 4–5 minutes.',
            'Pour the sauce over the chicken and reduce heat to low.',
            'Simmer for 5–10 minutes until the sauce thickens and coats the chicken.',
            'Serve with steamed rice and stir-fried vegetables.'
        ]
    },
    // 32
    {
        id: 'bbq-pork-ribs',
        title: 'BBQ Pork Ribs',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '2 hours',
        serves: 4,
        description: 'Slow-cooked BBQ pork ribs, tender and full of smoky flavour.',
        ingredients: ['1.5 kg pork ribs', '1 cup BBQ sauce', '2 tbsp brown sugar', '2 garlic cloves', '1 tsp paprika'],
        method: [
            'Preheat oven to 160°C (320°F).',
            'In a bowl, mix BBQ sauce, brown sugar, minced garlic, and paprika.',
            'Season ribs with salt and pepper, then coat with half of the sauce mixture.',
            'Place ribs on a baking tray lined with foil. Cover with another layer of foil and seal.',
            'Bake for 1.5 hours until tender.',
            'Remove foil, brush with the remaining sauce, and increase oven temperature to 200°C (400°F).',
            'Roast for another 15–20 minutes until sticky and caramelised.',
            'Rest for 10 minutes before cutting into individual ribs.',
            'Serve with coleslaw and corn on the cob.'
        ]
    },
    // 33
    {
        id: 'steak-sandwich',
        title: 'Steak Sandwich',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '10 min',
        serves: 4,
        description: 'Hearty steak sandwich with caramelised onions and cheese.',
        ingredients: ['4 beef steaks', '4 bread rolls', '1 onion', '4 cheese slices', 'BBQ sauce'],
        method: [
            'Season steaks with salt and pepper. Grill or pan-fry to your liking (medium-rare recommended).',
            'Remove steaks and let rest. In the same pan, sauté sliced onion until caramelised and soft.',
            'Toast the bread rolls lightly on the cut sides.',
            'Spread BBQ sauce on the bottom half of each roll.',
            'Layer with lettuce, sliced steak, caramelised onions, and a cheese slice.',
            'Top with the other half of the roll.',
            'Serve immediately with chips or a side salad.'
        ]
    },
    // 34
    {
        id: 'chicken-avocado-salad',
        title: 'Chicken Avocado Salad',
        category: 'Salads',
        prep: '15 min',
        cook: '0 min',
        serves: 4,
        description: 'Fresh and healthy chicken salad with creamy avocado and a zesty dressing.',
        ingredients: ['2 chicken breasts, cooked', '2 avocados', '1 cup cherry tomatoes', '1/2 red onion', '1/4 cup olive oil', '2 tbsp lemon juice', 'Salt & pepper'],
        method: [
            'Slice the cooked chicken breasts into strips.',
            'Cut avocados in half, remove stone, and slice. Halve the cherry tomatoes. Finely slice red onion.',
            'In a large salad bowl, combine chicken, avocado, tomatoes, and onion.',
            'In a small jar, shake together olive oil, lemon juice, salt, and pepper to make the dressing.',
            'Drizzle the dressing over the salad and gently toss to combine.',
            'Serve immediately as a light lunch or dinner.'
        ]
    },
    // 35
    {
        id: 'seafood-chowder',
        title: 'Seafood Chowder',
        category: 'Soups',
        prep: '20 min',
        cook: '30 min',
        serves: 6,
        description: 'Rich and creamy seafood chowder with prawns, fish and mussels.',
        ingredients: ['500g seafood mix', '1 onion', '2 garlic', '4 cups fish stock', '1 cup cream', '2 potatoes', 'Salt & pepper'],
        method: [
            'Dice onion and potatoes. Mince garlic.',
            'In a large pot, sauté onion and garlic in a little oil until soft.',
            'Add diced potatoes and fish stock. Bring to a boil, then reduce heat and simmer until potatoes are tender.',
            'Add the seafood mix (prawns, fish pieces, mussels) and cook for 5–7 minutes until seafood is just cooked.',
            'Stir in cream and season with salt and pepper. Heat through gently (do not boil).',
            'Ladle into bowls and garnish with fresh parsley.',
            'Serve with crusty bread.'
        ]
    },
    // 36
    {
        id: 'creamy-mushroom-pasta',
        title: 'Creamy Mushroom Pasta',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '20 min',
        serves: 4,
        description: 'Rich and creamy pasta with mushrooms and Parmesan.',
        ingredients: ['500g pasta', '300g mushrooms', '2 garlic', '1 cup cream', '1/2 cup Parmesan', '2 tbsp butter', 'Parsley'],
        method: [
            'Cook pasta in salted boiling water according to package instructions. Drain and reserve some pasta water.',
            'Slice mushrooms and mince garlic.',
            'In a large skillet, melt butter over medium heat. Cook mushrooms until golden and any liquid has evaporated.',
            'Add garlic and cook for 1 minute until fragrant.',
            'Pour in cream and bring to a gentle simmer. Stir in Parmesan and season with salt and pepper.',
            'Add the cooked pasta to the sauce and toss to coat, adding a splash of pasta water if needed.',
            'Garnish with fresh parsley and serve immediately.'
        ]
    },
    // 37
    {
        id: 'bacon-and-egg-roll',
        title: 'Bacon & Egg Roll',
        category: 'Breakfast',
        prep: '10 min',
        cook: '10 min',
        serves: 4,
        description: 'Classic Aussie bacon and egg roll, perfect for breakfast.',
        ingredients: ['4 bread rolls', '8 bacon slices', '4 eggs', 'BBQ sauce', 'Butter'],
        method: [
            'Cook bacon in a frying pan until crispy. Set aside and keep warm.',
            'In the same pan, fry eggs to your liking (sunny-side up or over-easy).',
            'Slice bread rolls in half and toast the cut sides lightly.',
            'Spread butter on the bottom half of each roll.',
            'Layer with bacon slices, a fried egg, and a squeeze of BBQ sauce.',
            'Top with the other half of the roll and serve warm.'
        ]
    },
    // 38
    {
        id: 'spinach-and-feta-quiche',
        title: 'Spinach & Feta Quiche',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '35 min',
        serves: 6,
        description: 'Greek-style spinach and feta quiche in flaky pastry.',
        ingredients: ['500g spinach', '200g feta', '3 eggs', '1 onion', '2 sheets pastry', 'Salt & pepper'],
        method: [
            'Preheat oven to 200°C (400°F). Line a quiche tin with pastry, trimming any excess.',
            'Sauté finely chopped onion until soft. Add spinach and cook until wilted. Drain any excess liquid.',
            'In a bowl, beat eggs. Crumble feta and add to the eggs along with the spinach mixture. Season with salt and pepper.',
            'Pour the filling into the pastry-lined tin.',
            'Bake for 30–35 minutes until the filling is set and the top is golden.',
            'Allow to cool slightly before slicing. Serve warm or at room temperature.'
        ]
    },
    // 39
    {
        id: 'slow-cooked-beef-stew',
        title: 'Slow Cooked Beef Stew',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '4 hours',
        serves: 6,
        description: 'Fall-apart tender slow cooked beef stew with hearty vegetables.',
        ingredients: ['1.5 kg beef chuck', '2 onions', '4 carrots', '4 cups stock', 'Herbs', 'Garlic'],
        method: [
            'Cut beef into large chunks. Season with salt and pepper.',
            'Brown the beef in batches in a hot pan with oil. Transfer to a slow cooker.',
            'Add roughly chopped onions, carrots, garlic, and your choice of herbs (thyme, bay leaves).',
            'Pour in beef stock until it covers the meat and vegetables.',
            'Cook on low for 4–6 hours until beef is very tender.',
            'Thicken the sauce with a cornflour slurry if desired.',
            'Serve with mashed potatoes or crusty bread.'
        ]
    },
    // 40
    {
        id: 'garlic-herb-roast-potatoes',
        title: 'Garlic Herb Roast Potatoes',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '40 min',
        serves: 4,
        description: 'Crispy golden roast potatoes with garlic and fresh herbs.',
        ingredients: ['1 kg potatoes', '4 garlic cloves', '2 tbsp herbs (rosemary, thyme)', '2 tbsp olive oil', 'Salt & pepper'],
        method: [
            'Preheat oven to 200°C (400°F).',
            'Peel and cut potatoes into large chunks. Parboil in salted water for 8–10 minutes, then drain and shake to roughen the edges.',
            'In a roasting tin, heat olive oil with crushed garlic and herbs.',
            'Add the potatoes and toss to coat well. Season with salt and pepper.',
            'Roast for 35–40 minutes, turning once, until golden and crispy.',
            'Serve as a side to roast meats or grilled fish.'
        ]
    },
    // 41
    {
        id: 'mango-cheesecake',
        title: 'Mango Cheesecake',
        category: 'Desserts',
        prep: '30 min',
        cook: '0 min',
        serves: 10,
        description: 'No-bake mango cheesecake with a buttery biscuit base.',
        ingredients: ['200g biscuits', '100g butter', '500g cream cheese', '1 cup cream', '1/2 cup sugar', '2 mangoes'],
        method: [
            'Crush biscuits to fine crumbs. Mix with melted butter and press into the base of a springform tin. Chill.',
            'In a bowl, beat cream cheese, cream, and sugar until smooth and thick.',
            'Peel and puree one mango. Fold the puree into the cream cheese mixture.',
            'Pour the filling over the biscuit base and smooth the top.',
            'Chill for at least 4 hours or overnight.',
            'Before serving, top with sliced mango and extra cream.'
        ]
    },
    // 42
    {
        id: 'passionfruit-slice',
        title: 'Passionfruit Slice',
        category: 'Desserts',
        prep: '20 min',
        cook: '0 min',
        serves: 12,
        description: 'Tangy passionfruit slice with a coconut biscuit base.',
        ingredients: ['200g biscuits', '100g butter', '1 cup icing sugar', '1/2 cup passionfruit pulp', '1 cup coconut'],
        method: [
            'Crush biscuits and mix with melted butter. Press into a lined slice tin and chill.',
            'In a bowl, combine icing sugar, passionfruit pulp, and coconut. Mix well.',
            'Spread the passionfruit mixture over the base and smooth the top.',
            'Chill for 1–2 hours until firm.',
            'Cut into squares and serve.'
        ]
    },
    // 43
    {
        id: 'apple-crumble',
        title: 'Apple Crumble',
        category: 'Desserts',
        prep: '20 min',
        cook: '40 min',
        serves: 8,
        description: 'Classic apple crumble with a golden oat topping.',
        ingredients: ['6 apples', '1/2 cup sugar', '1 cup flour', '1 cup oats', '125g butter', '1 tsp cinnamon'],
        method: [
            'Preheat oven to 180°C (350°F).',
            'Peel, core, and slice apples. Place in a baking dish and sprinkle with sugar and cinnamon.',
            'In a bowl, rub butter into flour until it resembles breadcrumbs. Stir in oats and a little more sugar.',
            'Sprinkle the crumble topping evenly over the apples.',
            'Bake for 35–40 minutes until the topping is golden and the apples are bubbling.',
            'Serve warm with custard or ice cream.'
        ]
    },
    // 44
    {
        id: 'sticky-date-pudding',
        title: 'Sticky Date Pudding',
        category: 'Desserts',
        prep: '25 min',
        cook: '35 min',
        serves: 8,
        description: 'Rich and sticky date pudding with caramel sauce.',
        ingredients: ['200g dates', '1 cup water', '125g butter', '1 cup sugar', '2 eggs', '1 1/2 cups flour', '1 tsp baking soda'],
        method: [
            'Preheat oven to 180°C (350°F). Grease a pudding tin.',
            'Chop dates and place in a bowl. Pour boiling water over them and stir in baking soda. Set aside to cool.',
            'Cream butter and sugar until light and fluffy. Beat in eggs one at a time.',
            'Fold in flour alternately with the date mixture.',
            'Pour the batter into the prepared tin and bake for 30–35 minutes until a skewer comes out clean.',
            'Serve warm with caramel sauce and vanilla ice cream.'
        ]
    },
    // 45
    {
        id: 'lemon-myrtle-chicken',
        title: 'Lemon Myrtle Chicken',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '25 min',
        serves: 4,
        description: 'Chicken with a zesty native Australian lemon myrtle marinade.',
        ingredients: ['4 chicken breasts', '2 tbsp lemon myrtle leaves', '2 garlic cloves', '1/4 cup olive oil', 'Salt & pepper'],
        method: [
            'Crush lemon myrtle leaves with garlic, olive oil, salt, and pepper to form a paste.',
            'Rub the paste all over chicken breasts. Marinate for at least 1 hour.',
            'Preheat grill or barbecue to medium-high heat.',
            'Grill chicken for 6–8 minutes per side until cooked through and charred.',
            'Rest for 5 minutes before slicing.',
            'Serve with a fresh salad and lemon wedges.'
        ]
    },
    // 46
    {
        id: 'grilled-salmon-with-herbs',
        title: 'Grilled Salmon with Herbs',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '10 min',
        serves: 4,
        description: 'Perfectly grilled salmon with a medley of fresh herbs and lemon.',
        ingredients: ['4 salmon fillets', '2 tbsp olive oil', '1 lemon', 'Fresh herbs (dill, parsley, chives)', 'Salt & pepper'],
        method: [
            'Season salmon fillets with salt and pepper. Brush with olive oil.',
            'Preheat a grill or frying pan over medium-high heat.',
            'Cook salmon skin-side down for 5–6 minutes until skin is crispy.',
            'Flip and cook for another 4–5 minutes until just cooked through.',
            'Squeeze over lemon juice and scatter with chopped fresh herbs.',
            'Serve with steamed greens and extra lemon wedges.'
        ]
    },
    // 47
    {
        id: 'chicken-fried-rice',
        title: 'Chicken Fried Rice',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '10 min',
        serves: 4,
        description: 'Quick and easy chicken fried rice with egg, peas, and carrots.',
        ingredients: ['3 cups cooked rice', '2 chicken breasts, diced', '2 eggs, beaten', '1 onion, diced', '1/2 cup peas', '1/2 cup carrots, diced', '3 tbsp soy sauce', '2 tbsp oil', 'Spring onions'],
        method: [
            'Heat oil in a large wok or frying pan over high heat.',
            'Scramble the beaten eggs and set aside.',
            'In the same pan, cook chicken until browned and cooked through. Set aside.',
            'Sauté onion, peas, and carrots until vegetables are tender.',
            'Add cooked rice, soy sauce, and return the chicken and egg to the pan.',
            'Toss well to combine and heat through.',
            'Garnish with sliced spring onions and serve hot.'
        ]
    },
    // 48
    {
        id: 'classic-coleslaw',
        title: 'Classic Coleslaw',
        category: 'Salads',
        prep: '15 min',
        cook: '0 min',
        serves: 6,
        description: 'Creamy Australian-style coleslaw with cabbage and carrot.',
        ingredients: ['1/2 cabbage', '2 carrots', '1/2 cup mayonnaise', '2 tbsp vinegar', '1 tbsp sugar', 'Salt & pepper'],
        method: [
            'Shred cabbage finely and grate carrots.',
            'In a small bowl, mix mayonnaise, vinegar, sugar, salt, and pepper to make the dressing.',
            'Pour the dressing over the shredded vegetables and toss well to coat.',
            'Chill for at least 30 minutes before serving to allow flavours to blend.',
            'Serve as a side dish with BBQ meats or sandwiches.'
        ]
    },
    // 49
    {
        id: 'prawn-linguine',
        title: 'Prawn Linguine',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '15 min',
        serves: 4,
        description: 'Garlic prawn linguine with a touch of chilli and lemon.',
        ingredients: ['500g linguine', '500g prawns', '4 garlic cloves', '1 chilli', '1/2 cup olive oil', 'Lemon juice', 'Parsley'],
        method: [
            'Cook linguine according to package instructions. Drain and set aside, reserving a little pasta water.',
            'In a large skillet, heat olive oil over medium heat. Add sliced garlic and chilli, cook until fragrant.',
            'Add prawns and cook until pink and curled, about 2–3 minutes per side.',
            'Toss in the cooked linguine, squeeze over lemon juice, and add a splash of pasta water to create a sauce.',
            'Season with salt and pepper, and scatter with parsley.',
            'Serve immediately with extra lemon wedges.'
        ]
    },
    // 50
    {
        id: 'macadamia-brownies',
        title: 'Macadamia Brownies',
        category: 'Desserts',
        prep: '20 min',
        cook: '30 min',
        serves: 16,
        description: 'Fudgy brownies loaded with crunchy macadamia nuts.',
        ingredients: ['200g chocolate', '150g butter', '1 cup sugar', '3 eggs', '1 cup flour', '1 cup macadamias'],
        method: [
            'Preheat oven to 180°C (350°F). Line a 20×20 cm baking tin with baking paper.',
            'Melt chocolate and butter together in a heatproof bowl over simmering water or in the microwave.',
            'Stir in sugar and mix well. Beat in eggs one at a time.',
            'Fold in flour and chopped macadamia nuts until just combined.',
            'Pour the batter into the prepared tin and smooth the top.',
            'Bake for 25–30 minutes until a skewer comes out with moist crumbs (do not overbake).',
            'Cool completely in the tin before cutting into squares.',
            'Store in an airtight container.'
        ]
    }
];

// ============================================================
// RENDER RECIPES
// ============================================================
function renderRecipes(recipes) {
    try {
        const container = document.getElementById('recipesList');
        if (!container) {
            console.error('Container #recipesList not found.');
            return;
        }

        container.innerHTML = recipes.map(recipe => `
            <article class="recipe-item" data-id="${recipe.id}" onclick="openModal('${recipe.id}')" tabindex="0" role="button" aria-label="View ${recipe.title} recipe">
                <img src="assets/images/${recipe.id}.png" alt="${recipe.title}" class="recipe-item-image" 
                     loading="lazy" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22300%22%3E%3Crect fill=%22%23EFE7DC%22 width=%22600%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.35em%22 font-size=%2260%22 fill=%22%23A67C52%22%3E🍽️%3C/text%3E%3C/svg%3E'">
                <div class="recipe-item-content">
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
            </article>
        `).join('');
    } catch (error) {
        console.error('renderRecipes error:', error);
    }
}

// ============================================================
// OPEN MODAL
// ============================================================
function openModal(recipeId) {
    try {
        const recipe = RECIPES.find(r => r.id === recipeId);
        if (!recipe) {
            console.error('Recipe not found:', recipeId);
            return;
        }

        const modal = document.getElementById('recipeModal');
        const body = document.getElementById('modalBody');
        if (!modal || !body) {
            console.error('Modal elements not found');
            return;
        }

        const difficultyOptions = ['Easy', 'Medium', 'Hard'];
        const difficulty = difficultyOptions[Math.floor(Math.random() * difficultyOptions.length)];

        const chefTips = [
            'For extra flavour, marinate your protein overnight with herbs and spices. This allows the flavours to penetrate deeply, ensuring every bite is delicious.',
            'Always bring ingredients to room temperature before cooking – this helps them cook evenly and prevents the outside from burning while the inside remains underdone.',
            'When frying, make sure your oil is hot enough. A simple test: drop a small piece of bread into the oil – if it sizzles immediately, you are ready to go.',
            'Seasoning is not just salt and pepper. Add a squeeze of lemon, a pinch of sugar, or a dash of smoked paprika to layer flavours and brighten the dish.',
            'Do not overcrowd the pan when frying – this lowers the temperature and causes steaming instead of searing. Cook in batches for the best results.',
            'Resting meat after cooking is essential – it allows the juices to redistribute, making your meat tender and moist. Cover loosely with foil and wait 5–10 minutes.',
            'Fresh herbs add a vibrant finish, but if using dried, remember they are more concentrated – use about one-third of the amount you would for fresh.',
            'Acidity is your secret weapon – a squeeze of lemon or a splash of vinegar can lift an entire dish, cutting through richness and adding brightness.',
            'Caramelising onions slowly over low heat unlocks their natural sweetness and adds incredible depth to soups, stews, and sauces – don’t rush this process.'
        ];
        const tip = chefTips[Math.floor(Math.random() * chefTips.length)];

        const servingSuggestions = [
            'This dish pairs beautifully with a crisp green salad dressed with a simple vinaigrette and a chilled glass of Sauvignon Blanc – the freshness perfectly complements the richness.',
            'Serve alongside crusty artisan bread and a bowl of garlic butter – ideal for mopping up every last drop of sauce.',
            'We love serving this with creamy mashed potatoes or buttery couscous – both act as wonderful vehicles for the sauce. Add steamed greens for colour and nutrition.',
            'Garnish with a generous sprinkle of fresh parsley and lemon wedges – the bright, citrusy aroma adds a beautiful finishing touch.',
            'For a lighter option, serve over a bed of quinoa or brown rice – the nuttiness of the grains pairs wonderfully with the dish.',
            'If hosting a dinner party, present this on a large wooden board with scattered herbs and edible flowers – it makes a stunning centrepiece.',
            'Don’t forget a dollop of Greek yoghurt or sour cream on the side – its cool creaminess balances heat and spices beautifully.',
            'This recipe also works wonderfully as a filling for wraps or sandwiches the next day – simply shred the leftover meat, add crunchy slaw, and enjoy.'
        ];
        const serving = servingSuggestions[Math.floor(Math.random() * servingSuggestions.length)];

        const ingredientsList = recipe.ingredients && recipe.ingredients.length > 0
            ? recipe.ingredients.map(i => `<li>${i}</li>`).join('')
            : '<li>No ingredients listed</li>';

        const methodList = recipe.method && recipe.method.length > 0
            ? recipe.method.map(step => `<li>${step}</li>`).join('')
            : '<li>No method provided</li>';

        body.innerHTML = `
            <h2>${recipe.title}</h2>
            <div class="modal-meta">
                <span>⏱ Prep ${recipe.prep}</span>
                <span>🍳 Cook ${recipe.cook}</span>
                <span>👨‍👩‍👧 Serves ${recipe.serves}</span>
                <span>📊 ${difficulty}</span>
            </div>
            <img src="assets/images/${recipe.id}.png" alt="${recipe.title}" class="modal-image" loading="lazy" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22700%22 height=%22300%22%3E%3Crect fill=%22%23EFE7DC%22 width=%22700%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.35em%22 font-size=%2270%22 fill=%22%23A67C52%22%3E🍽️%3C/text%3E%3C/svg%3E'">

            <h3>📋 Ingredients</h3>
            <ul>${ingredientsList}</ul>

            <h3>👨‍🍳 Method</h3>
            <ol>${methodList}</ol>

            <div class="chef-tip">
                <strong>💡 Chef’s Tip:</strong> ${tip}
            </div>

            <div class="serving-suggestion">
                <strong>🍽️ Serving Suggestion:</strong> ${serving}
            </div>

            <div class="modal-shop">
                <p>🍽️ Make this recipe perfect with <strong>KOREVIR</strong> wooden spoons</p>
                <a href="#" class="btn-primary" onclick="showAmazon();">Shop KOREVIR on Amazon AU</a>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('openModal error:', error);
    }
}

function closeModal() {
    try {
        const modal = document.getElementById('recipeModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    } catch (error) {
        console.error('closeModal error:', error);
    }
}

function filterRecipes() {
    try {
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
    } catch (error) {
        console.error('filterRecipes error:', error);
    }
}

function showAmazon() {
    try {
        if (AMAZON_LINK === '#') {
            alert('🍽️ KOREVIR Wooden Spoons are coming soon to Amazon AU!');
        } else {
            window.open(AMAZON_LINK, '_blank', 'noopener,noreferrer');
        }
    } catch (error) {
        console.error('showAmazon error:', error);
    }
}

// ============================================================
// DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    try {
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 40) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }

        const menuToggle = document.getElementById('mobileMenu');
        const nav = document.querySelector('.header-nav');
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });
        }

        const closeBtn = document.getElementById('closeModal');
        const modal = document.getElementById('recipeModal');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modal) modal.addEventListener('click', function(e) { if (e.target === this) closeModal(); });
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

        const searchInput = document.getElementById('search');
        if (searchInput) searchInput.addEventListener('input', filterRecipes);

        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.addEventListener('click', function() {
                document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                filterRecipes();
            });
        });

        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();

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

        renderRecipes(RECIPES);
    } catch (error) {
        console.error('DOMContentLoaded error:', error);
    }
});
