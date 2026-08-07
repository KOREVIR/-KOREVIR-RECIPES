// ============================================================
// KOREVIR – PREMIUM BRAND EXPERIENCE (TAM DOSYA)
// ============================================================

// AMAZON LINK
const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0HCZRBFY7';
const AMAZON_TEXT = '🛒 Shop on Amazon';

// ============================================================
// 50 TARİF (RECIPES) – UZUN METHOD METİNLERİYLE
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
            'Preheat your oven to 200°C (fan-forced) and line a large baking tray with parchment paper. This ensures the chicken doesn\'t stick.',
            'Place each chicken breast between two large sheets of baking paper and gently pound with a rolling pin to an even thickness of about 2cm. This step is crucial for even cooking and tender meat.',
            'Season both sides of the chicken generously with sea salt and freshly cracked black pepper.',
            'Set up your dredging station: Plate 1 with plain flour, Plate 2 with the beaten eggs, and Plate 3 with a mixture of breadcrumbs and grated Parmesan cheese. Mix the breadcrumbs and cheese well.',
            'Coat each chicken breast first in flour, shaking off any excess. Then dip into the egg wash, allowing the excess to drip off. Finally, press firmly into the breadcrumb mixture, ensuring every part is evenly coated.',
            'Heat the olive oil in a large, oven-safe skillet over medium-high heat. Wait until the oil shimmers and a breadcrumb dropped in sizzles immediately.',
            'Carefully place the breaded chicken into the hot skillet. Fry for 3-4 minutes per side, or until golden brown and crispy. You may need to do this in batches to avoid overcrowding the pan.',
            'Transfer the fried chicken to the prepared baking tray. Spread a generous layer of tomato passata over each breast, then sprinkle with the minced garlic and dried oregano.',
            'Top each breast with a generous handful of shredded mozzarella cheese, covering the sauce completely.',
            'Bake in the preheated oven for 20-25 minutes, or until the cheese is fully melted, bubbly, and starting to brown in spots.',
            'Remove from the oven and let rest for 5 minutes. Garnish with fresh basil leaves if desired. Serve hot alongside a crisp green salad, spaghetti, or creamy mashed potatoes.'
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
            'Heat a generous splash of vegetable or olive oil in a large, heavy-based frying pan over medium heat. The pan must be large enough to hold all the filling.',
            'Add the finely chopped onion, minced garlic, diced carrot, and celery. Cook for 5-6 minutes, stirring frequently, until the vegetables have softened and are translucent but not browned.',
            'Increase the heat to high and add the beef mince. Cook for 6-8 minutes, breaking it up with a wooden spoon. Keep stirring until the mince is well browned and any liquid has evaporated. This develops deep flavor.',
            'Stir in the tomato paste and cook for 1-2 minutes until it darkens slightly and becomes fragrant. This removes the raw taste of the paste.',
            'Pour in the Worcestershire sauce and beef stock. Add the dried thyme, salt, and a generous crack of black pepper.',
            'Bring the mixture to a steady simmer, then reduce the heat to low. Allow it to bubble away for 10-15 minutes, stirring occasionally, until the sauce has reduced and thickened to a rich gravy consistency.',
            'Remove the filling from the heat and let it cool completely to room temperature. This is a vital step; a hot filling will melt the pastry and make it soggy.',
            'Preheat your oven to 200°C (fan-forced). Lightly grease a large baking tray or line it with baking paper.',
            'Cut the puff pastry sheets into 6 equal rectangles (or use individual pie tins). If using one large dish, line the base with one sheet.',
            'Spoon the cooled meat filling generously into the pastry cases. Brush the edges of the pastry with the beaten egg to act as glue.',
            'Place the remaining pastry sheets on top to form the lids. Press the edges firmly with a fork to seal completely. Trim any excess pastry.',
            'Cut a small slit in the top of each pie to allow steam to escape during baking, preventing a soggy bottom.',
            'Generously brush the tops with the remaining beaten egg. Sprinkle with a little salt and pepper for extra crunch.',
            'Bake for 20-25 minutes, or until the pastry is puffed, deeply golden, and the crust is crisp. Serve immediately with tomato sauce or rich brown gravy.'
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
            'Start by patting the barramundi fillets absolutely dry with paper towels. This is the single most important step for achieving a crispy, crackling skin.',
            'Season the flesh side of the fish lightly with salt, and season the skin side generously with salt and pepper. Press the seasoning into the skin.',
            'Heat the olive oil in a large, heavy non-stick skillet over medium-high heat until the oil is very hot and just beginning to smoke.',
            'Place the fish into the pan, skin-side down, pressing gently with a spatula for 10 seconds to ensure even contact. Cook without moving for 4-5 minutes, or until the skin is golden and crisp.',
            'Carefully flip the fish using a fish slice. Reduce the heat to medium and cook the flesh side for a further 2-3 minutes, or until the fish is opaque and flakes easily.',
            'Remove the fish to a warm plate, cover loosely with foil, and set aside while you make the sauce.',
            'Return the pan to medium heat. Add the unsalted butter cubes and allow them to melt and foam. Add the minced garlic and cook for 30 seconds, until it smells fragrant.',
            'Squeeze in the lemon juice, add the lemon zest, and stir in the capers. Allow the sauce to bubble for 1-2 minutes until it thickens slightly and the capers have warmed through.',
            'Return the fish to the pan and spoon the gorgeous lemon-butter caper sauce generously over the top. Warm through for 1 minute.',
            'Sprinkle with fresh parsley and serve immediately with steamed asparagus, green beans, or a bowl of fluffy jasmine rice.'
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
            'Preheat your oven to 180°C (fan-forced). Thoroughly grease a 20cm square cake tin and line the base and sides with baking paper, leaving an overhang for easy removal.',
            'In a large mixing bowl, beat the softened butter, caster sugar, and vanilla together using an electric mixer on medium speed. Cream for 3-4 minutes until light, pale, and fluffy.',
            'Add the eggs one at a time, beating well for 1 minute after each addition. Stop and scrape down the sides of the bowl halfway through.',
            'Using a large metal spoon, gently fold in the sifted flour in three additions, alternating with the milk (starting and ending with flour). Mix until just combined; avoid overmixing or the cake will be tough.',
            'Pour the batter into the prepared tin and smooth the top with an offset spatula to level the surface.',
            'Bake for 30-35 minutes, or until a thin skewer inserted into the centre comes out clean and the top springs back when touched.',
            'Allow the cake to cool completely in the tin for at least 30 minutes, then turn out onto a wire rack to cool fully. Cooling completely is essential for clean cutting.',
            'Once cool, use a serrated knife to trim the browned edges and cut the cake into 12 even squares.',
            'To make the chocolate sauce: combine sugar, cocoa powder, butter, and milk in a medium saucepan. Heat over medium heat, stirring constantly until the butter melts and the mixture is smooth and glossy.',
            'Bring to a gentle simmer, then remove from heat. Stir in the vanilla extract. Pour the warm sauce into a shallow bowl and let it cool slightly for 5 minutes.',
            'Pour the desiccated coconut into a separate shallow dish.',
            'Using two forks, dip each cake square quickly into the chocolate sauce, ensuring all sides are coated. Allow the excess to drip off, then immediately roll in the coconut to coat evenly.',
            'Place the finished Lamingtons on a wire rack to set for about 30 minutes before serving. Store in an airtight container.'
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
            'Place your slices of bread into the toaster or under a preheated oven grill. Toast until they are evenly golden brown and crisp to your liking.',
            'Remove the hot toast from the toaster and immediately spread a generous, even layer of softened butter over the hot surface. The heat will melt the butter beautifully into the porous bread.',
            'Using a clean knife, take a very small amount of Vegemite (about 1/4 to 1/2 teaspoon per slice). Spread it very thinly over the butter. The rule is: a little goes a very long way!',
            'Work the Vegemite all the way to the edges of the toast to ensure every bite is perfect.',
            'For a lighter flavour, use less; for a stronger, more authentic flavour, you can increase the amount slightly.',
            'Cut the toast in half diagonally (or into soldiers) and serve immediately with a hot cup of tea or flat white coffee.'
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
            'Preheat your oven to a low 120°C (fan-forced). Line a large baking tray with baking paper and draw a 20cm diameter circle on the paper to use as a guide.',
            'Ensure your mixing bowl and whisk are completely clean and free of any grease. Place the egg whites into the bowl and beat on medium speed with an electric mixer until soft peaks form (the peaks should flop over slightly).',
            'Gradually add the caster sugar, one tablespoon at a time, while the mixer is running. Beat well for 1 minute after each addition to ensure the sugar dissolves completely.',
            'Test the mixture by rubbing a little between your fingers; it should feel completely smooth, not gritty. The meringue should be thick, glossy, and hold stiff peaks.',
            'Gently fold in the vinegar, cornflour, and vanilla using a large metal spoon. Fold carefully to keep as much air as possible in the mixture.',
            'Spoon the meringue onto the prepared tray inside the drawn circle. Use a spatula to shape it into a nest or disc with a slight dip in the centre, creating walls around the edge.',
            'Bake for 75-90 minutes. The outside should be crisp and dry to the touch, and the meringue should lift easily off the paper. Turn the oven off and leave the pavlova inside with the door ajar to cool completely.',
            'Just before serving, whip the chilled thickened cream with vanilla extract and icing sugar until firm peaks form (be careful not to over-whip into butter).',
            'Generously pile the whipped cream into the centre of the cooled pavlova. Decorate with the fresh fruits, arranging them beautifully.',
            'Slice and serve immediately to enjoy the perfect contrast of crispy exterior and soft marshmallow centre.'
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
            'First, prepare the chips. Cut the peeled potatoes into 1.5cm thick chips. Rinse in a bowl of cold water for 5 minutes to remove excess starch, then pat absolutely dry with a clean tea towel.',
            'Heat the oil in a deep fryer or large heavy pot to 160°C. Fry the chips in batches for 5-6 minutes until they are soft and cooked through but have not yet browned. Remove and drain on paper towel. Increase the oil temperature to 180°C.',
            'For the fish batter: In a large bowl, whisk together the plain flour, cornflour, baking powder, salt, and pepper. Create a well in the centre and pour in the ice-cold sparkling water. Whisk until just combined into a smooth, thin batter (do not overmix).',
            'Pat the fish fillets dry with paper towels and season lightly with salt and pepper.',
            'Dip each fish fillet into the batter, ensuring it is fully coated, and let the excess drip off.',
            'Carefully lower the battered fish into the 180°C oil. Fry for 4-5 minutes, turning once, until the batter is puffed, deeply golden, and crisp. Drain on paper towel.',
            'Return the par-cooked chips to the hot oil (180°C) and fry for a further 4-5 minutes until they are golden, crispy, and puffed. Drain well and season immediately with salt.',
            'For the tartare sauce: combine the mayonnaise, chopped gherkins, capers, and lemon juice in a small bowl. Mix well and season to taste.',
            'Serve the hot fish and chips immediately with the tartare sauce and plenty of lemon wedges on the side.'
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
            'In a large bowl, combine the beef mince, BBQ sauce, Worcestershire sauce, garlic powder, onion powder, salt, and pepper. Mix gently with your fingers until just combined. Avoid over-working the meat, as this will result in tough, dense patties.',
            'Divide the mixture into 4 equal portions (about 125g each) and shape into round patties that are slightly larger than your buns, as they will shrink during cooking. Press a slight indent into the centre of each patty to prevent them from puffing up into a ball.',
            'Heat a large cast-iron skillet, BBQ, or grill plate over medium-high heat until very hot. Cook the patties for 3-4 minutes per side, flipping once, until they are well-browned and have reached an internal temperature of 70°C.',
            'Place a slice of cheese on top of each patty during the last minute of cooking and allow it to melt beautifully over the meat.',
            'While the patties are cooking, split the burger buns in half and toast them cut-side down on the grill or in a toaster until lightly golden.',
            'Spread the burger sauce generously on the bottom bun. Layer with the lettuce leaf, a slice of tomato, onion rings, and the beef patty (with melted cheese). Top with the sliced beetroot.',
            'Add the top bun, press down lightly, and serve immediately. For the full experience, serve with a side of hot, crispy homemade chips.'
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
            'Preheat your oven to 200°C (fan-forced). Line a large baking tray with baking paper to prevent sticking.',
            'Heat a small splash of oil in a frying pan over medium heat. Add the onion and garlic and cook for 3-4 minutes until softened and translucent. Remove from the heat and allow to cool completely to room temperature.',
            'In a large mixing bowl, combine the beef mince, cooled onion mixture, Worcestershire sauce, tomato sauce, thyme, smoked paprika (if using), salt, and pepper. Mix thoroughly with your hands until the mixture is well combined and slightly tacky.',
            'Cut each puff pastry sheet in half lengthwise to create 4 long rectangles.',
            'Place a log of the filling (about 2cm thick) along the length of the centre of each pastry rectangle.',
            'Lightly brush the exposed pastry edges with the beaten egg. Fold the pastry over the filling to enclose it, pressing the edges together to seal. Use a fork to crimp the edges for a neat, decorative finish.',
            'Cut each long roll into 3-4 smaller rolls (about 8-10cm each) and place them seam-side down on the prepared tray.',
            'Generously brush the tops of each roll with the beaten egg. Sprinkle with sesame seeds or poppy seeds for added texture and flavour.',
            'Bake for 20-25 minutes, or until the pastry is puffed, deeply golden, and cooked through. Serve hot or at room temperature with tomato sauce.'
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
            'If using raw prawns, bring a large pot of salted water to a rolling boil. Add the prawns and cook for exactly 2-3 minutes, or until they turn pink and opaque. Drain immediately and rinse under cold running water to stop the cooking process. Pat completely dry with paper towels.',
            'Place the peeled prawns in a bowl and toss with lemon juice, salt, and cayenne pepper. Cover and refrigerate while you prepare the sauce.',
            'In a separate medium bowl, whisk together the mayonnaise, tomato sauce, lemon juice, Worcestershire sauce, brandy (if using), and paprika until the sauce is smooth and uniformly pink. Season with salt and pepper to taste.',
            'Cover the sauce and refrigerate for at least 30 minutes to allow the flavours to meld together perfectly.',
            'To serve, divide the shredded lettuce evenly among 4 serving glasses or martini glasses.',
            'Spoon a generous dollop of the cocktail sauce over the lettuce, ensuring it covers the base.',
            'Arrange the chilled prawns on top of the sauce, allowing them to pile up artistically.',
            'Garnish with a sprinkle of paprika, a wedge of lemon, and a sprig of fresh parsley. Serve immediately with extra lemon wedges on the side.'
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
            'Place each chicken breast between two sheets of baking paper. Using a meat mallet or rolling pin, gently pound them to an even thickness of about 1cm. Season generously on both sides with salt and pepper.',
            'Set up three wide, shallow dishes: Dish 1 with flour, Dish 2 with beaten eggs, Dish 3 with a mixture of breadcrumbs, panko, garlic powder, and paprika. Mix the crumb mixture well.',
            'Working with one piece at a time, dredge the chicken in flour, shaking off any excess. This helps the egg adhere.',
            'Dip the floured chicken into the beaten egg, ensuring it is completely coated. Let the excess drip off.',
            'Finally, press the chicken firmly into the breadcrumb mixture. Coat evenly on both sides, pressing the crumbs into the surface. Place on a plate and rest for 10 minutes to allow the coating to set.',
            'Fill a large frying pan with about 1cm depth of oil and heat over medium heat. The oil is ready when a breadcrumb dropped in sizzles and bubbles immediately.',
            'Fry the schnitzels in batches for 3-4 minutes per side, or until they are golden brown and cooked through. Do not overcrowd the pan, or the temperature will drop and they will become greasy.',
            'Transfer the cooked schnitzels to a plate lined with paper towels to absorb any excess oil.',
            'Sprinkle with a little extra salt immediately and serve hot with a wedge of lemon, potato salad, and a fresh green salad.'
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
            'Place the peeled and chopped potatoes in a large pot of cold, salted water. Bring to a boil and cook for 15-20 minutes, or until the potatoes are very tender and easily pierced with a knife.',
            'Drain the potatoes thoroughly in a colander. Return them to the hot pot and shake over low heat for 1 minute to steam dry any remaining moisture. Mash the potatoes until completely smooth and lump-free.',
            'Set the mashed potato aside to cool until it is cool enough to handle, but still slightly warm.',
            'In a large bowl, combine the mashed potato, plain flour, cornflour, the lightly beaten egg, salt, pepper, garlic powder, and chives. Mix until just combined into a soft, pliable dough.',
            'Divide the mixture into 12 equal portions and shape each into a round disc about 2cm thick.',
            'Prepare a coating station: Dish 1 with flour, Dish 2 with beaten egg, Dish 3 with breadcrumbs.',
            'Coat each potato cake lightly in flour, then dip into the egg, and finally press into the breadcrumbs until evenly coated. Place them on a tray as you go.',
            'Heat a generous layer of oil (about 1/2 cm deep) in a large non-stick frying pan over medium heat.',
            'Fry the potato cakes in batches for 3-4 minutes per side, until they are a deep golden brown and crispy. Drain on paper towels.',
            'Sprinkle with a pinch of salt and serve immediately with sour cream or sweet chilli sauce.'
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
            'Take the lamb out of the fridge 30 minutes before cooking to allow it to come to room temperature. Preheat your oven to 200°C (fan-forced).',
            'In a small bowl, combine the minced garlic, chopped rosemary, olive oil, salt, pepper, Dijon mustard (if using), and lemon juice. Mix into a thick paste.',
            'Using a sharp knife, make small deep incisions all over the lamb. Rub the paste all over the lamb, pushing some of the mixture into the incisions to deeply infuse the flavour.',
            'Place the onion wedges and halved garlic bulb in the centre of a large roasting pan. Place the lamb on top, fat cap facing up. Scatter the fresh rosemary sprigs around the lamb and pour the stock into the pan (this creates steam and prevents burning).',
            'Roast the lamb at 200°C for 20 minutes to sear the outside and create a crust.',
            'Reduce the oven temperature to 165°C and continue roasting for about 1 hour to 1 hour 15 minutes (or 20 minutes per 500g for medium-rare). Baste the lamb with the pan juices occasionally.',
            'The internal temperature should read 58-60°C for medium-rare, 63-65°C for medium. If you don\'t have a thermometer, check that the meat is tender and the juices run clear.',
            'Remove the lamb from the oven, transfer to a carving board, and cover loosely with aluminium foil. Rest for 15-20 minutes. This critical step allows the juices to redistribute throughout the meat.',
            'Carve the lamb against the grain into thick slices. Serve with the caramelized onions, pan juices, mint sauce, and your favourite roast vegetables.'
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
            'Preheat your oven to 200°C (fan-forced). Line a baking tray with baking paper and place a wire rack on top (this helps the crust stay crispy).',
            'Pat the fish fillets thoroughly dry with paper towels. Place them on the prepared tray. Brush the tops lightly with olive oil and lemon juice, then season with salt and pepper.',
            'In a medium bowl, combine the chopped macadamias, panko breadcrumbs, Parmesan cheese, fresh parsley, lemon zest, and garlic powder.',
            'Add the mayonnaise to the crumb mixture and stir well until the mixture comes together and holds its shape when lightly pressed. The mayonnaise provides moisture and helps the crust stick.',
            'Press a generous amount of the macadamia crust firmly onto the top of each fish fillet, ensuring the entire surface is evenly covered. Gently pat it down to adhere.',
            'Drizzle a tiny bit more olive oil over the crust to help it brown beautifully in the oven.',
            'Bake the fish for 15-18 minutes, or until the fish is cooked through (it should flake easily with a fork) and the macadamia crust is a deep golden brown.',
            'Serve immediately with a squeeze of fresh lemon, alongside a crisp green salad, steamed asparagus, or roasted sweet potato wedges.'
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
            'Heat the olive oil in a large, heavy-based stockpot or Dutch oven over medium heat.',
            'Add the chopped onion and cook for 5-6 minutes, stirring occasionally, until it becomes soft and translucent. Add the garlic and cook for a further 1 minute until fragrant.',
            'Add the chopped pumpkin to the pot. Cook, stirring occasionally, for 3-4 minutes to allow the pumpkin to heat through and coat in the oil.',
            'Pour in the vegetable stock and bring the mixture to a rapid boil. Once boiling, reduce the heat to low, put the lid on, and simmer for 20-25 minutes, or until the pumpkin is very tender and easily pierced with a butter knife.',
            'Remove the pot from the heat. Using an immersion (stick) blender, purée the soup directly in the pot until it is silky smooth and velvety. Alternatively, transfer the soup in batches to a countertop blender.',
            'Return the puréed soup to low heat. Stir in the thickened cream (if using), salt, pepper, and nutmeg. Heat gently for 2-3 minutes, stirring frequently. Do not allow the soup to boil once the cream is added.',
            'Taste the soup and adjust the seasoning with more salt and pepper if needed.',
            'Ladle into warm bowls and serve hot with a swirl of extra cream, a sprinkle of pumpkin seeds, and crusty buttered bread on the side.'
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
            'Preheat your oven to 175°C (fan-forced). Grease a 22cm x 11cm (standard) loaf tin with butter or oil, and line the base and sides with baking paper, leaving some overhang to easily lift out the bread later.',
            'In a large mixing bowl, mash the bananas thoroughly with a fork until smooth and soupy. Add the oil, white sugar, brown sugar, eggs, and vanilla. Whisk vigorously until the mixture is well combined and slightly frothy.',
            'In a separate bowl, sift together the plain flour, baking soda, salt, and cinnamon (if using).',
            'Pour the dry ingredients into the wet mixture and, using a rubber spatula, fold gently until just combined. The batter will be thick and slightly lumpy. Do not overmix, as this will result in a tough, dense bread.',
            'If adding walnuts or chocolate chips, fold them in at this point.',
            'Pour the batter into the prepared loaf tin and smooth the top with a spatula. Tap the tin gently on the counter a few times to release any air bubbles.',
            'Bake for 50-60 minutes. Check at the 45-minute mark; if the top is browning too quickly, loosely cover with foil. The bread is done when a skewer inserted into the centre comes out clean with only a few moist crumbs attached.',
            'Allow the bread to cool in the tin for 15 minutes, then use the overhanging paper to lift it out onto a wire rack to cool completely.',
            'Slice and serve warm or at room temperature, spread with a generous layer of salted butter.'
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
            'In a shallow, non-metallic dish, combine the olive oil, garlic, Worcestershire sauce, lemon juice, salt, pepper, and rosemary to make a thin marinade.',
            'Add the kangaroo steaks and turn them over several times to ensure they are well coated in the marinade. Cover the dish with plastic wrap and place in the refrigerator for exactly 30 minutes. Do not marinate longer than 1 hour, as the acid in the marinade can start to break down the proteins and make the meat mushy.',
            'Remove the steaks from the fridge 15 minutes before cooking to allow them to come to room temperature.',
            'Preheat your BBQ, grill plate, or a heavy-based cast-iron pan to high heat (about 220°C). It must be smoking hot to get a good sear.',
            'Remove the steaks from the marinade, shaking off any excess liquid. Season both sides generously with a little extra salt just before placing on the grill.',
            'Grill the steaks for 2-3 minutes per side for a perfect medium-rare. Kangaroo is very lean and will become tough and dry if cooked past medium.',
            'Transfer the cooked steaks to a warm plate, cover loosely with foil, and let them rest for 5-7 minutes. This resting period allows the juices to redistribute throughout the meat.',
            'Slice the kangaroo steak against the grain into thick strips and serve immediately with a wedge of lemon, a fresh rocket salad, and a side of sweet potato mash.'
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
            'In a large mixing bowl, combine the flour, sugar, yeast, and salt. Make a well in the centre and pour in the warm milk and melted butter.',
            'Mix with a wooden spoon until a rough dough forms, then turn it out onto a lightly floured surface. Knead the dough for 8-10 minutes until it becomes smooth, elastic, and springs back when you poke it lightly.',
            'Place the kneaded dough in a lightly oiled bowl, cover it with a clean tea towel or plastic wrap, and set it aside in a warm, draft-free spot for 1 hour, or until it has doubled in size.',
            'Punch down the risen dough to release the air, then roll it out on a floured surface into a large rectangle, about 30cm x 40cm in size.',
            'Spread the softened butter evenly over the entire surface of the dough. Spread the Vegemite in a thin, even layer over the butter (about 1-2 tablespoons, depending on your taste). Sprinkle the grated cheese evenly over the top.',
            'Starting from the long edge, roll the dough up tightly into a log. Use a sharp knife to cut the log into 12 equal slices, each about 3cm thick.',
            'Place the scrolls cut-side up on a lined baking tray, leaving some space between them. Cover with a tea towel and let them rest for 15 minutes while you preheat your oven to 180°C.',
            'Bake for 18-20 minutes, or until the scrolls are golden brown and puffed. Serve warm from the oven, or at room temperature.'
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
            'Heat the olive oil in a large, wide-based saucepan or heavy-bottomed pot over medium heat.',
            'Add the diced onion and cook for 5-6 minutes until soft and translucent. Add the garlic and chilli (if using) and cook for 1 minute until aromatic.',
            'Add the chopped tomatoes, diced capsicum, apple cider vinegar, brown sugar, salt, pepper, mustard seeds, and any optional native spices. Give everything a thorough stir to combine.',
            'Turn the heat up to high and bring the mixture to a rolling boil. Once boiling, reduce the heat to low and let it simmer uncovered for 40-50 minutes. Stir occasionally, especially near the end, to prevent it from sticking to the bottom.',
            'The relish is ready when it has thickened to a jam-like consistency, and you can draw a line through it on the back of a spoon that doesn\'t fill in immediately.',
            'Remove from the heat and allow it to cool slightly. Carefully spoon the hot relish into sterilised glass jars and seal immediately.',
            'Allow the jars to cool completely at room temperature before storing in the refrigerator. The relish will keep for up to 3 months and is perfect served with grilled sausages, lamb chops, or cheese boards.'
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
            'Line a 20cm x 30cm slice tin (or brownie pan) with baking paper, allowing the paper to overhang on two opposite sides to easily lift the slice out later.',
            'In a medium bowl, combine the crushed biscuits, melted butter, and coconut (if using). Mix well until all the crumbs are evenly moistened and the mixture resembles wet sand.',
            'Press the crumb mixture firmly into the base of the prepared tin. Use the back of a metal spoon or a flat-bottomed glass to press it down into a compact, even layer. Place in the refrigerator to set while you make the caramel.',
            'To make the caramel layer, place the sweetened condensed milk, the additional 125g butter, and golden syrup in a medium heavy-based saucepan over low heat.',
            'Stir continuously with a wooden spoon for 8-10 minutes, until the mixture thickens, turns a rich golden caramel colour, and starts to pull away from the sides of the pan. Do not stop stirring, or it will burn.',
            'Pour the hot caramel over the chilled biscuit base and smooth the top with a spatula. Return the tin to the fridge and chill for 1 hour, or until the caramel is firm to the touch.',
            'For the chocolate topping, combine the milk chocolate, dark chocolate, and oil in a heatproof bowl. Set the bowl over a saucepan of simmering water (ensure the bowl doesn\'t touch the water) and stir gently until melted and smooth. Alternatively, melt in the microwave in 30-second bursts.',
            'Pour the melted chocolate over the chilled caramel layer and spread it evenly to the edges. Tap the tin gently on the counter to remove air bubbles.',
            'Refrigerate for at least 2 hours, or until the topping is completely set and firm.',
            'Lift the slice out of the tin using the overhanging paper. Use a sharp knife (wiped clean between cuts) to slice it into 20 even squares. Store in an airtight container in the refrigerator.'
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
            'Pat the prawns completely dry with paper towels. This is essential for achieving a good sear. Season them generously with salt and pepper.',
            'Heat the olive oil and 2 tablespoons of the butter in a large skillet over medium-high heat. Once the butter is foaming, add the garlic and chilli flakes (if using). Sauté for 30-40 seconds until fragrant, taking care not to burn the garlic.',
            'Increase the heat to high. Add the prawns to the pan in a single layer (if necessary, cook them in batches to avoid overcrowding).',
            'Cook the prawns for 2-3 minutes on the first side until the bottom turns pink and crispy. Flip them and cook for another 1-2 minutes on the other side, until they are pink, opaque, and just cooked through.',
            'Reduce the heat to low. Add the remaining 2 tablespoons of butter and the lemon juice to the pan. Toss the prawns vigorously in the sauce until the butter melts and emulsifies into a beautiful, glossy sauce.',
            'Taste and adjust the seasoning with salt and pepper. Remove from the heat.',
            'Sprinkle the prawns with the fresh parsley and transfer to a serving platter. Pour any remaining sauce from the pan over the top.',
            'Serve immediately with crusty bread to soak up the delicious garlic butter sauce, and a side of lemon wedges.'
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
            'Slice the cooled grilled chicken breasts into thin strips. Season lightly with salt and pepper if needed.',
            'Warm the tortillas according to the packet instructions, either in a dry frying pan for a few seconds each side or in the microwave covered with a damp paper towel. Warming them makes them more pliable and less likely to crack when rolling.',
            'Spread a generous line of Caesar dressing down the centre of each tortilla. Top evenly with the shredded lettuce, followed by the sliced chicken strips, and a generous sprinkle of grated Parmesan cheese.',
            'To roll, fold the bottom of the tortilla over the filling (about 1/3 of the way up), then fold the sides in, and roll it up tightly away from you to enclose the filling completely.',
            'Cut each wrap in half diagonally with a sharp knife and serve immediately. These are perfect for a quick lunch or a light dinner.'
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
            'Pat the snapper fillets completely dry with paper towels. This step is crucial for achieving a crispy skin without sticking.',
            'Season both sides of the fish generously with sea salt and freshly ground black pepper.',
            'In a small bowl, combine the olive oil and minced garlic. Brush this garlic oil mixture generously over the flesh side and skin side of the fillets.',
            'Preheat your BBQ or a heavy-based grill pan over medium-high heat. The grill must be very hot. Lightly oil the grates to prevent sticking.',
            'Place the fish onto the grill, skin-side down. Cook for 5-6 minutes without moving it, until the skin is charred and crispy.',
            'Using a large fish spatula, carefully flip the fish. Cook for a further 4-5 minutes, or until the flesh is opaque and flakes easily with a fork.',
            'During the last 2 minutes of cooking, place the lemon slices on the grill to char slightly, and add the herbs to the edges of the pan to warm and release their fragrance.',
            'Serve the grilled snapper immediately with the charred lemon slices and fresh herbs on the side, along with a fresh garden salad.'
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
            'In a large mixing bowl, combine all the ingredients: beef mince, onion, carrot, egg, breadcrumbs, BBQ sauce, garlic powder, salt, and pepper.',
            'Using your hands, mix everything together until it is uniformly combined. Do not overwork the mixture, as this can lead to tough rissoles.',
            'Divide the mixture into 6 equal portions (about 120g each). Shape each portion into a flat, round patty about 2.5cm thick. Press a small indent into the centre of each rissole to prevent it from bulging during cooking.',
            'Preheat a large frying pan or BBQ grill plate over medium-high heat. Lightly grease the surface with oil.',
            'Cook the rissoles for 4-5 minutes per side, or until they are deeply browned and cooked through to an internal temperature of 70°C.',
            'Remove from the heat and let them rest for 5 minutes before serving. These are fantastic served with mashed potatoes, steamed vegetables, or in a soft roll with salad.'
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
            'In a large bowl, sift together the plain flour, baking powder, salt, and pepper.',
            'In a separate jug, whisk together the eggs and milk. Pour the wet ingredients into the dry ingredients and whisk until a thick, lumpy batter forms. Do not overmix.',
            'Gently fold in the corn kernels and the chopped chives until they are just distributed throughout the batter.',
            'Heat a shallow layer of vegetable oil (about 1/2cm deep) in a large non-stick frying pan over medium heat. The oil is ready when a drop of batter sizzles immediately.',
            'Drop heaped tablespoons of the batter into the hot oil and flatten them slightly with the back of the spoon to form round fritters.',
            'Cook for 2-3 minutes per side, until they are puffed up and a deep golden brown.',
            'Drain the fritters on paper towels and keep warm. Repeat with the remaining batter.',
            'Serve the corn fritters warm with a dollop of sour cream, crispy bacon, and a drizzle of sweet chilli sauce for a delicious brunch.'
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
            'Preheat your oven to 200°C (fan-forced). Line a baking tray with baking paper.',
            'Sift the self-raising flour and salt into a large mixing bowl. Add the cold, cubed butter and rub it into the flour using your fingertips until the mixture resembles fine breadcrumbs. This creates a flaky texture.',
            'Make a well in the centre of the flour mixture. Pour in the milk and most of the water.',
            'Using a flat-bladed knife, mix the liquid into the flour until it just starts to come together as a soft, shaggy dough. If the dough is too dry, add the remaining water a little at a time.',
            'Turn the dough out onto a lightly floured surface. Gently knead for 1-2 minutes until it forms a smooth ball. Be careful not to over-knead, or the damper will become tough.',
            'Shape the dough into a round loaf, about 6cm thick. Place it on the prepared tray. Use a sharp knife to score a deep cross (or pattern) on the top of the loaf. This helps it bake evenly.',
            'Bake for 25-30 minutes, or until the damper is a deep golden brown and sounds hollow when tapped on the bottom.',
            'Remove from the oven and serve warm. This bread is best enjoyed straight away, pulled apart with generous amounts of butter and golden syrup or jam.'
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
            'Preheat your oven to 160°C (fan-forced). Line two large baking trays with baking paper.',
            'In a large bowl, combine the rolled oats, plain flour, desiccated coconut, and caster sugar. Mix them together to evenly distribute the ingredients.',
            'In a small saucepan over low heat, melt the butter and golden syrup together, stirring until the butter has completely melted and the mixture is smooth.',
            'In a small bowl, dissolve the baking soda in the boiling water. Pour this into the butter mixture. It will foam up immediately – this is the leavening reaction that makes the biscuits chewy.',
            'Immediately pour the hot butter mixture into the dry ingredients. Stir until everything is thoroughly combined and the mixture becomes a sticky dough.',
            'Roll tablespoon-sized balls of the mixture and place them on the prepared trays, leaving at least 5cm of space between them to allow for spreading.',
            'Flatten the balls slightly with the back of a fork.',
            'Bake for 15 minutes, or until the biscuits are a deep golden brown. They will be soft when they come out of the oven but will firm up as they cool.',
            'Allow the biscuits to cool on the tray for 5 minutes before transferring them to a wire rack to cool completely. Store in an airtight container.'
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
            'Season the beef cubes liberally with salt and pepper. Dredge them in plain flour to coat lightly.',
            'Heat a splash of oil in a large Dutch oven over medium-high heat. Brown the beef in batches, searing on all sides until a rich crust forms. Do not overcrowd the pan. Remove the browned beef and set aside.',
            'Reduce the heat to medium. Add the onion and carrots to the pot and cook for 5-6 minutes until slightly softened. Add the garlic and cook for 1 minute.',
            'Return the beef to the pot. Stir in the tomato paste and cook for 1-2 minutes. Pour in the Guinness, scraping the bottom of the pot to deglaze all the flavorful brown bits.',
            'Add the beef stock and bring to a simmer. Cover and reduce the heat to very low. Cook for 1.5 to 2 hours, or until the beef is incredibly tender and falls apart easily.',
            'Preheat your oven to 200°C (fan-forced).',
            'Spoon the beef filling into a large pie dish (or individual ramekins). Allow it to cool for 10 minutes.',
            'Cover the filling with the puff pastry. Trim the edges, pressing to seal. Brush the top generously with the beaten egg. Cut a small steam vent in the top.',
            'Place the pie on a baking tray to catch any drips. Bake for 25-30 minutes, until the pastry is puffed and deeply golden.',
            'Serve the pie piping hot with creamy mashed potatoes and peas.'
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
            'Pat the squid rings thoroughly dry with paper towels. This is essential to get them crispy. If they are wet, they will steam and become rubbery.',
            'In a large bowl or resealable bag, combine the cornflour, salt, white pepper, and five-spice powder (if using).',
            'Add the squid rings to the seasoned flour and toss well to coat every piece evenly. Shake off any excess flour.',
            'Heat the oil in a deep heavy-based pot or deep fryer to 180°C. The oil is ready when a cube of bread drops in and turns golden in 15 seconds.',
            'Fry the squid in small batches. Overcrowding the pot will lower the oil temperature and make the squid greasy. Fry for 2-3 minutes until they are puffed, crispy, and just cooked through.',
            'Use a slotted spoon to remove the squid and drain on paper towels. Sprinkle immediately with extra salt flakes.',
            'Serve the salt and pepper squid instantly with lemon wedges and a side of aioli or sweet chilli sauce.'
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
            'In a large bowl, whisk together the soy sauce, peanut butter, curry powder, coconut milk, brown sugar, and fish sauce until a smooth, rich marinade forms.',
            'Add the chicken strips to the marinade and toss to coat thoroughly. Cover the bowl and place it in the fridge to marinate for at least 30 minutes, or up to 2 hours for deeper flavour.',
            'While the chicken marinates, soak the bamboo skewers in water to prevent them from burning on the grill.',
            'Thread the marinated chicken strips onto the skewers, weaving them back and forth to secure the meat.',
            'Preheat a BBQ, grill pan, or chargrill to medium-high heat. Ensure the grill is well oiled.',
            'Place the skewers on the grill. Cook for 3-4 minutes on each side, basting with any leftover marinade, until the chicken is charred and cooked through.',
            'Remove the skewers from the grill and let them rest for a few minutes. Serve with extra satay sauce, fresh cucumber slices, and a wedge of lime for squeezing over.'
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
            'In a small bowl, whisk together the soy sauce, honey, garlic, ginger, and vinegar to create the sticky sauce.',
            'Pat the chicken thighs dry with paper towels. Season both sides with salt and pepper.',
            'Heat the vegetable oil in a large oven-safe skillet or frying pan over medium-high heat.',
            'Place the chicken thighs into the pan, skin-side down. Cook for 6-7 minutes until the skin is deeply golden and crispy. Flip and cook the other side for 4-5 minutes.',
            'Reduce the heat to medium. Pour the honey soy sauce mixture over the chicken. Tilt the pan to coat the chicken evenly.',
            'Allow the sauce to bubble and reduce, turning the chicken occasionally, for 8-10 minutes, until the sauce has thickened into a sticky glaze and coats the chicken beautifully.',
            'Check that the chicken is cooked through (internal temperature of 75°C). Garnish with sliced green onions and serve immediately with steamed jasmine rice and blanched bok choy.'
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
            'Preheat your oven to 160°C (fan-forced).',
            'Pat the ribs dry with paper towels. Remove the thin membrane from the bone side of the rack for maximum tenderness.',
            'Season the ribs generously all over with salt, pepper, smoked paprika, and onion powder.',
            'Place the ribs on a large baking tray lined with a double layer of aluminium foil. Wrap them tightly with another layer of foil, sealing the edges to create a tight parcel. This traps steam and keeps them moist.',
            'Bake in the oven for 1.5 to 2 hours, or until the meat is extremely tender and starting to pull back from the bones.',
            'While the ribs cook, combine the BBQ sauce, brown sugar, and garlic in a small bowl to make the glaze.',
            'Remove the ribs from the oven, increase the temperature to 220°C (or use the grill function).',
            'Unwrap the ribs and generously brush the top surface with the BBQ glaze.',
            'Return the ribs to the oven (uncovered) for 10-15 minutes, until the glaze is caramelised and sticky. Watch carefully to prevent burning.',
            'Remove from the oven, rest for 10 minutes, then slice into individual ribs and serve with extra BBQ sauce on the side.'
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
            'Season the steaks generously on both sides with salt and freshly cracked black pepper.',
            'Preheat a heavy-based cast-iron skillet or BBQ plate over high heat until smoking hot. Add a splash of oil to the pan.',
            'Cook the steaks for 2-3 minutes per side for medium-rare. If you prefer them more done, add an extra minute per side. Remove the steaks to a plate and let them rest.',
            'Reduce the heat to medium. Add the sliced onion to the pan with a pinch of salt and cook for 5-6 minutes, stirring occasionally, until they soften and caramelize.',
            'While the onions cook, slice the bread rolls in half and toast them cut-side down on the grill until golden. Spread the toasted sides with butter.',
            'Thinly slice the rested steaks against the grain.',
            'Assemble the sandwiches: On the bottom half of the roll, spread a spoonful of BBQ sauce or aioli. Pile on the sliced steak, top with the caramelized onions, and place a slice of cheese on top.',
            'Place the sandwiches under a hot grill for 1 minute to melt the cheese (optional), then close with the top half of the roll.',
            'Serve the steak sandwiches immediately with a side of hot chips or a crisp pickle.'
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
            'In a large serving bowl, gently combine the diced chicken, avocado, cherry tomatoes, and red onion.',
            'In a small jar or bowl, make the dressing: whisk together the olive oil, lemon juice, Dijon mustard, salt, and pepper until well emulsified.',
            'Pour the dressing over the salad ingredients. Using two large spoons, toss everything gently to coat. Be careful not to break the avocado pieces up too much, but ensure the chicken is well coated.',
            'Taste and adjust the seasoning with more salt, pepper, or lemon juice if desired.',
            'Serve the salad immediately as a light main course, or chill it for a refreshing side dish.'
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
            'Heat a large heavy-based pot over medium heat with a splash of oil. Add the onion and garlic and sauté for 5-6 minutes until softened and translucent.',
            'Add the diced potatoes and thyme to the pot, then pour in the fish stock. Bring the mixture to a boil, then reduce the heat to low and simmer for 15 minutes, or until the potatoes are fork-tender.',
            'Add the seafood to the pot. Cook for 5-7 minutes, stirring gently, until the prawns are pink, the fish is opaque, and the mussels have opened. Discard any mussels that remain closed.',
            'Reduce the heat to the lowest setting. Pour in the thickened cream and stir gently to combine. Heat through for 2-3 minutes; do not let the soup boil, or the cream may curdle.',
            'Season the chowder to taste with salt and white pepper.',
            'Ladle the chowder into deep bowls, garnish with fresh parsley, and serve immediately with thick slices of crusty buttered bread.'
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
            'Bring a large pot of salted water to a rolling boil. Cook the pasta according to the package instructions until al dente. Reserve 1/2 cup of the starchy pasta water before draining.',
            'While the pasta cooks, heat a large skillet over medium heat. Melt the butter and add the sliced mushrooms. Cook for 6-8 minutes, stirring occasionally, until the mushrooms have released their liquid and have turned a deep golden brown.',
            'Add the minced garlic to the skillet and cook for 1-2 minutes until fragrant.',
            'Pour the cream into the pan. Bring to a gentle simmer and cook for 3-4 minutes until the sauce thickens slightly.',
            'Add the grated Parmesan cheese and stir until it has completely melted into the sauce. Season with salt and a generous amount of black pepper.',
            'Add the drained pasta to the creamy mushroom sauce. Toss to coat the pasta evenly, adding a splash of the reserved pasta water if the sauce is too thick.',
            'Garnish with fresh parsley and extra Parmesan cheese. Serve immediately in warm bowls.'
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
            'Heat a large frying pan over medium heat. Add the bacon rashers and cook for 3-4 minutes per side until they are crispy and golden. Remove the bacon from the pan and drain on paper towel.',
            'Turn the heat down to medium-low. Crack the eggs into the pan (using the residual bacon fat) and fry them sunny-side up or over-easy until the whites are set and the yolks are still slightly runny. Season lightly with salt and pepper.',
            'While the eggs are frying, slice the bread rolls in half and toast them cut-side down in the pan or under a grill until golden. Spread generously with butter.',
            'Place two bacon rashers on the bottom half of each roll. Carefully place a fried egg on top of the bacon. Drizzle with your choice of BBQ sauce or ketchup.',
            'Place the top half of the roll on the egg. Press down gently to break the yolk slightly, allowing it to soak into the bread.',
            'Serve the bacon and egg rolls immediately.'
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
            'Preheat your oven to 200°C (fan-forced). Grease a 23cm deep pie or quiche dish.',
            'Line the dish with one of the pastry sheets, pressing it into the edges. Trim any overhang. Prick the base lightly with a fork. If using shortcrust, you may want to blind-bake for 10 minutes.',
            'If using fresh spinach, wilt it in a hot, dry pan for 2-3 minutes until it has reduced significantly. Squeeze out any excess moisture with a clean tea towel. If using frozen, ensure it is thoroughly thawed and squeezed dry.',
            'In a large bowl, whisk together the eggs and milk (if using). Stir in the cooked spinach, crumbled feta, onion, salt, and pepper. Mix well until combined.',
            'Pour the spinach mixture into the prepared pastry case, spreading it evenly.',
            'If using a second pastry sheet, place it over the top and seal the edges, or simply bake it as an open tart. Brush the top with a little beaten egg for a golden shine.',
            'Bake for 30-35 minutes, or until the filling is puffed, set, and the pastry is a deep golden brown.',
            'Let the quiche cool in the dish for 10 minutes before slicing. Serve warm or at room temperature with a side salad.'
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
            'Season the beef chunks generously with salt and pepper.',
            'Heat the olive oil in a large Dutch oven or heavy-based pot over high heat. Brown the beef in batches, searing on all sides until a deep dark crust forms. This is the foundation of the stew\'s flavour. Transfer the beef to a plate.',
            'Reduce the heat to medium. Add the onions and carrots to the pot and cook for 5-6 minutes until they begin to soften. Add the garlic and cook for 1 minute until fragrant.',
            'Stir in the tomato paste and cook for 1 minute. Return the beef to the pot.',
            'Pour in the beef stock, bay leaves, and thyme. Stir well, scraping the bottom of the pan to deglaze any browned bits.',
            'Bring the stew to a simmer, then cover the pot with a lid and reduce the heat to the lowest possible setting.',
            'Cook for 3-4 hours, stirring occasionally, until the beef is meltingly tender and the sauce has thickened. If the sauce is too thin, remove the lid for the last 30 minutes to reduce.',
            'Taste and adjust seasoning before serving. Remove the bay leaves and serve the stew over creamy mashed potatoes or buttery egg noodles.'
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
            'Preheat your oven to 200°C (fan-forced). Place a baking tray in the oven to heat up with the oil in it (this ensures the potatoes crisp up immediately).',
            'Peel the potatoes and cut them into large, even-sized chunks (about 5cm).',
            'Place the potatoes in a large pot of cold salted water. Bring to a boil and cook for 8-10 minutes, just until the edges are starting to soften.',
            'Drain the potatoes in a colander. Let them steam dry for 5 minutes to remove excess moisture.',
            'Give the colander a good shake to rough up the edges of the potatoes. This creates a fluffy surface that will become extra crispy.',
            'Carefully remove the hot tray from the oven. Add the potatoes, garlic, herbs, oil, salt, and pepper to the tray. Toss to coat evenly in the hot oil.',
            'Spread the potatoes into a single layer with some space between them. Roast for 35-40 minutes, turning them over halfway through, until they are golden, crunchy, and crispy on the outside and fluffy on the inside.',
            'Sprinkle with extra salt before serving. These are the perfect side dish for roasts or grilled meats.'
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
            'Line the base of a 20cm springform cake tin with baking paper.',
            'In a bowl, combine the crushed biscuits and melted butter. Press the mixture firmly into the base of the tin using the back of a spoon. Place in the fridge to chill while you prepare the filling.',
            'In a large mixing bowl, beat the softened cream cheese and caster sugar together until smooth, creamy, and free of lumps.',
            'Add the mango purée and vanilla extract to the cream cheese mixture and mix until fully combined and a beautiful orange colour.',
            'In a separate bowl, whip the thickened cream until it holds stiff peaks (be careful not to over-whip it into butter).',
            'Gently fold the whipped cream into the mango-cream cheese mixture using a large metal spoon. Fold carefully to retain the air from the whipped cream, ensuring a light, mousse-like texture.',
            'Pour the filling over the chilled biscuit base and smooth the top with a spatula.',
            'Cover the tin with plastic wrap and refrigerate for at least 4 hours, preferably overnight, until completely set.',
            'To serve, remove the cheesecake from the tin. Top with extra fresh mango slices or passionfruit pulp for a beautiful presentation.'
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
            'Line a 20cm x 30cm slice tin with baking paper, leaving an overhang on two sides for easy lifting.',
            'Combine the crushed biscuits and melted butter in a bowl until the mixture looks like wet sand. Press this into the base of the tin and chill in the fridge while you make the topping.',
            'In a separate bowl, sift the icing sugar to remove any lumps. Add the passionfruit pulp and desiccated coconut. Mix until a thick, sticky paste forms.',
            'Spread the passionfruit mixture evenly over the chilled biscuit base, smoothing it to the edges.',
            'Refrigerate for at least 2 hours, or until the slice is firm to the touch.',
            'Lift the slice out of the tin using the paper overhang. Use a large, sharp knife to cut it into 12 neat squares or fingers.',
            'Store the slice in the refrigerator in an airtight container. Serve chilled for the best texture.'
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
            'Preheat your oven to 180°C (fan-forced). Lightly grease a 20cm x 25cm (or similar) baking dish.',
            'Place the sliced apples in the baking dish. Sprinkle with half of the sugar and half of the cinnamon. Toss the apples to coat them evenly.',
            'In a large bowl, combine the plain flour, rolled oats, the remaining sugar, and the remaining cinnamon.',
            'Add the cold, cubed butter to the flour mixture. Rub the butter into the dry ingredients using your fingertips until the mixture resembles coarse breadcrumbs (with some larger chunks for texture).',
            'Sprinkle the crumble topping evenly over the apples, ensuring it covers the fruit completely.',
            'Bake for 35-40 minutes, or until the crumble is a deep golden brown and the apple juices are bubbling up at the edges.',
            'Remove from the oven and let it rest for 5-10 minutes. Serve the apple crumble warm with a generous scoop of vanilla ice cream, thick custard, or pouring cream.'
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
            'Preheat your oven to 180°C (fan-forced). Grease a 20cm square or round cake tin.',
            'Place the chopped dates in a heatproof bowl. Sprinkle the baking soda over them, then pour the boiling water over the top. Set aside for 10 minutes to soften.',
            'In a large mixing bowl, beat the softened butter and brown sugar together with an electric mixer until light and fluffy (about 3-4 minutes).',
            'Add the eggs one at a time, beating well after each addition. Stir in the vanilla.',
            'Gently fold in the flour using a metal spoon. Pour in the date mixture (including the liquid) and fold until just combined. The batter will be quite wet.',
            'Pour the batter into the prepared tin. Bake for 30-35 minutes, or until a skewer inserted into the centre comes out clean.',
            'While the pudding bakes, make the sauce: combine the brown sugar, cream, and butter in a small saucepan over medium heat. Stir until melted and smooth. Bring to a gentle simmer for 2-3 minutes.',
            'When the pudding is done, prick it all over with a skewer and pour half of the sauce over the warm pudding, letting it soak in.',
            'Serve the sticky date pudding warm in bowls, drizzled with the remaining caramel sauce and a scoop of vanilla ice cream.'
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
            'If using lemon myrtle leaves, grind them lightly in a mortar and pestle to release their oils. Combine them in a bowl with the garlic, olive oil, salt, and pepper to form a thick paste.',
            'Score the chicken pieces lightly with a knife to allow the marinade to penetrate. Rub the lemon myrtle paste all over the chicken, ensuring it is well covered.',
            'Cover the chicken and place it in the refrigerator to marinate for at least 30 minutes, or up to 4 hours for a more intense flavour.',
            'Preheat a BBQ or chargrill pan to medium-high heat. Cook the chicken for 5-6 minutes on each side (thighs) or 6-8 minutes (breasts), until the internal temperature reaches 75°C and the outside is charred and golden.',
            'Remove the chicken from the heat and let it rest for 5 minutes before serving.',
            'Serve the lemon myrtle chicken with a fresh green salad, a squeeze of lemon juice, and a dollop of natural yoghurt.'
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
            'Remove the salmon fillets from the fridge 15 minutes before cooking to take the chill off. Pat them completely dry with paper towels.',
            'Brush both sides of the salmon fillets with olive oil. Season generously with salt and pepper on both sides, especially on the skin.',
            'Preheat a heavy-based grill pan or BBQ to medium-high heat. Ensure the grill is very hot and lightly oiled.',
            'Place the salmon fillets onto the grill, skin-side down. Cook for 5-6 minutes without moving them, until the skin is crispy and charred and the fish releases easily from the grill.',
            'Carefully flip the salmon using a fish slice. Cook for a further 3-4 minutes on the flesh side, depending on the thickness, until the fish is cooked to your liking (opaque and flakes easily).',
            'In the last minute of cooking, place the lemon slices on the grill to char slightly.',
            'Transfer the salmon to a serving platter. Sprinkle generously with the fresh herbs and arrange the charred lemon slices on the side. Serve immediately with a crisp salad or steamed asparagus.'
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
            'Break up any lumps in the cold rice with your fingers and set aside.',
            'Heat a wok or large frying pan over high heat. Add 1 tablespoon of oil. When smoking hot, pour in the beaten eggs and scramble them quickly. Remove the eggs from the wok and set aside.',
            'Add the remaining 1 tablespoon of oil to the wok. Add the diced chicken and cook for 4-5 minutes, stirring constantly, until golden and cooked through. Remove the chicken and set aside with the eggs.',
            'Add the onion, peas, and carrot to the wok. Stir-fry for 2-3 minutes until the vegetables are slightly tender but still crisp.',
            'Add the cold rice and soy sauce to the wok. Increase the heat to high and stir-fry for 3-4 minutes, tossing the rice constantly until it is heated through and slightly toasted.',
            'Return the scrambled egg and chicken to the wok. Toss everything together to combine. Stir-fry for another 1-2 minutes until everything is piping hot.',
            'Remove from the heat, garnish with sliced spring onions, and serve immediately.'
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
            'Place the finely shredded cabbage and grated carrot into a large colander. Sprinkle with a pinch of salt and let them sit for 10 minutes to draw out excess moisture.',
            'Press the vegetables with a paper towel to remove the excess liquid, then transfer them to a large salad bowl. This step prevents the coleslaw from becoming watery.',
            'In a small bowl, whisk together the mayonnaise, apple cider vinegar, sugar, salt, and pepper until smooth and creamy.',
            'Pour the dressing over the cabbage and carrot mixture. Toss well with tongs until all the vegetables are evenly coated.',
            'Taste and adjust the seasoning with more salt or vinegar if needed.',
            'Cover the bowl and refrigerate for at least 30 minutes before serving. This allows the flavours to meld and the cabbage to soften slightly. Serve chilled.'
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
            'Bring a large pot of salted water to a rolling boil. Add the linguine and cook according to package directions until al dente. Reserve 1/2 cup of pasta water before draining.',
            'While the pasta cooks, heat the olive oil in a large, wide skillet over medium heat. Add the sliced garlic and chilli and cook gently for 1-2 minutes until the garlic is fragrant but has not taken on any colour (don\'t let it burn!).',
            'Increase the heat to high. Add the prawns to the skillet in a single layer and cook for 2-3 minutes on each side, until they are pink, curled, and cooked through.',
            'Add the cooked linguine to the skillet with the prawns. Pour in the lemon juice and a splash of the reserved pasta water to create a silky sauce.',
            'Toss the pasta vigorously to combine, coating the noodles in the garlic and chilli oil. Add the fresh parsley and toss again.',
            'Season generously with salt and pepper. Serve immediately in warm pasta bowls with an extra wedge of lemon.'
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
            'Preheat your oven to 180°C (fan-forced). Grease and line a 20cm x 20cm square baking tin with baking paper.',
            'Place the dark chocolate and diced butter in a heatproof bowl. Set the bowl over a saucepan of barely simmering water (ensure the bowl doesn\'t touch the water). Stir gently until the mixture is melted and completely smooth. Alternatively, melt in the microwave in 30-second bursts.',
            'Remove the bowl from the heat. Whisk in the caster sugar and vanilla extract until combined.',
            'Add the eggs one at a time, whisking vigorously after each addition. The mixture will become thick, glossy, and smooth.',
            'Gently fold in the plain flour until just combined. Be careful not to overmix. Fold in the toasted macadamia nuts, reserving a few for the top.',
            'Pour the brownie batter into the prepared tin and smooth the top with a spatula. Scatter the reserved macadamia nuts over the surface.',
            'Bake for 25-30 minutes. The brownies are done when the top is shiny and cracked, and a skewer inserted into the centre comes out with a few moist crumbs attached (not wet batter).',
            'Allow the brownies to cool completely in the tin before lifting out and cutting into 16 generous squares. The flavour improves as they cool.'
        ]
    }
];

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
// FEATURED RECIPE (KALDIRILDI – BOŞ FONKSİYON)
// ============================================================
function renderFeatured() {
    // Featured recipe kaldırıldı
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
// OPEN MODAL (BUTONLAR KALDIRILDI)
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
    // Featured kaldırıldığı için renderFeatured çağrılmıyor
});
