window.DEFAULT_MENU_DATA = {
  general: {
    eyebrow: "Mt Pulaski, Illinois",
    brandTitle: "Market on the Hill",
    brandTagline: "Sandwiches, soups, drinks, and deli favorites",
    rotationSpeedSeconds: 12,
    fontScale: "normal",
    showPages: {
      sandwiches: true,
      drinks: true,
      soups: true,
      sides: true
    },
    sectionSettings: {
      drinks: { itemsPerPage: 12, order: 1 },
      sandwiches: { itemsPerPage: 12, order: 2 },
      soups: { itemsPerPage: 12, order: 3 },
      sides: { itemsPerPage: 12, order: 4 }
    }
  },
  sandwiches: [
    {
      id: "sandwich-turkey-club",
      name: "Turkey Club",
      description: "Roasted turkey, bacon, lettuce, tomato, and mayo.",
      style: "Cold deli favorite",
      options: "White, wheat, or croissant",
      available: true
    },
    {
      id: "sandwich-ham-swiss",
      name: "Ham & Swiss",
      description: "Black forest ham, Swiss, lettuce, tomato, and deli mustard.",
      style: "Classic cold sandwich",
      options: "White or marble rye",
      available: true
    },
    {
      id: "sandwich-italian",
      name: "Italian",
      description: "Salami, capicola, provolone, lettuce, tomato, onion, and Italian dressing.",
      style: "Deli specialty",
      options: "Hoagie roll or wheat sub bun",
      available: true
    },
    {
      id: "sandwich-chicken-salad",
      name: "Chicken Salad Croissant",
      description: "House chicken salad with lettuce and sliced tomato.",
      style: "House made",
      options: "Croissant or wheatberry bread",
      available: true
    },
    {
      id: "sandwich-roast-beef-cheddar",
      name: "Roast Beef & Cheddar",
      description: "Roast beef, sharp cheddar, red onion, lettuce, and horseradish mayo.",
      style: "Hearty favorite",
      options: "Kaiser roll or marble rye",
      available: true
    },
    {
      id: "sandwich-blt",
      name: "BLT",
      description: "Crisp bacon, lettuce, tomato, and mayo.",
      style: "Simple classic",
      options: "White, wheat, or toasted sourdough",
      available: true
    },
    {
      id: "sandwich-tuna-melt",
      name: "Tuna Melt",
      description: "Tuna salad, cheddar, and tomato toasted until warm.",
      style: "Warm deli favorite",
      options: "Sourdough or marble rye",
      available: true
    },
    {
      id: "sandwich-veggie",
      name: "Garden Veggie",
      description: "Lettuce, tomato, cucumber, onion, provolone, and herb spread.",
      style: "Vegetarian option",
      options: "Wheat, sourdough, or wrap",
      available: true
    },
    {
      id: "sandwich-ham-turkey-combo",
      name: "Ham & Turkey Combo",
      description: "Ham, turkey, Swiss, lettuce, tomato, and mayo.",
      style: "Deli combo",
      options: "White, wheat, or croissant",
      available: true
    },
    {
      id: "sandwich-meatball-sub",
      name: "Meatball Sub",
      description: "Meatballs, marinara, and melted provolone served hot.",
      style: "Hot sandwich",
      options: "Toasted hoagie roll",
      available: true
    }
  ],
  drinks: [
    {
      id: "drink-fountain",
      name: "Fountain Drinks",
      description: "Self-serve cold drinks available near checkout.",
      style: "Cold beverages",
      options: "Small, medium, or large",
      available: true
    },
    {
      id: "drink-iced-tea",
      name: "Fresh Brewed Iced Tea",
      description: "Sweet or unsweet with lemon available.",
      style: "House beverage",
      options: "Cup or grab-and-go bottle",
      available: true
    },
    {
      id: "drink-lemonade",
      name: "Market Lemonade",
      description: "Bright house lemonade served chilled.",
      style: "Seasonal favorite",
      options: "Regular or strawberry",
      available: true
    },
    {
      id: "drink-coffee",
      name: "Fresh Coffee",
      description: "Hot drip coffee available all day.",
      style: "Hot beverages",
      options: "Regular or decaf",
      available: true
    },
    {
      id: "drink-cold-brew",
      name: "Cold Brew Coffee",
      description: "Smooth chilled coffee poured over ice.",
      style: "Coffee bar",
      options: "Black, vanilla, or mocha",
      available: true
    },
    {
      id: "drink-hot-tea",
      name: "Hot Tea",
      description: "Assorted tea bags with hot water available at the counter.",
      style: "Hot beverages",
      options: "Black, green, or herbal",
      available: true
    },
    {
      id: "drink-bottled-water",
      name: "Bottled Water",
      description: "Grab-and-go chilled bottled water.",
      style: "Cooler staple",
      options: "Single bottle",
      available: true
    },
    {
      id: "drink-orange-juice",
      name: "Orange Juice",
      description: "Chilled orange juice ready to grab from the cooler.",
      style: "Breakfast favorite",
      options: "Small bottle",
      available: true
    },
    {
      id: "drink-chocolate-milk",
      name: "Chocolate Milk",
      description: "Cold bottled chocolate milk from the deli cooler.",
      style: "Kid favorite",
      options: "Single bottle",
      available: true
    },
    {
      id: "drink-sparkling-water",
      name: "Sparkling Water",
      description: "Refreshing canned sparkling water with rotating flavors.",
      style: "Light refreshment",
      options: "Lemon, lime, or berry",
      available: true
    }
  ],
  soups: [
    {
      id: "soup-chicken-noodle",
      name: "Chicken Noodle",
      description: "Comforting broth with chicken, noodles, carrots, and celery.",
      style: "Daily staple",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-broccoli-cheddar",
      name: "Broccoli Cheddar",
      description: "Creamy cheddar soup with broccoli florets.",
      style: "Creamy soup",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-potato",
      name: "Loaded Baked Potato",
      description: "Creamy potato soup with bacon, cheddar, and chives.",
      style: "Hearty soup",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-chili",
      name: "Homestyle Chili",
      description: "Beef chili with beans and a slow-simmered tomato base.",
      style: "House favorite",
      options: "Cup, bowl, or add crackers",
      available: true
    },
    {
      id: "soup-tomato-basil",
      name: "Tomato Basil",
      description: "Rich tomato soup finished with basil and cream.",
      style: "Comfort classic",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-vegetable-beef",
      name: "Vegetable Beef",
      description: "Savory beef broth with vegetables and tender beef.",
      style: "Hearty soup",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-clam-chowder",
      name: "Clam Chowder",
      description: "Creamy chowder with potatoes and clam flavor.",
      style: "Creamy soup",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-minestrone",
      name: "Minestrone",
      description: "Tomato broth with pasta, beans, and vegetables.",
      style: "Vegetarian soup",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-chicken-dumpling",
      name: "Chicken & Dumpling",
      description: "Thick comforting soup with chicken and soft dumplings.",
      style: "Homestyle soup",
      options: "Cup or bowl",
      available: true
    },
    {
      id: "soup-taco",
      name: "Taco Soup",
      description: "Tomato-based soup with beef, beans, and southwest flavor.",
      style: "Rotating special",
      options: "Cup or bowl",
      available: true
    }
  ],
  sides: [
    {
      id: "side-pasta-salad",
      name: "Pasta Salad",
      description: "Rotini pasta with vegetables in Italian dressing.",
      style: "Chilled side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-potato-salad",
      name: "Potato Salad",
      description: "Traditional deli potato salad.",
      style: "Chilled side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-chips",
      name: "Kettle Chips",
      description: "Assorted grab-and-go chip flavors.",
      style: "Packaged side",
      options: "Select flavors available daily",
      available: true
    },
    {
      id: "side-cookie",
      name: "Bakery Cookies",
      description: "Large fresh-baked cookies near the register.",
      style: "Sweet extra",
      options: "Chocolate chip, sugar, or oatmeal raisin",
      available: true
    },
    {
      id: "side-coleslaw",
      name: "Coleslaw",
      description: "Creamy deli-style coleslaw served chilled.",
      style: "Classic side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-macaroni-salad",
      name: "Macaroni Salad",
      description: "Traditional macaroni salad with a creamy dressing.",
      style: "Chilled side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-fruit-cup",
      name: "Fresh Fruit Cup",
      description: "Seasonal mixed fruit ready to grab from the cooler.",
      style: "Fresh side",
      options: "Single cup",
      available: true
    },
    {
      id: "side-pickle-spears",
      name: "Pickle Spears",
      description: "Crisp dill pickle spears packed cold.",
      style: "Deli add-on",
      options: "Single or double spear",
      available: true
    },
    {
      id: "side-brownie",
      name: "Fudge Brownie",
      description: "Rich bakery brownie wrapped for grab-and-go.",
      style: "Sweet extra",
      options: "Single brownie",
      available: true
    },
    {
      id: "side-kettle-corn",
      name: "Kettle Corn",
      description: "Sweet and salty snack bag near checkout.",
      style: "Packaged snack",
      options: "Single bag",
      available: true
    }
  ]
};
