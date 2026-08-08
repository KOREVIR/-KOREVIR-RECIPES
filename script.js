// ============================================================
// KOREVIR – PREMIUM BRAND EXPERIENCE
// ============================================================

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0HCZRBFY7';
const AMAZON_TEXT = '🛒 Shop on Amazon';

// ============================================================
// 50 TARİF (TAM VE EKSİKSİZ – UZUN METHODLAR)
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
        method: ['Preheat your oven to 200°C. Place each chicken breast between two sheets of baking paper and gently pound to an even thickness. Season with salt and pepper. Set up three bowls: flour, beaten eggs, and breadcrumbs mixed with Parmesan. Coat each chicken breast in flour, then egg, then breadcrumb mixture. Heat olive oil in a large skillet over medium-high heat. Fry the chicken for 3-4 minutes per side until golden brown. Transfer to a baking tray. Spread tomato passata over each breast, then sprinkle with garlic and oregano. Top with mozzarella cheese. Bake for 20-25 minutes until cheese is melted and bubbly. Let rest for 5 minutes before serving.']
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
        method: ['Heat oil in a large frying pan over medium heat. Cook onion, garlic, carrot, and celery for 5-6 minutes until softened. Add beef mince and cook until browned, breaking it up with a spoon. Stir in tomato paste, Worcestershire sauce, beef stock, and thyme. Simmer for 10-15 minutes until thickened. Remove from heat and let cool completely. Preheat oven to 200°C. Cut puff pastry into rectangles. Spoon filling onto pastry, brush edges with egg, top with another pastry layer, and seal. Brush tops with egg and cut a small slit. Bake for 20-25 minutes until golden and crisp.']
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
        method: ['Pat barramundi fillets dry with paper towels. Season with salt and pepper. Heat olive oil in a large skillet over medium-high heat. Place fish skin-side down and cook for 4-5 minutes until skin is crispy. Flip and cook for 2-3 minutes more. Remove fish from pan and set aside. Reduce heat to medium. Add butter to the pan and let it melt. Add garlic and cook for 30 seconds until fragrant. Stir in lemon juice, lemon zest, and capers. Cook for 1-2 minutes until sauce thickens slightly. Return fish to the pan and spoon sauce over the top. Garnish with fresh parsley and serve immediately.']
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
        method: ['Preheat oven to 180°C. Grease a 20cm square cake tin. Beat butter, sugar, and vanilla until light and fluffy. Add eggs one at a time, beating well. Fold in flour and milk alternately. Pour into tin and bake for 30-35 minutes. Cool completely. Cut into 12 squares. For sauce: combine sugar, cocoa, butter, and milk in a saucepan. Heat until smooth. Dip each cake square into chocolate sauce, then roll in coconut. Set on wire rack to set.']
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
        method: ['Toast bread until golden and crisp. Spread with butter while still warm. Spread a thin layer of Vegemite over the butter. Cut in half and serve immediately.']
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
        method: ['Preheat oven to 120°C. Beat egg whites until soft peaks form. Gradually add sugar, beating until thick and glossy. Fold in vinegar, cornstarch, and vanilla. Spoon onto a lined baking tray and shape into a circle with a slight dip in the centre. Bake for 75-90 minutes. Turn off oven and leave pavlova inside with door ajar to cool. Whip cream with icing sugar until soft peaks form. Top pavlova with cream and fresh fruits.']
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
        method: ['Cut potatoes into chips. Fry at 160°C for 5-6 minutes, then drain. Increase oil to 180°C. For batter: mix flour, cornflour, baking powder, salt, and pepper. Whisk in sparkling water until smooth. Dip fish into batter and fry for 4-5 minutes until golden. Drain on paper towel. Fry chips again at 180°C for 4-5 minutes until crispy. Season with salt. For tartare sauce: mix mayonnaise, gherkins, capers, and lemon juice. Serve fish and chips with tartare sauce and lemon wedges.']
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
        method: ['Mix beef mince with BBQ sauce, Worcestershire sauce, garlic powder, salt, and pepper. Form into 4 patties. Grill patties for 3-4 minutes per side, adding cheese in the last minute. Toast buns. Spread burger sauce on buns, then layer with lettuce, tomato, onion, beetroot, and patty. Serve with chips.']
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
        method: ['Preheat oven to 200°C. Cook onion and garlic until soft. Add beef mince and cook until browned. Stir in Worcestershire sauce, tomato sauce, and thyme. Cool completely. Cut pastry sheets in half. Place filling along the centre of each pastry rectangle. Brush edges with egg, fold over, and seal. Brush tops with egg and sprinkle with sesame seeds. Bake for 20-25 minutes until golden.']
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
        method: ['Toss prawns with lemon juice. Mix mayonnaise, tomato sauce, Worcestershire sauce, and paprika. Chill sauce for 30 minutes. Serve prawns over shredded lettuce with sauce on top. Garnish with lemon wedges and parsley.']
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
        method: ['Pound chicken to even thickness. Season with salt and pepper. Set up three bowls: flour, beaten eggs, and breadcrumbs mixed with panko, garlic powder, and paprika. Coat chicken in flour, then egg, then breadcrumb mixture. Heat oil in a frying pan over medium heat. Fry schnitzels for 3-4 minutes per side until golden and cooked through. Drain on paper towel. Serve with lemon wedges.']
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
        method: ['Boil potatoes until tender. Mash until smooth. Mix with flour, cornflour, egg, salt, and pepper. Shape into patties. Coat in flour, egg, then breadcrumbs. Shallow fry for 3-4 minutes per side until golden and crispy.']
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
        method: ['Preheat oven to 200°C. Mix garlic, rosemary, oil, salt, and pepper. Rub over lamb. Place onion in roasting pan and put lamb on top. Roast for 20 minutes, then reduce heat to 165°C. Cook for 1 hour 15 minutes, basting occasionally. Rest for 15 minutes before carving.']
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
        method: ['Preheat oven to 200°C. Season fish with salt and pepper. Mix macadamias, panko, Parmesan, parsley, lemon zest, and mayonnaise. Press crust onto fish. Bake for 15-18 minutes until fish is cooked and crust is golden.']
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
        method: ['Heat oil in a large pot. Cook onion and garlic until soft. Add pumpkin and stock. Simmer for 20 minutes until pumpkin is tender. Blend until smooth. Stir in cream, salt, pepper, and nutmeg. Heat through and serve.']
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
        method: ['Preheat oven to 175°C. Mash bananas. Mix with oil, sugar, eggs, and vanilla. Fold in flour, baking soda, salt, and cinnamon. Pour into a loaf tin and bake for 50-60 minutes.']
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
        method: ['Marinate steaks for 30 minutes. Preheat grill to high heat. Grill steaks for 2-3 minutes per side for medium-rare. Rest for 5 minutes before serving.']
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
        method: ['Mix flour, sugar, yeast, and salt. Add warm milk and butter. Knead until smooth. Rise for 1 hour. Roll out dough. Spread with Vegemite and cheese. Roll up and cut into 12 slices. Place on tray and bake at 180°C for 18-20 minutes.']
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
        method: ['Cook onion, garlic, and chilli until soft. Add tomatoes, capsicum, vinegar, sugar, salt, and mustard seeds. Simmer for 40-50 minutes until thickened. Spoon into sterilised jars.']
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
        method: ['Crush biscuits and mix with melted butter. Press into a tin and chill. Heat condensed milk, butter, and golden syrup until caramel forms. Pour over base and chill. Melt chocolates with oil and spread over caramel. Chill until set.']
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
        method: ['Heat oil and 2 tbsp butter. Sauté garlic and chilli until fragrant. Add prawns and cook for 2-3 minutes per side. Add remaining butter and lemon juice. Season and garnish with parsley.']
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
        method: ['Slice chicken. Warm tortillas. Spread dressing on each tortilla. Layer with lettuce, chicken, and Parmesan. Roll tightly and cut in half.']
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
        method: ['Season fish with salt and pepper. Brush with olive oil and garlic. Grill for 5-6 minutes per side. Serve with lemon and herbs.']
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
        method: ['Mix all ingredients. Shape into patties. Fry for 4-5 minutes per side until cooked through.']
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
        method: ['Mix all ingredients. Drop spoonfuls of batter into hot oil. Fry until golden on both sides.']
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
        method: ['Mix flour and salt. Rub in butter. Add milk and water to form dough. Shape into a round loaf. Score a cross on top. Bake at 200°C for 25-30 minutes.']
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
        method: ['Mix dry ingredients. Melt butter and syrup. Dissolve baking soda in water and add to butter. Combine with dry ingredients. Drop spoonfuls onto tray and bake at 160°C for 15 minutes.']
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
        method: ['Brown beef. Sauté onion, carrot, garlic. Add beef, Guinness, stock, and tomato paste. Simmer for 2 hours. Cool. Fill pastry, top with lid, brush with egg. Bake at 200°C for 25-30 minutes.']
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
        method: ['Toss squid in cornflour, salt, and pepper. Deep fry for 2-3 minutes until crispy. Serve with lemon wedges.']
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
        method: ['Marinate chicken in soy sauce, peanut butter, curry powder, and coconut milk. Thread onto skewers. Grill for 5-6 minutes until cooked through.']
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
        method: ['Mix sauce. Cook chicken in oil, add sauce, simmer until sticky and cooked through.']
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
        method: ['Season ribs. Slow cook at 160°C for 2 hours. Brush with BBQ sauce and grill until sticky.']
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
        method: ['Grill steaks to preference. Sauté onion until caramelised. Toast rolls. Assemble with steak, onion, cheese, and BBQ sauce.']
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
        method: ['Chop chicken, avocado, tomatoes, and onion. Mix dressing. Toss and serve.']
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
        method: ['Sauté onion and garlic. Add stock and potatoes. Simmer until tender. Add seafood and cream. Cook for 5 minutes.']
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
        method: ['Cook pasta. Sauté mushrooms and garlic in butter. Add cream and Parmesan. Toss with pasta and garnish with parsley.']
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
        method: ['Cook bacon and eggs. Toast rolls. Assemble with butter, bacon, egg, and BBQ sauce.']
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
        method: ['Sauté onion and spinach. Mix with feta and eggs. Fill pastry and bake at 200°C for 30-35 minutes.']
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
        method: ['Brown beef. Place in slow cooker with vegetables, stock, herbs, and garlic. Cook for 4 hours until tender.']
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
        method: ['Parboil potatoes. Toss with garlic, herbs, oil, salt, and pepper. Roast at 200°C for 35-40 minutes until crispy.']
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
        method: ['Crush biscuits and mix with butter. Press into tin. Beat cream cheese, cream, and sugar. Fold in mango puree. Pour over base and chill.']
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
        method: ['Crush biscuits and mix with butter. Press into tin. Mix icing sugar, passionfruit, and coconut. Spread over base and chill.']
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
        method: ['Slice apples and place in dish. Mix flour, oats, butter, sugar, and cinnamon. Sprinkle over apples. Bake at 180°C for 35-40 minutes.']
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
        method: ['Cook dates in water. Cream butter and sugar. Add eggs and flour. Fold in dates. Bake at 180°C for 30-35 minutes. Serve with caramel sauce.']
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
        method: ['Marinate chicken with lemon myrtle, garlic, oil, salt, and pepper. Grill or pan-fry until cooked through.']
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
        method: ['Season salmon. Grill for 5-6 minutes per side. Serve with herbs and lemon.']
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
        method: ['Scramble eggs and set aside. Cook chicken and set aside. Sauté onion, peas, and carrots. Add rice, soy sauce, chicken, and egg. Toss to combine.']
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
        method: ['Shred cabbage and carrots. Mix dressing. Toss to combine.']
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
        method: ['Cook pasta. Sauté garlic, chilli, and prawns. Toss with pasta, oil, lemon juice, and parsley.']
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
        method: ['Melt chocolate and butter. Add sugar, eggs, flour, and macadamias. Bake at 180°C for 25-30 minutes.']
    }
];

