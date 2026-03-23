window.DEFAULT_MENU_DATA = {
  general: {
    eyebrow: "Mt Pulaski, Illinois",
    brandTitle: "Market on the Hill",
    brandTagline: "Coffee & Deli Order Online",
    rotationSpeedSeconds: 12,
    autoRotate: true,
    fontScale: "normal",
    showPages: {
      sandwiches: true,
      drinks: true,
      coffee: true,
      soups: true,
      sides: true
    },
    columns: {
      sandwiches: 3,
      drinks: 3,
      coffee: 3,
      soups: 3,
      sides: 3
    },
    sectionSeconds: {
      sandwiches: 12,
      drinks: 12,
      coffee: 12,
      soups: 12,
      sides: 12
    },
    hoursOpen: {
      monday: { enabled: true, open: "10:00", close: "18:00" },
      tuesday: { enabled: true, open: "10:00", close: "18:00" },
      wednesday: { enabled: true, open: "10:00", close: "18:00" },
      thursday: { enabled: true, open: "10:00", close: "18:00" },
      friday: { enabled: true, open: "10:00", close: "18:00" },
      saturday: { enabled: true, open: "10:00", close: "18:00" },
      sunday: { enabled: true, open: "10:00", close: "14:00" }
    },
    sectionSettings: {
      sandwiches: { itemsPerPage: 12, order: 1 },
      drinks: { itemsPerPage: 12, order: 2 },
      coffee: { itemsPerPage: 12, order: 3 },
      soups: { itemsPerPage: 12, order: 4 },
      sides: { itemsPerPage: 12, order: 5 }
    }
  },
  sandwiches: [
        {
      id: "sandwich-blt",
      name: "BLT Sandwich",
      price: "$5.99",
      description: "Crispy bacon, fresh lettuce, tomatoes, and your choice of bread and toppings!",
      style: "Classic deli",
      options: "Choice of bread and toppings",
      available: true
    },
    {
      id: "sandwich-chicken-salad",
      name: "Chicken Salad Sandwich",
      price: "$7.99",
      description: "Chicken salad with your choice of bread, cheese and toppings.",
      style: "Classic deli",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-tom-ham-turkey",
      name: "The Tom - Ham & Turkey",
      price: "$7.99",
      description: "Freshly sliced deli turkey and ham with your choice bread, cheese and toppings.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-kimmy-turkey",
      name: "The Kimmy - Turkey",
      price: "$6.99",
      description: "Freshly sliced deli turkey sandwich from the Square online menu.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-boodah-ham",
      name: "The Boodah - Ham Sub",
      price: "$6.99",
      description: "Freshly sliced deli ham with your choice of bread, cheese and toppings.",
      style: "Deli favorite",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-saladino-Ham-Turkey-Salami",
      name: "The Saladino - Ham, Turkey, & Salami",
      price: "$8.99",
      description: "Freshly sliced ham, turkey and salami with your choice of bread, cheese, and toppings.",
      style: "Signature sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-coulter-salami",
      name: "The Coulter - Salami Sub",
      price: "$6.99",
      description: "Deli salami with your choice of bread, cheese, and toppings.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-club-ham-turkeyt-bacon",
      name: "The Club - Ham, Turkey, & Bacon",
      price: "$8.99",
      description: "Freshly sliced deli turkey, crispy bacon and ranch with your choice of bread, cheese and toppings.",
      style: "Deli favorite",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-hilltopper-ham-salami-pepperoni",
      name: "The Hilltopper - Ham, Salami, & Pepperoni",
      price: "$8.99",
      description: "Ham, salami and pepperoni with your choice of bread, cheese and toppings.",
      style: "Signature sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-turkey-bacon-ranch",
      name: "Turkey Bacon Ranch",
      price: "$7.99",
      description: "Freshly sliced deli turkey, crispy bacon and ranch with your choice of bread, cheese and toppings.",
      style: "Popular sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-sourdough-sarah",
      name: "The Sourdough Sarah",
      price: "$7.99",
      description: "Buttered and grilled sourdough bread, ham, turkey, cheddar cheese, pickles and our super secret sauce.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-chopped-italian",
      name: "Chopped Italian Deli Sandwich",
      price: "$8.99",
      description: "Iceberg lettuce, pepperoncini, red onion, tomato, ham, pepperoni, & salami chopped with herbs and dressing.",
      style: "Popular sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-autumn-club",
      name: "The Autumn Club",
      price: "$7.99",
      description: "Oven roasted turkey, crispy bacon, melty cheddar cheese, cran-maro and spring mix on a buttered and grilled ciabatta bun.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },    {
      id: "sandwich-grilled-cheese-sandwich",
      name: "Grilled Cheese Sandwich",
      price: "$3.59",
      description: "Sourdough bread buttered and grilled to crispy perfection with American and cheddar cheese.",
      style: "Hot sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
    {
      id: "sandwich-sausage-egg-cheese",
      name: "Sausage, Egg And Cheese Breakfast Sandwich",
      price: "$6.99",
      description: "Sausage patty, egg, and your choice of bread and cheese.",
      style: "Breakfast sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    },
      {
      id: "sandwich-egg-cheese",
      name: "Egg And Cheese Breakfast Sandwich",
      price: "$4.99",
      description: "Fried egg, and your choice of bread and cheese.",
      style: "Breakfast sandwich",
      options: "Choice of bread, cheese and toppings",
      available: true
    }
  ],
  drinks: [
    {
      id: "drink-fountain",
      name: "Fountain Drinks",
      price: "",
      description: "Self-serve cold drinks available near checkout.",
      style: "Cold beverages",
      options: "Small, medium, or large",
      available: true
    },
    {
      id: "drink-iced-tea",
      name: "Fresh Brewed Iced Tea",
      price: "$2.50",
      description: "Sweet or unsweet with lemon available.",
      style: "House beverage",
      options: "Cup or grab-and-go bottle",
      available: true
    },
    {
      id: "drink-lemonade",
      name: "Market Lemonade",
      price: "$2.50",
      description: "Bright house lemonade served chilled.",
      style: "Seasonal favorite",
      options: "Regular or strawberry",
      available: true
    },
    {
      id: "drink-bottled-soda",
      name: "Bottled Soda",
      price: "$2.50",
      description: "Grab-and-go bottled soda stocked in the cooler.",
      style: "Cooler favorite",
      options: "Rotating flavors",
      available: true
    },
    {
      id: "drink-sports-drink",
      name: "Sports Drinks",
      price: "$2.50",
      description: "Cold sports drinks ready to grab from the cooler.",
      style: "Grab-and-go",
      options: "Rotating flavors",
      available: true
    },
    {
      id: "drink-juice",
      name: "Chilled Juice",
      price: "$2.50",
      description: "Single-serve juices available in the deli cooler.",
      style: "Cooler staple",
      options: "Orange, apple, or seasonal",
      available: true
    },
    {
      id: "drink-bottled-water",
      name: "Bottled Water",
      price: "$2.50",
      description: "Grab-and-go chilled bottled water.",
      style: "Cooler staple",
      options: "Single bottle",
      available: true
    },
    {
      id: "drink-orange-juice",
      name: "Orange Juice",
      price: "$2.50",
      description: "Chilled orange juice ready to grab from the cooler.",
      style: "Breakfast favorite",
      options: "Small bottle",
      available: true
    },
    {
      id: "drink-chocolate-milk",
      name: "Chocolate Milk",
      price: "$2.50",
      description: "Cold bottled chocolate milk from the deli cooler.",
      style: "Kid favorite",
      options: "Single bottle",
      available: true
    },
    {
      id: "drink-sparkling-water",
      name: "Sparkling Water",
      price: "$2.50",
      description: "Refreshing canned sparkling water with rotating flavors.",
      style: "Light refreshment",
      options: "Lemon, lime, or berry",
      available: true
    }
  ],
  coffee: [
    {
      id: "coffee-house",
      name: "Fresh Brewed Coffee",
      price: "large 2.49",
      description: "Hot drip coffee available daily at the deli counter.",
      style: "Hot coffee",
      options: "Regular or decaf",
      available: true
    },
    {
      id: "coffee-latte",
      name: "Latte",
      price: "large $4.39 / Small $3.99",
      description: "Espresso with cold milk over ice. Add any syrup for an extra sweetness.",
      style: "Coffee bar favorite",
      options: "Hot or iced",
      available: true
    },
    {
      id: "coffee-mocha",
      name: "Mocha",
      price: "Large $4.79 / Small $4.39",
      description: "Chocolate and coffee blended into a café-style drink.",
      style: "Sweet coffee",
      options: "Hot or iced",
      available: true
    },
    {
      id: "coffee-hot-tea",
      name: "Hot Tea",
      price: "$3.99",
      description: "Assorted tea bags available with hot water at the counter.",
      style: "Hot beverage",
      options: "Black, green, or herbal",
      available: true
    }
  ],
  soups: [
    {
      id: "soup-daily",
      name: "Daily Soup",
      price: "$6.99",
      description: "Rotating daily soup selection from the Square online menu.",
      style: "Square online menu",
      options: "Changes by day",
      available: true
    },
    {
      id: "soup-loaded-potato",
      name: "Loaded Potato Soup",
      price: "$6.99",
      description: "Loaded potato soup appears in Market on the Hill's published specials and social posts.",
      style: "Frequent special",
      options: "When available",
      available: true
    },
    {
      id: "soup-white-bean-bacon",
      name: "White Bean Soup with Bacon",
      price: "$6.99",
      description: "White bean soup with bacon appears in published specials.",
      style: "Frequent special",
      options: "When available",
      available: true
    },
    {
      id: "soup-zuppa-toscana",
      name: "Zuppa Toscana Soup",
      price: "$6.99",
      description: "Zuppa Toscana appears in published weekly soup specials.",
      style: "Frequent special",
      options: "When available",
      available: true
    },
    {
      id: "soup-french-onion",
      name: "French Onion Soup",
      price: "$6.99",
      description: "French onion soup appears in published specials.",
      style: "Frequent special",
      options: "When available",
      available: true
    }
  ],
  sides: [
    {
      id: "side-pasta-salad",
      name: "Pasta Salad",
      price: "$3.99 /Lbs",
      description: "Rotini pasta with vegetables in Italian dressing.",
      style: "Chilled side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-potato-salad",
      name: "Potato Salad",
      price: "$3.99 /Lbs",
      description: "Traditional deli potato salad.",
      style: "Chilled side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-chips",
      name: "Kettle Chips",
      price: "$2.50",
      description: "Assorted grab-and-go chip flavors.",
      style: "Packaged side",
      options: "Select flavors available daily",
      available: true
    },
    {
      id: "side-cookie",
      name: "Bakery Cookies",
      price: "$2.50",
      description: "Large fresh-baked cookies near the register.",
      style: "Sweet extra",
      options: "Chocolate chip, sugar, or oatmeal raisin",
      available: true
    },
    {
      id: "side-coleslaw",
      name: "Coleslaw",
      price: "$3.99 /Lbs",
      description: "Creamy deli-style coleslaw served chilled.",
      style: "Classic side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-macaroni-salad",
      name: "Macaroni Salad",
      price: "$3.99 /Lbs",
      description: "Traditional macaroni salad with a creamy dressing.",
      style: "Chilled side",
      options: "Small or regular",
      available: true
    },
    {
      id: "side-fruit-cup",
      name: "Fresh Fruit Cup",
      price: "$2.50",
      description: "Seasonal mixed fruit ready to grab from the cooler.",
      style: "Fresh side",
      options: "Single cup",
      available: true
    },
    {
      id: "side-pickle-spears",
      name: "Pickle Spears",
      price: "$2.50",
      description: "Crisp dill pickle spears packed cold.",
      style: "Deli add-on",
      options: "Single or double spear",
      available: true
    },
    {
      id: "side-brownie",
      name: "Fudge Brownie",
      price: "$2.50",
      description: "Rich bakery brownie wrapped for grab-and-go.",
      style: "Sweet extra",
      options: "Single brownie",
      available: true
    },
    {
      id: "side-kettle-corn",
      name: "Kettle Corn",
      price: "$2.50",
      description: "Sweet and salty snack bag near checkout.",
      style: "Packaged snack",
      options: "Single bag",
      available: true
    }
  ]
};
