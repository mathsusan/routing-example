import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipes = [
    {
      id: "1",
      title: "Blueberry Pie",
      ingredients: ['3/4 cup of white sugar',
        '3 tablespoons of cornstarch',
        '1/4 teaspoon of salt',
        '1/2 teaspoon of ground cinnamon',
        '4 cups of fresh blueberries',
        '1 recipe pastry for a 9 inch double crust pie',
        '1 tablespoon butter'],
        instructions: ['Preheat oven to 375 degrees F (190 degrees C).', 'Mix sugar, cornstarch, salt, and cinnamon, and sprinkle over blueberries.', 'Line pie dish with one pie crust. Pour berry mixture into the crust, and dot with butter.', 'Cut remaining pastry into 1/2 - 3/4 inch wide strips, and make lattice top. Crimp and flute edges.', 'Bake pie on lower shelf of oven for about 50 minutes, or until crust is golden brown.'],
        picture: 'Blueberry_pie.webp'
    },
    { 
      id: '2',
      title: 'Cheesecake',
      ingredients: ['1 1/2 cups graham crackers (9 to 10 whole graham crackers crushed)',
      '1/4 cup confectioners sugar',
      '1/3 cup melted buter',
      '1/8 teaspoon salt', '2 cups cream cheese, at room temperature',
      '2 large eggs',
      '2/3 cup granulated sugar',
      '1 teaspoon vanilla extract'],
      instructions: ['Select a pie pan whose inside top dimension is at least 9", and whose height is at least 1 1/4".','Preheat the oven to 350°F.', 'Make the crust by stirring together all of the crust ingredients, mixing until thoroughly combined.', 'Press the crumbs into the bottom and up the sides of the pie pan, making a thicker layer on the bottom than on the sides.', 'Make the filling by mixing together the room-temperature cream cheese and sugar until smooth.', 'Mix in the eggs and vanilla, again mixing until smooth. To avoid beating too much air into the batter, use a mixer set at low-medium speed. To avoid lumps, make sure the cream cheese is softened, and/or at room temperature.', 'Set the pie pan onto a baking sheet, if desired; this makes it easier to transport in and out of the oven, and also protects the bottom of the crust from any potential scorching. Pour the filling into the crust. ','Place the cheesecake in the oven. Bake it for 20 minutes, then add a crust shield; or shield the crust with strips of aluminum foil. Bake for an additional 10 minutes (for a total of about 30 minutes). A digital thermometer inserted into the filling 1" from the edge should read between 165°F and 170°F; the filling won\'t look entirely set in the center.', 'Remove the cheesecake from the oven, and set it on a rack to cool. Once the cake is cool, refrigerate it, covered, until you\'re ready to serve it.', 'Serve cheesecake in wedges, with fresh fruit if desired. Store any leftovers in the refrigerator for several days; freeze for longer storage.'],
      picture: 'cheesecake.webp'
    },
    {
      id: '3',
      title: 'Chicken Alfredo',
      ingredients: ['1 ½ lb chicken breast, cubed',
      '2 tablespoons butter',
      '½ teaspoon dried oregano',
      '½ teaspoon dried basil',
      '½ teaspoon salt',
      '½ teaspoon pepper',
      '16 oz penne pasta, cooked',
      '¼ cup fresh parsley',
      '¼ cup shredded parmesan cheese',
      '2 tablespoons butter',
      '4 cloves garlic, minced',
      '3 tablespoons flour',
      '2 cups milk',
      '½ teaspoon dried oregano',
      '½ teaspoon dried basil',
      '½ cup shredded parmesan cheese',
      '½ teaspoon salt',
      '½ teaspoon pepper' ],
      instructions: ['In a pan over medium-high heat, melt butter, then add the chicken breast. Season with salt, pepper, oregano, and basil. Cook 8-10 minutes or until chicken is fully cooked. Remove from heat and set chicken aside. In the same pan over medium heat, melt butter and add the garlic. Cook until the garlic begins to soften. Add half of the flour to the garlic and butter, stirring until incorporated. Then add the rest of the flour and stir. Pour in the milk a little bit at a time, stirring well in between, until fully incorporated and sauce begins to thicken. Season with salt, pepper, oregano, and basil, and stir well to incorporate. Add parmesan cheese and stir until melted. Pour the sauce over cooked penne pasta, add the chicken and mix well. Add parsley and extra parmesan. Mix well.'],
      picture: 'Chicken_Alfredo.webp'
    },
    {
      id: '4',
      title: 'Chocolate Chip Cookies',
      ingredients: ['1 cup salted butter* softened',
      '1 cup white (granulated) sugar',
      '1 cup light brown sugar packed',
      '2 tsp pure vanilla extract',
      '2 large eggs',
      '3 cups all-purpose flour',
      '1 tsp baking soda',
      '½ tsp baking powder',
      '1 tsp sea salt***',
      '2 cups chocolate chips (or chunks, or chopped chocolate)'],
      instructions: ['Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.',
        'In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.',
        'Cream together butter and sugars until combined.',
        'Beat in eggs and vanilla until fluffy.',
        'Mix in the dry ingredients until combined.',
        'Add 12 oz package of chocolate chips and mix well.',
        'Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies)!',
        'Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.',
        'Let them sit on the baking pan for 2 minutes before removing to cooling rack.'],
        picture: 'chocolate_chip_cookie.webp'
    },
    {
      id: '5',
      title: 'Hokkaido Dinner Roll',
      ingredients: ['2 tablespoons (20g) bread flour',
      '2 tablespoons (27g) water',
      '4 tablespoons (60g) whole milk',
      '2.5 cups (320g) bread flour',
      '1 tablespoon (9g) active dry yeast (instant works as well)',
      '3/4 teaspoon (3g) fine sea salt',
      '1/2 cup (120g) whole milk',
      '1/4 cup (56g) granulated sugar',
      '3 tablespoons (42g) unsalted butter, softened',
      '1 whole egg, room temperature',
      '1 egg',
      'splash of whole milk (about 2 tablespoons)',
      'Garlic Butter 1-2 cloves garlic',
      '1/4 cup (56g) unsalted butter'],
      instructions: ['Mix the ingredients of the tangzhong. Cook together constantly mixing until sticky and tacky. 30 sec-2 mins. As soon as very think allow to cool to room temp Add yeast to 90-95F milk. Mix and sit for 10 mins. Assemble other ingredients. Wisk dry ingredients in mixer bowl. Put dough hook in. Add tengzhong, milk and yeast, and egg Start at low and scrape sides as needed. As soon as it comes together tun to medium speed. Keep on med-low, gradually adding in 42 g of butter, ⅓ at a time. Mix until incorporated.After incorporated mix for about 5-7 mins or until smooth. Dough may be a bit sticky -that is okay Dump onto work surface and roll into a tight boule. Place into a lightly greased bowl and cover with a towel. Rise at room tem 1-2 hrs until double. Punch down dough. Put on a floured surface and divide into 9 rolls, around 75 grams each.Lightly spray a 9X9 in pan Roll each ball into tight boules.Allow to prove 1-2 hrs at room temp, covered with a towel. Brush with egg wash Bake in 350 f oven for 28-30 mins Make garlic butter. Add chopped garlic to a cold pan with butter. Sweat garlic for 30s and then remove from the heat and let the residual heat cook the butter Remove buns from oven and immediately add the garlic butter. Add flaky salt to the top.'],
      picture: 'DinnerRoll.webp'
    },
    {
      id: '6',
      title: 'Kale Meatball Soup',
      ingredients: ['1 tablespoon Carlini Pure Olive Oil',
      '3 garlic cloves, chopped',
      '3/4 cup diced red onion',
      '64 ounces Fit & Active Reduced Sodium Chicken Broth',
      '1 1/2 teaspoons Stonemill Italian Seasoning, divided',
      '1 3/4 teaspoons Stonemill Parsley Flakes, divided',
      '2 teaspoons Stonemill Iodized Salt, divided',
      '1 1/2 teaspoons Stonemill Ground Black Pepper, divided',
      '1/8 teaspoon Stonemill Chili Powder',
      '1 pound All Natural 93% Lean Ground Beef',
      '1 Goldhen Large Egg',
      '1 teaspoon Stonemill Paprika',
      '1/2 teaspoon Stonemill Ground Cumin',
      '1/2 cup sliced red onion',
      '4 cups Simply Nature Organic Baby Kale'],
      instructions: ['In a medium saucepan, heat the oil over medium-low heat. Sauté the garlic and diced red onion until tender. Reserve.',
      'In a medium saucepan, bring the chicken broth to a low simmer. Add 1/2 teaspoon Italian seasoning, 1 teaspoon parsley, 1 teaspoon salt, 1/2 teaspoon pepper and chili powder.',
      'In a medium bowl, combine the reserved garlic and onions, ground beef, egg, remaining Italian seasoning, parsley, salt, pepper, paprika and cumin. Shape mixture into tablespoon-size balls and drop directly into the broth. Bring to a boil, simmer for 25 minutes.',
      'Add the sliced red onion, simmer 5 minutes. Add the kale, simmer until the kale wilts, about 2 minutes. Serve.'],
      picture: 'kale_meatball_soup.webp'
    },
    {
      id: '7',
      title: 'Spaghetti Squash Bowls',
      ingredients: ['2 medium spaghetti squash, halved, seeds removed',
      '1 tbsp. extra-virgin olive oil',
      'Sea salt',
      '1 tbsp. extra-virgin olive oil 1/2 onion, chopped',
      '2 cloves garlic, minced',
      '1 lb. ground beef',
      '1 T. Homemade taco seasoning',
      'Sea salt & pepper',
      '1⁄4 cup sliced olives',
      '1 1⁄2 c. chopped cherry tomatoes',
      '2 tbsp. freshly chopped cilantro (optional)'],
      instructions: ['Preheat oven to 400°. Drizzle cut sides of spaghetti squash with oil and season with salt. Place cut side down on a large, rimmed baking sheet. Roast until tender, 30 to 35 minutes. Remove from oven and let cool a bit. Use a fork to loosen the squash spaghetti strands. Meanwhile, make filling: In a large skillet over medium heat, heat olive oil. Add onion and cook until soft, about 5 minutes. Stir in garlic and cook until fragrant, about 1 minute more. Add ground beef, breaking up the meat with a wooden spoon. Cook until beef is no longer pink, about 6 minutes. Drain fat. Stir in taco seasoning, then season to taste with salt and pepper. Stir in olives and cherry tomatoes. Fill each spaghetti squash with beef mixture. Garnish with cilantro and avocado.'
      ],
      picture: 'spaghettiSquash.webp'
    },
    {
      id: '8',
      title: 'Taco Seasoning',
      ingredients: ['1⁄2 cup Chili powder',
      '1⁄4 cup onion powder',
      '1⁄4 cup Cumin',
      '2 Tbl spoon garlic powder',
      '1 Tbl spoon paprika',
      '1 Tbl spoon turmeric',
      '1 Tbl spoon sea salt'],
      instructions: ['Put in mason jar and shake.'],
      picture: ''
    },
    {
      id: '9',
      title: 'Vegetable Soup',
      ingredients: ['2 Tablespoons extra virgin olive oil',
      '1 Medium onion, chopped',
      '2 Medium carrots, chopped',
      '2 Stalks celery, chopped',
      '12 Ounces fresh green beans, cut 1/2 in pieces',
      '2 Cloves garlic, minced',
      '8 Cups no salt added low-sodium vegetable broth or chicken broth',
      '2 (15 ounce) cans low-sodium cannellini or other white beans, rinsed',
      '4 Cups chopped spinach',
      '2 Medium zucchini, chopped',
      '4 Roma tomatoes, seeded and chopped',
      '3/4 Teaspoon salt',
      '8 Teaspoons prepared pesto'],
      instructions: ['Heat oil in a large pot over medium-high heat. Add onion, carrot, celery, green beans and garlic. Cook, stirring frequently, until the vegetables begin to soften, about 10 minutes. Add broth and bring to a boil. Reduce heat to a simmer and cook, stirring occasionally, until the vegetables are soft, about 10 minutes more. Add white beans, kale, zucchini, tomatoes, vinegar, salt and pepper. Increase heat to return to a simmer; cook until the zucchini and kale have softened, about 10 minutes. Top each serving of soup with 1 teaspoon pesto.'],
      picture: 'veg_soup.webp'
    }
  ]

  public getRecipe(id: string | null): IRecipe {
    return (this.recipes.find(recipe => recipe.id === id)) as IRecipe; 
  }

  constructor() { }
}