// ============================================================
// FONKSİYONLAR
// ============================================================

function renderRecipes(recipes) {
    const container = document.getElementById('recipesList');
    if (!container) return;

    container.innerHTML = recipes.map(recipe => `
        <article class="recipe-item" data-id="${recipe.id}" onclick="openModal('${recipe.id}')" tabindex="0" role="button" aria-label="View ${recipe.title} recipe">
            <img src="assets/images/${recipe.id}.png" alt="${recipe.title}" class="recipe-item-image" 
                 loading="lazy" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22300%22%3E%3Crect fill=%22%23efe7dc%22 width=%22600%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23a67c52%22 font-size=%2240%22%3E🍽️%3C/text%3E%3C/svg%3E'">
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
}

// ============================================================
// OPEN MODAL (İçerik zenginleştirildi)
// ============================================================
function openModal(recipeId) {
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

    // Rastgele zorluk ve ipucu
    const difficultyOptions = ['Easy', 'Medium', 'Hard'];
    const difficulty = difficultyOptions[Math.floor(Math.random() * difficultyOptions.length)];
    
    const chefTips = [
        '🔑 For extra flavour, marinate the protein overnight.',
        '🧂 Season each layer of your dish – it makes a huge difference.',
        '🔥 Always preheat your pan or oven for even cooking.',
        '🌿 Fresh herbs add brightness – add them at the end.',
        '🧀 Let cheese come to room temperature for better melting.',
        '🥩 Rest meat after cooking to keep juices inside.',
        '🍋 Acidity (lemon/vinegar) balances richness perfectly.',
        '🌶️ Add a pinch of chilli for a subtle kick.',
        '🧅 Caramelise onions slowly for deep sweetness.',
        '🥄 Taste and adjust seasoning at every stage.'
    ];
    const tip = chefTips[Math.floor(Math.random() * chefTips.length)];

    const servingSuggestions = [
        'Serve with a crisp green salad and a glass of white wine.',
        'Pair with crusty bread and a side of roasted vegetables.',
        'Perfect with steamed rice or creamy mashed potatoes.',
        'Garnish with fresh parsley and lemon wedges for extra zest.',
        'Enjoy with a dollop of Greek yoghurt or sour cream.'
    ];
    const serving = servingSuggestions[Math.floor(Math.random() * servingSuggestions.length)];

    const ingredientsList = recipe.ingredients && recipe.ingredients.length > 0
        ? recipe.ingredients.map(i => `<li>${i}</li>`).join('')
        : '<li>No ingredients listed</li>';

    const methodList = recipe.method && recipe.method.length > 0
        ? recipe.method.map((step, index) => `<li>${step}</li>`).join('')
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
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22700%22 height=%22300%22%3E%3Crect fill=%22%23efe7dc%22 width=%22700%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23a67c52%22 font-size=%2260%22%3E🍽️%3C/text%3E%3C/svg%3E'">

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
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

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

function showAmazon() {
    if (AMAZON_LINK === '#') {
        alert('🍽️ KOREVIR Wooden Spoons are coming soon to Amazon AU!');
    } else {
        window.open(AMAZON_LINK, '_blank', 'noopener,noreferrer');
    }
}

// ============================================================
// EVENT LISTENERS & INIT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
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
});
