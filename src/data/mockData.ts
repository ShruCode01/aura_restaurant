import { MenuItem, Category, SpecialOffer, Chef, Testimonial, BlogPost, FAQItem, GalleryItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Breakfast',
    iconName: 'Sun',
    description: 'Artisanal morning delights & freshly squeezed press juice',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c2',
    name: 'Lunch',
    iconName: 'Utensils',
    description: 'Sophisticated midday plates crafted for refined palates',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c3',
    name: 'Dinner',
    iconName: 'Moon',
    description: 'Opulent multi-course dining & sommelier choices',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c4',
    name: 'Pizza',
    iconName: 'Disc',
    description: 'Authentic Neapolitan wood-fired pizzas with imported mozzarella',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c5',
    name: 'Burger',
    iconName: 'Sparkles',
    description: 'A5 Wagyu beef & gourmet artisanal brioche burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c6',
    name: 'Pasta',
    iconName: 'ChefHat',
    description: 'Handcrafted fresh egg pasta with black truffle shaved tableside',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c7',
    name: 'Indian',
    iconName: 'Flame',
    description: 'Royal Mughlai recipes, fragrant saffron rice & charcoal kebabs',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c8',
    name: 'Chinese',
    iconName: 'Soup',
    description: 'Authentic Cantonese dim sum, Peking duck & wok infusions',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c9',
    name: 'Italian',
    iconName: 'Wine',
    description: 'Classic Tuscan flavors, carpaccio & heirloom balsamico',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b31f8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c10',
    name: 'South Indian',
    iconName: 'Leaf',
    description: 'Crispy ghee podi dosas, coconut chutneys & filter kaapi',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c11',
    name: 'Desserts',
    iconName: 'Cake',
    description: 'French patisserie, gold-leaf chocolate dome & delicate soufflés',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c12',
    name: 'Drinks',
    iconName: 'GlassWater',
    description: 'Craft mixology, vintage champagne & rare botanical elixirs',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c13',
    name: 'Coffee',
    iconName: 'Coffee',
    description: 'Single-origin Ethiopian Yirgacheffe & signature velvet lattes',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Dinner & Chef Specials
  {
    id: 'm1',
    name: 'Truffle Glazed A5 Wagyu Ribeye',
    category: 'Dinner',
    description: 'Miyazaki Wagyu ribeye steak (8oz) smoked with cherrywood, perigord black truffle glaze, potato fondant & heirloom glazed carrots.',
    price: 98,
    originalPrice: 120,
    rating: 4.9,
    reviewsCount: 142,
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    calories: 820,
    prepTime: '25 min',
    spiciness: 0,
    ingredients: ['A5 Miyazaki Wagyu', 'Black Périgord Truffle', 'Organic Rosemary Butter', 'Fingerling Potatoes', 'Demiglace'],
    allergens: ['Dairy', 'Gluten']
  },
  {
    id: 'm2',
    name: 'Lobster & Gold Leaf Tagliolini',
    category: 'Pasta',
    description: 'Fresh hand-cut egg tagliolini, Maine lobster tail, saffron lobster bisque, sea urchin emulsion & edible 24k gold leaf.',
    price: 64,
    rating: 4.8,
    reviewsCount: 98,
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    calories: 680,
    prepTime: '20 min',
    spiciness: 1,
    ingredients: ['Fresh Maine Lobster', 'Handmade Pasta', 'Kashmiri Saffron', 'Sea Urchin', 'San Marzano Tomato'],
    allergens: ['Shellfish', 'Eggs', 'Dairy', 'Gluten']
  },
  {
    id: 'm3',
    name: 'Black Truffle Wild Mushroom Risotto',
    category: 'Dinner',
    description: 'Acquerello carnaroli rice cooked in aromatic vegetable broth, roasted chanterelles, porcini dust & freshly shaved winter truffle.',
    price: 42,
    rating: 4.9,
    reviewsCount: 115,
    isVeg: true,
    isChefSpecial: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    calories: 520,
    prepTime: '18 min',
    spiciness: 0,
    ingredients: ['Carnaroli Rice', 'Winter Black Truffle', 'Chanterelle Mushrooms', 'Aged Parmigiano Reggiano', 'White Wine'],
    allergens: ['Dairy']
  },

  // Breakfast
  {
    id: 'm4',
    name: 'Royal Smoked Salmon Eggs Benedict',
    category: 'Breakfast',
    description: 'Toasted brioche, wild Scottish smoked salmon, poached organic eggs, yuzu hollandaise sauce & caviar pearls.',
    price: 28,
    rating: 4.7,
    reviewsCount: 76,
    isVeg: false,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    calories: 490,
    prepTime: '15 min',
    spiciness: 0,
    ingredients: ['Scottish Salmon', 'Free-range Eggs', 'Artisan Brioche', 'Yuzu Hollandaise', 'Avocado', 'Siberian Caviar'],
    allergens: ['Fish', 'Eggs', 'Dairy', 'Gluten']
  },
  {
    id: 'm5',
    name: 'Avocado Tartine with Heirloom Tomatoes',
    category: 'Breakfast',
    description: 'Sourdough toast, smashed Hass avocado, heirloom cherry tomatoes, crumbled feta, toasted pumpkin seeds & balsamic glaze.',
    price: 22,
    rating: 4.8,
    reviewsCount: 64,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    calories: 380,
    prepTime: '12 min',
    spiciness: 0,
    ingredients: ['Sourdough Bread', 'Hass Avocado', 'Organic Heirloom Tomatoes', 'Greek Feta', 'Extra Virgin Olive Oil'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: 'm6',
    name: 'Soufflé Pancakes with Berry Compote',
    category: 'Breakfast',
    description: 'Fluffy Japanese soufflé pancakes, organic maple syrup, fresh Madagascar vanilla whipped cream & wild forest berry reduction.',
    price: 24,
    rating: 4.9,
    reviewsCount: 88,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    calories: 540,
    prepTime: '18 min',
    spiciness: 0,
    ingredients: ['Organic Egg Whites', 'Madagascar Vanilla Bean', 'Canadian Maple Syrup', 'Wild Blackberries', 'Raspberries'],
    allergens: ['Eggs', 'Dairy', 'Gluten']
  },

  // Pizza & Italian
  {
    id: 'm7',
    name: 'Tartufo e Burrata Woodfired Pizza',
    category: 'Pizza',
    description: '24-hour fermented Neapolitan dough, cream sauce, fresh Puglia burrata, shaved black truffle, fior di latte & fresh basil leaves.',
    price: 36,
    rating: 4.9,
    reviewsCount: 180,
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    calories: 780,
    prepTime: '15 min',
    spiciness: 0,
    ingredients: ['Caputo Type 00 Flour', 'Puglia Burrata', 'Fresh Black Truffle', 'Fior di Latte Mozzarella', 'EVOO'],
    allergens: ['Dairy', 'Gluten']
  },
  {
    id: 'm8',
    name: 'Prosciutto di Parma & Rocket Pizza',
    category: 'Pizza',
    description: 'San Marzano DOP tomato base, buffalo mozzarella, 24-month aged Prosciutto di Parma, organic baby arugula & parmesan shavings.',
    price: 34,
    rating: 4.8,
    reviewsCount: 110,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    calories: 720,
    prepTime: '15 min',
    spiciness: 0,
    ingredients: ['Prosciutto di Parma', 'Buffalo Mozzarella', 'San Marzano Tomatoes', 'Baby Arugula', 'Aged Balsamic'],
    allergens: ['Dairy', 'Gluten']
  },

  // Burger
  {
    id: 'm9',
    name: 'The Crown Wagyu Burger',
    category: 'Burger',
    description: '8oz Wagyu beef patty, caramelized balsamic onions, 18-month aged cheddar, crispy shallots, black garlic aioli in gold-brushed brioche.',
    price: 38,
    originalPrice: 45,
    rating: 4.9,
    reviewsCount: 210,
    isVeg: false,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    calories: 910,
    prepTime: '15 min',
    spiciness: 1,
    ingredients: ['Wagyu Beef', 'Aged Cheddar', 'Black Garlic Mayo', 'Balsamic Onions', 'Artisan Brioche Bun'],
    allergens: ['Dairy', 'Gluten', 'Eggs']
  },
  {
    id: 'm10',
    name: 'Smoked Portobello & Truffle Burger',
    category: 'Burger',
    description: 'Charcoal grilled portobello mushroom stuffed with smoked provolone, crispy kale, house pesto mayo & potato brioche.',
    price: 28,
    rating: 4.7,
    reviewsCount: 54,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    calories: 610,
    prepTime: '15 min',
    spiciness: 0,
    ingredients: ['Portobello Mushroom', 'Smoked Provolone', 'Basil Pesto', 'Crispy Kale', 'Brioche Bun'],
    allergens: ['Dairy', 'Gluten', 'Nuts']
  },

  // Indian & Royal Cuisine
  {
    id: 'm11',
    name: 'Grand Royal Dum Biryani (Chicken/Mutton)',
    category: 'Indian',
    description: 'Fragrant long-grain Basmati rice, saffron, whole aromatic spices, succulent marinated leg of lamb or chicken cooked under sealed clay pot lid.',
    price: 36,
    rating: 4.9,
    reviewsCount: 320,
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    calories: 750,
    prepTime: '25 min',
    spiciness: 2,
    ingredients: ['Kashmiri Saffron', 'Aged Basmati Rice', 'Organic Chicken/Lamb', 'Pure Desi Ghee', 'Caramelized Onions'],
    allergens: ['Dairy']
  },
  {
    id: 'm12',
    name: 'Velvet Butter Chicken (Murgh Makhani)',
    category: 'Indian',
    description: 'Clay-oven charred boneless chicken tikka cooked in a velvety tomato, cashew nut and butter sauce topped with fresh cream and fenugreek.',
    price: 32,
    rating: 4.9,
    reviewsCount: 290,
    isVeg: false,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    calories: 680,
    prepTime: '20 min',
    spiciness: 1,
    ingredients: ['Tandoori Chicken', 'San Marzano Tomatoes', 'Cashew Paste', 'Amul Butter', 'Fresh Kasuri Methi'],
    allergens: ['Dairy', 'Nuts']
  },
  {
    id: 'm13',
    name: 'Dal Makhani Gold & Garlic Naan',
    category: 'Indian',
    description: 'Slow-simmered black lentils cooked overnight on charcoal embers with churned butter, cream & served with artisan wood-fired garlic naan.',
    price: 26,
    rating: 4.8,
    reviewsCount: 195,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    calories: 580,
    prepTime: '15 min',
    spiciness: 1,
    ingredients: ['Black Urad Dal', 'Desi Ghee', 'Fresh Cream', 'Tomato Puree', 'Garlic Butter Naan'],
    allergens: ['Dairy', 'Gluten']
  },

  // Chinese & Asian Fusion
  {
    id: 'm14',
    name: 'Peking Duck Pancakes with Caviar',
    category: 'Chinese',
    description: 'Crispy roasted Pekin duck skin and tender meat served with thin hand-rolled steamed pancakes, scallions, cucumber, hoisin plum glaze & ossetra caviar.',
    price: 58,
    rating: 4.9,
    reviewsCount: 84,
    isVeg: false,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    calories: 640,
    prepTime: '25 min',
    spiciness: 0,
    ingredients: ['Roasted Peking Duck', 'Steamed Pancakes', 'House Hoisin Sauce', 'Ossetra Caviar', 'Fresh Scallions'],
    allergens: ['Gluten', 'Soy', 'Fish']
  },
  {
    id: 'm15',
    name: 'Artisanal Black Truffle Crystal Dim Sum',
    category: 'Chinese',
    description: 'Hand-crafted translucent dumplings filled with wild mushroom medley, water chestnuts, bamboo shoots & black truffle oil (4 pcs).',
    price: 24,
    rating: 4.8,
    reviewsCount: 62,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
    calories: 310,
    prepTime: '15 min',
    spiciness: 0,
    ingredients: ['Shiitake Mushrooms', 'King Oyster Mushroom', 'Truffle Oil', 'Wheat Starch Wrapper'],
    allergens: ['Gluten', 'Soy']
  },

  // South Indian
  {
    id: 'm16',
    name: 'Ghee Roast Podi Masala Dosa',
    category: 'South Indian',
    description: 'Crispy fermented rice and lentil crepe smeared with aromatic spicy roasted podi chutney and aromatic ghee, filled with spiced potato mash, served with 3 coconut chutneys & sambar.',
    price: 20,
    rating: 4.8,
    reviewsCount: 140,
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    calories: 460,
    prepTime: '12 min',
    spiciness: 2,
    ingredients: ['Fermented Rice Crepe', 'A2 Desi Ghee', 'Gunpowder Podi', 'Potato Masala', 'Fresh Coconut Chutney'],
    allergens: ['Dairy']
  },

  // Desserts
  {
    id: 'm17',
    name: 'The Golden Valrhona Chocolate Dome',
    category: 'Desserts',
    description: 'Valrhona 70% dark chocolate shell filled with hazelnut praline, salted caramel gelato, melted live with warm berry coulis pouring tableside.',
    price: 26,
    rating: 5.0,
    reviewsCount: 230,
    isVeg: true,
    isChefSpecial: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    calories: 590,
    prepTime: '15 min',
    spiciness: 0,
    ingredients: ['Valrhona Dark Chocolate', 'Piedmont Hazelnut', 'Salted Caramel Gelato', 'Edible Gold Leaf', 'Raspberry Coulis'],
    allergens: ['Dairy', 'Nuts', 'Eggs']
  },
  {
    id: 'm18',
    name: 'Deconstructed Classic Tiramisu',
    category: 'Desserts',
    description: 'Savoiardi ladyfingers soaked in Jamaican rum and single-origin espresso, whipped mascarpone cream & Valrhona cocoa dust.',
    price: 22,
    rating: 4.8,
    reviewsCount: 112,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    calories: 450,
    prepTime: '10 min',
    spiciness: 0,
    ingredients: ['Lombardy Mascarpone', 'Single-Origin Espresso', 'Dark Rum', 'Ladyfingers', 'Cocoa Powder'],
    allergens: ['Dairy', 'Gluten', 'Eggs']
  },

  // Drinks & Cocktail
  {
    id: 'm19',
    name: 'Smoked Old Fashioned Signature Cocktail',
    category: 'Drinks',
    description: 'Small-batch Bourbon, Angostura bitters, organic Demerara sugar, infused with hickory smoke & express orange oil.',
    price: 24,
    rating: 4.9,
    reviewsCount: 165,
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    calories: 190,
    prepTime: '8 min',
    spiciness: 0,
    ingredients: ['Aged Bourbon Whiskey', 'Aromatic Bitters', 'Demerara Syrup', 'Hickory Smoke Wood'],
    allergens: []
  },
  {
    id: 'm20',
    name: 'Gold Flake Sparkling Passionfruit Elixir (Mocktail)',
    category: 'Drinks',
    description: 'Fresh passionfruit puree, botanical elderflower, sparkling mineral water, mint lime reduction & 24k gold shimmer flakes.',
    price: 18,
    rating: 4.8,
    reviewsCount: 94,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    calories: 120,
    prepTime: '5 min',
    spiciness: 0,
    ingredients: ['Organic Passionfruit', 'Elderflower Syrup', 'Perrier Sparkling Water', 'Lime', 'Gold Flakes'],
    allergens: []
  },

  // Coffee
  {
    id: 'm21',
    name: 'Gold Dust Mocha Latte',
    category: 'Coffee',
    description: 'Double shot of Arabica espresso, artisan steamed oat milk, belgian dark chocolate sauce, sprinkled with edible gold dust.',
    price: 14,
    rating: 4.9,
    reviewsCount: 128,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    calories: 220,
    prepTime: '5 min',
    spiciness: 0,
    ingredients: ['Ethiopian Arabica Espresso', 'Organic Oat Milk', 'Belgian Dark Chocolate', 'Gold Dust'],
    allergens: []
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'o1',
    code: 'AURA25',
    title: 'Michelin Dining Premiere',
    subtitle: 'Flat 25% Off On Fine Dining & Orders',
    discountPercent: 25,
    description: 'Enjoy a luxurious dining experience with 25% discount on all multi-course dinners and online orders above $80.',
    expiresAt: '2026-12-31T23:59:59',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    minOrder: 80,
    badge: 'LIMITED TIME'
  },
  {
    id: 'o2',
    code: 'WAGYU40',
    title: 'Gourmet Steak & Truffle Combo',
    subtitle: 'Complimentary Wine & Dessert with Wagyu',
    discountPercent: 30,
    description: 'Order any Wagyu Ribeye or Truffle Special & receive a complimentary glass of vintage Pinot Noir and Golden Dome Dessert.',
    expiresAt: '2026-12-31T23:59:59',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    minOrder: 120,
    badge: 'CHEF\'S CHOICE'
  },
  {
    id: 'o3',
    code: 'FREEDEL',
    title: 'VIP Express Home Delivery',
    subtitle: 'Free Express Heated Delivery on $50+',
    discountPercent: 15,
    description: 'Experience 5-star restaurant luxury at your doorstep with custom thermal box delivery and 0 delivery fees.',
    expiresAt: '2026-12-31T23:59:59',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    minOrder: 50,
    badge: 'ONLINE EXCLUSIVE'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'ch1',
    name: 'Antoine De Laurent',
    title: 'Executive Head Chef & Founder',
    experience: '22+ Years Experience',
    bio: 'Former 3-Michelin Star Executive Chef trained at Le Cordon Bleu Paris. Chef Antoine brings unmatched artistic innovation and classical French precision to every dish.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    specialization: 'Modern French & European Gastronomy',
    awards: ['3 Michelin Stars 2018-2024', 'World\'s Best Chef 2021', 'James Beard Award'],
    signatureDish: 'Truffle Glazed A5 Wagyu Ribeye',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'ch2',
    name: 'Chef Meera Roy',
    title: 'Master Indian & Asian Culinary Director',
    experience: '18+ Years Experience',
    bio: 'Renowned authority on Mughlai royal heritage cooking and Asian fusion aesthetics. Meera crafts aromatic spice blends perfected over generations.',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80',
    specialization: 'Royal Mughlai & Pan-Asian Fusion',
    awards: ['Asia\'s Top Female Chef 2023', 'National Culinary Innovation Trophy'],
    signatureDish: 'Grand Royal Dum Biryani',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'ch3',
    name: 'Chef Marco Rossi',
    title: 'Senior Italian & Pasta Maestro',
    experience: '15+ Years Experience',
    bio: 'Hailing from Florence, Marco specializes in hand-crafted pasta doughs, wild foraging, and authentic woodfired pizza mastery.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80',
    specialization: 'Artisanal Pasta & Tuscan Woodfired Pizza',
    awards: ['Gambero Rosso Tre Forchette', 'Pizzaiolo Champion Naples'],
    signatureDish: 'Lobster & Gold Leaf Tagliolini',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'ch4',
    name: 'Elena Vance',
    title: 'Executive Pastry & Dessert Specialist',
    experience: '12+ Years Experience',
    bio: 'Pastry prodigy trained in Lyon and Zurich. Elena creates mesmerizing gold-accented desserts that blend high fashion with delicate flavor profiles.',
    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=800&q=80',
    specialization: 'High Fashion French Patisserie & Gelato',
    awards: ['World Pastry Cup Gold Medalist', 'Top Pastry Artisan 2025'],
    signatureDish: 'The Golden Valrhona Chocolate Dome',
    social: {
      instagram: 'https://instagram.com'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Victoria Sterling',
    role: 'Food & Wine Critic, The Times',
    review: 'Aura is an exceptional masterclass in fine dining. The Wagyu Ribeye and Truffle Risotto were nothing short of sublime. Service is impeccably white-glove.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    date: '2 days ago',
    location: 'New York, USA',
    dishRecommended: 'Truffle Glazed A5 Wagyu Ribeye'
  },
  {
    id: 't2',
    name: 'Dr. Harrison Vance',
    role: 'Connoisseur & Executive Director',
    review: 'We hosted our 10th anniversary private dining here. The atmosphere, wine pairing, and lobster tagliolini were unforgettable. The gold dessert show stopping!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    date: '1 week ago',
    location: 'London, UK',
    dishRecommended: 'Lobster & Gold Leaf Tagliolini'
  },
  {
    id: 't3',
    name: 'Sophia Chen',
    role: 'Lifestyle Blogger & Sommelier',
    review: 'The online ordering and home packaging blew me away! Food arrived piping hot with zero loss of presentation. Aura brings Michelin dining straight to your dining room.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    date: '2 weeks ago',
    location: 'San Francisco, CA',
    dishRecommended: 'Grand Royal Dum Biryani'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Art of Plating: How Chef Antoine Crafts 3-Star Visual Masterpieces',
    category: 'Culinary Art',
    author: 'Chef Antoine De Laurent',
    authorRole: 'Executive Chef',
    date: 'July 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    snippet: 'Discover the secrets behind color harmony, negative space, and gold-leaf accenting in modern luxury gastronomy.',
    content: [
      'Gastronomy is first consumed through the eyes. At Aura, every single plate is treated as a fresh canvas before the first drop of sauce is painted.',
      'We combine classical geometric balance with organic floral geometry. Using 24k gold leaf and micro-herbs handpicked each morning from our rooftop green garden, we ensure texture and visual drama match the palate.',
      'Key element: Never overcrowd the focal protein. Allow the natural marbling and rich reduced demiglace to speak for itself.'
    ],
    tags: ['Fine Dining', 'Chef Secret', 'Gastronomy']
  },
  {
    id: 'b2',
    title: 'Sipping Royalty: A Guide to Pairing Vintage Pinot Noir with Wagyu Beef',
    category: 'Wine & Beverage',
    author: 'Julian Thorne',
    authorRole: 'Head Sommelier',
    date: 'July 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    snippet: 'Unlocking the chemistry of tannins, marbling fats, and oak barrel notes for the ultimate steak night.',
    content: [
      'When pairing high marbling meats like A5 Miyazaki Wagyu, the wine needs structured acidity and soft tannins to cut through the silky fat without overpowering the delicate meat flavor.',
      'We recommend a 2018 Domaine Serene Pinot Noir or an aged Barolo with earthy truffle undertones.'
    ],
    tags: ['Wine Pairing', 'Sommelier', 'Wagyu']
  },
  {
    id: 'b3',
    title: 'From Farm to Table: Sourcing Organic Heirloom Produce',
    category: 'Healthy Dining',
    author: 'Chef Meera Roy',
    authorRole: 'Culinary Director',
    date: 'July 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    snippet: 'Why 100% organic, non-GMO heirloom crops transform the crispness and nutritional depth of our signature salads.',
    content: [
      'We partner exclusively with certified biodynamic farms within 50 miles. Our tomatoes are ripened naturally under sunlight, producing sweet acidity that synthetic growing can never imitate.'
    ],
    tags: ['Organic', 'Farm To Table', 'Healthy']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'fq1',
    category: 'Reservations',
    question: 'How far in advance should I reserve a table?',
    answer: 'We recommend booking 2 to 7 days in advance for regular dinner seatings, and at least 2 weeks in advance for Weekend Rooftop Lounge or Private Chef\'s Table reservations.'
  },
  {
    id: 'fq2',
    category: 'Dietary',
    question: 'Do you offer Vegan, Vegetarian, and Gluten-Free dining options?',
    answer: 'Yes! Over 40% of our menu features dedicated vegetarian, vegan, and gluten-free creations clearly marked with dietary badges. Our chefs can also adapt most dishes upon request.'
  },
  {
    id: 'fq3',
    category: 'Delivery',
    question: 'How is online food delivery packaged to maintain high restaurant quality?',
    answer: 'We utilize custom insulated temperature-controlled packaging boxes. Sauces and garnishes are placed in eco-friendly glass containers so your meal arrives looking and tasting freshly plated.'
  },
  {
    id: 'fq4',
    category: 'General',
    question: 'Is there a dress code at Aura?',
    answer: 'We encourage Smart Casual to Elegant attire in our Main Dining Hall and Rooftop Lounge. Athletic wear and beach shorts are politely restricted for dinner service.'
  },
  {
    id: 'fq5',
    category: 'Private Events',
    question: 'Can I book Aura for private corporate events or weddings?',
    answer: 'Absolutely. Our Private Dining Suite accommodates up to 40 guests, and full restaurant buyout options are available for up to 150 guests with customized tasting menus.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Truffle Wagyu Ribeye Plating',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    caption: 'Chef Antoine finishing the 24k gold garnish on A5 Miyazaki Wagyu.'
  },
  {
    id: 'g2',
    title: 'Main Dining Hall Grand Interior',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Atmospheric chandeliers and amber glassmorphism seating areas.'
  },
  {
    id: 'g3',
    title: 'Live Flame Kitchen in Action',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    caption: 'Our culinary team searing Wagyu and flaming lobster bisque.'
  },
  {
    id: 'g4',
    title: 'Golden Valrhona Chocolate Dome',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    caption: 'Signature gold dome melting live under warm berry reduction.'
  },
  {
    id: 'g5',
    title: 'Private Rooftop Sky Lounge',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80',
    caption: 'Panoramic skyline views paired with custom cocktail pairings.'
  },
  {
    id: 'g6',
    title: 'Sommelier Wine Tasting Gala',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    caption: 'Monthly vintage wine tasting hosted by Head Sommelier Julian.'
  },
  {
    id: 'g7',
    title: 'Lobster & Gold Leaf Tagliolini',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    caption: 'Handmade tagliolini with saffron sea urchin emulsion.'
  },
  {
    id: 'g8',
    title: 'Luxury Birthday Gala Dinner',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    caption: 'Private dining suite styled for an intimate milestone celebration.'
  }
];

export const INSTAGRAM_POSTS = [
  { id: 'i1', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80', likes: '2.4k', comments: '184' },
  { id: 'i2', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80', likes: '1.9k', comments: '142' },
  { id: 'i3', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80', likes: '3.1k', comments: '210' },
  { id: 'i4', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80', likes: '4.8k', comments: '390' },
  { id: 'i5', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80', likes: '2.8k', comments: '195' },
  { id: 'i6', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80', likes: '5.2k', comments: '412' }
];
