window.DEFAULT_MENU_DATA = {
  general: {
    eyebrow: "Lincoln, Illinois",
    brandTitle: "Market on the Hill",
    brandTagline: "Community-owned grocery • deli sandwiches • quick grab-and-go favorites",
    rotationSpeedSeconds: 12,
    itemsPerPage: 8,
    showPages: {
      drinks: true,
      sandwiches: true,
      other: true
    }
  },
  drinks: [
    {
      id: "drink-fresh-coffee",
      name: "Fresh Brewed Coffee",
      description: "Hot, fresh coffee ready for a quick stop-in.",
      base: "House Brew",
      syrups: ["Regular", "Decaf"],
      available: true
    },
    {
      id: "drink-iced-coffee",
      name: "Iced Coffee",
      description: "Smooth chilled coffee for an easy grab-and-go option.",
      base: "Cold Brew",
      syrups: ["Vanilla", "Caramel"],
      available: true
    },
    {
      id: "drink-sweet-tea",
      name: "Sweet Tea",
      description: "Classic deli-case tea with a smooth, sweet finish.",
      base: "Black Tea",
      syrups: [],
      available: true
    },
    {
      id: "drink-unsweet-tea",
      name: "Unsweet Tea",
      description: "Fresh tea for customers wanting a lighter option.",
      base: "Black Tea",
      syrups: [],
      available: true
    },
    {
      id: "drink-lemonade",
      name: "House Lemonade",
      description: "Bright and refreshing with a deli-lunch feel.",
      base: "Lemonade",
      syrups: [],
      available: true
    },
    {
      id: "drink-fountain-soda",
      name: "Fountain Soda",
      description: "Cold soda options ready to pair with any sandwich.",
      base: "Fountain",
      syrups: ["Cola", "Lemon-Lime", "Root Beer"],
      available: true
    },
    {
      id: "drink-bottled-water",
      name: "Bottled Water",
      description: "Simple, cold, and always available.",
      base: "Water",
      syrups: [],
      available: true
    },
    {
      id: "drink-sparkling-water",
      name: "Sparkling Water",
      description: "A clean, crisp option for lunch on the go.",
      base: "Sparkling Water",
      syrups: ["Lime"],
      available: true
    }
  ],
  sandwiches: [
    {
      id: "sandwich-turkey-swiss",
      name: "Turkey & Swiss",
      description: "Oven-roasted turkey, Swiss, lettuce, tomato, mayo",
      category: "Cold Sandwich",
      extras: ["White", "Wheat", "Hoagie Roll"],
      available: true
    },
    {
      id: "sandwich-ham-cheddar",
      name: "Ham & Cheddar",
      description: "Smoked ham, cheddar, lettuce, tomato, mustard",
      category: "Cold Sandwich",
      extras: ["White", "Wheat", "Rye"],
      available: true
    },
    {
      id: "sandwich-roast-beef-provolone",
      name: "Roast Beef & Provolone",
      description: "Roast beef, provolone, red onion, horseradish mayo",
      category: "Deli Favorite",
      extras: ["Hoagie Roll", "Onion Bun"],
      available: true
    },
    {
      id: "sandwich-italian-sub",
      name: "Italian Sub",
      description: "Salami, ham, pepperoni, provolone, lettuce, tomato, vinaigrette",
      category: "Sub",
      extras: ["Hoagie Roll", "Banana Peppers"],
      available: true
    },
    {
      id: "sandwich-blt",
      name: "BLT",
      description: "Bacon, lettuce, tomato, mayo on toasted bread",
      category: "Classic",
      extras: ["White", "Wheat", "Texas Toast"],
      available: true
    },
    {
      id: "sandwich-chicken-salad",
      name: "Chicken Salad Croissant",
      description: "House chicken salad on a flaky croissant",
      category: "Salad Sandwich",
      extras: ["Croissant", "Leaf Lettuce"],
      available: true
    },
    {
      id: "sandwich-tuna-salad",
      name: "Tuna Salad",
      description: "Classic tuna salad with lettuce on wheat or white",
      category: "Salad Sandwich",
      extras: ["White", "Wheat"],
      available: true
    },
    {
      id: "sandwich-veggie-club",
      name: "Veggie Club",
      description: "Cheddar, cucumber, tomato, greens, onion, deli spread",
      category: "Vegetarian",
      extras: ["Wheat", "Sourdough"],
      available: true
    }
  ],
  syrups: [
    { id: "cond-mayo", name: "Mayo", description: "Condiment / add-on", available: true },
    { id: "cond-mustard", name: "Mustard", description: "Condiment / add-on", available: true },
    { id: "cond-spicy-mustard", name: "Spicy Mustard", description: "Condiment / add-on", available: true },
    { id: "cond-ranch", name: "Ranch", description: "Condiment / add-on", available: true },
    { id: "cond-horseradish", name: "Horseradish Sauce", description: "Condiment / add-on", available: true },
    { id: "cond-pickles", name: "Pickles", description: "Condiment / add-on", available: true },
    { id: "cond-banana-peppers", name: "Banana Peppers", description: "Condiment / add-on", available: true },
    { id: "cond-onion", name: "Red Onion", description: "Condiment / add-on", available: true },
    { id: "cond-lettuce", name: "Lettuce", description: "Condiment / add-on", available: true },
    { id: "cond-tomato", name: "Tomato", description: "Condiment / add-on", available: true }
  ],
  other: [
    { id: "side-kettle-chips", name: "Kettle Chips", description: "Crunchy chip options for a quick sandwich combo.", available: true },
    { id: "side-potato-salad", name: "Potato Salad", description: "Classic deli side served chilled.", available: true },
    { id: "side-pasta-salad", name: "Pasta Salad", description: "A cold pasta side for lunch and carryout.", available: true },
    { id: "side-pickle-spear", name: "Pickle Spear", description: "A deli classic included with sandwiches or sold on the side.", available: true },
    { id: "side-cookie", name: "Bakery Cookie", description: "Fresh bakery cookie for a simple dessert add-on.", available: true },
    { id: "side-brownie", name: "House Brownie", description: "Rich brownie square from the bakery case.", available: true },
    { id: "side-fruit-cup", name: "Fruit Cup", description: "Fresh fruit for a lighter grab-and-go choice.", available: true },
    { id: "side-cheese-cup", name: "Cheese Cubes", description: "Snack-size cheese cup from the cooler case.", available: true }
  ]
};
