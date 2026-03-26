window.DEFAULT_MENU_DATA = {
  support: {
    settingsPin: '1738',
    supportEmail: 'jason.stiner@gmail.com',
    defaultClientEmail: '',
    formspreeEndpoint: ''
  },
  general: {
    eyebrow: "Mt Pulaski, Illinois",
    brandTitle: "Market on the Hill",
    brandTagline: "Sandwiches, soups, drinks, coffee, and other deli favorites",
    rotationSpeedSeconds: 12,
    autoRotate: true,
    fontScale: "normal",
    hideSectionControls: false,
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
      sandwiches: { itemsPerPage: 18, order: 1 },
      drinks: { itemsPerPage: 18, order: 2 },
      coffee: { itemsPerPage: 18, order: 3 },
      soups: { itemsPerPage: 18, order: 4 },
      sides: { itemsPerPage: 18, order: 5 }
    }
  },

  sectionMeta: {
    sandwiches: { title: 'Sandwiches', subtitle: 'Fresh deli sandwiches and house favorites.' },
    drinks: { title: 'Drinks', subtitle: 'Sodas, refreshers, teas, and bottled favorites.' },
    coffee: { title: 'Coffee', subtitle: 'Hot and iced coffee drinks, espresso, and café staples.' },
    soups: { title: 'Soups', subtitle: 'Daily soups and warm comfort bowls.' },
    sides: { title: 'Sides', subtitle: 'Chips, salads, sweets, and deli add-ons.' }
  },

  sandwiches: [
    {
      id: "sandwich-blt",
      name: "BLT Sandwich",
      price: "$5.99",
      description: "Crispy bacon, fresh lettuce, tomato, and mayo on your choice of bread.",
      style: "Classic deli",
      options: "Choice of bread and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-chicken-salad",
      name: "Chicken Salad Sandwich",
      price: "$7.99",
      description: "House chicken salad served on your choice of bread with toppings.",
      style: "Classic deli",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-tom",
      name: "The Tom - Ham & Turkey",
      price: "$7.99",
      description: "Freshly sliced ham and turkey with your choice of bread, cheese, and toppings.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-kimmy",
      name: "The Kimmy - Turkey",
      price: "$6.99",
      description: "Fresh deli turkey sandwich built your way.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-boodah",
      name: "The Boodah - Ham Sub",
      price: "$6.99",
      description: "Fresh deli ham with your choice of bread, cheese, and toppings.",
      style: "Deli favorite",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-saladino",
      name: "The Saladino - Ham, Turkey, & Salami",
      price: "$8.99",
      description: "Ham, turkey, and salami stacked with your choice of bread, cheese, and toppings.",
      style: "Signature sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: true,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-coulter",
      name: "The Coulter - Salami Sub",
      price: "$6.99",
      description: "Deli salami with your choice of bread, cheese, and toppings.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-club",
      name: "The Club - Ham, Turkey, & Bacon",
      price: "$8.99",
      description: "Ham, turkey, bacon, lettuce, tomato, and mayo on your choice of bread.",
      style: "Deli favorite",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: true,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-hilltopper",
      name: "The Hilltopper - Ham, Salami, & Pepperoni",
      price: "$8.99",
      description: "Ham, salami, and pepperoni with your choice of bread, cheese, and toppings.",
      style: "Signature sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-turkey-bacon-ranch",
      name: "Turkey Bacon Ranch",
      price: "$7.99",
      description: "Turkey, crispy bacon, ranch, lettuce, and tomato on your choice of bread.",
      style: "Popular sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: true,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-sourdough-sarah",
      name: "The Sourdough Sarah",
      price: "$7.99",
      description: "Grilled sourdough with ham, turkey, cheddar, pickles, and house sauce.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "hot",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-chopped-italian",
      name: "Chopped Italian Deli Sandwich",
      price: "$8.99",
      description: "Chopped ham, salami, and pepperoni with lettuce, tomato, onion, and dressing.",
      style: "Popular sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "cold",
      featured: true,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-autumn-club",
      name: "The Autumn Club",
      price: "$7.99",
      description: "Turkey, bacon, cheddar, cran-mayo, and greens on grilled ciabatta.",
      style: "House sandwich",
      options: "Choice of bread, cheese and toppings",
      category: "hot",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-grilled-cheese",
      name: "Grilled Cheese Sandwich",
      price: "$3.59",
      description: "Buttered and grilled sourdough with melted American and cheddar cheese.",
      style: "Hot sandwich",
      options: "Choice of bread and cheese",
      category: "hot",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-sausage-egg-cheese",
      name: "Sausage, Egg & Cheese",
      price: "$6.99",
      description: "Breakfast sandwich with sausage, egg, and cheese.",
      style: "Breakfast sandwich",
      options: "Choice of bread and cheese",
      category: "breakfast",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "sandwich-egg-cheese",
      name: "Egg & Cheese",
      price: "$4.99",
      description: "Simple breakfast sandwich with egg and cheese.",
      style: "Breakfast sandwich",
      options: "Choice of bread and cheese",
      category: "breakfast",
      featured: false,
      soldOut: false,
      available: true
    }
  ],

  coffee: [
    {
      id: "coffee-house",
      name: "Fresh Brewed Coffee",
      price: "$2.49",
      description: "Hot drip coffee brewed fresh throughout the day.",
      style: "Hot coffee",
      options: "Regular or decaf",
      category: "coffee",
      featured: true,
      soldOut: false,
      available: true
    },
    {
      id: "coffee-latte-large",
      name: "Large Latte",
      price: "$4.79",
      description: "Espresso with steamed milk. Available hot or iced.",
      style: "Coffee bar favorite",
      options: "Hot or Cold & Add any flavored Syrup",
      category: "coffee",
      featured: true,
      soldOut: false,
      available: true
    },
        {
      id: "coffee-latte-small",
      name: "Small Latte",
      price: "$3.99",
      description: "Espresso with steamed milk. Available hot or iced.",
      style: "Coffee bar favorite",
      options: "Hot or Cold & Add any flavored Syrup",
      category: "coffee",
      featured: true,
      soldOut: false,
      available: true
    },
    {
      id: "coffee-mocha-large",
      name: "large Mocha",
      price: "$4.79",
      description: "Espresso with chocolate and steamed milk.",
      style: "Sweet coffee",
      options: "Hot or Cold & Add any flavored Syrup",
      category: "coffee",
      featured: false,
      soldOut: false,
      available: true
    },
        {
      id: "coffee-mocha-small",
      name: "Small Mocha",
      price: "$4.39",
      description: "Espresso with chocolate and steamed milk.",
      style: "Sweet coffee",
      options: "Hot or Cold & Add any flavored Syrup",
      category: "coffee",
      featured: false,
      soldOut: false,
      available: true
    }
  ],
  soups: [
    {
      id: "soup-daily",
      name: "Daily Soup",
      price: "$6.99",
      description: "Rotating daily soup selection from the Square online menu.",
      style: "Daily soup",
      options: "Changes by day",
      available: true
    },
    {
      id: "soup-loaded-potato",
      name: "Loaded Baked Potato",
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
      style: "Hearty soup",
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

  drinks: [
    {
      id: "drink-fountain",
      name: "Fountain Drinks",
      price: "",
      description: "Self-serve cold drinks available near checkout.",
      style: "Cold beverages",
      options: "Small, medium, or large",
      category: "drink",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "drink-bottled",
      name: "Bottled Drinks",
      price: "$2.50",
      description: "Grab-and-go bottled drinks from the cooler.",
      style: "Cooler favorite",
      options: "Rotating selection",
      category: "drink",
      featured: false,
      soldOut: false,
      available: true
    },
        {
      id: "drink-iced-tea",
      name: "Iced Tea",
      price: "$3.99",
      description: "Assorted hot teas available.",
      style: "Cold beverage",
      options: "Black, green, or herbal",
      category: "drink",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "drink-hot-tea",
      name: "Hot Tea",
      price: "$3.99",
      description: "Assorted hot teas available.",
      style: "Hot beverage",
      options: "Black, green, or herbal",
      category: "drink",
      featured: false,
      soldOut: false,
      available: true
    }
  ],

  sides: [
    {
      id: "side-pasta-salad",
      name: "Pasta Salad",
      price: "$3.99",
      description: "Rotini pasta with vegetables in Italian dressing.",
      style: "Chilled side",
      options: "Per lb",
      category: "side",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "side-potato-salad",
      name: "Potato Salad",
      price: "$3.99",
      description: "Traditional deli potato salad.",
      style: "Chilled side",
      options: "Per lb",
      category: "side",
      featured: false,
      soldOut: false,
      available: true
    },
    {
      id: "side-chips",
      name: "Kettle Chips",
      price: "$2.50",
      description: "Assorted grab-and-go chip flavors.",
      style: "Packaged side",
      options: "Rotating flavors",
      category: "side",
      featured: false,
      soldOut: false,
      available: true
    }
  ]
};
