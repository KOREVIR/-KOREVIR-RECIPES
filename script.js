// ===== KOREVIR RECIPES - 50 RECIPES (UZATILMIŞ METHOD) =====

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
        method: ['Preheat your oven to 200°C (fan-forced) and line a baking tray with parchment paper.', 'Place each chicken breast between two sheets of baking paper and gently pound to an even thickness of about 2cm. Season both sides generously with salt and pepper.', 'Set up three shallow bowls: one with flour, one with beaten eggs, and one with breadcrumbs mixed with Parmesan cheese.', 'Coat each chicken breast first in flour (shake off excess), then dip into the egg, and finally press into the breadcrumb mixture until fully coated.', 'Heat olive oil in a large oven-safe skillet over medium-high heat. Fry the chicken for 3-4 minutes each side until golden brown. You may need to do this in batches.', 'Spread a layer of tomato passata in the bottom of a baking dish. Place the fried chicken on top and spoon the remaining sauce over each piece.', 'Sprinkle shredded mozzarella cheese generously over the top of each chicken breast.', 'Bake in the preheated oven for 20-25 minutes, or until the cheese is melted, bubbly, and golden.', 'Remove from the oven and let rest for 5 minutes. Garnish with fresh basil leaves if desired and serve hot with pasta or a green salad.']
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
        ingredients: ['500g beef mince', '1 onion, finely chopped', '1 garlic clove, minced', '1 carrot, finely diced', '1 celery stalk, finely diced', '2 tbsp tomato paste', '1 tbsp Worcestershire sauce', '1 cup beef stock', '1 tsp dried thyme', 'Salt & pepper to taste', '2 sheets puff pastry, thawed', '1 egg, beaten (for egg wash)'],
        method: ['Heat a splash of oil in a large frying pan over medium heat. Add the onion, garlic, carrot and celery and cook for 5-6 minutes until softened and fragrant.', 'Add the beef mince to the pan and cook, breaking it up with a wooden spoon, until it is well browned all over (about 6-8 minutes).', 'Stir in the tomato paste and cook for 1 minute until it darkens slightly. Add the Worcestershire sauce, beef stock, thyme, salt and pepper.', 'Bring the mixture to a simmer, then reduce the heat to low and cook for 10-15 minutes, stirring occasionally, until the sauce has thickened. Remove from heat and allow to cool completely (this is important so the pastry doesn\'t go soggy).', 'Preheat your oven to 200°C (fan-forced). Lightly grease a large baking tray or line it with baking paper.', 'Cut the puff pastry sheets into 6 equal rectangles (or use individual pie tins). If using a large pie dish, line the base and sides with one pastry sheet.', 'Spoon the cooled meat filling into the pastry cases, filling them almost to the top. Brush the edges of the pastry with a little beaten egg.', 'Place the remaining pastry sheets on top as lids. Press the edges together firmly to seal, then trim any excess. Cut a small slit in the top of each pie to allow steam to escape.', 'Brush the tops generously with beaten egg and sprinkle with a little extra salt if desired.', 'Bake for 20-25 minutes, or until the pastry is puffed, golden brown, and crisp. Serve hot with tomato sauce or gravy.']
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
        ingredients: ['4 barramundi fillets (skin on)', 'Salt & pepper to taste', '1 tbsp olive oil', '60g unsalted butter', '2 garlic cloves, minced', 'Juice of 1 lemon', 'Zest of 1 lemon', '2 tbsp capers, drained', '1 tbsp fresh parsley, chopped'],
        method: ['Pat the barramundi fillets thoroughly dry with paper towels – this is key to getting crispy skin. Season both sides with salt and pepper.', 'Heat the olive oil in a large non-stick skillet over medium-high heat. When the oil is shimmering, place the fish skin-side down in the pan.', 'Cook for 4-5 minutes without moving it, until the skin is golden and crispy. Carefully flip the fish and cook for another 2-3 minutes on the other side.', 'Remove the fish to a plate and keep warm. Reduce the heat to medium.', 'Add the butter to the pan and allow it to melt. Once foaming, add the minced garlic and cook for 30 seconds until fragrant, scraping up any browned bits from the bottom.', 'Stir in the lemon juice, lemon zest and capers. Let the sauce bubble gently for 1-2 minutes until it thickens slightly. Taste and adjust seasoning.', 'Return the fish to the pan and spoon the lemon butter sauce over the fillets. Heat through for 1 minute.', 'Garnish with fresh parsley and serve immediately with steamed vegetables or jasmine rice.']
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
        ingredients: ['125g unsalted butter, softened', '1 cup caster sugar', '2 tsp vanilla extract', '4 eggs', '1 1/4 cups self-raising flour, sifted', '1/2 cup milk', '1 cup caster sugar (for chocolate sauce)', '1/2 cup unsweetened cocoa powder', '125g unsalted butter (for chocolate sauce)', '1 cup milk (for chocolate sauce)', '1 tsp vanilla extract (for chocolate sauce)', '2 cups desiccated coconut'],
        method: ['Preheat your oven to 180°C (fan-forced). Grease and line a 20cm square cake tin with baking paper.', 'In a large bowl, beat the softened butter, caster sugar and vanilla together until light, pale and creamy (about 3-4 minutes).', 'Add the eggs one at a time, beating well after each addition until fully incorporated.', 'Gently fold in the sifted flour and milk alternately, starting and ending with flour. Mix until just combined – do not overmix.', 'Pour the batter into the prepared tin and smooth the surface with a spatula.', 'Bake for 30-35 minutes, or until a skewer inserted into the centre comes out clean. Allow the cake to cool completely in the tin before turning out onto a wire rack.', 'Once completely cool, use a serrated knife to cut the cake into 12 even squares.', 'To make the chocolate sauce: combine the sugar, cocoa powder, butter and milk in a medium saucepan over medium heat. Stir constantly until the butter has melted and the mixture is smooth. Bring to a gentle boil, then remove from heat and stir in the vanilla.', 'Pour the warm chocolate sauce into a shallow dish. Place the desiccated coconut in another shallow dish.', 'Using two forks, dip each cake square into the chocolate sauce, allowing the excess to drip off, then roll immediately in the coconut to coat evenly.', 'Place the coated Lamingtons on a wire rack to set for about 30 minutes before serving.']
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
        ingredients: ['4 slices of bread (white or wholemeal)', 'Butter or margarine, softened', 'Vegemite (to taste)'],
        method: ['Place the bread slices in a toaster or under a grill and toast until golden brown and crisp to your liking.', 'Remove the toast from the toaster and spread with a generous layer of butter while the toast is still warm – this helps the butter melt and creates a creamy base.', 'Using a butter knife, take a very thin layer of Vegemite (about 1/4 to 1/2 teaspoon per slice) and spread it thinly over the butter. Remember: a little goes a long way!', 'Spread it evenly all the way to the edges. If you prefer a milder flavour, use less Vegemite; for a stronger taste, add a little more.', 'Cut the toast in half diagonally and serve immediately. Perfect with a cup of tea or coffee.']
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
        ingredients: ['4 egg whites, at room temperature', '1 cup caster sugar', '1 tsp white vinegar', '1 tsp cornstarch', '1 tsp vanilla extract', '300ml thickened cream, chilled', '1 tsp vanilla extract (for topping)', '2 tbsp icing sugar, sifted', 'Fresh fruits: strawberries, blueberries, kiwi, passionfruit, raspberries'],
        method: ['Preheat your oven to 120°C (fan-forced). Line a baking tray with baking paper and draw a 20cm circle as a guide.', 'In a large, clean, dry mixing bowl (ensure no trace of grease), beat the egg whites with an electric mixer on medium speed until soft peaks form.', 'Gradually add the caster sugar, one tablespoon at a time, beating well after each addition. Continue until the mixture is thick, glossy and the sugar has dissolved completely (rub a small amount between your fingers – it should feel smooth).', 'Gently fold in the vinegar, cornstarch and vanilla extract using a large metal spoon.', 'Spoon the meringue onto the prepared tray, staying within the drawn circle. Use a spatula to shape it into a round with a slight dip in the centre (this will hold the topping).', 'Bake for 75-90 minutes, or until the outside is crisp and the meringue lifts easily from the paper. It should sound hollow when tapped on the bottom.', 'Turn the oven off and leave the pavlova inside with the door slightly ajar to cool completely. This prevents cracking.', 'Just before serving, whip the thickened cream with vanilla and icing sugar until soft peaks form.', 'Top the cooled pavlova generously with the whipped cream and arrange the fresh fruits on top. Slice and serve immediately.']
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
        ingredients: ['600g white fish fillets (cod, hoki or barramundi)', '1 cup plain flour', '1/2 cup cornflour', '1 tsp baking powder', '1/2 tsp salt', '1/2 tsp black pepper', '1 cup cold sparkling water', 'Oil for deep frying (vegetable or canola)', '4 large potatoes, peeled and cut into thick chips', '1 tsp salt (for chips)', '1/2 cup mayonnaise', '1 tbsp gherkins, finely chopped', '1 tsp capers, finely chopped', '1 tsp lemon juice'],
        method: ['Start by making the chips: heat oil in a deep fryer or large heavy-bottomed pot to 160°C. Pat the potato chips dry with paper towels.', 'Fry the chips in batches for 5-6 minutes until soft but not coloured. Remove and drain on paper towel. Increase the oil temperature to 180°C.', 'For the fish: pat the fish fillets dry and season lightly with salt and pepper on both sides.', 'In a mixing bowl, whisk together the flour, cornflour, baking powder, salt and pepper. Gradually pour in the sparkling water while whisking until you have a smooth, thick batter (the consistency of pouring cream).', 'Dip each fish fillet into the batter, allowing excess to drip off. Carefully lower into the hot oil (180°C) and fry for 4-5 minutes, turning once, until deep golden and crispy. Drain on paper towel.', 'Return the chips to the oil and fry at 180°C for 4-5 minutes until golden and crispy. Drain on paper towel and season with salt.', 'For the tartare sauce: combine mayonnaise, gherkins, capers and lemon juice in a small bowl. Mix well.', 'Serve the fish and chips hot with tartare sauce, lemon wedges and a sprinkle of salt.']
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
        ingredients: ['500g beef mince (80/20 blend)', '1 tbsp BBQ sauce', '1 tsp Worcestershire sauce', '1 tsp garlic powder', '1/2 tsp onion powder', 'Salt & black pepper to taste', '4 burger buns', '4 slices cheddar cheese', '4 leaves iceberg lettuce, washed and dried', '1 large tomato, sliced', '1 small red onion, thinly sliced', '4 slices canned beetroot, drained', '4 tbsp burger sauce or aioli', '4 large potatoes, peeled (for chips)'],
        method: ['In a large bowl, combine beef mince, BBQ sauce, Worcestershire sauce, garlic powder, onion powder, salt and pepper. Mix gently with your hands until just combined – do not overwork the meat.', 'Divide the mixture into 4 equal portions and shape into patties slightly larger than the burger buns (they will shrink during cooking). Make a slight indent in the centre of each patty to prevent them from puffing up.', 'Heat a barbecue or large cast-iron pan over medium-high heat. Cook the patties for 3-4 minutes per side, or until cooked to your liking and well browned.', 'In the last minute of cooking, place a slice of cheese on each patty and allow it to melt.', 'Meanwhile, prepare the chips: cut the potatoes into thick chips, rinse in cold water and pat dry. Heat oil to 160°C, fry for 5-6 minutes until soft, then increase to 180°C and fry again for 3-4 minutes until golden. Drain and season with salt.', 'Toast the burger buns lightly on the grill or in a separate pan until golden.', 'Spread burger sauce or aioli on the bottom bun. Layer with lettuce, tomato slices, onion, beetroot, the cheesy beef patty, and finally the top bun.', 'Serve immediately with the crispy hot chips on the side.']
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
        ingredients: ['500g beef mince', '1 small onion, finely chopped', '1 garlic clove, minced', '1 tbsp Worcestershire sauce', '1 tbsp tomato sauce', '1 tsp dried thyme', '1/2 tsp smoked paprika (optional)', 'Salt & black pepper to taste', '2 sheets puff pastry, thawed', '1 egg, beaten (for egg wash)', 'Sesame seeds (optional)'],
        method: ['Preheat your oven to 200°C (fan-forced) and line a large baking tray with baking paper.', 'Heat a small splash of oil in a frying pan over medium heat. Add the onion and garlic and cook for 3-4 minutes until softened. Allow to cool slightly.', 'In a large bowl, combine the beef mince, cooled onion and garlic, Worcestershire sauce, tomato sauce, thyme, paprika (if using), salt and pepper. Mix well with your hands until evenly combined.', 'Cut each puff pastry sheet in half lengthwise to create 4 long rectangles.', 'Spoon the filling along the centre of each pastry rectangle, shaping it into a long log. Brush the edges with beaten egg.', 'Fold the pastry over the filling, pressing the edges together to seal. Use a fork to crimp the edges for a neat finish.', 'Cut each roll into desired lengths (about 4 per sheet) and place seam-side down on the prepared tray.', 'Brush the tops generously with beaten egg and sprinkle with sesame seeds if using.', 'Bake for 20-25 minutes, or until the pastry is golden, puffed and cooked through. Serve hot or at room temperature.']
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
        ingredients: ['500g cooked prawns (or raw, peeled and deveined)', '1 tbsp lemon juice', '1/2 tsp salt', '1/4 tsp black pepper', '1/2 cup mayonnaise', '2 tbsp tomato sauce (ketchup)', '1 tbsp lemon juice (for sauce)', '1 tsp Worcestershire sauce', '1 tsp brandy (optional)', '1/2 tsp paprika', 'Salt & black pepper to taste', '1 small cos lettuce or iceberg, shredded', 'Lemon wedges to serve', 'Fresh parsley, chopped'],
        method: ['If using raw prawns, bring a pot of salted water to a boil. Add the prawns and cook for 2-3 minutes until pink and opaque. Drain and rinse under cold water to stop the cooking process. Pat dry with paper towels.', 'Toss the prawns with lemon juice, salt and pepper. Set aside in the refrigerator.', 'In a small bowl, whisk together the mayonnaise, tomato sauce, lemon juice, Worcestershire sauce, brandy (if using) and paprika. Season with salt and pepper to taste.', 'Cover the sauce and refrigerate for at least 30 minutes to allow the flavours to meld.', 'To serve, spoon a layer of shredded lettuce into individual serving glasses or bowls.', 'Add a generous spoonful of the sauce on top of the lettuce, then arrange the prawns over the sauce.', 'Garnish with lemon wedges and a sprinkle of fresh parsley. Serve immediately, chilled.']
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
        ingredients: ['4 chicken breast fillets', '1/2 cup plain flour', '2 eggs', '1 1/2 cups breadcrumbs', '1/2 cup panko breadcrumbs (for extra crunch)', '1 tsp garlic powder', '1 tsp paprika', 'Salt & black pepper to taste', 'Oil for shallow frying', 'Lemon wedges to serve'],
        method: ['Place each chicken breast between two sheets of baking paper and gently pound with a rolling pin to an even thickness of about 1cm. Season both sides with salt and pepper.', 'Set up three shallow dishes: one with flour, one with beaten eggs, and one with the combined breadcrumbs, panko, garlic powder and paprika.', 'Coat each chicken fillet first in flour, shaking off any excess, then dip into the beaten egg, and finally press firmly into the breadcrumb mixture to coat evenly.', 'Heat a large frying pan over medium heat with enough oil to cover the base (about 1/2 cm deep). The oil is ready when a breadcrumb sizzles.', 'Cook the schnitzels in batches for 3-4 minutes on each side, until golden brown and cooked through. Do not overcrowd the pan.', 'Drain on paper towels to absorb excess oil. Season with a little extra salt while still hot.', 'Serve hot with lemon wedges, and your choice of salad, coleslaw or mashed potatoes.']
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
        ingredients: ['1 kg potatoes, peeled and chopped', '1/2 cup plain flour', '1/4 cup cornflour', '1 egg', '1/2 tsp salt', '1/4 tsp black pepper', '1/4 tsp garlic powder (optional)', '2 tbsp chopped chives or spring onion (optional)', '1/2 cup plain flour (for coating)', '1 egg, lightly beaten (for coating)', '1 cup breadcrumbs (for coating)', 'Oil for shallow frying'],
        method: ['Boil or steam the potatoes until tender (about 15-20 minutes). Drain well and allow to steam dry for a few minutes before mashing until smooth. Let cool slightly.', 'In a large bowl, combine the mashed potato, flour, cornflour, egg, salt, pepper, garlic powder and chives (if using). Mix until just combined into a soft dough.', 'Shape the mixture into even-sized rounds about 2cm thick. You should get about 12 cakes.', 'Set up three shallow bowls: one with flour, one with beaten egg, and one with breadcrumbs.', 'Lightly coat each potato cake in flour, then dip into the egg, and finally press into the breadcrumbs to coat evenly.', 'Heat oil in a large non-stick frying pan over medium heat. Cook the potato cakes in batches for 3-4 minutes each side, until golden brown and crispy.', 'Drain on paper towels and season with a pinch of salt. Serve hot with tomato sauce or sour cream.']
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
        ingredients: ['1.5 kg lamb leg (bone-in or boneless)', '4 garlic cloves, minced', '2 tbsp fresh rosemary, chopped', '2 tbsp olive oil', '1 tsp salt', '1/2 tsp black pepper', '1 tsp Dijon mustard (optional)', '1 tbsp lemon juice', '1 large onion, cut into wedges', '1 whole head of garlic, halved horizontally', 'Fresh rosemary sprigs', '1/2 cup beef or lamb stock'],
        method: ['Preheat your oven to 200°C (fan-forced).', 'In a small bowl, combine the minced garlic, chopped rosemary, olive oil, salt, pepper, Dijon mustard (if using) and lemon juice to form a paste.', 'Pat the lamb dry with paper towels. Rub the paste all over the lamb, massaging it into the meat.', 'Place the onion wedges and garlic halves in the centre of a large roasting pan. Place the lamb on top, fat-side up. Scatter the fresh rosemary sprigs around the lamb.', 'Pour the stock into the bottom of the pan to create moisture.', 'Roast the lamb for 20 minutes at 200°C, then reduce the oven temperature to 165°C.', 'Continue roasting for about 1 to 1 1/4 hours (allow 20 minutes per 500g for medium), or until the internal temperature reaches 58-60°C for medium-rare. Baste occasionally with the pan juices.', 'Remove the lamb from the oven, transfer to a carving board, and cover loosely with foil. Rest for 15-20 minutes (this is essential for juicy meat).', 'Carve the lamb against the grain and serve with the pan juices, mint sauce or gravy, and extra rosemary sprigs.']
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
        ingredients: ['600g white fish fillets (barramundi, flathead or snapper)', '1 tbsp olive oil', '1 tbsp lemon juice', '1/2 tsp salt', '1/4 tsp black pepper', '1 cup macadamias, finely chopped', '1/2 cup panko breadcrumbs', '1/4 cup grated Parmesan cheese', '1 tbsp fresh parsley, finely chopped', '1 tsp lemon zest', '1/2 tsp garlic powder', '2 tbsp mayonnaise'],
        method: ['Preheat your oven to 200°C (fan-forced). Line a baking tray with baking paper.', 'Pat the fish fillets dry with paper towels. Place them on the tray and brush lightly with olive oil and lemon juice. Season with salt and pepper.', 'In a medium bowl, combine the chopped macadamias, panko breadcrumbs, Parmesan, parsley, lemon zest and garlic powder.', 'Add the mayonnaise and stir until the mixture comes together and holds its shape when pressed.', 'Press the macadamia mixture firmly onto the top of each fish fillet, covering the surface evenly. Drizzle a little extra olive oil over the crust to help it brown.', 'Bake for 15-18 minutes, or until the fish is cooked through and flakes easily with a fork, and the crust is golden and crisp.', 'Serve immediately with lemon wedges, a green salad or steamed vegetables, and tartare sauce if desired.']
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
        ingredients: ['1 kg pumpkin, peeled, deseeded and chopped', '1 brown onion, chopped', '2 garlic cloves, minced', '2 tbsp olive oil', '4 cups (1L) vegetable stock', '1 cup (250ml) thickened cream (optional)', '1 tsp salt (or to taste)', '1/2 tsp black pepper (or to taste)', '1/4 tsp ground nutmeg (optional)'],
        method: ['Heat the olive oil in a large heavy-based pot over medium heat. Add the onion and cook for 5-6 minutes until soft and translucent. Add the garlic and cook for a further minute until fragrant.', 'Add the chopped pumpkin to the pot and stir to coat in the oil. Cook for 2-3 minutes, stirring occasionally.', 'Pour in the vegetable stock and bring to the boil. Reduce the heat to low, cover, and simmer for 20 minutes, or until the pumpkin is tender and easily pierced with a fork.', 'Remove from the heat and use a stick blender to purée the soup until smooth and velvety. Alternatively, transfer to a blender in batches.', 'Stir in the cream (if using) and season with salt, pepper and nutmeg. Return to a gentle simmer for 2-3 minutes to heat through.', 'Taste and adjust seasoning if necessary. Serve hot with a swirl of cream, a sprinkle of pumpkin seeds, and crusty bread on the side.']
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
        ingredients: ['3 ripe bananas, mashed (about 1 1/2 cups)', '1/3 cup vegetable oil or melted butter', '1/4 cup white sugar', '1/2 cup brown sugar, packed', '2 eggs', '1 tsp vanilla extract', '1 3/4 cups plain flour', '1 tsp baking soda', '1/2 tsp salt', '1/2 tsp ground cinnamon (optional)', '1/2 cup walnuts or chocolate chips (optional)'],
        method: ['Preheat your oven to 175°C (fan-forced). Grease and line a 22cm x 11cm loaf tin with baking paper.', 'In a large bowl, mash the bananas well with a fork until smooth. Add the oil (or melted butter), white sugar, brown sugar, eggs and vanilla. Whisk together until well combined and smooth.', 'In a separate bowl, sift together the plain flour, baking soda, salt and cinnamon (if using).', 'Add the dry ingredients to the wet mixture and fold gently with a spatula until just combined – do not overmix. The batter will be thick and slightly lumpy; this is perfect.', 'Fold in the walnuts or chocolate chips if using.', 'Pour the batter into the prepared loaf tin and smooth the top with a spatula.', 'Bake for 50-60 minutes, or until a skewer inserted into the centre comes out clean. If the top browns too quickly, cover loosely with foil for the last 15 minutes.', 'Allow to cool in the tin for 10 minutes, then turn out onto a wire rack to cool completely. Slice and enjoy warm or at room temperature with a little butter.']
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
        ingredients: ['4 kangaroo steaks (about 150-180g each)', '2 tbsp olive oil', '2 garlic cloves, minced', '1 tbsp Worcestershire sauce', '1 tbsp lemon juice', '1 tsp salt', '1/2 tsp black pepper', '1 tsp fresh rosemary, chopped'],
        method: ['In a shallow dish, combine the olive oil, garlic, Worcestershire sauce, lemon juice, salt, pepper and rosemary to make a marinade.', 'Add the kangaroo steaks to the marinade and turn to coat. Cover and refrigerate for 30 minutes (do not marinate for more than 1 hour, as kangaroo is tender and can become mushy).', 'Remove the steaks from the fridge and allow them to come to room temperature for about 10 minutes before cooking.', 'Preheat your barbecue or grill pan to high heat. Brush the grates with a little oil to prevent sticking.', 'Grill the steaks for 2-3 minutes on each side for medium-rare, or longer to your preference. Kangaroo is best served medium-rare to medium for maximum tenderness.', 'Transfer the steaks to a plate, cover loosely with foil, and rest for 5 minutes – this allows the juices to redistribute.', 'Serve with lemon wedges and your choice of rocket salad or steamed vegetables.']
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
        ingredients: ['3 cups (375g) plain flour', '1 tbsp caster sugar', '2 tsp instant dry yeast', '1 tsp salt', '1 cup (250ml) warm milk', '2 tbsp unsalted butter, melted', '3-4 tbsp Vegemite', '1 cup (100g) grated cheddar cheese', '2 tbsp unsalted butter, softened (for spreading)'],
        method: ['In a large mixing bowl, combine the flour, sugar, yeast and salt. Make a well in the centre and pour in the warm milk and melted butter.', 'Mix with a wooden spoon until a rough dough forms, then turn out onto a lightly floured surface. Knead for 8-10 minutes until the dough is smooth, elastic and springs back when lightly pressed.', 'Place the dough in a lightly oiled bowl, cover with a clean tea towel, and leave in a warm place to rise for 1 hour, or until doubled in size.', 'Punch the dough down and turn it out onto a floured surface. Roll it into a rectangle about 30 x 40 cm.', 'Spread the softened butter evenly over the dough, then spread the Vegemite in a thin layer over the butter. Sprinkle the grated cheese evenly over the top.', 'Roll the dough up tightly from the long side to form a log. Using a sharp knife, cut the log into 12 equal slices (about 3cm thick).', 'Place the scrolls onto a lined baking tray, cut-side up, leaving a little space between them. Cover and let them rest for 15 minutes while you preheat the oven to 180°C.', 'Bake for 18-20 minutes until golden brown and puffed. Serve warm or at room temperature.']
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
        ingredients: ['500g bush tomatoes (or cherry tomatoes), finely chopped', '1 red capsicum, finely chopped', '1 brown onion, finely chopped', '2 garlic cloves, minced', '1 red chilli, finely chopped (optional)', '1/2 cup (125ml) apple cider vinegar', '1/2 cup (100g) brown sugar', '1/4 cup (60ml) olive oil', '1 tsp salt', '1/2 tsp black pepper', '1 tsp mustard seeds', '1 tsp native lemon myrtle (optional)', '1 tsp wattleseed (optional)'],
        method: ['Heat the olive oil in a large heavy-based saucepan over medium heat. Add the onion and cook for 5-6 minutes until soft and translucent. Add the garlic and chilli (if using) and cook for a further minute until fragrant.', 'Add the chopped tomatoes, capsicum, vinegar, brown sugar, salt, pepper, mustard seeds and any optional native spices (lemon myrtle, wattleseed). Stir well to combine.', 'Bring the mixture to a gentle boil, then reduce the heat to low and simmer uncovered for 40-50 minutes, stirring occasionally, until the relish has thickened and turned glossy.', 'For a thicker consistency, continue cooking for a further 10-15 minutes.', 'Remove from the heat and allow to cool slightly. Spoon the hot relish into sterilised jars, seal immediately, and let cool completely before storing.', 'The relish will keep in the refrigerator for up to 3 months.']
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
        ingredients: ['250g plain tea biscuits, crushed', '125g unsalted butter, melted', '2 tbsp desiccated coconut (optional)', '395g (1 can) sweetened condensed milk', '125g unsalted butter (for caramel)', '2 tbsp golden syrup', '200g milk chocolate, chopped', '50g dark chocolate, chopped', '1 tsp vegetable oil'],
        method: ['Line a 20cm x 30cm slice tin with baking paper, allowing the paper to overhang on two sides for easy removal.', 'In a bowl, combine the crushed biscuits, melted butter and coconut (if using). Mix well until the crumbs are evenly moistened.', 'Press the mixture firmly into the base of the prepared tin, using the back of a spoon to create an even, compact layer. Refrigerate for 15 minutes to set.', 'To make the caramel: place the condensed milk, butter and golden syrup in a medium saucepan over medium heat. Stir continuously with a wooden spoon for 8-10 minutes, until the mixture thickens and turns a deep golden colour.', 'Pour the hot caramel over the chilled biscuit base and smooth the top with a spatula. Refrigerate for 1 hour, or until the caramel is firm.', 'To make the topping: melt the milk chocolate, dark chocolate and oil in a heatproof bowl over a saucepan of simmering water (or in the microwave in 30-second bursts), stirring until smooth.', 'Pour the melted chocolate over the chilled caramel layer and spread evenly. Refrigerate for at least 2 hours, or until fully set.', 'Lift out the slice using the baking paper overhang and cut into 20 even slices. Store in an airtight container in the fridge.']
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
        ingredients: ['500g large prawns, peeled and deveined (tails on)', '4 tbsp unsalted butter, cubed', '4 garlic cloves, minced', '1 tbsp olive oil', '1 tsp chilli flakes (optional)', '1 tbsp lemon juice', '2 tbsp fresh parsley, chopped', 'Salt & pepper to taste', 'Lemon wedges to serve'],
        method: ['Pat the prawns dry with paper towels. Season with salt and pepper.', 'Heat the olive oil and 2 tablespoons of the butter in a large skillet over medium-high heat. When the butter is foaming, add the garlic and chilli flakes (if using). Sauté for 30-40 seconds until fragrant, but not coloured.', 'Add the prawns to the pan in a single layer (cook in batches if necessary). Cook for 2-3 minutes per side, until pink, opaque and just cooked through.', 'Add the remaining 2 tablespoons of butter and the lemon juice to the pan. Toss the prawns to coat in the sauce and cook for 1 more minute until the butter is melted and the sauce is glossy.', 'Season with additional salt and pepper if needed. Remove from the heat.', 'Sprinkle with fresh parsley and serve immediately with lemon wedges on the side. Great with crusty bread or rice to soak up the sauce.']
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
        ingredients: ['2 chicken breasts, grilled or pan-fried and sliced', '4 large flour tortillas', '1 cos lettuce, shredded', '1/2 cup Caesar dressing (store-bought or homemade)', '1/4 cup grated Parmesan cheese', 'Salt & pepper to taste'],
        method: ['Season the chicken slices with salt and pepper. If using leftover or store-bought grilled chicken, simply slice it into strips.', 'Warm the tortillas according to package instructions, or in a dry pan for 10 seconds each side.', 'Spread a generous amount of Caesar dressing over the centre of each tortilla, leaving a border at the edges.', 'Top with shredded lettuce, sliced chicken, and a sprinkle of Parmesan cheese.', 'Fold the sides of the tortilla over the filling, then roll up tightly from the bottom. Cut the wrap in half diagonally and serve immediately.']
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
        ingredients: ['4 snapper fillets (or other white fish)', '2 tbsp olive oil', '2 garlic cloves, minced', '1 lemon, sliced', 'Fresh herbs (thyme, parsley or dill)', 'Salt & pepper to taste'],
        method: ['Pat the snapper fillets dry with paper towels. Season both sides with salt and pepper.', 'In a small bowl, mix the olive oil and garlic. Brush this mixture over both sides of the fish.', 'Preheat a grill or barbecue to medium-high heat. Lightly oil the grates to prevent sticking.', 'Place the fish skin-side down on the grill. Cook for 5-6 minutes on each side, or until the fish is opaque and flakes easily with a fork.', 'During the last few minutes of cooking, place lemon slices on the grill and cook until lightly charred.', 'Serve the grilled snapper with the charred lemon slices and a sprinkle of fresh herbs.']
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
        ingredients: ['500g beef mince', '1 onion, finely chopped', '1 carrot, grated', '1 egg', '1/2 cup breadcrumbs', '2 tbsp BBQ sauce', '1 tsp garlic powder', 'Salt & pepper to taste'],
        method: ['In a large bowl, combine all the ingredients – beef mince, onion, grated carrot, egg, breadcrumbs, BBQ sauce, garlic powder, salt and pepper.', 'Mix thoroughly using your hands until everything is well combined.', 'Shape the mixture into 6 equal patties, about 2cm thick. Flatten them slightly and make a small indent in the centre of each to prevent them from puffing up during cooking.', 'Heat a large non-stick frying pan over medium-high heat. Lightly oil the pan.', 'Cook the rissoles for 4-5 minutes on each side, or until browned and cooked through. (The internal temperature should reach 70°C.)', 'Serve hot with mashed potatoes, vegetables, or in a bun as a burger.']
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
        ingredients: ['2 cups corn kernels (fresh, tinned or frozen)', '1 cup plain flour', '2 eggs', '1/2 cup milk', '1 tsp baking powder', '1/2 tsp salt', '1/4 tsp black pepper', '1/4 cup chopped chives or spring onion (optional)', 'Oil for frying'],
        method: ['In a large bowl, combine the flour, baking powder, salt and pepper.', 'In a separate bowl, whisk the eggs and milk together. Add the wet ingredients to the dry ingredients and stir until just combined – the batter should be thick and lumpy.', 'Fold in the corn kernels and chives (if using). Do not overmix.', 'Heat a shallow layer of oil in a large frying pan over medium heat.', 'Drop spoonfuls of the batter into the hot oil (about 2 tablespoons per fritter). Flatten slightly with the back of the spoon.', 'Cook for 2-3 minutes per side, until golden brown and cooked through. Drain on paper towels.', 'Serve warm with sour cream, sweet chilli sauce, or a poached egg on top.']
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
        ingredients: ['3 cups self-raising flour', '1 tsp salt', '1 tbsp butter, cubed', '1 cup milk', '1/2 cup water (or more as needed)'],
        method: ['Preheat your oven to 200°C (fan-forced). Line a baking tray with baking paper.', 'In a large bowl, sift the self-raising flour and salt together. Rub the butter into the flour using your fingertips until the mixture resembles fine breadcrumbs.', 'Make a well in the centre and pour in the milk and most of the water. Mix with a flat-bladed knife until the dough begins to come together. Add extra water if the dough is too dry.', 'Turn the dough out onto a lightly floured surface and gently knead for 1-2 minutes until smooth (do not overwork it).', 'Shape the dough into a round loaf, about 5cm thick. Place onto the prepared tray and use a sharp knife to score a cross on top.', 'Bake for 25-30 minutes, or until the damper is golden brown and sounds hollow when tapped on the bottom.', 'Serve warm with butter, jam, or your favourite savoury spread.']
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
        ingredients: ['1 cup rolled oats', '1 cup plain flour', '1 cup desiccated coconut', '3/4 cup caster sugar', '125g unsalted butter', '2 tbsp golden syrup', '1 tsp baking soda', '2 tbsp boiling water'],
        method: ['Preheat your oven to 160°C (fan-forced). Line two baking trays with baking paper.', 'In a large bowl, combine the rolled oats, plain flour, desiccated coconut and caster sugar.', 'In a small saucepan over low heat, melt the butter and golden syrup together. Stir until smooth.', 'In a separate small bowl, dissolve the baking soda in the boiling water. Pour this into the butter mixture – it will foam up.', 'Immediately pour the wet ingredients into the dry ingredients and stir until well combined.', 'Roll tablespoons of the mixture into balls and place them on the prepared trays, leaving room for spreading. Press down slightly with your fingers.', 'Bake for 15 minutes, or until golden brown. The biscuits will still be soft when you take them out of the oven but will firm up as they cool.', 'Cool on the trays for 5 minutes, then transfer to a wire rack to cool completely. Store in an airtight container.']
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
        ingredients: ['800g beef chuck, cut into 3cm cubes', '1 onion, chopped', '2 carrots, diced', '2 garlic cloves, minced', '1 can (330ml) Guinness beer', '2 tbsp tomato paste', '1 cup beef stock', '2 tbsp plain flour', '2 sheets puff pastry, thawed', '1 egg, beaten (for egg wash)', 'Salt & pepper to taste'],
        method: ['Season the beef cubes generously with salt and pepper. Toss with flour to coat.', 'Heat a large Dutch oven or heavy-based pot over medium-high heat. Add a splash of oil and brown the beef in batches until well seared on all sides. Remove and set aside.', 'Reduce the heat to medium, add the onion, carrots and garlic to the pot. Cook for 5-6 minutes until softened, scraping up any browned bits from the bottom.', 'Return the beef to the pot. Add the tomato paste and cook for 1 minute. Pour in the Guinness and beef stock, stirring well. Bring to a boil, then reduce the heat to low, cover and simmer for 1.5 to 2 hours, or until the beef is tender.', 'Preheat your oven to 200°C (fan-forced).', 'Spoon the beef filling into a large pie dish (or individual pie tins). Allow to cool slightly.', 'Cover the filling with the puff pastry sheets, trimming to fit. Press the edges to seal and brush with beaten egg. Cut a slit in the top to allow steam to escape.', 'Bake for 25-30 minutes, or until the pastry is puffed and golden. Serve hot.']
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
        ingredients: ['500g squid tubes, cleaned and sliced into rings', '1 cup cornflour', '1 tsp salt', '1 tsp white pepper', '1/2 tsp five-spice powder (optional)', 'Oil for deep frying', 'Lemon wedges to serve'],
        method: ['Pat the squid rings thoroughly dry with paper towels – this is crucial for crispy results.', 'In a large bowl or zip-lock bag, combine the cornflour, salt, pepper and five-spice powder (if using).', 'Add the squid rings to the seasoned flour and toss well to coat evenly. Shake off any excess flour.', 'Heat oil in a deep fryer or large pot to 180°C. The oil is ready when a cube of bread browns in 15 seconds.', 'Fry the squid in batches for 2-3 minutes, or until golden and crisp. Do not overcrowd the fryer – cook in small batches.', 'Remove with a slotted spoon and drain on paper towels. Season with a little extra salt while hot.', 'Serve immediately with lemon wedges and a dipping sauce (such as aioli or sweet chilli).']
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
        ingredients: ['500g chicken thigh fillets, cut into strips', '1/4 cup soy sauce', '2 tbsp smooth peanut butter', '1 tbsp curry powder', '1/2 cup coconut milk', '1 tbsp brown sugar', '1 tbsp fish sauce (optional)', 'Skewers (soaked in water if wooden)'],
        method: ['In a bowl, combine the soy sauce, peanut butter, curry powder, coconut milk, brown sugar and fish sauce (if using) to make a marinade.', 'Add the chicken strips to the marinade and toss to coat. Cover and refrigerate for at least 30 minutes, or up to 2 hours.', 'Soak wooden skewers in water for 20 minutes (if using) to prevent burning.', 'Thread the marinated chicken onto the skewers.', 'Preheat a grill, barbecue or grill pan over medium-high heat. Cook the skewers for 3-4 minutes per side, or until charred and cooked through.', 'Serve the satay skewers with extra peanut sauce, cucumber slices, and a wedge of lime.']
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
        ingredients: ['4 chicken thighs (bone-in or boneless)', '1/4 cup soy sauce', '2 tbsp honey', '2 garlic cloves, minced', '1 tbsp fresh ginger, grated', '1 tbsp rice vinegar or lemon juice', '1 tbsp oil for frying'],
        method: ['In a small bowl, whisk together the soy sauce, honey, garlic, ginger and rice vinegar to make the sauce.', 'Heat the oil in a large frying pan over medium-high heat. Season the chicken with salt and pepper.', 'Place the chicken in the pan, skin-side down (if using bone-in thighs), and cook for 5-6 minutes until the skin is golden and crisp. Flip and cook for another 5 minutes.', 'Pour the sauce over the chicken and reduce the heat to medium. Cook for 10-12 minutes, turning occasionally, until the sauce thickens and becomes sticky, and the chicken is fully cooked (internal temperature 75°C).', 'Remove the chicken from the pan, spoon the sauce over the top, and serve with steamed rice and vegetables.']
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
        ingredients: ['1.5 kg pork ribs (American or baby back)', '1 cup BBQ sauce', '2 tbsp brown sugar', '2 garlic cloves, minced', '1 tsp smoked paprika', '1 tsp onion powder', 'Salt & pepper to taste'],
        method: ['Preheat your oven to 160°C (fan-forced).', 'Season the ribs all over with salt, pepper, smoked paprika and onion powder.', 'Place the ribs on a large baking tray lined with foil, meat-side up. Cover with another layer of foil and seal the edges to create a tight packet.', 'Bake for 1.5 to 2 hours, or until the meat is tender and starting to pull away from the bone.', 'In a small bowl, combine the BBQ sauce, brown sugar and garlic.', 'Remove the ribs from the oven, uncover, and brush generously with the BBQ sauce mixture.', 'Increase the oven temperature to 220°C (or use a grill). Return the ribs to the oven, uncovered, for 10-15 minutes until the sauce is caramelised and sticky.', 'Rest for 10 minutes before cutting into individual ribs. Serve with extra BBQ sauce.']
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
        ingredients: ['4 beef steaks (sirloin or ribeye)', '4 bread rolls or slices of sourdough', '1 large onion, sliced', '4 slices cheese (Swiss, cheddar or provolone)', 'BBQ sauce or aioli', 'Butter for spreading'],
        method: ['Season the steaks generously with salt and pepper on both sides.', 'Heat a large frypan or BBQ over high heat. Cook the steaks for 2-3 minutes per side for medium-rare, or longer to your liking. Remove and let rest on a plate.', 'Reduce the heat to medium, add the onion slices to the pan and cook for 5-6 minutes until softened and caramelised, stirring occasionally.', 'Toast the bread or rolls lightly. Spread with butter and a little BBQ sauce or aioli.', 'Slice the rested steaks thinly against the grain.', 'Assemble the sandwiches: place sliced steak on the bottom half of the bread, top with caramelised onions and a slice of cheese. Add the top half and press down gently.', 'Serve immediately, with chips or a side salad.']
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
        ingredients: ['2 chicken breasts, cooked and diced', '2 avocados, diced', '1 cup cherry tomatoes, halved', '1/2 red onion, thinly sliced', '1/4 cup olive oil', '2 tbsp lemon juice', '1 tsp Dijon mustard', 'Salt & pepper to taste'],
        method: ['In a large salad bowl, combine the diced chicken, avocado, cherry tomatoes and red onion.', 'In a small jar or bowl, whisk together the olive oil, lemon juice, Dijon mustard, salt and pepper until emulsified.', 'Pour the dressing over the salad and toss gently to combine, being careful not to break up the avocado too much.', 'Taste and adjust seasoning. Serve immediately as a main or side salad.']
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
        ingredients: ['500g seafood mix (prawns, fish chunks, mussels)', '1 onion, chopped', '2 garlic cloves, minced', '4 cups fish stock', '1 cup thickened cream', '2 potatoes, peeled and diced', '1 tsp thyme', 'Salt & pepper to taste', 'Fresh parsley for garnish'],
        method: ['Heat a large pot over medium heat. Add a splash of oil, then sauté the onion and garlic until soft and fragrant, about 5 minutes.', 'Add the diced potatoes and thyme, and pour in the fish stock. Bring to a boil, then reduce heat and simmer for 15 minutes, or until the potatoes are tender.', 'Stir in the seafood mix and cook for 5-7 minutes, or until the prawns are pink and the fish is cooked through.', 'Reduce the heat to low and stir in the cream. Heat gently for 2-3 minutes, but do not boil.', 'Season with salt and pepper to taste. Ladle into bowls and garnish with fresh parsley. Serve with crusty bread.']
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
        ingredients: ['500g pasta (fettuccine or tagliatelle)', '300g mushrooms, sliced', '2 garlic cloves, minced', '1 cup thickened cream', '1/2 cup grated Parmesan cheese', '2 tbsp unsalted butter', '2 tbsp fresh parsley, chopped', 'Salt & pepper to taste'],
        method: ['Bring a large pot of salted water to the boil. Cook the pasta according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.', 'While the pasta cooks, heat a large skillet over medium heat. Melt the butter, then add the sliced mushrooms and garlic. Sauté for 6-8 minutes until the mushrooms are golden and their liquid has evaporated.', 'Pour in the cream and bring to a gentle simmer. Cook for 3-4 minutes until the sauce thickens slightly.', 'Stir in the grated Parmesan cheese and cook until melted and smooth. Season with salt and pepper.', 'Add the drained pasta to the sauce, along with a splash of the reserved pasta water if needed to loosen the sauce. Toss to coat the pasta evenly.', 'Garnish with fresh parsley and extra Parmesan before serving.']
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
        ingredients: ['4 bread rolls (soft, burger-style)', '8 bacon slices', '4 eggs', 'BBQ sauce or ketchup', 'Butter for spreading'],
        method: ['Heat a large frying pan over medium heat. Cook the bacon until crisp, then remove and drain on paper towel.', 'In the same pan, fry the eggs to your liking – sunny-side up or over-easy.', 'Slice the rolls in half and toast them lightly in the pan or toaster. Spread with butter.', 'Place two slices of bacon on each roll base, top with a fried egg, and drizzle with BBQ sauce or ketchup.', 'Add the roll tops and press gently. Serve immediately.']
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
        ingredients: ['500g spinach, roughly chopped', '200g feta cheese, crumbled', '3 eggs', '1 onion, finely chopped', '2 sheets shortcrust or puff pastry', 'Salt & pepper to taste', '1/2 cup milk or cream (optional)'],
        method: ['Preheat your oven to 200°C (fan-forced). Grease a deep 23cm pie dish.', 'Line the dish with one pastry sheet, pressing it into the edges and trimming any overhang.', 'In a large bowl, whisk the eggs with the milk or cream (if using). Add the chopped spinach, crumbled feta, onion, salt and pepper. Mix well.', 'Pour the filling into the pastry case.', 'If using a second pastry sheet, place it over the top and seal the edges, or leave it open as a tart. Brush the top with beaten egg for a golden finish.', 'Bake for 30-35 minutes, or until the filling is set and the pastry is golden brown.', 'Allow to cool for 10 minutes before slicing. Serve warm or at room temperature.']
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
        ingredients: ['1.5 kg beef chuck, cut into 4cm cubes', '2 onions, chopped', '4 carrots, peeled and sliced', '4 cups beef stock', '3 garlic cloves, minced', '2 tbsp tomato paste', '2 bay leaves', '1 tsp dried thyme', 'Salt & pepper to taste'],
        method: ['Season the beef generously with salt and pepper. Heat a large Dutch oven over medium-high heat, add oil, and brown the beef in batches until well seared. Set aside.', 'Reduce the heat to medium, add onions and carrots, and cook for 5 minutes until softened. Add garlic and cook for 1 minute.', 'Stir in the tomato paste and cook for 1 minute. Return the beef to the pot.', 'Pour in the beef stock, add bay leaves and thyme. Bring to a simmer, then cover and reduce the heat to low.', 'Cook for 3-4 hours, or until the beef is very tender and the sauce has thickened. Stir occasionally.', 'Taste and adjust seasoning. Remove the bay leaves before serving. Serve with mashed potatoes or crusty bread.']
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
        ingredients: ['1 kg potatoes (sebago or desiree), peeled and cut into chunks', '4 garlic cloves, crushed', '2 tbsp fresh rosemary and thyme, chopped', '2 tbsp olive oil', '1 tsp salt', '1/2 tsp black pepper'],
        method: ['Preheat your oven to 200°C (fan-forced).', 'Parboil the potatoes in salted water for 8-10 minutes, until just tender on the outside. Drain well and steam dry for 5 minutes.', 'Return the potatoes to the pot, cover with a lid, and shake vigorously to rough up the edges – this creates extra crispiness.', 'In a large bowl, combine the potatoes, garlic, herbs, olive oil, salt and pepper. Toss well to coat.', 'Spread the potatoes in a single layer on a baking tray. Roast for 35-40 minutes, turning halfway, until golden and crispy.', 'Serve hot as a side dish.']
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
        ingredients: ['200g plain biscuits (like Digestives), crushed', '100g unsalted butter, melted', '500g cream cheese, softened', '1 cup thickened cream', '1/2 cup caster sugar', '2 mangoes, peeled and puréed', '1 tsp vanilla extract'],
        method: ['Line the base of a 20cm springform tin with baking paper.', 'Combine the crushed biscuits and melted butter in a bowl. Press the mixture firmly into the base of the tin. Refrigerate while making the filling.', 'In a large bowl, beat the cream cheese and sugar until smooth. Add the vanilla and mango purée, and mix until combined.', 'In a separate bowl, whip the thickened cream to soft peaks. Fold the whipped cream into the cream cheese mixture gently, until no streaks remain.', 'Pour the filling over the biscuit base and smooth the top. Refrigerate for at least 4 hours, or overnight until set.', 'Serve chilled, topped with extra mango slices or passionfruit pulp.']
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
        ingredients: ['200g plain biscuits, crushed', '100g unsalted butter, melted', '1 cup icing sugar', '1/2 cup passionfruit pulp (about 4-5 passionfruit)', '1 cup desiccated coconut'],
        method: ['Line a 20cm x 30cm slice tin with baking paper.', 'Combine the crushed biscuits and melted butter in a bowl. Press into the base of the tin and refrigerate while making the topping.', 'In a bowl, mix the icing sugar, passionfruit pulp and coconut until well combined.', 'Spread the passionfruit mixture evenly over the biscuit base.', 'Refrigerate for at least 2 hours, or until firm. Cut into slices and serve chilled.']
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
        ingredients: ['6 apples (Granny Smith or Pink Lady), peeled and sliced', '1/2 cup caster sugar', '1 cup plain flour', '1 cup rolled oats', '125g unsalted butter, cold and cubed', '1 tsp ground cinnamon'],
        method: ['Preheat your oven to 180°C (fan-forced). Grease a 20cm x 25cm baking dish.', 'Place the sliced apples in the baking dish and sprinkle with half the sugar and half the cinnamon.', 'In a large bowl, combine the flour, rolled oats, remaining sugar and cinnamon. Rub in the cold butter cubes with your fingers until the mixture resembles coarse breadcrumbs.', 'Sprinkle the crumble topping evenly over the apples.', 'Bake for 35-40 minutes, until the topping is golden and the apple filling is bubbling.', 'Serve warm with custard, cream or vanilla ice cream.']
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
        ingredients: ['200g pitted dates, chopped', '1 cup boiling water', '125g unsalted butter, softened', '1 cup brown sugar', '2 eggs', '1 1/2 cups plain flour', '1 tsp baking soda', '1 tsp vanilla extract'],
        method: ['Preheat your oven to 180°C (fan-forced). Grease a 20cm square cake tin.', 'Place the chopped dates and baking soda in a bowl, pour over the boiling water and set aside for 10 minutes to soften.', 'In a large bowl, cream the butter and brown sugar until pale and fluffy. Add the eggs one at a time, beating well after each addition.', 'Fold in the flour, vanilla, and the date mixture (including the water) until just combined.', 'Pour the batter into the prepared tin and smooth the top. Bake for 30-35 minutes, until a skewer inserted comes out clean.', 'While the pudding bakes, make the sauce: in a small saucepan, heat 1/2 cup brown sugar, 1/2 cup cream and 1/4 cup butter until melted and smooth.', 'Serve the pudding warm with the caramel sauce drizzled over.']
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
        ingredients: ['4 chicken breasts (or 8 thighs)', '2 tbsp lemon myrtle leaves (or zest of 2 lemons)', '2 garlic cloves, minced', '1/4 cup olive oil', 'Salt & pepper to taste'],
        method: ['In a bowl, combine the lemon myrtle, garlic, olive oil, salt and pepper to make a paste.', 'Coat the chicken pieces thoroughly with the marinade. Cover and refrigerate for 30 minutes to 2 hours.', 'Preheat a grill or BBQ to medium-high heat. Grill the chicken for 5-6 minutes per side (depending on thickness), until cooked through and charred.', 'Rest for 5 minutes before serving. Serve with a squeeze of lemon and a fresh salad.']
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
        ingredients: ['4 salmon fillets', '2 tbsp olive oil', '1 lemon, sliced', 'Fresh dill, parsley and chives, chopped', 'Salt & pepper to taste'],
        method: ['Pat salmon fillets dry with paper towels. Season with salt and pepper on both sides.', 'Brush each fillet with olive oil.', 'Preheat a grill or barbecue to medium-high heat. Place the salmon skin-side down and cook for 5-6 minutes until the skin is crisp and the fish is easily flipped.', 'Flip and cook for another 3-4 minutes, depending on thickness, until the salmon is cooked to your liking.', 'Sprinkle with fresh herbs and serve with lemon slices on the side.']
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
        ingredients: ['3 cups cooked and cooled rice (day-old works best)', '2 chicken breasts, diced', '2 eggs, beaten', '1 onion, diced', '1/2 cup frozen peas', '1/2 cup carrots, diced', '3 tbsp soy sauce', '2 tbsp vegetable oil', '2 spring onions, sliced'],
        method: ['Heat 1 tablespoon of oil in a wok or large frying pan over high heat. Pour in the beaten eggs and scramble until cooked. Remove and set aside.', 'Add the remaining oil to the pan, then add the chicken and cook until golden and cooked through. Remove and set aside.', 'Add the onion, peas and carrots to the pan. Stir-fry for 2-3 minutes until slightly softened.', 'Add the cooked rice and soy sauce, stirring well to combine. Return the scrambled egg and chicken to the pan.', 'Stir-fry for a further 2-3 minutes until everything is heated through. Add spring onions and serve hot.']
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
        ingredients: ['1/2 green cabbage, finely shredded', '2 carrots, grated', '1/2 cup mayonnaise', '2 tbsp apple cider vinegar', '1 tbsp sugar', 'Salt & pepper to taste'],
        method: ['In a large bowl, combine the shredded cabbage and grated carrots.', 'In a separate small bowl, whisk together the mayonnaise, vinegar, sugar, salt and pepper until smooth.', 'Pour the dressing over the vegetables and toss well to coat evenly.', 'Cover and refrigerate for at least 30 minutes before serving, to allow the flavours to meld.']
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
        ingredients: ['500g linguine pasta', '500g large prawns, peeled and deveined', '4 garlic cloves, sliced', '1 red chilli, finely chopped (optional)', '1/2 cup olive oil', 'Juice of 1 lemon', '1/2 cup fresh parsley, chopped', 'Salt & pepper to taste'],
        method: ['Cook the linguine in a large pot of salted boiling water according to package directions until al dente. Reserve 1/2 cup of pasta water.', 'While the pasta cooks, heat the olive oil in a large skillet over medium heat. Add the garlic and chilli (if using) and cook until fragrant, about 1 minute.', 'Add the prawns to the pan and cook for 2-3 minutes per side until pink and cooked through.', 'Drain the pasta and add it to the skillet with the prawns. Pour in the lemon juice and toss to combine. If the sauce seems dry, add a splash of the reserved pasta water.', 'Season with salt and pepper, and toss through the fresh parsley. Serve immediately.']
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
        ingredients: ['200g dark chocolate, chopped', '150g unsalted butter', '1 cup caster sugar', '3 eggs', '1 cup plain flour', '1 cup macadamia nuts, roughly chopped', '1 tsp vanilla extract'],
        method: ['Preheat your oven to 180°C (fan-forced). Grease and line a 20cm x 20cm square tin.', 'Melt the chocolate and butter together in a heatproof bowl over a saucepan of simmering water (or in the microwave in 30-second bursts). Stir until smooth. Allow to cool slightly.', 'Whisk in the sugar and vanilla. Add the eggs one at a time, whisking well after each addition.', 'Fold in the flour and chopped macadamias until just combined – do not overmix.', 'Pour the batter into the prepared tin and smooth the top. Bake for 25-30 minutes, until the top is cracked and a skewer inserted comes out with a few moist crumbs attached.', 'Allow to cool completely in the tin before cutting into squares.']
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
