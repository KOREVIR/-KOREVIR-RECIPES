// ============================================================
// KOREVIR – PREMIUM BRAND EXPERIENCE
// ============================================================

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0HCZRBFY7';

// ============================================================
// 50 TARİF – HER BİRİNİN METHOD'U 8-9 ADIM, CHEF TIP VE SERVING SUGGESTION UZUN VE ÖZEL
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
            'Preheat your oven to 200°C (400°F) and position a rack in the middle. Line a baking tray with parchment paper for easy cleanup.',
            'Place each chicken breast between two sheets of baking paper and gently pound with a rolling pin or meat mallet to an even thickness of about 1 cm (½ inch). This ensures even cooking.',
            'Season both sides of the chicken generously with salt and freshly cracked black pepper. Let them sit at room temperature for 10 minutes while you prepare the coating.',
            'Set up three shallow bowls: one with plain flour, one with beaten eggs, and one with a mixture of breadcrumbs and grated Parmesan cheese. Season the breadcrumb mixture with a pinch of salt and pepper.',
            'Coat each chicken breast first in flour, shaking off excess, then dip into the egg, allowing any excess to drip off, and finally press firmly into the breadcrumb mixture, ensuring an even, thick coating.',
            'Heat olive oil in a large oven-safe skillet over medium-high heat until shimmering. Fry the chicken for 3–4 minutes per side until deeply golden and crispy. The crust should be firm to the touch.',
            'Transfer the skillet to the preheated oven (or transfer chicken to the prepared baking tray). Spread a generous layer of tomato passata over each breast, then sprinkle with minced garlic and dried oregano. Top with shredded mozzarella cheese.',
            'Bake for 20–25 minutes until the cheese is melted, bubbly, and starting to brown in spots. The chicken should reach an internal temperature of 75°C (165°F).',
            'Remove from the oven and let rest for 5 minutes before serving. This allows the juices to redistribute, keeping the chicken moist and tender.'
        ],
        chefTip: 'For an even more intense flavour, add a few fresh basil leaves on top of the cheese before baking. You can also use a mix of mozzarella and provolone for a richer, more complex cheesy topping. If you have time, make your own tomato sauce by simmering crushed tomatoes with garlic, onion, and basil for 30 minutes – it takes this dish to the next level.',
        servingSuggestion: 'Serve your Chicken Parmigiana with a side of al dente spaghetti tossed in garlic and olive oil, or creamy mashed potatoes. A crisp green salad with a lemon vinaigrette balances the richness perfectly. Pair with a medium-bodied red wine like Sangiovese or a cold Australian lager for a truly satisfying meal.'
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
        ingredients: ['500g beef mince', '1 onion, finely chopped', '1 garlic clove, minced', '1 carrot, diced', '1 celery stalk, diced', '2 tbsp tomato paste', '1 tbsp Worcestershire sauce', '1 cup beef stock', '1 tsp dried thyme', '2 sheets puff pastry (thawed if frozen)', '1 egg, beaten for glazing'],
        method: [
            'Heat a large frying pan or sauté pan over medium heat and add a splash of olive oil. Cook the onion, garlic, carrot, and celery for 5–6 minutes until softened and lightly caramelised. Stir occasionally to prevent burning.',
            'Add the beef mince to the pan, breaking it up with a wooden spoon. Cook for 8–10 minutes until the mince is browned all over and any liquid has evaporated. Season with salt and pepper.',
            'Stir in the tomato paste and Worcestershire sauce, cooking for 1–2 minutes until the paste darkens and becomes fragrant. This step deepens the flavour of the filling.',
            'Pour in the beef stock and add the dried thyme. Bring to a simmer, then reduce the heat to low and cook for 10–15 minutes, stirring occasionally, until the liquid has thickened and the mixture is rich and glossy. Remove from heat and let cool completely.',
            'Preheat your oven to 200°C (400°F). On a lightly floured surface, roll out the puff pastry sheets to smooth out any creases. Cut each sheet into rectangles large enough to fit your pie tins or ramekins.',
            'Spoon the cooled meat filling into the pastry-lined tins, filling them almost to the top. Brush the edges of the pastry with beaten egg, then place another pastry layer on top. Press the edges together to seal, then trim any excess.',
            'Brush the tops of the pies with more beaten egg and cut a small slit in the centre of each to allow steam to escape. This prevents the pastry from becoming soggy.',
            'Place the pies on a baking tray and bake for 20–25 minutes until the pastry is puffed, golden, and crisp. Rotate the tray halfway through for even browning.',
            'Allow the pies to rest for 5 minutes before serving – the filling will be piping hot and the pastry will be at its flakiest.'
        ],
        chefTip: 'For an extra flavour boost, add a tablespoon of Vegemite or Marmite to the filling along with the stock – it adds a wonderful savoury depth that Aussies love. You can also replace half the beef mince with pork mince for a juicier, more succulent filling. If you have time, make the filling a day ahead – the flavours meld beautifully overnight.',
        servingSuggestion: 'Serve these classic meat pies with a generous dollop of tomato sauce (ketchup) on the side, along with a simple green salad or steamed peas. They’re perfect for a casual family dinner or a weekend lunch. Pair with a crisp, cold beer or a glass of full-bodied Shiraz.'
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
        ingredients: ['4 barramundi fillets (skin on)', 'Salt & pepper', '1 tbsp olive oil', '60g unsalted butter', '2 garlic cloves, minced', 'Juice of 1 lemon', 'Zest of 1 lemon', '2 tbsp capers, drained', '1 tbsp fresh parsley, chopped'],
        method: [
            'Pat the barramundi fillets completely dry with paper towels – this is essential for achieving crispy skin. Season both sides generously with salt and freshly ground pepper.',
            'Heat a large non-stick skillet over medium-high heat and add the olive oil. When the oil is shimmering, place the fish skin-side down in the pan. Press down gently with a spatula to ensure the skin makes full contact with the pan.',
            'Cook the fish skin-side down for 4–5 minutes without moving it, until the skin is golden and crispy. You’ll see the edges start to turn opaque. Flip the fillets carefully and cook for a further 2–3 minutes on the flesh side, until the fish flakes easily with a fork.',
            'Remove the fish from the pan and set aside on a warm plate. Reduce the heat to medium and add the butter to the pan. Allow it to melt and start to foam slightly.',
            'Add the minced garlic to the butter and cook for 30 seconds until fragrant, stirring constantly to prevent burning. The garlic should become golden but not brown.',
            'Stir in the lemon juice, lemon zest, and capers. Cook for 1–2 minutes, scraping any browned bits from the bottom of the pan, until the sauce thickens slightly and becomes glossy.',
            'Return the barramundi fillets to the pan, spooning some of the lemon butter sauce over the top. Allow them to warm through for 1 minute, basting them with the sauce.',
            'Garnish with freshly chopped parsley and serve immediately. The sauce should be pooled around the fish, ready to be soaked up.',
            'For an extra touch, add a squeeze of fresh lemon over each fillet just before serving.'
        ],
        chefTip: 'If you can’t find barramundi, snapper or sea bass work beautifully as substitutes. For a more aromatic sauce, add a teaspoon of finely chopped fresh dill or tarragon along with the parsley. Remember to let the fish rest for a couple of minutes before serving – this helps the juices settle and keeps the flesh moist and flaky.',
        servingSuggestion: 'Serve the barramundi with a side of steamed asparagus or green beans, and creamy mashed potatoes or roasted baby potatoes. A crisp, dry white wine like Sauvignon Blanc or a zesty Australian Riesling complements the lemon butter sauce perfectly. Add a slice of crusty bread to mop up every last drop of sauce.'
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
        ingredients: ['125g unsalted butter, softened', '1 cup caster sugar', '2 tsp vanilla extract', '4 large eggs', '1 1/4 cups self-raising flour, sifted', '1/2 cup milk', 'For the sauce: 1 cup caster sugar, 1/2 cup cocoa powder, 125g butter, 1 cup milk', '2 cups desiccated coconut for coating'],
        method: [
            'Preheat your oven to 180°C (350°F). Grease a 20cm square cake tin and line the base with baking paper. Ensure the paper extends above the edges for easy lifting later.',
            'In a large mixing bowl, beat the softened butter, caster sugar, and vanilla extract together with an electric mixer until pale, light, and fluffy. This should take about 3–4 minutes.',
            'Add the eggs one at a time, beating well after each addition. Scrape down the sides of the bowl occasionally to ensure everything is well combined. The mixture may look slightly curdled at this stage – that’s normal.',
            'Gently fold in the sifted self-raising flour and milk alternately, starting and ending with flour. Use a large metal spoon or spatula and fold until just combined – be careful not to overmix, as this can make the sponge dense.',
            'Pour the batter into the prepared tin and smooth the top with a spatula. Bake for 30–35 minutes, or until a skewer inserted into the centre comes out clean and the cake springs back when lightly pressed.',
            'Allow the cake to cool in the tin for 10 minutes, then turn out onto a wire rack to cool completely. Once cool, cut the cake into 12 equal squares using a serrated knife.',
            'For the chocolate sauce, combine the caster sugar, cocoa powder, butter, and milk in a medium saucepan over low heat. Stir constantly until the butter has melted and the mixture is smooth and glossy. Do not boil.',
            'Pour the sauce into a shallow bowl and allow it to cool slightly – it should be warm but not hot. Dip each sponge square into the sauce, turning to coat all sides evenly, then roll in desiccated coconut until fully covered.',
            'Place the coated Lamingtons on a wire rack set over a baking tray to set for at least 30 minutes before serving. The coconut will stick to the chocolate sauce as it firms up.'
        ],
        chefTip: 'For a variation, you can replace half the cocoa with melted dark chocolate for an even richer sauce. If you want to make them extra special, fill the Lamingtons with a dollop of whipped cream and raspberry jam before coating – they become a delightful "cream-filled" version. Make sure the cake is completely cool before cutting and dipping, otherwise it will crumble and absorb too much sauce.',
        servingSuggestion: 'Enjoy your Lamingtons with a cup of strong Australian tea or a flat white coffee. They also make a wonderful dessert served with fresh berries and a dollop of double cream. These treats are perfect for Australia Day celebrations, afternoon teas, or any time you need a nostalgic sweet indulgence.'
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
        ingredients: ['4 slices of your favourite bread (white or wholemeal)', 'Butter, softened', 'Vegemite (or Marmite)'],
        method: [
            'Select your bread – a good quality white or wholemeal loaf works best. Avoid very thick slices as they can become too dry. Cut the slices to your preferred thickness.',
            'Toast the bread in a toaster or under a grill until it is golden and crisp on both sides. The toast should be firm enough to hold the spread without becoming soggy.',
            'Remove the toast from the toaster and place it on a plate or board. While it’s still warm, spread a generous layer of softened butter over the entire surface. The butter should melt slightly into the toast, creating a rich base.',
            'Using a knife or butter spreader, take a small amount of Vegemite – about the size of a pea for a single slice. Spread it thinly and evenly over the butter. Remember, less is more – a little Vegemite goes a long way.',
            'Gently press the knife into the toast to help the Vegemite combine with the butter, creating a smooth, even layer. If you prefer a stronger flavour, you can add a little more, but start with a small amount.',
            'Cut the toast diagonally into triangles or rectangles, whichever you prefer. This makes it easier to eat and looks more appealing.',
            'Serve immediately while the toast is still warm and the butter is slightly melted. Vegemite on toast is best enjoyed fresh.',
            'If you’re feeling adventurous, you can add a slice of cheese on top (after the Vegemite) and pop it under the grill for a melted cheese twist.',
            'Enjoy your classic Aussie breakfast with a cup of hot tea or a glass of cold milk.'
        ],
        chefTip: 'The key to perfect Vegemite on toast is to use plenty of butter – it not only adds richness but also helps to mellow the intense saltiness of the Vegemite. Spread the Vegemite very thinly; you should be able to see the toast through it. If you’re new to Vegemite, start with a tiny amount and gradually increase according to your taste. For a more gourmet twist, try it on sourdough or rye bread.',
        servingSuggestion: 'Serve your Vegemite toast as a quick and satisfying breakfast, a light snack, or alongside a bowl of soup for lunch. It also pairs wonderfully with a poached egg on top for an extra protein boost. A side of fresh fruit or a small salad can add a nice contrast to the savoury, salty flavour.'
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
        ingredients: ['4 large egg whites, at room temperature', '1 cup caster sugar', '1 tsp white vinegar', '1 tsp cornflour (cornstarch)', '1 tsp vanilla extract', '300ml thickened cream', '2 tbsp icing sugar', 'Assorted fresh fruits (e.g., strawberries, kiwi, passionfruit, blueberries)'],
        method: [
            'Preheat your oven to 120°C (250°F) and line a large baking tray with parchment paper. Draw a 20cm (8-inch) circle on the paper as a guide for shaping the pavlova.',
            'In a large, clean, grease-free bowl, beat the egg whites with an electric mixer on medium speed until soft peaks form. The peaks should flop over slightly when you lift the beaters.',
            'Gradually add the caster sugar, one tablespoon at a time, beating well after each addition. Continue beating until the meringue is thick, glossy, and firm peaks form – the sugar should be completely dissolved. Rub a little between your fingers to check for grittiness; it should feel smooth.',
            'Gently fold in the vinegar, cornflour, and vanilla extract using a large metal spoon or spatula. Fold just until combined; be careful not to deflate the meringue.',
            'Spoon the meringue onto the prepared tray within the circle, shaping it into a round with a slight dip in the centre (like a nest). Use a spatula to smooth the sides and top, creating gentle peaks if desired.',
            'Place the pavlova in the oven and immediately reduce the temperature to 110°C (225°F). Bake for 75–90 minutes, or until the outside is crisp and dry to the touch, and the pavlova is a pale cream colour. Turn off the oven and leave the pavlova inside with the door slightly ajar to cool completely – this prevents cracking.',
            'Once the pavlova is completely cool (this can take several hours), transfer it to a serving plate. In a chilled bowl, whip the thickened cream with icing sugar until soft peaks form. Do not overbeat, or it will become grainy.',
            'Spoon the whipped cream into the centre of the pavlova, spreading it to the edges. Top with your selection of fresh fruits – arrange them artfully for a beautiful presentation. Drizzle with passionfruit pulp for extra tang and shine.',
            'Serve immediately after topping, as the pavlova will begin to soften. The contrast of the crisp shell and the soft, marshmallow-like centre is what makes this dessert so irresistible.'
        ],
        chefTip: 'The key to a perfect pavlova is patience – it must cool slowly in the oven to avoid cracking. Use older eggs (a week or two old) as they whip better. Ensure your bowl and beaters are completely clean and free of any grease, as even a tiny amount can prevent the egg whites from forming stiff peaks. For a tropical twist, top with passionfruit, mango, and toasted coconut flakes.',
        servingSuggestion: 'Serve your pavlova as a stunning centrepiece for any celebration – it’s especially popular at Christmas and Australia Day. Pair it with a dollop of extra whipped cream and a drizzle of berry coulis. A glass of sparkling wine or a fruity dessert wine complements the sweetness beautifully. Enjoy it fresh – pavlova is best eaten on the day it’s made.'
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
        ingredients: ['600g white fish fillets (e.g., cod, hoki, or barramundi)', '1 cup plain flour', '1/2 cup cornflour', '1 tsp baking powder', '1 cup sparkling water (chilled)', '4 large potatoes (e.g., Russet or Sebago)', 'Vegetable or canola oil for deep-frying', 'For tartare sauce: 1/2 cup mayonnaise, 1 tbsp chopped gherkins, 1 tsp capers, 1 tsp lemon juice', 'Salt and pepper, lemon wedges for serving'],
        method: [
            'Peel the potatoes and cut them into thick chips (about 1.5 cm wide). Place them in a bowl of cold water and soak for 30 minutes to remove excess starch, then drain and pat completely dry with a clean tea towel.',
            'Heat the oil in a deep fryer or large heavy-bottomed pot to 160°C (320°F). Use a kitchen thermometer to monitor the temperature. Fry the chips in batches for 5–6 minutes until they are soft and pale, but not browned. Drain on paper towels and set aside. This is the first frying – it par-cooks the chips.',
            'Increase the oil temperature to 180°C (350°F). In a large bowl, whisk together the plain flour, cornflour, baking powder, and a pinch of salt. Gradually add the sparkling water, whisking until you have a smooth, lump-free batter with a consistency similar to thick cream.',
            'Pat the fish fillets dry with paper towels and season lightly with salt and pepper. Dip each fillet into the batter, allowing any excess to drip off. The batter should coat the fish evenly.',
            'Carefully lower the battered fish into the hot oil (180°C) and fry for 4–5 minutes, turning once, until golden and crispy. The fish should float to the surface and the batter should be puffed and crisp. Drain on paper towels.',
            'For the second fry, re-fry the chips at 180°C for 4–5 minutes until they are golden brown and crisp. Drain again and season with salt immediately.',
            'To make the tartare sauce, combine the mayonnaise, chopped gherkins, capers, and lemon juice in a small bowl. Season with a pinch of salt and pepper, and mix well. Chill until ready to serve.',
            'Serve the fish and chips hot, accompanied by the tartare sauce, lemon wedges, and a generous sprinkle of salt. For a traditional touch, serve with a side of mushy peas.',
            'Enjoy your classic Aussie fish and chips – it’s best eaten fresh, with plenty of napkins on hand.'
        ],
        chefTip: 'For an extra crispy batter, use ice-cold sparkling water and make sure the fish is patted completely dry before dipping. You can also replace half the plain flour with rice flour for an even lighter, crunchier coating. If you don’t have a deep fryer, a large, heavy-based pot works well – just ensure you have enough oil to cover the fish and never fill the pot more than half full with oil for safety.',
        servingSuggestion: 'Serve your fish and chips wrapped in newspaper (or a paper cone) for an authentic chippy experience. Accompany with a side of pickled onions, a wedge of lemon, and a generous helping of tartare sauce. This dish is perfect for a casual Friday night dinner or a beachside picnic. Pair with a cold, crisp Australian lager or a chilled Sauvignon Blanc.'
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
        ingredients: ['500g beef mince (preferably 80% lean)', '1 tbsp BBQ sauce', '1 tsp Worcestershire sauce', '1 tsp garlic powder', '4 burger buns (brioche or sesame)', '4 slices of cheese (e.g., cheddar or Swiss)', 'Lettuce leaves, sliced tomato, sliced onion, canned beetroot slices', '4 tbsp burger sauce (mix mayo and ketchup)', '4 large potatoes (for homemade chips, optional)'],
        method: [
            'In a large bowl, combine the beef mince, BBQ sauce, Worcestershire sauce, garlic powder, and a generous pinch of salt and pepper. Mix gently with your hands until just combined – do not overwork the meat, as this can make the patties tough.',
            'Divide the mixture into 4 equal portions and shape each into a patty about 2 cm thick. Make a slight indent in the centre of each patty with your thumb – this helps them cook evenly and prevents them from puffing up in the middle.',
            'Preheat a grill, barbecue, or large frying pan over medium-high heat. Lightly oil the cooking surface. Cook the patties for 3–4 minutes on one side, then flip and cook for another 3–4 minutes for medium. For well-done, cook for 5 minutes per side.',
            'In the last minute of cooking, place a slice of cheese on each patty and cover the pan or grill to melt the cheese. Remove the patties from the heat and let them rest for a few minutes while you prepare the buns.',
            'Cut the burger buns in half and toast them on the grill or in a toaster until lightly golden and crisp. This adds texture and prevents the buns from becoming soggy.',
            'Spread the burger sauce on the bottom half of each bun. Layer with lettuce, a slice of tomato, a few onion rings, and a beetroot slice (pat dry with paper towel to remove excess liquid). Place the cheesy patty on top.',
            'Add the top half of the bun and press down gently. Secure with a skewer or toothpick if desired.',
            'If making chips, cut the potatoes into thick wedges, toss in oil and salt, and bake at 200°C (400°F) for 20–25 minutes until golden and crispy.',
            'Serve your Aussie beef burger immediately, with a side of hot chips and extra burger sauce for dipping.'
        ],
        chefTip: 'For a truly authentic Aussie burger, don’t skip the beetroot – it’s a defining ingredient. You can also add a fried egg on top for an extra indulgent "burger with the lot". Use a blend of chuck and brisket mince for a juicier patty. If you have time, chill the formed patties in the fridge for 30 minutes before cooking – this helps them hold their shape better on the grill.',
        servingSuggestion: 'Serve your burger with a generous side of golden, crispy chips and a cold glass of your favourite Australian beer or a soft drink. This burger is perfect for a backyard barbecue, a casual dinner with friends, or a weekend treat. Add a side of coleslaw for extra freshness and crunch.'
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
        ingredients: ['500g beef mince', '1 onion, finely chopped', '1 garlic clove, minced', '1 tbsp Worcestershire sauce', '1 tbsp tomato sauce (ketchup)', '1 tsp dried thyme', '2 sheets puff pastry (thawed if frozen)', '1 egg, beaten (for glazing)', 'Sesame seeds for sprinkling'],
        method: [
            'Preheat your oven to 200°C (400°F). Line a large baking tray with parchment paper and set aside.',
            'In a large frying pan, heat a splash of oil over medium heat and cook the onion and garlic for 4–5 minutes until soft and translucent. Remove from the heat and allow to cool slightly.',
            'In a mixing bowl, combine the beef mince, cooked onion and garlic, Worcestershire sauce, tomato sauce, thyme, and a generous pinch of salt and pepper. Mix thoroughly with your hands until all ingredients are evenly incorporated.',
            'On a lightly floured surface, roll out each puff pastry sheet slightly to smooth out any creases. Cut each sheet in half lengthwise, giving you four long rectangles.',
            'Divide the meat mixture into four equal portions and shape each into a long log, about the length of the pastry rectangles. Place a log of filling along the centre of each pastry rectangle.',
            'Brush the edges of the pastry with beaten egg, then fold one side over the filling and press to seal. Fold the other side over and press to seal, creating a long sausage roll. Repeat with remaining pastry and filling.',
            'Place the sausage rolls on the prepared baking tray, seam-side down. Brush the tops generously with beaten egg and sprinkle with sesame seeds.',
            'Using a sharp knife, cut each roll into smaller pieces (about 4–5 per roll) – you can also leave them whole and cut after baking. Make a few small slits on the top to allow steam to escape.',
            'Bake for 20–25 minutes until the pastry is puffed, golden, and crisp. Serve warm or at room temperature.'
        ],
        chefTip: 'For extra flavour, add a teaspoon of Vegemite to the meat mixture – it gives a wonderful savoury umami note. You can also replace half the beef mince with pork mince for a juicier filling. To make ahead, prepare and roll the sausage rolls, then freeze them unbaked. When ready to cook, bake from frozen, adding an extra 5–10 minutes to the cooking time.',
        servingSuggestion: 'Serve your sausage rolls with a generous squeeze of tomato sauce or BBQ sauce. They are perfect for parties, picnics, or a quick lunch. Pair with a fresh salad or a bowl of hot soup for a more substantial meal. They’re also delicious served with a side of pickled onions and a cold beer.'
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
        ingredients: ['500g cooked prawns (peeled, tails on optional)', '1 tbsp lemon juice', '1/2 cup mayonnaise', '2 tbsp tomato sauce (ketchup)', '1 tsp Worcestershire sauce', '1/2 tsp paprika (plus extra for garnish)', 'Shredded iceberg lettuce', 'Lemon wedges for serving', 'Fresh parsley for garnish'],
        method: [
            'If using raw prawns, bring a large pot of salted water to a boil and cook the prawns for 2–3 minutes until they turn pink and curl. Drain and immediately plunge into ice water to stop the cooking process. Peel and devein if necessary. Pat dry with paper towels.',
            'In a small bowl, combine the mayonnaise, tomato sauce, Worcestershire sauce, paprika, and lemon juice. Whisk until smooth and well blended. Season with a pinch of salt and pepper. Refrigerate the sauce for at least 15 minutes to allow the flavours to meld.',
            'Toss the cooked prawns with the remaining lemon juice (if any) and a pinch of salt. This step adds a subtle brightness to the prawns.',
            'Place a generous bed of shredded lettuce in each serving glass or bowl. The lettuce provides a crisp base and adds texture to the dish.',
            'Arrange the prawns on top of the lettuce, either mixed in or placed neatly as a crown. Drizzle a generous amount of the cocktail sauce over the prawns.',
            'Sprinkle with an extra pinch of paprika for colour and garnish with fresh parsley and lemon wedges.',
            'Serve immediately, with extra sauce on the side if desired. The prawn cocktail is best enjoyed chilled.',
            'For a more elegant presentation, serve in martini glasses or on a bed of crushed ice.',
            'Enjoy this classic starter that never goes out of style.'
        ],
        chefTip: 'To make the sauce extra special, add a tablespoon of brandy or sherry for a sophisticated kick. You can also replace half the mayonnaise with plain yoghurt for a lighter, tangier sauce. If you have time, marinate the prawns in a little lemon zest and garlic before cooking to infuse more flavour. Always use the best quality prawns you can find – sustainable, wild-caught are ideal.',
        servingSuggestion: 'Serve your prawn cocktail as an elegant starter for a dinner party, or as a light main course with a side of crusty bread and a crisp green salad. A chilled glass of Champagne or a dry sparkling wine is the perfect accompaniment. For a summer BBQ, serve the prawn cocktail in a large bowl as a sharing platter.'
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
        ingredients: ['4 chicken breast fillets (boneless, skinless)', '1/2 cup plain flour', '2 large eggs, beaten', '1 1/2 cups breadcrumbs (preferably panko)', '1/2 cup panko breadcrumbs (for extra crunch)', '1 tsp garlic powder', '1 tsp paprika (smoked or sweet)', 'Oil for shallow frying (vegetable or canola)', 'Lemon wedges for serving'],
        method: [
            'Place each chicken breast between two sheets of baking paper and gently pound with a rolling pin or meat mallet to an even thickness of about 1 cm (½ inch). This ensures the chicken cooks evenly and remains tender.',
            'Season the chicken generously on both sides with salt and freshly ground black pepper. Let them sit at room temperature for 10 minutes while you prepare the coating.',
            'Set up three shallow bowls: one with plain flour, one with beaten eggs, and one with a mixture of the breadcrumbs and panko, plus the garlic powder and paprika. Mix the crumbs well with your hands to distribute the spices.',
            'Coat each chicken breast first in flour, shaking off any excess, then dip into the egg mixture, allowing any excess to drip off, and finally press firmly into the breadcrumb mixture, ensuring an even, thick coating. Pat the crumbs on to help them adhere.',
            'Heat about 1 cm (½ inch) of oil in a large, heavy-bottomed frying pan over medium heat. The oil is ready when a small piece of bread sizzles immediately when dropped in.',
            'Carefully place the schnitzels in the pan, working in batches if necessary to avoid overcrowding. Fry for 3–4 minutes per side, until the coating is golden brown and crispy, and the chicken is cooked through (internal temperature should reach 75°C / 165°F).',
            'Using tongs, transfer the cooked schnitzels to a wire rack or paper towel-lined plate to drain any excess oil. This helps keep them crispy.',
            'Season immediately with a little extra salt, if desired, and serve with lemon wedges on the side.',
            'For a classic finish, garnish with fresh parsley and serve with your favourite sides.'
        ],
        chefTip: 'Using panko breadcrumbs combined with regular breadcrumbs gives the perfect crunch. For extra flavour, add a tablespoon of grated Parmesan cheese to the breadcrumb mixture. You can also season the flour with a little salt and pepper for added flavour in every layer. If you want to make it ahead, cook the schnitzels and keep them warm in a low oven (150°C) on a wire rack – this keeps them crispy while you finish cooking the rest.',
        servingSuggestion: 'Serve your chicken schnitzel with a squeeze of fresh lemon juice, a side of creamy mashed potatoes, and a crisp garden salad. Alternatively, serve it in a sandwich with lettuce, tomato, and mayonnaise for a delicious schnitzel burger. Pair with a cold beer or a crisp white wine like a Riesling or Sauvignon Blanc.'
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
        ingredients: ['1 kg potatoes (e.g., Russet or Sebago)', '1/2 cup plain flour', '1/4 cup cornflour', '1 large egg, beaten', '1/2 tsp salt', '1/4 tsp freshly ground black pepper', '1 cup breadcrumbs (for coating)', 'Vegetable oil for shallow frying'],
        method: [
            'Peel the potatoes and cut them into even chunks. Place them in a large pot of salted cold water and bring to a boil. Cook until the potatoes are tender and easily pierced with a fork, about 15–20 minutes.',
            'Drain the potatoes thoroughly and allow them to steam dry for a few minutes to remove excess moisture. This helps prevent the cakes from becoming soggy.',
            'Mash the potatoes until smooth and free of lumps. You can use a potato ricer or masher. Allow the mash to cool completely to room temperature – this is important for easy handling.',
            'In a large bowl, combine the cooled mashed potatoes, plain flour, cornflour, beaten egg, salt, and pepper. Mix well until a soft, cohesive dough forms. If the dough is too sticky, add a little more flour.',
            'Divide the dough into 12 equal portions and shape each into a round patty about 1 cm thick and 6 cm in diameter. Use your hands to gently press and smooth the edges.',
            'Place the breadcrumbs in a shallow dish. Gently coat each potato cake in the breadcrumbs, pressing lightly to ensure they stick. Shake off any excess.',
            'Heat about 1 cm (½ inch) of vegetable oil in a large frying pan over medium-high heat. The oil is ready when it shimmers and a small piece of bread sizzles.',
            'Carefully place the potato cakes in the pan, working in batches to avoid overcrowding. Fry for 2–3 minutes per side until golden brown and crispy. Adjust the heat as needed to prevent burning.',
            'Drain on paper towels and season with a little extra salt. Serve warm, with your choice of dipping sauce.'
        ],
        chefTip: 'For extra flavour, add a tablespoon of finely chopped chives or spring onions to the potato mixture. You can also incorporate grated cheese (like cheddar) for a cheesy twist. To make them even crispier, double-coat the cakes – dip them in beaten egg again after the first breadcrumb coating, then re-coat in breadcrumbs before frying. If you have leftover mashed potatoes, this is a great way to use them up!',
        servingSuggestion: 'Serve potato cakes as a side dish with your favourite protein – they’re perfect with grilled fish, steak, or a hearty stew. They also make a fantastic snack on their own with a dollop of sour cream, sweet chilli sauce, or tomato ketchup. For a brunch option, top a potato cake with a poached egg and hollandaise sauce for an Aussie twist on eggs benedict.'
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
        ingredients: ['1.5 kg lamb leg (bone-in or boneless)', '4 garlic cloves, minced', '2 tbsp fresh rosemary, chopped (or 1 tbsp dried)', '2 tbsp olive oil', '1 tsp salt', '1/2 tsp black pepper', '1 large onion, cut into wedges', '1/2 cup beef or vegetable stock'],
        method: [
            'Preheat your oven to 200°C (400°F). Remove the lamb from the fridge at least 30 minutes before roasting to bring it to room temperature – this ensures even cooking.',
            'In a small bowl, combine the minced garlic, chopped rosemary, olive oil, salt, and pepper to form a paste. You can add a little lemon zest for extra brightness.',
            'Pat the lamb dry with paper towels. Using a sharp knife, make small incisions (about 2 cm deep) all over the lamb and press some of the garlic-rosemary paste into each cut. Rub the remaining paste all over the surface of the lamb.',
            'Place the onion wedges in the bottom of a roasting pan. Place the lamb on top of the onions, fat-side up. This allows the fat to baste the meat as it roasts.',
            'Pour the stock into the bottom of the pan (around the lamb, not over it). This will create a flavourful base for gravy and keep the meat moist.',
            'Roast the lamb in the preheated oven for 20 minutes at 200°C, then reduce the temperature to 165°C (325°F) and roast for a further 60–75 minutes, depending on your desired doneness. For medium-rare, aim for an internal temperature of 60°C (140°F); for medium, 65–70°C (150–160°F).',
            'Baste the lamb with the pan juices every 20 minutes during cooking to keep it moist and flavourful. If the pan gets dry, add a little more stock.',
            'Once cooked to your liking, remove the lamb from the oven, transfer to a carving board, and cover loosely with foil. Allow it to rest for 15–20 minutes before carving. This step is crucial for juicy, tender meat.',
            'While the lamb rests, you can make a simple gravy by deglazing the roasting pan with a little extra stock and thickening with a cornflour slurry. Serve the lamb sliced, with the gravy and roasted vegetables.'
        ],
        chefTip: 'For a more intense rosemary flavour, use fresh rosemary and bruise it slightly before adding to the paste. You can also insert sprigs of rosemary into the incisions along with the garlic. If you’re using a boneless lamb leg, tie it with kitchen string to help it keep its shape during roasting. Always use a meat thermometer for accurate doneness – it’s the most reliable way to avoid overcooking.',
        servingSuggestion: 'Serve your roast lamb with classic roast vegetables – potatoes, pumpkin, carrots, and parsnips – all roasted in the same pan to absorb the delicious juices. Pair with a rich gravy and a side of mint sauce or jelly. A full-bodied Australian Shiraz or Cabernet Sauvignon is the perfect wine match for this hearty dish.'
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
        ingredients: ['600g white fish fillets (e.g., snapper, barramundi, or cod)', '1 tbsp olive oil', '1 tbsp lemon juice', '1 cup macadamia nuts, finely chopped', '1/2 cup panko breadcrumbs', '1/4 cup grated Parmesan cheese', '1 tbsp fresh parsley, chopped', '1 tsp lemon zest', '2 tbsp mayonnaise (to bind)'],
        method: [
            'Preheat your oven to 200°C (400°F). Line a baking tray with parchment paper and lightly grease with a little oil or non-stick spray.',
            'Pat the fish fillets completely dry with paper towels. Season both sides generously with salt and pepper. Drizzle the olive oil and lemon juice over the fish and rub it in gently.',
            'In a medium bowl, combine the chopped macadamias, panko breadcrumbs, grated Parmesan, parsley, and lemon zest. Stir in the mayonnaise until the mixture is crumbly and holds together when pressed – add a little more mayo if needed.',
            'Press the macadamia crust mixture firmly onto the top of each fish fillet, covering the surface evenly. The crust should be about ½ cm thick. Gently pat it down so it adheres well.',
            'Place the fish on the prepared baking tray, crust-side up. Bake in the preheated oven for 15–18 minutes, depending on the thickness of the fillets. The fish is cooked when it flakes easily with a fork and the crust is golden brown.',
            'For a more intense crust, you can broil (grill) the fish for the last 2–3 minutes of cooking – watch carefully to prevent burning.',
            'Remove from the oven and allow the fish to rest for a couple of minutes before serving. This helps the juices settle and keeps the fish moist.',
            'Garnish with extra fresh parsley and a squeeze of lemon juice just before serving.',
            'Serve immediately with your favourite sides.'
        ],
        chefTip: 'For the best flavour, use fresh macadamia nuts and toast them lightly in a dry pan before chopping – this intensifies their nutty aroma. You can substitute almonds or pistachios if you prefer, but macadamias give a uniquely buttery flavour that pairs beautifully with white fish. If you want a gluten-free option, use gluten-free panko or crushed rice crackers instead.',
        servingSuggestion: 'Serve this macadamia crusted fish with a fresh green salad dressed with a citrus vinaigrette, and a side of roasted baby potatoes or steamed asparagus. A glass of crisp, dry Sauvignon Blanc or a unoaked Chardonnay complements the nutty crust perfectly. For an extra touch, serve with a wedge of lemon and a dollop of tartare sauce.'
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
        ingredients: ['1 kg pumpkin (e.g., butternut or Kent), peeled and cubed', '1 large onion, chopped', '2 garlic cloves, minced', '2 tbsp olive oil', '4 cups vegetable stock', '1 cup cream (optional, for richness)', 'Salt and pepper to taste', '1/4 tsp ground nutmeg (optional)'],
        method: [
            'Heat the olive oil in a large, heavy-based pot or Dutch oven over medium heat. Add the chopped onion and cook for 5–6 minutes until soft and translucent. Add the minced garlic and cook for a further 1–2 minutes until fragrant.',
            'Add the cubed pumpkin to the pot and stir to coat with the oil and onion mixture. Cook for 5 minutes, stirring occasionally, to allow the pumpkin to release its natural sugars and start to caramelise slightly.',
            'Pour in the vegetable stock and bring the mixture to a boil. Reduce the heat to a gentle simmer, cover the pot, and cook for about 20 minutes, or until the pumpkin is completely tender and easily pierced with a fork.',
            'Remove the pot from the heat. Using an immersion blender (or a regular blender, working in batches), puree the soup until it is smooth and velvety. If using a regular blender, be careful with hot liquids – fill the blender only halfway and vent the lid.',
            'Return the pureed soup to the pot (if using a regular blender). Place over low heat and stir in the cream (if using), nutmeg, and season with salt and pepper to taste. Heat through gently, but do not boil.',
            'Taste and adjust the seasoning – add more salt, pepper, or a squeeze of lemon juice to brighten the flavour if needed.',
            'Ladle the soup into bowls. Drizzle with a little extra cream and sprinkle with fresh herbs or a pinch of smoked paprika for garnish.',
            'Serve hot, with crusty bread on the side for dipping.',
            'Store any leftovers in an airtight container in the fridge for up to 3 days, or freeze for later use.'
        ],
        chefTip: 'For a deeper, more intense flavour, roast the pumpkin cubes in the oven at 200°C for 20 minutes before adding to the soup – this caramelises the natural sugars and adds a wonderful smoky sweetness. You can also add a chopped apple or a pear along with the onion for a subtle fruity sweetness. If you like a bit of heat, add a pinch of chilli flakes or a dash of cayenne pepper.',
        servingSuggestion: 'Serve this creamy pumpkin soup with a swirl of cream, a sprinkle of toasted pumpkin seeds, and a side of warm, crusty sourdough bread. It’s the perfect comfort food for a chilly day. Pair with a crisp, dry white wine or a light-bodied red like Pinot Noir. For a more substantial meal, serve with a grilled cheese sandwich on the side.'
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
        ingredients: ['3 ripe bananas (mashed)', '1/3 cup vegetable oil or melted butter', '1/4 cup white sugar (or brown sugar)', '2 large eggs', '1 tsp vanilla extract', '1 3/4 cups plain flour', '1 tsp baking soda', '1/2 tsp salt', '1/2 tsp ground cinnamon (optional)'],
        method: [
            'Preheat your oven to 175°C (350°F). Grease a 9x5 inch loaf tin and line the base with baking paper for easy removal.',
            'In a large bowl, mash the bananas with a fork until they are smooth but still have a few small lumps for texture. Add the oil (or melted butter), sugar, eggs, and vanilla extract. Mix well until all ingredients are combined.',
            'In a separate bowl, whisk together the flour, baking soda, salt, and cinnamon (if using). Make sure the baking soda is evenly distributed.',
            'Gradually add the dry ingredients to the wet ingredients, folding gently with a spatula or wooden spoon until just combined. Be careful not to overmix – a few streaks of flour are fine; overmixing can make the bread tough.',
            'Pour the batter into the prepared loaf tin and smooth the top with a spatula. If you like, you can sprinkle a little extra sugar or some sliced banana on top for decoration.',
            'Bake for 50–60 minutes, or until a skewer inserted into the centre comes out clean. The top should be golden brown and spring back when gently pressed.',
            'Remove from the oven and allow the bread to cool in the tin for 10 minutes, then turn out onto a wire rack to cool completely before slicing.',
            'For best results, wrap the cooled banana bread in plastic wrap and let it sit overnight – the flavours meld and the bread becomes even more moist.',
            'Serve slices at room temperature or lightly toasted with butter.'
        ],
        chefTip: 'The key to a moist banana bread is using very ripe bananas – the ones that are speckled black and soft to the touch. They have the highest sugar content and most intense banana flavour. You can also add 1/2 cup of chopped walnuts or chocolate chips for extra texture and flavour. For a healthier version, replace half the flour with whole wheat flour and use coconut oil instead of butter.',
        servingSuggestion: 'Enjoy a thick slice of banana bread with a generous spread of butter and a cup of hot tea or coffee. It’s perfect for breakfast, a morning snack, or an afternoon treat. For a more decadent dessert, serve slices warmed with a scoop of vanilla ice cream and a drizzle of caramel sauce.'
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
        ingredients: ['4 kangaroo steaks (about 150–200g each)', '2 tbsp olive oil', '2 garlic cloves, minced', '1 tbsp Worcestershire sauce', '1 tbsp lemon juice', '1 tsp salt', '1/2 tsp black pepper', '1 tsp fresh rosemary, chopped (optional)'],
        method: [
            'In a small bowl, whisk together the olive oil, minced garlic, Worcestershire sauce, lemon juice, salt, pepper, and rosemary. Pour this marinade over the kangaroo steaks in a shallow dish, turning to coat all sides.',
            'Cover and marinate the steaks for at least 15 minutes at room temperature, or up to 2 hours in the refrigerator. If refrigerated, bring them back to room temperature for 30 minutes before cooking.',
            'Preheat your grill (barbecue) to high heat. The grill should be very hot to achieve a good sear. Brush the grill grates with a little oil to prevent sticking.',
            'Remove the steaks from the marinade, letting any excess drip off. Pat them dry with paper towels – this helps achieve a good crust.',
            'Place the steaks on the hot grill and cook for 2–3 minutes per side for medium-rare. Kangaroo is best served rare to medium-rare, as it can become tough and dry if overcooked. Use a meat thermometer: 54–57°C (130–135°F) for rare, 60°C (140°F) for medium-rare.',
            'After flipping, you can brush with a little extra marinade for added flavour. Be careful not to overcook.',
            'Once cooked to your liking, remove the steaks from the grill and place them on a plate. Cover loosely with foil and let them rest for 5 minutes before slicing.',
            'Slice the kangaroo against the grain into thick slices to maximise tenderness.',
            'Serve immediately, garnished with extra fresh herbs and a squeeze of lemon.'
        ],
        chefTip: 'Kangaroo is very lean, so it’s essential not to overcook it – medium-rare is optimal. If you prefer it more well-done, reduce the cooking time and let it rest longer, but be mindful that it will become slightly drier. Pair it with a bold, fruity sauce like a red wine reduction or a pepper berry sauce to complement its gamey flavour. Always rest the meat – this is crucial for keeping it juicy.',
        servingSuggestion: 'Serve grilled kangaroo steak with a side of roasted sweet potatoes and a fresh green salad. A peppery rocket (arugula) salad with shaved Parmesan and a lemon vinaigrette works beautifully. For a true Aussie experience, serve with a dollop of bush tomato chutney. Pair with a rich, full-bodied Australian Shiraz or a malty dark beer.'
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
        ingredients: ['3 cups plain flour', '1 tbsp sugar', '2 tsp instant yeast', '1 tsp salt', '1 cup warm milk', '2 tbsp butter, melted', '3–4 tbsp Vegemite (or Marmite)', '1 cup grated cheddar cheese'],
        method: [
            'In a large mixing bowl, combine the flour, sugar, yeast, and salt. Make a well in the centre and pour in the warm milk and melted butter. Stir with a wooden spoon until a soft dough forms.',
            'Turn the dough out onto a lightly floured surface and knead for 8–10 minutes until the dough is smooth, elastic, and springs back when pressed. You can also use a stand mixer with a dough hook for 5–6 minutes.',
            'Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise in a warm place for about 1 hour, or until doubled in size.',
            'Preheat your oven to 180°C (350°F). Line a baking tray with parchment paper. Punch down the risen dough and turn it out onto a floured surface. Roll it out into a rectangle about 30x25 cm and 1 cm thick.',
            'Spread the Vegemite evenly over the dough, leaving a 2 cm border around the edges. Sprinkle the grated cheddar cheese evenly over the Vegemite.',
            'Starting from one long edge, tightly roll up the dough into a log. Pinch the seam to seal. Using a sharp knife, cut the log into 12 even slices (about 2.5 cm thick).',
            'Place the slices on the prepared baking tray, cut-side up, leaving a little space between them for expansion. Cover loosely with a cloth and let them rise for another 20–30 minutes until puffy.',
            'Bake for 18–20 minutes until the scrolls are golden brown and cooked through. The cheese should be melted and bubbly.',
            'Remove from the oven and let cool slightly on a wire rack before serving. Enjoy warm or at room temperature.'
        ],
        chefTip: 'For extra flavour, you can add a sprinkle of dried oregano or garlic powder along with the Vegemite. If you want a more indulgent version, add a layer of sliced ham or bacon before rolling. These scrolls are best served fresh, but they also freeze well – simply bake, cool, and freeze in an airtight container. Reheat in the oven or microwave.',
        servingSuggestion: 'Serve Vegemite scrolls as a delicious breakfast with a side of scrambled eggs, or as a snack with a bowl of soup. They also make a great lunchbox treat for kids and adults alike. Pair with a cup of hot tea or a glass of cold milk. For a brunch spread, serve them alongside a fresh fruit salad and yoghurt.'
    },
    // 19
    {
        id: 'australian-bush-tomato-relish',
        title: 'Australian Bush Tomato Relish',
        category: 'Salads',
        prep: '15 min',
        cook: '50 min',
        serves: 20 (as a condiment),
        description: 'A bold and flavourful relish made with native Australian ingredients. Perfect with BBQ meats.',
        ingredients: ['500g bush tomatoes (or sun-dried tomatoes, rehydrated)', '1 capsicum (bell pepper), diced', '1 onion, finely chopped', '2 garlic cloves, minced', '1 red chilli, finely chopped (optional)', '1/2 cup white vinegar', '1/2 cup brown sugar', '1/4 cup olive oil', '1 tsp salt', '1 tsp mustard seeds'],
        method: [
            'If using sun-dried tomatoes, soak them in warm water for 20 minutes to rehydrate, then drain and chop roughly. If using fresh bush tomatoes, simply wash and chop them.',
            'Heat the olive oil in a large, heavy-bottomed saucepan over medium heat. Add the onion, garlic, and chilli (if using) and cook for 5–6 minutes until soft and fragrant.',
            'Add the chopped tomatoes and diced capsicum to the pan. Cook for a further 5 minutes, stirring occasionally, until the vegetables start to soften and release their juices.',
            'Stir in the vinegar, brown sugar, salt, and mustard seeds. Bring the mixture to a gentle boil, then reduce the heat to low and simmer for 40–50 minutes, stirring occasionally, until the relish has thickened to a jam-like consistency.',
            'Taste and adjust the seasoning – you may want to add more salt, sugar, or a splash more vinegar to balance the flavours.',
            'While the relish is still hot, carefully spoon it into sterilised glass jars, leaving a 1 cm gap at the top. Wipe the rims, seal with lids, and process in a boiling water bath for 10 minutes if you want to store it for longer. Alternatively, allow to cool and refrigerate.',
            'If canning, store the jars in a cool, dark place. Otherwise, keep in the fridge and consume within 2 weeks.',
            'The relish will continue to develop flavour as it sits, so try to wait at least a day before serving.',
            'Serve as a condiment with meats, cheeses, or as a spread on sandwiches.'
        ],
        chefTip: 'If you can’t find bush tomatoes, a combination of sun-dried tomatoes and a pinch of smoked paprika can mimic the earthy, slightly smoky flavour. You can also add a teaspoon of ground cumin or coriander for extra depth. This relish is incredibly versatile – try it on burgers, with grilled lamb, or stirred into a pasta sauce for a burst of flavour.',
        servingSuggestion: 'Serve this relish alongside a cheese platter, with grilled sausages at a BBQ, or as a zesty addition to a roast lamb sandwich. It also makes a wonderful gift for friends and family – package it in a pretty jar with a label. Enjoy it with a cold beer or a glass of bold red wine.'
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
        ingredients: ['250g plain sweet biscuits (e.g., Digestives or Marie), crushed', '125g unsalted butter, melted', '2 tbsp desiccated coconut (optional)', '1 can (395g) sweetened condensed milk', '125g unsalted butter (for caramel)', '2 tbsp golden syrup', '200g milk chocolate', '50g dark chocolate', '1 tsp vegetable oil (for melting)'],
        method: [
            'Preheat your oven to 160°C (320°F). Line a 20x30 cm slice tin with baking paper, allowing some overhang for easy removal.',
            'In a bowl, combine the crushed biscuits and melted butter, mixing until the crumbs are evenly moistened. Press the mixture firmly into the base of the prepared tin, using the back of a spoon to smooth it out. Chill in the fridge while you prepare the caramel.',
            'For the caramel layer, place the condensed milk, 125g butter, and golden syrup in a medium saucepan over low heat. Stir constantly with a wooden spoon until the butter has melted and the mixture is smooth. Increase the heat to medium and bring to a gentle boil, stirring continuously for 5–7 minutes until the caramel thickens to a rich, golden colour. Be careful not to burn it.',
            'Pour the hot caramel over the biscuit base, spreading it evenly with a spatula. Return to the fridge and chill for at least 20 minutes until set.',
            'For the chocolate topping, break the milk chocolate and dark chocolate into pieces and place in a heatproof bowl with the oil. Melt over a double boiler (or in the microwave in 20-second bursts), stirring until smooth and glossy.',
            'Pour the melted chocolate over the caramel layer, tilting the tin to spread it evenly. Tap the tin gently on the counter to remove any air bubbles.',
            'Refrigerate the slice for at least 2 hours, or until the chocolate is completely set. To speed up, place it in the freezer for 30 minutes.',
            'Using the overhanging paper, lift the slice out of the tin. Place it on a cutting board and cut into squares or rectangles using a sharp knife dipped in hot water and wiped dry between cuts – this gives clean edges.',
            'Store the slices in an airtight container in the fridge. They will keep for up to a week.'
        ],
        chefTip: 'For a flavour variation, add a teaspoon of sea salt flakes on top of the chocolate before it sets – the saltiness beautifully balances the sweetness. You can also use white chocolate instead of dark for a different look. Make sure the base is firmly pressed down to prevent it from crumbling when slicing. If the caramel is too thick, add a tablespoon of milk to loosen it slightly.',
        servingSuggestion: 'Serve these chocolate caramel slices with a cup of coffee or a glass of cold milk. They are perfect for afternoon tea, bake sales, or as a sweet treat after dinner. For a more decadent dessert, serve them warm with a scoop of vanilla ice cream and a drizzle of extra caramel sauce.'
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
        ingredients: ['500g prawns (peeled and deveined, tails on or off)', '4 tbsp unsalted butter', '4 garlic cloves, minced', '1 tbsp olive oil', '1 tsp chilli flakes (optional)', '1 tbsp lemon juice', '2 tbsp fresh parsley, chopped', 'Lemon wedges for serving'],
        method: [
            'Pat the prawns completely dry with paper towels. This is important for achieving a good sear. Season with a little salt and pepper.',
            'Heat a large skillet or frying pan over medium-high heat. Add the olive oil and 2 tablespoons of butter. Once the butter has melted and is sizzling, add the prawns in a single layer – do not overcrowd the pan. Cook for 1–2 minutes per side, until they turn pink and curl into a ‘C’ shape. Remove the prawns to a plate and set aside.',
            'Reduce the heat to medium. Add the remaining 2 tablespoons of butter to the pan. Once melted, add the minced garlic and chilli flakes (if using). Cook for 30–60 seconds until fragrant, stirring constantly to prevent burning.',
            'Stir in the lemon juice and scrape up any browned bits from the bottom of the pan. This adds incredible flavour to the sauce.',
            'Return the prawns to the pan, along with any juices that have accumulated on the plate. Toss to coat the prawns in the garlic butter sauce. Cook for 1 minute to warm through and allow the flavours to meld.',
            'Remove from the heat and stir in the fresh parsley. Taste and adjust seasoning with salt, pepper, or more lemon juice if needed.',
            'Transfer the prawns and sauce to a serving dish. Garnish with extra parsley and lemon wedges.',
            'Serve immediately, with crusty bread to mop up the delicious garlic butter sauce.',
            'Enjoy as a main course or as a shared starter.'
        ],
        chefTip: 'For an extra burst of flavour, add a splash of white wine or dry sherry along with the lemon juice. You can also add a teaspoon of smoked paprika for a subtle smokiness. Be careful not to overcook the prawns – they cook very quickly and become rubbery if left too long. If you prefer a thicker sauce, you can stir in a tablespoon of crème fraîche or heavy cream at the end.',
        servingSuggestion: 'Serve these garlic butter prawns over a bed of linguine or with a side of steamed rice and a crisp green salad. They also make an excellent appetizer served with toothpicks and a bowl of lemon wedges. Pair with a chilled Sauvignon Blanc or a dry Riesling to complement the garlic and lemon flavours.'
    },
    // 22
    {
        id: 'chicken-caesar-wrap',
        title: 'Chicken Caesar Wrap',
        category: 'Main Dishes',
        prep: '15 min',
        cook: '0 min (if chicken is pre-cooked)',
        serves: 4,
        description: 'A classic Caesar salad wrapped in a soft tortilla with grilled chicken, cos lettuce, and creamy dressing.',
        ingredients: ['2 chicken breasts, grilled and sliced', '4 large flour tortillas (or wholemeal)', '1 cos lettuce (romaine), shredded', '1/2 cup Caesar dressing (store-bought or homemade)', '1/4 cup grated Parmesan cheese', 'Optional: croutons, crispy bacon bits'],
        method: [
            'If using raw chicken breasts, season them with salt, pepper, and a little olive oil. Grill or pan-fry over medium-high heat for 5–6 minutes per side until cooked through (internal temperature 75°C/165°F). Let them rest for 5 minutes, then slice thinly against the grain.',
            'Lay the tortillas flat on a clean work surface. Spread about 2 tablespoons of Caesar dressing evenly over each tortilla, leaving a 2 cm border around the edges.',
            'Sprinkle a generous handful of shredded cos lettuce over the dressing, then top with the sliced chicken. Sprinkle with grated Parmesan cheese, and add croutons or bacon if desired.',
            'To wrap, fold the bottom edge of the tortilla up over the filling, then fold in the sides, and roll tightly away from you to form a neat parcel. Tuck in any stray ingredients as you roll.',
            'If you prefer a warm wrap, you can gently heat the assembled wraps in a dry frying pan over medium heat for 1–2 minutes per side until the tortilla is golden and crisp.',
            'Cut each wrap in half diagonally, securing with a toothpick if desired.',
            'Serve immediately, with extra Caesar dressing for dipping.',
            'These wraps are perfect for a quick lunch or a light dinner.',
            'You can also wrap them in foil and take them on a picnic or to work.'
        ],
        chefTip: 'To make your own Caesar dressing, whisk together 1/2 cup mayonnaise, 2 tbsp grated Parmesan, 1 garlic clove (minced), 1 tbsp lemon juice, 1 tsp Dijon mustard, and a dash of Worcestershire sauce. Add water to thin if needed. For extra crunch, toast some panko breadcrumbs with a little oil and garlic and sprinkle them on top.',
        servingSuggestion: 'Serve these wraps with a side of sweet potato wedges or a fresh fruit salad. They are a fantastic on-the-go meal, perfect for picnics, beach days, or a quick dinner. Pair with a chilled sparkling water with lemon or a crisp apple cider.'
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
        ingredients: ['4 snapper fillets (skin on)', '2 tbsp olive oil', '2 garlic cloves, minced', '1 lemon, zested and juiced', 'Fresh herbs (e.g., thyme, oregano, parsley)', 'Salt and pepper'],
        method: [
            'In a small bowl, combine the olive oil, minced garlic, lemon zest, lemon juice, and a tablespoon of chopped fresh herbs. Season with salt and pepper. Place the snapper fillets in a shallow dish and pour the marinade over them, turning to coat. Marinate for 15 minutes at room temperature.',
            'Preheat a grill or barbecue to medium-high heat. Brush the grates with a little oil to prevent sticking.',
            'Remove the fillets from the marinade, shaking off any excess. Pat them dry with paper towels – this helps achieve a crispy skin.',
            'Place the fish skin-side down on the grill. Cook for 5–6 minutes without moving it – this allows the skin to become crispy and release easily.',
            'Carefully flip the fillets using a spatula and cook for a further 4–5 minutes on the flesh side, depending on the thickness of the fillets. The fish is done when it flakes easily with a fork and is opaque throughout.',
            'Remove from the grill and transfer to a serving plate. Squeeze extra lemon juice over the top and sprinkle with fresh herbs.',
            'Allow the fish to rest for 2–3 minutes before serving to let the juices settle.',
            'Serve with a wedge of lemon on the side.',
            'Enjoy immediately.'
        ],
        chefTip: 'For a more aromatic flavour, stuff the cavity of whole snapper with lemon slices and fresh herbs before grilling. If you don’t have a grill, you can pan-fry the fillets in a cast-iron skillet with a little oil. Always pat the fish dry before cooking to ensure a crispy skin.',
        servingSuggestion: 'Serve grilled snapper with a side of roasted vegetables (like zucchini, capsicum, and cherry tomatoes) and a fresh Greek salad. A drizzle of extra virgin olive oil and a squeeze of lemon over the top enhances the flavours. Pair with a chilled Pinot Grigio or a light, unoaked Chardonnay.'
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
        ingredients: ['500g beef mince', '1 small onion, finely chopped', '1 carrot, grated', '1 large egg, beaten', '1/2 cup breadcrumbs', '2 tbsp BBQ sauce or tomato sauce', 'Salt and pepper', 'Optional: fresh herbs like parsley or thyme'],
        method: [
            'In a large bowl, combine the beef mince, onion, grated carrot, egg, breadcrumbs, BBQ sauce, and a generous pinch of salt and pepper. If using herbs, add them now. Mix thoroughly with your hands until all ingredients are evenly incorporated – but don’t overmix, as this can make the rissoles tough.',
            'Divide the mixture into 6 equal portions and shape each into a round patty about 2 cm thick. Use your hands to gently press and smooth the edges. Place the patties on a plate and refrigerate for 15–20 minutes – this helps them hold their shape during cooking.',
            'Heat a frying pan or barbecue grill to medium-high heat. Lightly oil the cooking surface.',
            'Cook the rissoles for 4–5 minutes per side, until they are well browned and cooked through. The internal temperature should reach 75°C (165°F). If using a pan, you may need to cook in batches to avoid overcrowding.',
            'Once cooked, transfer the rissoles to a plate and let them rest for a few minutes before serving.',
            'Serve with your favourite sides – they are great with mashed potatoes, gravy, and steamed vegetables.',
            'For an extra touch, you can brush the rissoles with a little extra BBQ sauce during the last minute of cooking for a glaze.',
            'Enjoy them as a burger patty, or as a main with a side salad.',
            'Leftover rissoles can be refrigerated and reheated the next day.'
        ],
        chefTip: 'For extra flavour, add a teaspoon of Dijon mustard, a splash of Worcestershire sauce, or a pinch of smoked paprika to the mixture. You can also replace half the beef mince with pork mince for a juicier result. If the mixture is too wet, add a little more breadcrumbs; if too dry, add a splash of milk or stock.',
        servingSuggestion: 'Serve beef rissoles with creamy mashed potatoes, caramelised onions, and a rich beef gravy. They also make a fantastic burger filling – place them in a bun with lettuce, tomato, cheese, and your favourite sauces. Pair with a cold, crisp lager or a glass of full-bodied red wine like a Shiraz.'
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
        ingredients: ['2 cups corn kernels (fresh, frozen, or canned, drained)', '1 cup plain flour', '2 large eggs', '1/2 cup milk', '1 tsp baking powder', 'Salt and pepper', 'Vegetable oil for shallow frying'],
        method: [
            'In a large bowl, whisk together the flour, baking powder, salt, and pepper. In a separate bowl, beat the eggs with the milk until well combined.',
            'Add the wet ingredients to the dry ingredients and stir until just combined – the batter should be thick but pourable. Fold in the corn kernels gently.',
            'Heat about 1 cm of oil in a large frying pan over medium heat. The oil is ready when a drop of batter sizzles and floats to the surface.',
            'Drop heaped tablespoonfuls of batter into the hot oil, flattening them slightly with the back of the spoon. Don’t overcrowd the pan – cook in batches.',
            'Fry for 2–3 minutes per side, until the fritters are golden brown and puffed up. Flip carefully using a spatula.',
            'Transfer the cooked fritters to a plate lined with paper towels to drain any excess oil.',
            'Season with a little extra salt while still warm.',
            'Serve hot with your choice of toppings – sour cream, sweet chilli sauce, or avocado salsa.',
            'These fritters are best enjoyed fresh, but they can be reheated in a toaster or oven.'
        ],
        chefTip: 'For extra flavour, add chopped spring onions, a pinch of chilli flakes, or a handful of grated cheddar cheese to the batter. You can also substitute some of the plain flour with cornmeal (polenta) for a more textured fritter. If using frozen corn, thaw it completely and pat it dry to avoid excess moisture in the batter.',
        servingSuggestion: 'Serve corn fritters with a generous dollop of sour cream and a squeeze of lime, along with a fresh avocado salsa or tomato relish. They are perfect for a weekend brunch, as a side with grilled chicken, or as a tasty snack. Pair with a sparkling citrus drink or a cold beer.'
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
        ingredients: ['3 cups self-raising flour', '1 tsp salt', '1 tbsp butter, cold, cubed', '1 cup milk', '1/2 cup water (approximately)'],
        method: [
            'Preheat your oven to 200°C (400°F). Place a cast-iron pot or a heavy baking tray inside to heat up while you prepare the dough.',
            'In a large bowl, sift the self-raising flour and salt together. Add the cold butter cubes and rub them into the flour using your fingertips until the mixture resembles fine breadcrumbs.',
            'Make a well in the centre and pour in the milk and most of the water. Use a butter knife to mix the dough, adding more water as needed until a soft, slightly sticky dough forms.',
            'Turn the dough out onto a lightly floured surface and knead gently for 1–2 minutes until smooth. Do not over-knead, or the damper will become tough.',
            'Shape the dough into a round loaf, about 15 cm in diameter. Score a deep cross on the top using a sharp knife – this is the traditional mark and helps the bread cook evenly.',
            'Carefully remove the hot pot or tray from the oven, dust it with a little flour, and place the damper on it. You can also place the dough directly on the tray.',
            'Bake for 25–30 minutes, until the bread is golden brown and sounds hollow when tapped on the bottom. The internal temperature should be around 95°C (200°F).',
            'Remove from the oven and transfer to a wire rack to cool slightly. Serve warm.',
            'Damper is best enjoyed fresh, but it can be stored in an airtight container for up to 2 days and reheated in the oven.'
        ],
        chefTip: 'For a sweeter version, add 2 tablespoons of sugar and a handful of sultanas or dried fruit to the dry ingredients. For a savoury twist, add chopped herbs, cheese, or even Vegemite to the dough. You can also cook damper in a camp oven or on a barbecue – just wrap it in foil and place it in the coals. Serve with plenty of butter and golden syrup.',
        servingSuggestion: 'Enjoy warm damper bread with a generous spread of butter and a drizzle of golden syrup or honey. It’s also delicious with jam, cheese, or even a hearty stew. For a true Aussie campfire experience, serve it alongside a strong cup of billy tea.'
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
        ingredients: ['1 cup rolled oats', '1 cup plain flour', '1 cup desiccated coconut', '3/4 cup white sugar', '125g unsalted butter', '2 tbsp golden syrup', '1 tsp baking soda', '2 tbsp boiling water'],
        method: [
            'Preheat your oven to 160°C (320°F). Line two baking trays with parchment paper.',
            'In a large bowl, combine the rolled oats, flour, coconut, and sugar. Mix well with a spoon.',
            'In a small saucepan, melt the butter and golden syrup together over low heat, stirring occasionally, until the butter has completely melted and the mixture is smooth.',
            'In a small cup or bowl, dissolve the baking soda in the boiling water. Add this to the butter mixture – it will foam up, which is normal.',
            'Pour the butter mixture into the dry ingredients and stir quickly until everything is well combined and the mixture comes together as a dough.',
            'Roll tablespoonfuls of the mixture into balls and place them on the prepared trays, spacing them about 5 cm apart to allow for spreading. Flatten them slightly with the back of a fork.',
            'Bake for 12–15 minutes, or until the biscuits are golden brown. They will still be soft when they come out but will firm up as they cool.',
            'Allow the biscuits to cool on the trays for 5 minutes, then transfer to a wire rack to cool completely.',
            'Store in an airtight container. These biscuits keep well for up to two weeks.'
        ],
        chefTip: 'For chewy biscuits, bake for the shorter time (12 minutes). For a crunchier texture, bake for 15 minutes or until darker. You can add a handful of chopped nuts or chocolate chips for variation. The mixture will seem quite crumbly, but it comes together when pressed – don’t add extra liquid.',
        servingSuggestion: 'Serve ANZAC biscuits with a cup of tea or coffee. They are a perfect treat for Anzac Day, or any day, and are a beloved part of Australian baking culture. Enjoy them plain, or sandwich them with a little butter or jam for a nostalgic treat.'
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
        ingredients: ['800g beef chuck, cut into 3 cm chunks', '1 large onion, chopped', '2 carrots, diced', '2 garlic cloves, minced', '1 can (440ml) Guinness or other stout', '2 tbsp tomato paste', '1 cup beef stock', '2 sheets puff pastry (thawed)', '1 egg, beaten (for glazing)'],
        method: [
            'Heat a large, heavy-based casserole dish or Dutch oven over medium-high heat. Add a splash of oil and brown the beef chunks in batches – do not overcrowd the pan. Set the browned meat aside on a plate.',
            'Reduce the heat to medium and add the onion, carrots, and garlic to the pan. Cook for 5–6 minutes until softened and starting to caramelise. Scrape up any browned bits from the bottom.',
            'Return the beef to the pan. Stir in the tomato paste and cook for 1–2 minutes to deepen the flavour. Pour in the Guinness and beef stock, scraping the bottom of the pan again.',
            'Bring to a simmer, then cover and reduce the heat to low. Cook for 1.5 to 2 hours until the beef is melt-in-the-mouth tender. Stir occasionally and add a little water if the sauce becomes too thick.',
            'Once the beef is tender, remove from the heat and allow to cool completely. This is important – if the filling is hot, it will melt the pastry.',
            'Preheat your oven to 200°C (400°F). Roll out the puff pastry and cut it to fit your pie dish(es). Fill the dish with the cooled beef mixture. Brush the edges of the pastry with beaten egg, then top with the second pastry layer, pressing the edges together to seal. Trim any excess and crimp the edges.',
            'Brush the top with more beaten egg and cut a few slits to allow steam to escape. Place the pie on a baking tray.',
            'Bake for 25–30 minutes until the pastry is puffed, golden, and crisp. Let the pie rest for 10 minutes before serving.',
            'Serve with mashed potatoes and steamed greens.'
        ],
        chefTip: 'For a richer flavour, add a tablespoon of Worcestershire sauce and a sprig of fresh thyme while the beef simmers. You can also replace half the beef stock with red wine for extra depth. If you prefer a thicker gravy, stir in a cornflour slurry (1 tbsp cornflour mixed with 2 tbsp water) before cooling the filling.',
        servingSuggestion: 'Serve your beef and Guinness pie with creamy mashed potatoes and buttery peas. A dollop of horseradish cream or a spoonful of wholegrain mustard adds a fantastic kick. Pair with a full-bodied stout or a robust Australian Shiraz.'
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
        ingredients: ['500g squid rings (and tentacles, if desired)', '1 cup cornflour', '1 tsp salt', '1 tsp freshly cracked black pepper', 'Vegetable oil for deep frying', 'Lemon wedges for serving'],
        method: [
            'Pat the squid rings completely dry with paper towels – this is essential for a crispy coating. If using whole squid, clean and cut into rings.',
            'In a large bowl or zip-lock bag, combine the cornflour, salt, and black pepper. Mix well.',
            'Add the squid to the flour mixture and toss until every piece is evenly coated. Shake off any excess flour.',
            'Heat about 5 cm of vegetable oil in a deep, heavy-bottomed pot to 180°C (350°F). Use a thermometer for accuracy.',
            'Working in batches to avoid overcrowding, carefully lower the coated squid into the hot oil. Fry for 2–3 minutes, or until golden and crisp. Do not overcook – squid can become rubbery if fried too long.',
            'Using a slotted spoon, remove the squid and drain on paper towels. Season with a little extra salt while still hot.',
            'Serve immediately with lemon wedges and a dipping sauce of your choice – aioli, sweet chilli, or a simple soy and vinegar mix work well.',
            'Garnish with fresh coriander or parsley, if desired.',
            'Enjoy as a starter or main course.'
        ],
        chefTip: 'For extra flavour, add a teaspoon of garlic powder, onion powder, or a pinch of chilli flakes to the cornflour mixture. You can also add a little rice flour for a lighter, crispier coating. Always fry in batches to maintain the oil temperature – if the oil cools down, the squid will absorb oil and become greasy.',
        servingSuggestion: 'Serve salt and pepper squid with a fresh Asian-style salad of cucumber, carrot, and coriander, dressed with lime juice and fish sauce. It makes a fantastic appetizer for a dinner party or a light main course with a bowl of steamed rice. Pair with a crisp, dry white wine or a cold lager.'
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
        ingredients: ['500g chicken thigh, boneless, skinless, cut into strips', '1/4 cup soy sauce', '2 tbsp peanut butter', '1 tbsp curry powder', '1/2 cup coconut milk', 'Bamboo skewers (soaked in water for 30 minutes)'],
        method: [
            'In a bowl, combine the soy sauce, peanut butter, curry powder, and coconut milk. Whisk until smooth.',
            'Add the chicken strips to the marinade, ensuring they are well coated. Cover and refrigerate for at least 1 hour, or up to 4 hours.',
            'Preheat a grill or barbecue to medium-high heat. Thread the marinated chicken onto the soaked skewers, folding the strips to secure them.',
            'Brush the grill grates with a little oil. Cook the skewers for 4–5 minutes per side, turning occasionally, until the chicken is cooked through and has nice char marks.',
            'While the chicken is cooking, you can prepare an extra satay sauce by heating the remaining marinade with a little extra coconut milk and peanut butter until warm.',
            'Serve the skewers hot, drizzled with extra satay sauce, and sprinkled with crushed peanuts and fresh coriander.',
            'Serve with a side of rice and a cucumber salad for a complete meal.',
            'Enjoy immediately.'
        ],
        chefTip: 'For an authentic satay flavour, use a good quality curry powder and a generous amount of peanut butter. If you prefer a spicier kick, add a finely chopped red chilli to the marinade. For the best results, marinate the chicken for at least 2 hours – the longer, the better. If using wooden skewers, always soak them in water for at least 30 minutes to prevent burning on the grill.',
        servingSuggestion: 'Serve the chicken satay skewers with a side of fragrant jasmine rice, a refreshing cucumber and red onion salad, and a bowl of extra satay sauce for dipping. A cold glass of beer or a tropical fruit juice (like mango or pineapple) complements the spicy, nutty flavours beautifully.'
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
        ingredients: ['4 chicken thighs (bone-in or boneless)', '1/4 cup soy sauce', '2 tbsp honey', '2 garlic cloves, minced', '1 tbsp grated ginger', '1 tbsp vegetable oil'],
        method: [
            'In a small bowl, whisk together the soy sauce, honey, garlic, and ginger.',
            'Heat the oil in a large frying pan over medium-high heat. Season the chicken thighs with salt and pepper, then place them in the pan skin-side down (if using skin-on). Cook for 5–6 minutes until the skin is golden and crispy. Flip and cook for another 4–5 minutes.',
            'Pour the honey soy sauce mixture over the chicken. Reduce the heat to medium and simmer for 5–7 minutes, turning the chicken occasionally, until the sauce thickens and coats the chicken. The internal temperature should reach 75°C (165°F).',
            'If the sauce becomes too thick, add a splash of water or chicken stock.',
            'Remove from the heat and let the chicken rest for a few minutes. Garnish with sliced spring onions and sesame seeds.',
            'Serve the chicken over steamed rice, with a side of stir-fried vegetables.',
            'Spoon the extra sauce from the pan over the top.',
            'Enjoy immediately.'
        ],
        chefTip: 'For an extra depth of flavour, add a dash of Chinese five-spice powder or a squeeze of lime juice to the sauce. You can also use boneless chicken breast, but reduce the cooking time accordingly to prevent drying out. To make the sauce even stickier, add a teaspoon of cornflour mixed with water to the sauce before thickening.',
        servingSuggestion: 'Serve honey soy chicken with steamed jasmine rice and a simple Asian slaw of cabbage, carrot, and sesame dressing. It also works wonderfully as a filling for lettuce wraps or as a topping for rice bowls. Pair with a crisp, dry Riesling or a cold lager.'
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
        ingredients: ['1.5 kg pork ribs (baby back or spare ribs)', '1 cup BBQ sauce (your favourite)', '2 tbsp brown sugar', '2 garlic cloves, minced', '1 tsp paprika', 'Salt and pepper'],
        method: [
            'Preheat your oven to 160°C (320°F). If using a large rack of ribs, cut them into manageable sections to fit in your roasting pan.',
            'Season the ribs generously on both sides with salt, pepper, and paprika. Place them in a roasting pan, bone-side down.',
            'In a small bowl, combine the BBQ sauce, brown sugar, and minced garlic. Mix well.',
            'Brush half of the BBQ sauce mixture over the ribs, covering them evenly.',
            'Cover the pan tightly with foil and bake for 1.5 hours. The steam will help tenderise the meat.',
            'After 1.5 hours, remove the foil and increase the oven temperature to 200°C (400°F). Brush the remaining BBQ sauce over the ribs.',
            'Return the ribs to the oven and cook for a further 15–20 minutes, until the sauce is sticky and caramelised, and the ribs are fall-apart tender.',
            'Remove from the oven and let the ribs rest for 10 minutes before cutting into individual ribs.',
            'Serve with extra BBQ sauce, coleslaw, and corn on the cob.'
        ],
        chefTip: 'For the ultimate smoky flavour, you can start the ribs on a barbecue grill for 10–15 minutes per side over indirect heat, then finish them in the oven. If you have time, marinate the ribs in the sauce overnight for deeper flavour. For extra tenderness, remove the membrane from the back of the ribs before cooking – this allows the flavours to penetrate more deeply.',
        servingSuggestion: 'Serve these sticky BBQ ribs with a generous side of creamy coleslaw, grilled corn, and a wedge of lemon. They are perfect for a backyard BBQ or a casual weekend feast. Pair with a cold, refreshing beer or a glass of bold, fruity Zinfandel.'
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
        ingredients: ['4 beef steaks (e.g., sirloin or rib-eye)', '4 bread rolls (ciabatta or sourdough)', '1 large onion, sliced', '4 slices of cheese (provolone, cheddar, or Swiss)', 'BBQ sauce or aioli', 'Butter for toasting'],
        method: [
            'Season the steaks generously with salt and pepper on both sides. Let them sit at room temperature for 15 minutes.',
            'Heat a large frying pan or grill over high heat. Add a splash of oil and cook the steaks to your liking – about 3–4 minutes per side for medium-rare. Remove from the pan and let rest on a plate.',
            'In the same pan, reduce the heat to medium, add the sliced onion and a knob of butter. Cook for 8–10 minutes, stirring occasionally, until the onions are soft and caramelised.',
            'While the onions cook, cut the rolls in half and lightly toast them on the grill or in a toaster. Spread a generous layer of BBQ sauce or aioli on the bottom half.',
            'Place the rested steaks on a cutting board and slice them thinly against the grain.',
            'Layer the sliced steak onto the sauced bottom halves of the rolls. Top with the caramelised onions and a slice of cheese.',
            'Place the top halves of the rolls on and press down gently. You can wrap the sandwiches in foil and heat them in the oven for a few minutes to melt the cheese, or serve immediately.',
            'Serve hot, with a side of chips or a fresh salad.',
            'Enjoy these hearty steak sandwiches.'
        ],
        chefTip: 'For best results, use a steak that is at least 2 cm thick and has good marbling. Rib-eye or sirloin are excellent choices. If you prefer a more gourmet sandwich, add sautéed mushrooms or a handful of rocket leaves (arugula) for extra freshness. Always slice the steak against the grain for maximum tenderness.',
        servingSuggestion: 'Serve your steak sandwich with a pile of crispy hot chips (fries) and a side of pickles. Pair with an ice-cold beer or a full-bodied red wine. It’s a satisfying meal that’s perfect for a lazy weekend lunch or a casual dinner with friends.'
    },
    // 34
    {
        id: 'chicken-avocado-salad',
        title: 'Chicken Avocado Salad',
        category: 'Salads',
        prep: '15 min',
        cook: '0 min (if chicken is pre-cooked)',
        serves: 4,
        description: 'Fresh and healthy chicken salad with creamy avocado and a zesty dressing.',
        ingredients: ['2 chicken breasts, cooked and shredded (or grilled)', '2 ripe avocados, diced', '1 cup cherry tomatoes, halved', '1/2 red onion, thinly sliced', '1/4 cup olive oil', '2 tbsp lemon juice', 'Salt and pepper'],
        method: [
            'If you haven’t cooked the chicken, grill or poach it, then shred or dice it. Allow it to cool completely.',
            'In a large bowl, combine the shredded chicken, diced avocado, cherry tomatoes, and red onion.',
            'In a small jar, combine the olive oil, lemon juice, salt, and pepper. Shake well to emulsify.',
            'Pour the dressing over the salad and gently toss to combine. Be careful not to mash the avocado.',
            'Taste and adjust seasoning – add more lemon juice or salt if needed.',
            'Garnish with fresh herbs like coriander or parsley, if desired.',
            'Serve immediately as a light main, or as a side dish.',
            'You can also add a handful of mixed greens or baby spinach for extra bulk.',
            'Enjoy fresh.'
        ],
        chefTip: 'To keep the avocado from browning, toss it with the lemon juice before adding to the salad. You can also add toasted pumpkin seeds or crumbled feta cheese for extra texture and flavour. For a spicy kick, add a pinch of chilli flakes or a drizzle of sriracha in the dressing.',
        servingSuggestion: 'Serve this chicken avocado salad on a bed of mixed greens with a side of crusty bread. It’s a perfect light lunch or a healthy dinner option. Pair with a crisp, dry white wine like a Sauvignon Blanc or a refreshing iced tea.'
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
        ingredients: ['500g seafood mix (prawns, fish fillets, mussels)', '1 onion, chopped', '2 garlic cloves, minced', '4 cups fish stock', '1 cup cream', '2 large potatoes, diced', 'Salt and pepper'],
        method: [
            'Heat a large pot over medium heat and add a splash of oil. Cook the onion and garlic for 4–5 minutes until soft.',
            'Add the diced potatoes and fish stock. Bring to a boil, then reduce the heat and simmer for 10–12 minutes until the potatoes are tender.',
            'Stir in the seafood mix and cook for 5–7 minutes, until the prawns are pink, the fish is flaky, and the mussels have opened (discard any that don’t open).',
            'Add the cream and stir gently to combine. Season with salt and pepper to taste.',
            'Simmer for a further 2–3 minutes to heat through, but do not boil.',
            'Garnish with fresh parsley and a squeeze of lemon juice.',
            'Serve hot with crusty bread on the side.',
            'This chowder is best enjoyed fresh.',
            'Leftovers can be refrigerated and reheated gently, but the cream may separate slightly.'
        ],
        chefTip: 'For extra depth, add a splash of white wine or a pinch of saffron to the broth. You can also use a mix of smoked fish and fresh fish for a more complex flavour. If using frozen seafood, make sure it is fully thawed and patted dry before adding to the soup.',
        servingSuggestion: 'Serve seafood chowder with warm sourdough bread and a generous pat of butter. It’s a comforting meal for a cold winter’s day. Pair with a crisp, dry white wine like a Chardonnay or a Sauvignon Blanc.'
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
        ingredients: ['500g pasta (e.g., fettuccine or linguine)', '300g mushrooms (sliced)', '2 garlic cloves, minced', '1 cup thickened cream', '1/2 cup grated Parmesan cheese', '2 tbsp butter', 'Fresh parsley, chopped'],
        method: [
            'Bring a large pot of salted water to a boil and cook the pasta according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.',
            'While the pasta cooks, melt the butter in a large frying pan over medium heat. Add the sliced mushrooms and cook for 5–6 minutes until they release their liquid and start to brown.',
            'Add the minced garlic and cook for 1–2 minutes until fragrant.',
            'Stir in the cream and bring to a gentle simmer. Cook for 3–4 minutes until the sauce thickens slightly.',
            'Add the grated Parmesan cheese and stir until melted and smooth. Season with salt and pepper to taste.',
            'Add the drained pasta to the sauce, along with a splash of reserved pasta water if needed to thin the sauce. Toss well to coat.',
            'Garnish with fresh parsley and extra Parmesan.',
            'Serve immediately.',
            'Enjoy this comforting pasta dish.'
        ],
        chefTip: 'For a more intense mushroom flavour, use a mix of wild mushrooms like porcini or shiitake. You can also add a splash of white wine to the sauce before adding the cream for extra depth. If you prefer a lighter sauce, use half cream and half milk, or replace cream with crème fraîche.',
        servingSuggestion: 'Serve creamy mushroom pasta with a crisp green salad dressed with a lemon vinaigrette. A glass of light-bodied white wine like Pinot Grigio complements the creamy sauce beautifully. Add a sprinkle of fresh thyme or chives for an extra layer of flavour.'
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
        ingredients: ['4 bread rolls (soft, like brioche or white)', '8 bacon slices', '4 large eggs', 'BBQ sauce or tomato sauce', 'Butter for spreading'],
        method: [
            'Preheat a frying pan or flat grill over medium heat. Cook the bacon until crispy, then remove and keep warm on a plate.',
            'In the same pan, reduce the heat to low and crack the eggs. Cook them sunny-side up or over easy, according to your preference. Season with salt and pepper.',
            'While the eggs cook, split the rolls in half and toast them lightly in the pan or a toaster.',
            'Spread a generous layer of butter on the bottom half of each roll. Top with two slices of crispy bacon.',
            'Carefully place a fried egg on top of the bacon. Add a dollop of BBQ or tomato sauce.',
            'Place the top half of the roll on and press gently.',
            'Serve immediately, with a side of hot chips or a fresh juice.',
            'Enjoy this hearty breakfast roll.'
        ],
        chefTip: 'For a perfect runny yolk, cook the eggs gently and don’t flip them – just cover the pan with a lid for the last minute to set the white. You can also add a slice of cheese or a few fresh spinach leaves for extra flavour. The quality of the bread and bacon makes a huge difference – choose the best you can afford.',
        servingSuggestion: 'Serve the bacon and egg roll with a side of crispy hash browns or a fresh orange juice. It’s the ultimate weekend breakfast or a quick and satisfying lunch. Pair with a strong cup of coffee or a milky latte.'
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
        ingredients: ['500g fresh spinach, roughly chopped (or frozen, thawed and drained)', '200g feta cheese, crumbled', '3 large eggs', '1 onion, finely chopped', '2 sheets shortcrust or puff pastry (thawed)', 'Salt and pepper'],
        method: [
            'Preheat your oven to 200°C (400°F). If using fresh spinach, wilt it in a hot pan with a splash of water, then drain and squeeze out as much liquid as possible. If using frozen, ensure it is thoroughly drained.',
            'In a large bowl, combine the wilted spinach, crumbled feta, chopped onion, and eggs. Mix well and season with salt and pepper. Be careful with the salt as feta can be quite salty.',
            'Line a 23 cm pie or quiche dish with one sheet of pastry, trimming any overhang. Prick the base with a fork to prevent bubbling.',
            'Pour the spinach mixture into the pastry shell and spread evenly.',
            'Cover with the second sheet of pastry (or create a lattice topping). Tuck the edges in to seal, and brush the top with beaten egg or milk for a golden finish.',
            'Bake for 30–35 minutes, until the pastry is golden and the filling is set and puffed. Let it rest for 10 minutes before slicing.',
            'Serve warm or at room temperature, with a side salad.',
            'This quiche is delicious hot or cold.'
        ],
        chefTip: 'For extra flavour, add a handful of chopped dill or mint to the filling. You can also add some crumbled bacon or sun-dried tomatoes for a variation. To ensure a crisp bottom crust, blind-bake the pastry base for 10 minutes before adding the filling – simply line with baking paper and fill with pie weights or dried beans.',
        servingSuggestion: 'Serve spinach and feta quiche with a fresh Greek salad (tomatoes, cucumber, olives, red onion) and a drizzle of extra virgin olive oil. It makes a wonderful lunch, light dinner, or picnic fare. Pair with a crisp, dry white wine like Assyrtiko or a cold sparkling water with lemon.'
    },
    // 39
    {
        id: 'slow-cooked-beef-stew',
        title: 'Slow Cooked Beef Stew',
        category: 'Main Dishes',
        prep: '20 min',
        cook: '4 hours (or more)',
        serves: 6,
        description: 'Fall-apart tender slow cooked beef stew with hearty vegetables.',
        ingredients: ['1.5 kg beef chuck, cut into 5 cm chunks', '2 onions, chopped', '4 carrots, peeled and cut into chunks', '4 cups beef stock', 'Fresh herbs (thyme, rosemary)', '3 garlic cloves, minced', '2 tbsp tomato paste', 'Salt and pepper'],
        method: [
            'Season the beef chunks generously with salt and pepper. Heat a large, heavy-based pot over high heat, add oil, and brown the beef in batches. Set aside.',
            'Reduce the heat to medium, add the onions and carrots, and cook for 5 minutes until softened. Add the garlic and cook for 1 minute.',
            'Stir in the tomato paste and cook for 1–2 minutes. Return the beef to the pot, add the stock and herbs, and bring to a gentle simmer.',
            'Cover the pot and place in a preheated oven at 150°C (300°F) for 3–4 hours, or until the beef is meltingly tender. Alternatively, cook on the stovetop over very low heat for the same time, checking occasionally and adding more stock if needed.',
            'Once tender, remove from the heat and discard the herb sprigs. Taste and adjust seasoning.',
            'For a thicker sauce, you can stir in a cornflour slurry (1 tbsp cornflour + 2 tbsp water) and simmer for 5 more minutes.',
            'Serve hot, with creamy mashed potatoes or crusty bread to soak up the rich gravy.',
            'Garnish with fresh parsley.',
            'This stew is even better the next day, as the flavours develop further.'
        ],
        chefTip: 'For an even more intense flavour, add a cup of red wine along with the stock, or a splash of Worcestershire sauce. You can also add mushrooms or parsnips to the vegetable mix. If you don’t have time to slow cook in the oven, a slow cooker on low for 8 hours works perfectly.',
        servingSuggestion: 'Serve slow-cooked beef stew with creamy mashed potatoes, a dollop of horseradish cream, and a side of buttered peas. It’s the ultimate comfort food for a chilly evening. Pair with a bold, full-bodied red wine like Shiraz or Cabernet Sauvignon.'
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
        ingredients: ['1 kg potatoes (e.g., Sebago or Russet), peeled and cut into chunks', '4 garlic cloves, crushed', '2 tbsp fresh herbs (rosemary, thyme), chopped', '2 tbsp olive oil', 'Salt and pepper'],
        method: [
            'Preheat your oven to 200°C (400°F). Parboil the potato chunks in salted water for 10 minutes, then drain and let them steam dry for a few minutes.',
            'Return the potatoes to the pot, cover with a lid, and shake vigorously to fluff up the edges – this creates a rough surface that will become extra crispy.',
            'Spread the potatoes on a large baking tray in a single layer. Drizzle with olive oil and sprinkle with crushed garlic, herbs, salt, and pepper. Toss to coat evenly.',
            'Roast for 35–40 minutes, turning once halfway, until the potatoes are golden, crispy, and cooked through.',
            'Remove from the oven and season with extra salt if desired.',
            'Garnish with a few extra herb leaves.',
            'Serve hot as a side dish.',
            'These roast potatoes are a perfect accompaniment to roasts, grills, or any main meal.'
        ],
        chefTip: 'For the ultimate crispy potatoes, use a combination of olive oil and butter, and make sure the potatoes are well spaced on the tray – overcrowding will cause them to steam rather than roast. You can also add a sprinkle of Parmesan cheese in the last 10 minutes of roasting for extra flavour.',
        servingSuggestion: 'Serve these garlic herb roast potatoes alongside a Sunday roast, grilled steak, or pan-seared fish. They are also delicious with a dollop of sour cream or a side of gravy. Pair with a glass of your favourite red wine or a cold beer.'
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
        ingredients: ['200g plain biscuits (e.g., Digestives), crushed', '100g unsalted butter, melted', '500g cream cheese, softened', '1 cup thickened cream', '1/2 cup caster sugar', '2 large mangoes, pureed'],
        method: [
            'In a bowl, combine the crushed biscuits and melted butter. Press the mixture firmly into the base of a 20 cm springform pan. Chill in the fridge while you prepare the filling.',
            'In a large bowl, beat the cream cheese and sugar with an electric mixer until smooth and fluffy.',
            'In a separate bowl, whip the cream to soft peaks. Fold the whipped cream into the cream cheese mixture gently.',
            'Fold in the mango puree, reserving a little for topping if desired. Mix until just combined and the colour is uniform.',
            'Pour the filling over the biscuit base and smooth the top with a spatula. Refrigerate for at least 4 hours, or overnight, until set.',
            'Before serving, top with extra mango slices or puree and a sprinkle of shredded coconut, if desired.',
            'To serve, run a knife around the edge of the springform pan and release the sides.',
            'Slice and serve chilled.',
            'This cheesecake is best enjoyed within 2–3 days.'
        ],
        chefTip: 'Make sure your cream cheese is at room temperature to avoid lumps. For an even smoother texture, pass the mango puree through a sieve to remove any fibres. You can also use other fruits like passionfruit or strawberry for a variation. To set the cheesecake faster, you can place it in the freezer for 1 hour, then transfer to the fridge.',
        servingSuggestion: 'Serve this no-bake mango cheesecake with a drizzle of passionfruit pulp and a dollop of whipped cream. It’s a perfect dessert for summer parties, birthdays, or any special occasion. Pair with a glass of sparkling wine or a fruity cocktail.'
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
        ingredients: ['200g plain biscuits, crushed', '100g butter, melted', '1 cup icing sugar', '1/2 cup passionfruit pulp (fresh or canned)', '1 cup desiccated coconut'],
        method: [
            'In a bowl, combine the crushed biscuits and melted butter. Press the mixture into the base of a lined 20x30 cm slice tin. Chill in the fridge.',
            'In another bowl, combine the icing sugar, passionfruit pulp, and desiccated coconut. Mix until a stiff paste forms.',
            'Spread the passionfruit mixture over the chilled biscuit base, smoothing it out with a spatula.',
            'Return to the fridge and chill for at least 2 hours, or until firm.',
            'Once set, cut into squares or rectangles using a sharp knife.',
            'Store in an airtight container in the fridge.',
            'This slice is a sweet and tangy treat.',
            'Sprinkle with a little extra coconut before serving, if desired.'
        ],
        chefTip: 'For an extra tangy kick, add a tablespoon of lemon juice to the passionfruit mixture. You can also drizzle a little melted white chocolate over the top for a more indulgent finish. If fresh passionfruit is in season, use it for the best flavour.',
        servingSuggestion: 'Serve passionfruit slice with a cup of tea or coffee. It’s a perfect afternoon treat or a sweet addition to a dessert platter. These slices also make a wonderful homemade gift.'
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
        ingredients: ['6 large apples (e.g., Granny Smith), peeled, cored, and sliced', '1/2 cup sugar (or brown sugar)', '1 cup plain flour', '1 cup rolled oats', '125g unsalted butter, cold, cubed', '1 tsp ground cinnamon'],
        method: [
            'Preheat your oven to 180°C (350°F). Grease a 20x30 cm baking dish.',
            'Place the sliced apples in the dish and sprinkle with the sugar and cinnamon. Toss to coat evenly.',
            'In a large bowl, combine the flour, oats, and a pinch of salt. Add the cold butter cubes and rub them into the dry ingredients with your fingertips until the mixture resembles coarse breadcrumbs. You can also use a food processor for a few pulses.',
            'Sprinkle the crumble topping evenly over the apples, covering them completely.',
            'Bake for 35–40 minutes, until the topping is golden and crisp, and the apples are bubbling and tender.',
            'Remove from the oven and let cool for 10 minutes before serving.',
            'Serve warm with cream, custard, or vanilla ice cream.',
            'Enjoy this comforting dessert.'
        ],
        chefTip: 'For extra flavour, add a handful of sultanas or chopped walnuts to the topping. You can also use a mix of apple and pear for a different texture. If the topping is browning too quickly, cover loosely with foil. Serve with a generous drizzle of custard for the ultimate winter treat.',
        servingSuggestion: 'Serve apple crumble with a generous scoop of vanilla ice cream or a dollop of thick cream. It’s a classic dessert that never goes out of style. Pair with a cup of hot tea or a glass of dessert wine.'
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
        ingredients: ['200g pitted dates, chopped', '1 cup water', '125g unsalted butter, softened', '1 cup brown sugar', '2 large eggs', '1 1/2 cups plain flour', '1 tsp baking soda', 'For caramel sauce: 1 cup brown sugar, 1/2 cup thickened cream, 100g butter'],
        method: [
            'Preheat your oven to 180°C (350°F). Grease a 20 cm square cake tin or a pudding mould.',
            'In a small saucepan, combine the dates and water. Bring to a boil, then reduce the heat and simmer for 5 minutes until the dates are soft. Remove from heat and let cool slightly.',
            'In a large bowl, cream the butter and brown sugar until light and fluffy. Add the eggs one at a time, beating well after each addition.',
            'Sift the flour and baking soda over the creamed mixture, then fold in gently. Add the date mixture (including the liquid) and stir until just combined.',
            'Pour the batter into the prepared tin and bake for 30–35 minutes, until a skewer inserted comes out clean.',
            'While the pudding bakes, make the caramel sauce: in a small saucepan, combine the brown sugar, cream, and butter. Heat over low heat, stirring until the sugar dissolves and the sauce is smooth and thick. Do not boil.',
            'Once the pudding is cooked, remove from the oven and let it cool in the tin for 10 minutes. Turn out onto a serving plate.',
            'Prick the pudding with a skewer and pour half the warm caramel sauce over it, allowing it to soak in.',
            'Serve the pudding warm, with the remaining caramel sauce on the side.'
        ],
        chefTip: 'For an even stickier pudding, you can pour all the caramel sauce over the pudding and let it soak in. This dessert is delicious with a dollop of whipped cream or vanilla ice cream. If you want to prepare it ahead, the pudding and sauce can be made a day in advance and reheated gently.',
        servingSuggestion: 'Serve sticky date pudding with a generous drizzle of warm caramel sauce and a side of vanilla ice cream or cream. It’s an indulgent dessert that is sure to impress. Pair with a strong coffee or a sweet dessert wine.'
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
        ingredients: ['4 chicken breasts (or thighs)', '2 tbsp lemon myrtle leaves (or 1 tbsp dried)', '2 garlic cloves, minced', '1/4 cup olive oil', 'Salt and pepper'],
        method: [
            'If using fresh lemon myrtle, bruise the leaves to release their oils. If using dried, crumble them slightly.',
            'In a bowl, combine the lemon myrtle, garlic, olive oil, salt, and pepper to make a paste. Rub the paste all over the chicken and marinate for at least 30 minutes (or up to 4 hours in the fridge).',
            'Preheat a grill or barbecue to medium-high heat. Cook the chicken for 5–6 minutes per side, until cooked through (internal temperature 75°C/165°F).',
            'Remove from the heat and let rest for 5 minutes before serving.',
            'Garnish with a squeeze of lemon and a sprinkle of fresh herbs.',
            'Serve with a side of roasted vegetables or a fresh salad.',
            'Enjoy this uniquely Australian dish.'
        ],
        chefTip: 'If lemon myrtle is unavailable, you can substitute with a mix of lemon zest and a little dried lemongrass. The marinade also works beautifully with fish or lamb. For a more intense flavour, leave the chicken to marinate overnight. Serve with a dollop of Greek yoghurt and a sprinkle of sumac.',
        servingSuggestion: 'Serve lemon myrtle chicken with a side of grilled asparagus and herbed couscous. A crisp Australian Riesling or a dry gin and tonic with a lemon twist perfectly complements the zesty flavours. This dish is perfect for a summer barbecue or a light weeknight dinner.'
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
        ingredients: ['4 salmon fillets (skin on)', '2 tbsp olive oil', '1 lemon, zested and juiced', 'Fresh herbs (dill, parsley, chives), chopped', 'Salt and pepper'],
        method: [
            'In a small bowl, combine the olive oil, lemon zest, lemon juice, herbs, salt, and pepper. Place the salmon fillets in a shallow dish and pour the mixture over them, turning to coat. Marinate for 15–20 minutes.',
            'Preheat a grill or heavy skillet to medium-high heat. Brush the grates with a little oil.',
            'Remove the salmon from the marinade and pat dry. Place the salmon skin-side down on the grill. Cook for 5–6 minutes without moving, until the skin is crispy.',
            'Flip gently and cook for a further 3–4 minutes, depending on the thickness of the fillets. The salmon is done when it flakes easily with a fork.',
            'Serve immediately, with a squeeze of extra lemon and a sprinkle of fresh herbs.',
            'Garnish with lemon wedges.',
            'This salmon is delicious served with a side of steamed vegetables or a fresh salad.'
        ],
        chefTip: 'For best results, use fresh, high-quality salmon. To check for doneness, the flesh should be opaque and flake easily. Be careful not to overcook – salmon continues to cook after removal from the heat. If you prefer a smoky flavour, cook the salmon on a cedar plank on the barbecue.',
        servingSuggestion: 'Serve grilled salmon with a side of roasted potatoes and a fresh green salad with a lemon vinaigrette. It pairs beautifully with a crisp Sauvignon Blanc or a dry Riesling. For a more substantial meal, add a side of creamy dill sauce.'
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
        ingredients: ['3 cups cooked jasmine rice (preferably day-old)', '2 chicken breasts, diced', '2 large eggs, beaten', '1 onion, diced', '1/2 cup frozen peas', '1/2 cup carrots, diced', '3 tbsp soy sauce', '2 tbsp vegetable oil', 'Spring onions for garnish'],
        method: [
            'Heat 1 tablespoon of oil in a large wok or frying pan over high heat. Add the beaten eggs and scramble quickly, then remove from the pan and set aside.',
            'Add the remaining oil to the pan and cook the diced chicken for 4–5 minutes until cooked through. Remove from the pan and set aside.',
            'Add the onion, peas, and carrots to the pan and stir-fry for 2–3 minutes until the vegetables are tender-crisp.',
            'Add the cooked rice and soy sauce, and stir-fry for 2–3 minutes to heat through and combine. Break up any clumps of rice.',
            'Return the cooked chicken and scrambled egg to the pan, and toss everything together for 1–2 minutes.',
            'Season with additional soy sauce if needed, and garnish with sliced spring onions.',
            'Serve hot.',
            'Enjoy this quick and satisfying meal.'
        ],
        chefTip: 'For the best fried rice, use day-old rice that has been refrigerated – it has less moisture and will fry up more nicely. You can also add other vegetables like corn or capsicum. For extra flavour, add a splash of sesame oil or a sprinkle of white pepper just before serving.',
        servingSuggestion: 'Serve chicken fried rice as a complete meal, or as a side dish with other Asian-inspired mains. Pair with a light, refreshing beer or a glass of iced tea. It’s a perfect quick dinner for busy weeknights.'
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
        ingredients: ['1/2 head of cabbage, finely shredded', '2 carrots, peeled and grated', '1/2 cup mayonnaise', '2 tbsp white vinegar (or apple cider)', '1 tbsp caster sugar', 'Salt and pepper'],
        method: [
            'In a large bowl, combine the shredded cabbage and grated carrots.',
            'In a small bowl, whisk together the mayonnaise, vinegar, sugar, salt, and pepper until smooth.',
            'Pour the dressing over the cabbage mixture and toss well to coat evenly.',
            'Taste and adjust seasoning – you may want to add more vinegar or sugar to suit your taste.',
            'Cover and refrigerate for at least 30 minutes before serving to allow the flavours to meld.',
            'Serve chilled as a side dish.',
            'Garnish with a sprinkle of fresh parsley or a pinch of paprika, if desired.',
            'This coleslaw keeps well in the fridge for 2–3 days.'
        ],
        chefTip: 'For a creamier texture, you can add a splash of milk or a dollop of sour cream to the dressing. If you prefer a tangier slaw, add a teaspoon of Dijon mustard. You can also incorporate sliced red onion or chopped apple for a different flavour profile. Drain the cabbage well after shredding to avoid a watery slaw.',
        servingSuggestion: 'Serve classic coleslaw alongside grilled meats, burgers, or fish and chips. It’s also a great topping for pulled pork sandwiches. Pair with a cold beer or a glass of lemonade.'
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
        ingredients: ['500g linguine pasta', '500g prawns (peeled and deveined)', '4 garlic cloves, minced', '1 red chilli, finely chopped (optional)', '1/2 cup olive oil', 'Juice of 1 lemon', 'Fresh parsley, chopped'],
        method: [
            'Bring a large pot of salted water to a boil and cook the linguine according to package instructions until al dente. Reserve 1/2 cup of pasta water.',
            'While the pasta cooks, heat the olive oil in a large frying pan over medium heat. Add the garlic and chilli (if using) and cook for 1–2 minutes until fragrant, but not browned.',
            'Add the prawns to the pan and cook for 2–3 minutes, turning occasionally, until they turn pink and curl. Be careful not to overcook.',
            'Add the lemon juice and a splash of pasta water to the pan to create a light sauce. Stir well.',
            'Drain the pasta and add it to the prawn mixture. Toss well to coat, adding more pasta water if needed to loosen the sauce.',
            'Season with salt and pepper, and garnish with fresh parsley.',
            'Serve immediately with extra lemon wedges on the side.',
            'Enjoy this vibrant, zesty pasta.'
        ],
        chefTip: 'For a richer sauce, add a knob of butter at the end and toss until melted. You can also add a handful of cherry tomatoes, halved, along with the prawns for extra colour and flavour. If you prefer a non-spicy version, omit the chilli – the garlic and lemon are already delicious on their own.',
        servingSuggestion: 'Serve prawn linguine with a crisp side salad and a glass of chilled white wine like a Pinot Grigio. It’s a perfect dish for a romantic dinner or a quick yet impressive weeknight meal.'
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
        ingredients: ['200g dark chocolate, chopped', '150g unsalted butter', '1 cup caster sugar', '3 large eggs', '1 cup plain flour', '1 cup macadamia nuts, roughly chopped'],
        method: [
            'Preheat your oven to 180°C (350°F). Grease a 20x20 cm square baking tin and line with baking paper.',
            'Melt the chocolate and butter together in a heatproof bowl over a saucepan of simmering water (or in the microwave in 20-second bursts), stirring until smooth. Let cool slightly.',
            'In a large bowl, whisk the sugar and eggs together until thick and pale. This will take about 3–4 minutes with an electric mixer.',
            'Fold in the melted chocolate mixture, then gently fold in the flour and chopped macadamias until just combined – do not overmix.',
            'Pour the batter into the prepared tin and smooth the top.',
            'Bake for 25–30 minutes, until the top is set and a skewer inserted comes out with a few moist crumbs. Do not overbake – brownies should be slightly fudgy in the centre.',
            'Allow to cool completely in the tin before cutting into squares.',
            'Serve as is, or dust with icing sugar.',
            'Store in an airtight container for up to 5 days.'
        ],
        chefTip: 'For an extra fudgy texture, use dark chocolate with at least 60% cocoa. You can also add a teaspoon of sea salt flakes on top before baking for a salted brownie effect. For a variation, substitute half the macadamias with white chocolate chips. Make sure not to overmix the batter once the flour is added, as this can make the brownies tough.',
        servingSuggestion: 'Serve macadamia brownies with a scoop of vanilla ice cream or a drizzle of chocolate sauce. They are perfect for dessert or as an indulgent snack with a cup of coffee. These brownies also make a wonderful gift – wrap them individually in parchment paper and tie with twine.'
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
// OPEN MODAL (doğrudan her tarifin kendi method dizisini ve ipuçlarını kullanır)
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

    const difficultyOptions = ['Easy', 'Medium', 'Hard'];
    const difficulty = difficultyOptions[Math.floor(Math.random() * difficultyOptions.length)];

    // Ingredients list
    const ingredientsList = recipe.ingredients && recipe.ingredients.length > 0
        ? recipe.ingredients.map(i => `<li>${i}</li>`).join('')
        : '<li>No ingredients listed</li>';

    // Method list – artık doğrudan recipe.method dizisini kullanıyoruz, 8-9 adım manuel hazırlandı
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
            <strong>💡 Chef’s Tip:</strong> ${recipe.chefTip || 'Always taste and adjust seasoning as you cook – it’s the secret to great flavour.'}
        </div>

        <div class="serving-suggestion">
            <strong>🍽️ Serving Suggestion:</strong> ${recipe.servingSuggestion || 'Serve with your favourite sides and enjoy with family and friends.'}
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
