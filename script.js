// ===== KOREVIR RECIPES - 50 RECIPES (GÜNCEL BAŞLIKLAR) =====

const AMAZON_LINK = '#';
const AMAZON_TEXT = '🛒 Shop KOREVIR on Amazon AU';

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
        image: 'assets/images/chicken-parmigiana.png',
        ingredients: ['4 chicken breast fillets', '1 cup plain flour', '2 eggs, beaten', '1 1/2 cups breadcrumbs', '1/2 cup grated Parmesan cheese', '2 cups tomato passata', '1 tsp garlic, minced', '1 tsp dried oregano', '1 cup shredded mozzarella cheese', '2 tbsp olive oil', 'Salt & pepper to taste'],
        method: ['Preheat oven to 200°C. Season chicken, coat in flour, egg, breadcrumbs. Fry until golden. Top with sauce and cheese. Bake 20-25 min.']
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
        image: 'assets/images/meat-pie.png',
        ingredients: ['500g beef mince', '1 onion, finely chopped', '1 garlic clove', '1 carrot, diced', '1 celery stalk', '2 tbsp tomato paste', '1 tbsp Worcestershire sauce', '1 cup beef stock', '1 tsp dried thyme', '2 sheets puff pastry', '1 egg, beaten'],
        method: ['Cook onion, garlic, carrot, celery. Add beef mince and brown. Stir in tomato paste, stock, Worcestershire sauce, thyme. Simmer 10-15 min. Cool. Fill pastry, top with lid, brush with egg. Bake 200°C 20-25 min.']
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
        image: 'assets/images/barramundi-with-lemon-butter.png',
        ingredients: ['4 barramundi fillets', 'Salt & pepper', '1 tbsp olive oil', '60g unsalted butter', '2 garlic cloves', 'Juice of 1 lemon', 'Zest of 1 lemon', '2 tbsp capers', '1 tbsp fresh parsley'],
        method: ['Season fish. Pan-fry skin-side down 4-5 min, flip 2-3 min. Remove. In same pan, melt butter, garlic, lemon juice, zest, capers. Return fish, spoon sauce. Garnish with parsley.']
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
        image: 'assets/images/lamingtons.png',
        ingredients: ['125g butter', '1 cup caster sugar', '2 tsp vanilla', '4 eggs', '1 1/4 cups self-raising flour', '1/2 cup milk', '1 cup caster sugar (sauce)', '1/2 cup cocoa', '125g butter (sauce)', '1 cup milk (sauce)', '2 cups desiccated coconut'],
        method: ['Beat butter, sugar, vanilla. Add eggs. Fold in flour, milk. Bake 180°C 30-35 min. Cool. Make sauce: sugar, cocoa, butter, milk. Heat until smooth. Cut cake into squares. Dip in sauce, roll in coconut.']
    },
    // 5
    {
        id: 'vegemite-on-toast',
        title: 'Vegemite on Toast',
        category: 'Breakfast',
        prep: '5 min',
        cook: '5 min',
        serves: 2,
        description: 'A true Aussie classic – crispy toast with a thin layer of salty, savoury Vegemite. Simple, iconic, and delicious.',
        image: 'assets/images/vegemite-on-toast.png',
        ingredients: ['4 slices of bread', 'Butter or margarine', 'Vegemite (to taste)'],
        method: ['Toast the bread until golden and crisp. Spread with butter while warm. Add a thin layer of Vegemite (about 1/2 tsp per slice). Serve immediately.']
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
        image: 'assets/images/pavlova.png',
        ingredients: ['4 egg whites', '1 cup caster sugar', '1 tsp vinegar', '1 tsp cornstarch', '1 tsp vanilla', '300ml thickened cream', '2 tbsp icing sugar', 'Fresh fruits (strawberries, blueberries, kiwi, passionfruit)'],
        method: ['Beat egg whites to soft peaks. Gradually add sugar. Fold in vinegar, cornstarch, vanilla. Bake 120°C 75-90 min. Cool. Top with whipped cream and fruits.']
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
        image: 'assets/images/fish-and-chips.png',
        ingredients: ['600g white fish', '1 cup plain flour', '1/2 cup cornflour', '1 tsp baking powder', '1 cup sparkling water', '4 large potatoes', 'Oil for frying', '1/2 cup mayonnaise', '1 tbsp gherkins', '1 tsp capers', '1 tsp lemon juice'],
        method: ['Cut potatoes into chips. Fry at 160°C 5-6 min, then 180°C 4-5 min. Batter fish with flour, cornflour, baking powder, water. Fry 4-5 min. Serve with tartare sauce.']
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
        image: 'assets/images/aussie-beef-burger.png',
        ingredients: ['500g beef mince', '1 tbsp BBQ sauce', '1 tsp Worcestershire sauce', '1 tsp garlic powder', '4 burger buns', '4 cheese slices', 'Lettuce, tomato, onion, beetroot', '4 tbsp burger sauce', '4 potatoes (for chips)'],
        method: ['Mix mince with sauces, season. Form patties. Grill 3-4 min each side, add cheese. Toast buns. Assemble with lettuce, tomato, onion, beetroot, patty. Serve with chips.']
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
        image: 'assets/images/sausage-roll.png',
        ingredients: ['500g beef mince', '1 onion, chopped', '1 garlic clove', '1 tbsp Worcestershire sauce', '1 tbsp tomato sauce', '1 tsp thyme', '2 sheets puff pastry', '1 egg, beaten', 'Sesame seeds'],
        method: ['Cook onion, garlic. Add beef, brown. Stir in sauces, thyme. Cool. Cut pastry, fill, seal with egg. Brush with egg, sprinkle sesame. Bake 200°C 20-25 min.']
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
        image: 'assets/images/prawn-cocktail.png',
        ingredients: ['500g cooked prawns', '1 tbsp lemon juice', '1/2 cup mayonnaise', '2 tbsp tomato sauce', '1 tsp Worcestershire sauce', '1/2 tsp paprika', 'Shredded lettuce', 'Lemon wedges', 'Parsley'],
        method: ['Toss prawns with lemon juice. Mix mayonnaise, tomato sauce, Worcestershire sauce, paprika. Chill. Serve over lettuce with sauce, garnish with lemon and parsley.']
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
        image: 'assets/images/chicken-schnitzel.png',
        ingredients: ['4 chicken breast fillets', '1/2 cup plain flour', '2 eggs', '1 1/2 cups breadcrumbs', '1/2 cup panko', '1 tsp garlic powder', '1 tsp paprika', 'Oil for cooking', 'Lemon wedges'],
        method: ['Pound chicken to even thickness. Coat in flour, egg, breadcrumb mixture. Pan-fry 3-4 min each side. Serve with lemon wedges.']
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
        image: 'assets/images/potato-cakes.png',
        ingredients: ['1 kg potatoes', '1/2 cup plain flour', '1/4 cup cornflour', '1 egg', '1/2 tsp salt', '1/4 tsp pepper', '1 cup breadcrumbs', 'Oil for frying'],
        method: ['Boil and mash potatoes. Mix with flour, cornflour, egg, salt, pepper. Shape into patties. Coat in flour, egg, breadcrumbs. Shallow fry 3-4 min each side.']
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
        image: 'assets/images/roast-lamb-with-rosemary.png',
        ingredients: ['1.5 kg lamb leg', '4 garlic cloves', '2 tbsp rosemary', '2 tbsp olive oil', '1 tsp salt', '1/2 tsp pepper', '1 onion', '1/2 cup stock'],
        method: ['Rub lamb with garlic, rosemary, oil, salt, pepper. Place on onion in roasting pan. Roast 200°C 20 min, then 165°C for 1-1.25 hours. Rest 15 min before carving.']
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
        image: 'assets/images/macadamia-crusted-fish.png',
        ingredients: ['600g white fish', '1 tbsp olive oil', '1 tbsp lemon juice', '1 cup macadamias, chopped', '1/2 cup panko', '1/4 cup Parmesan', '1 tbsp parsley', '1 tsp lemon zest', '2 tbsp mayonnaise'],
        method: ['Season fish. Mix macadamias, panko, Parmesan, parsley, zest, mayonnaise. Press onto fish. Bake 200°C 15-18 min.']
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
        image: 'assets/images/pumpkin-soup.png',
        ingredients: ['1 kg pumpkin', '1 onion', '2 garlic cloves', '2 tbsp olive oil', '4 cups vegetable stock', '1 cup cream (optional)', 'Salt & pepper', '1/4 tsp nutmeg'],
        method: ['Sauté onion, garlic. Add pumpkin, stock. Simmer 20 min. Blend until smooth. Stir in cream, season with salt, pepper, nutmeg.']
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
        image: 'assets/images/banana-bread.png',
        ingredients: ['3 ripe bananas', '1/3 cup oil or butter', '1/4 cup white sugar', '2 eggs', '1 tsp vanilla', '1 3/4 cups plain flour', '1 tsp baking soda', '1/2 tsp salt', '1/2 tsp cinnamon'],
        method: ['Mash bananas. Mix with oil, sugar, eggs, vanilla. Fold in flour, baking soda, salt, cinnamon. Bake 175°C 50-60 min.']
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
        image: 'assets/images/grilled-kangaroo-steak.png',
        ingredients: ['4 kangaroo steaks', '2 tbsp olive oil', '2 garlic cloves', '1 tbsp Worcestershire sauce', '1 tbsp lemon juice', '1 tsp salt', '1/2 tsp pepper', '1 tsp rosemary'],
        method: ['Marinate steaks 30 min. Grill 2-3 min each side for medium-rare. Rest 5 min. Serve with lemon wedges.']
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
        image: 'assets/images/vegemite-scrolls.png',
        ingredients: ['3 cups plain flour', '1 tbsp sugar', '2 tsp yeast', '1 tsp salt', '1 cup warm milk', '2 tbsp butter', '3-4 tbsp Vegemite', '1 cup cheddar cheese'],
        method: ['Make dough, rise 1 hour. Roll out, spread Vegemite, sprinkle cheese. Roll up, cut into 12. Bake 180°C 18-20 min.']
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
        image: 'assets/images/australian-bush-tomato-relish.png',
        ingredients: ['500g bush tomatoes', '1 capsicum', '1 onion', '2 garlic cloves', '1 chilli (optional)', '1/2 cup vinegar', '1/2 cup brown sugar', '1/4 cup olive oil', '1 tsp salt', '1 tsp mustard seeds'],
        method: ['Cook onion, garlic, chilli. Add tomatoes, capsicum, vinegar, sugar, salt, mustard seeds. Simmer 40-50 min until thick. Jar and seal.']
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
        image: 'assets/images/chocolate-caramel-slice.png',
        ingredients: ['250g tea biscuits', '125g butter', '2 tbsp coconut', '395g condensed milk', '125g butter (caramel)', '2 tbsp golden syrup', '200g milk chocolate', '50g dark chocolate', '1 tsp oil'],
        method: ['Base: crush biscuits, mix with butter, press. Chill. Caramel: heat condensed milk, butter, syrup until thick. Pour over base. Chill. Topping: melt chocolates with oil. Pour over. Chill. Cut into slices.']
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
        image: 'assets/images/garlic-butter-prawns.png',
        ingredients: ['500g prawns', '4 tbsp butter', '4 garlic cloves', '1 tbsp olive oil', '1 tsp chilli flakes', '1 tbsp lemon juice', '2 tbsp parsley', 'Lemon wedges'],
        method: ['Heat oil and 2 tbsp butter. Sauté garlic, chilli. Add prawns, cook 2-3 min each side. Add remaining butter, lemon juice. Season, garnish with parsley.']
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
        image: 'assets/images/chicken-caesar-wrap.png',
        ingredients: ['2 chicken breasts, grilled and sliced', '4 large tortillas', '1 cos lettuce, shredded', '1/2 cup Caesar dressing', '1/4 cup grated Parmesan', 'Salt & pepper'],
        method: ['Toss chicken with dressing and Parmesan. Place on tortillas with lettuce. Roll tightly, slice in half, and serve.']
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
        image: 'assets/images/grilled-snapper.png',
        ingredients: ['4 snapper fillets', '2 tbsp olive oil', '2 garlic cloves', '1 lemon', 'Fresh herbs', 'Salt & pepper'],
        method: ['Season fish. Grill 5-6 min each side. Serve with lemon wedges.']
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
        image: 'assets/images/beef-rissoles.png',
        ingredients: ['500g beef mince', '1 onion', '1 carrot', '1 egg', '1/2 cup breadcrumbs', '2 tbsp BBQ sauce', 'Salt & pepper'],
        method: ['Mix all ingredients. Shape into patties. Fry 4-5 min each side.']
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
        image: 'assets/images/corn-fritters.png',
        ingredients: ['2 cups corn kernels', '1 cup plain flour', '2 eggs', '1/2 cup milk', '1 tsp baking powder', 'Salt & pepper', 'Oil for frying'],
        method: ['Mix all ingredients. Drop spoonfuls into hot oil. Fry until golden.']
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
        image: 'assets/images/damper-bread.png',
        ingredients: ['3 cups self-raising flour', '1 tsp salt', '1 tbsp butter', '1 cup milk', '1/2 cup water'],
        method: ['Mix flour, salt. Rub in butter. Add milk and water to form dough. Bake 200°C 25-30 min.']
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
        image: 'assets/images/anzac-biscuits.png',
        ingredients: ['1 cup rolled oats', '1 cup plain flour', '1 cup coconut', '3/4 cup sugar', '125g butter', '2 tbsp golden syrup', '1 tsp baking soda', '2 tbsp water'],
        method: ['Mix dry ingredients. Melt butter, syrup, soda, water. Combine. Drop spoonfuls onto tray. Bake 160°C 15 min.']
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
        image: 'assets/images/beef-and-guinness-pie.png',
        ingredients: ['800g beef chuck, diced', '1 onion, chopped', '2 carrots, diced', '2 garlic cloves', '1 can Guinness', '2 tbsp tomato paste', '1 cup beef stock', '2 sheets puff pastry', '1 egg, beaten'],
        method: ['Brown beef in batches. Sauté onion, carrot, garlic. Add beef, Guinness, stock, tomato paste. Simmer 2 hours. Cool. Fill pastry, top with lid, brush with egg. Bake 200°C 25-30 min.']
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
        image: 'assets/images/salt-and-pepper-squid.png',
        ingredients: ['500g squid rings', '1 cup cornflour', '1 tsp salt', '1 tsp pepper', 'Oil for frying', 'Lemon wedges'],
        method: ['Toss squid in cornflour, salt, pepper. Deep fry 2-3 min. Serve with lemon.']
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
        image: 'assets/images/chicken-satay-skewers.png',
        ingredients: ['500g chicken thigh', '1/4 cup soy sauce', '2 tbsp peanut butter', '1 tbsp curry powder', '1/2 cup coconut milk', 'Skewers'],
        method: ['Marinate chicken 30 min. Grill skewers 5-6 min. Serve with satay sauce.']
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
        image: 'assets/images/honey-soy-chicken.png',
        ingredients: ['4 chicken thighs', '1/4 cup soy sauce', '2 tbsp honey', '2 garlic cloves', '1 tbsp ginger', '1 tbsp oil'],
        method: ['Mix sauce. Cook chicken in oil, add sauce, simmer until sticky.']
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
        image: 'assets/images/bbq-pork-ribs.png',
        ingredients: ['1.5 kg pork ribs', '1 cup BBQ sauce', '2 tbsp brown sugar', '2 garlic cloves', '1 tsp paprika'],
        method: ['Marinate ribs. Slow cook 2 hours. Finish on grill with extra sauce.']
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
        image: 'assets/images/steak-sandwich.png',
        ingredients: ['4 beef steaks', '4 bread rolls', '1 onion', '4 cheese slices', 'BBQ sauce'],
        method: ['Grill steaks. Sauté onions. Assemble sandwiches with cheese and sauce.']
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
        image: 'assets/images/chicken-avocado-salad.png',
        ingredients: ['2 chicken breasts, cooked', '2 avocados', '1 cup cherry tomatoes', '1/2 red onion', '1/4 cup olive oil', '2 tbsp lemon juice', 'Salt & pepper'],
        method: ['Chop chicken, avocado, tomatoes, onion. Mix dressing. Toss and serve.']
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
        image: 'assets/images/seafood-chowder.png',
        ingredients: ['500g seafood mix', '1 onion', '2 garlic', '4 cups fish stock', '1 cup cream', '2 potatoes', 'Salt & pepper'],
        method: ['Sauté onion, garlic. Add stock, potatoes. Simmer 20 min. Add seafood, cream. Cook 5 min.']
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
        image: 'assets/images/creamy-mushroom-pasta.png',
        ingredients: ['500g pasta', '300g mushrooms', '2 garlic', '1 cup cream', '1/2 cup Parmesan', '2 tbsp butter', 'Parsley'],
        method: ['Cook pasta. Sauté mushrooms, garlic. Add cream, Parmesan, butter. Toss with pasta.']
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
        image: 'assets/images/bacon-and-egg-roll.png',
        ingredients: ['4 bread rolls', '8 bacon slices', '4 eggs', 'BBQ sauce', 'Butter'],
        method: ['Cook bacon and eggs. Toast rolls. Assemble with sauce.']
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
        image: 'assets/images/spinach-and-feta-quiche.png',
        ingredients: ['500g spinach', '200g feta', '3 eggs', '1 onion', '2 sheets pastry', 'Salt & pepper'],
        method: ['Sauté onion, spinach. Mix with feta, eggs. Fill pastry. Bake 200°C 30-35 min.']
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
        image: 'assets/images/slow-cooked-beef-stew.png',
        ingredients: ['1.5 kg beef chuck', '2 onions', '4 carrots', '4 cups stock', 'Herbs', 'Garlic'],
        method: ['Season beef. Brown. Place in slow cooker with vegetables, stock, herbs. Cook 4 hours.']
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
        image: 'assets/images/garlic-herb-roast-potatoes.png',
        ingredients: ['1 kg potatoes', '4 garlic cloves', '2 tbsp herbs (rosemary, thyme)', '2 tbsp olive oil', 'Salt & pepper'],
        method: ['Parboil potatoes. Toss with garlic, herbs, oil. Roast 200°C 35-40 min until golden and crisp.']
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
        image: 'assets/images/mango-cheesecake.png',
        ingredients: ['200g biscuits', '100g butter', '500g cream cheese', '1 cup cream', '1/2 cup sugar', '2 mangoes'],
        method: ['Base: crush biscuits, mix with butter. Filling: beat cream cheese, cream, sugar. Fold in mango puree. Chill.']
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
        image: 'assets/images/passionfruit-slice.png',
        ingredients: ['200g biscuits', '100g butter', '1 cup icing sugar', '1/2 cup passionfruit pulp', '1 cup coconut'],
        method: ['Base: crush biscuits, mix with butter. Topping: beat sugar, passionfruit, coconut. Spread over base. Chill.']
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
        image: 'assets/images/apple-crumble.png',
        ingredients: ['6 apples', '1/2 cup sugar', '1 cup flour', '1 cup oats', '125g butter', '1 tsp cinnamon'],
        method: ['Slice apples, place in dish. Mix flour, oats, butter, sugar, cinnamon. Sprinkle over apples. Bake 180°C 35-40 min.']
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
        image: 'assets/images/sticky-date-pudding.png',
        ingredients: ['200g dates', '1 cup water', '125g butter', '1 cup sugar', '2 eggs', '1 1/2 cups flour', '1 tsp baking soda'],
        method: ['Cook dates in water. Cream butter, sugar. Add eggs. Fold in flour, baking soda, dates. Bake 180°C 30-35 min. Serve with caramel sauce.']
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
        image: 'assets/images/lemon-myrtle-chicken.png',
        ingredients: ['4 chicken breasts', '2 tbsp lemon myrtle leaves (or lemon zest)', '2 garlic cloves', '1/4 cup olive oil', 'Salt & pepper'],
        method: ['Marinate chicken with lemon myrtle, garlic, oil, salt, pepper for 30 min. Grill or pan-fry 6-8 min each side.']
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
        image: 'assets/images/grilled-salmon-with-herbs.png',
        ingredients: ['4 salmon fillets', '2 tbsp olive oil', '1 lemon', 'Fresh dill, parsley, chives', 'Salt & pepper'],
        method: ['Season salmon. Grill 5-6 min each side. Serve with lemon and fresh herbs.']
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
        image: 'assets/images/chicken-fried-rice.png',
        ingredients: ['3 cups cooked rice', '2 chicken breasts, diced', '2 eggs, beaten', '1 onion, diced', '1/2 cup peas', '1/2 cup carrots, diced', '3 tbsp soy sauce', '2 tbsp oil'],
        method: ['Scramble eggs, set aside. Cook chicken, set aside. Sauté onion, carrots, peas. Add rice, soy sauce, chicken, egg. Toss to combine.']
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
        image: 'assets/images/classic-coleslaw.png',
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
        image: 'assets/images/prawn-linguine.png',
        ingredients: ['500g linguine', '500g prawns', '4 garlic cloves', '1 chilli', '1/2 cup olive oil', 'Lemon juice', 'Parsley'],
        method: ['Cook pasta. Sauté garlic, chilli, prawns. Toss with pasta, oil, lemon juice, parsley.']
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
        image: 'assets/images/macadamia-brownies.png',
        ingredients: ['200g chocolate', '150g butter', '1 cup sugar', '3 eggs', '1 cup flour', '1 cup macadamias'],
        method: ['Melt chocolate and butter. Add sugar, eggs, flour, macadamias. Bake 180°C 25-30 min.']
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
                    <span class="view-recipe" onclick="event.stopPropagation(); openModal('${recipe.id}')">View Full Recipe →</span>
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
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h3>👨‍🍳 Method</h3>
        <ol>${recipe.method.map((step, index) => `<li>${step}</li>`).join('')}</ol>
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

// ===== SEARCH & FILTER =====
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

// ===== EVENT LISTENERS & INIT =====
document.addEventListener('DOMContentLoaded', function() {
    // Modal Close
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('recipeModal');
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', function(e) { if (e.target === this) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
    
    // Search
    const searchInput = document.getElementById('search');
    if (searchInput) searchInput.addEventListener('input', filterRecipes);
    
    // Category Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterRecipes();
        });
    });
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Initial Render
    renderRecipes(RECIPES);
});
