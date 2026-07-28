export interface MenuItem {
  id: string;
  name: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Pizza' | 'Burger' | 'Pasta' | 'Indian' | 'Chinese' | 'Italian' | 'South Indian' | 'Desserts' | 'Drinks' | 'Coffee';
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isBestSeller?: boolean;
  image: string;
  calories?: number;
  prepTime?: string;
  spiciness?: 0 | 1 | 2 | 3; // 0: None, 1: Mild, 2: Medium, 3: Spicy
  ingredients?: string[];
  allergens?: string[];
}

export interface Category {
  id: string;
  name: MenuItem['category'];
  iconName: string;
  description: string;
  image: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOptions?: string[];
  specialInstructions?: string;
}

export interface SpecialOffer {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  discountPercent: number;
  description: string;
  expiresAt: string; // ISO string or relative time
  image: string;
  minOrder: number;
  badge: string;
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  image: string;
  specialization: string;
  awards: string[];
  signatureDish: string;
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'Main Hall' | 'Window View' | 'Rooftop Lounge' | 'Private Booth' | 'Chef\'s Table';
  occasion?: string;
  specialRequests?: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  bookingCode: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
  date: string;
  location: string;
  dishRecommended?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Culinary Art' | 'Wine & Beverage' | 'Behind the Scenes' | 'Healthy Dining' | 'Recipes';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Reservations' | 'Delivery' | 'Dietary' | 'Private Events';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Interior' | 'Kitchen' | 'Events';
  image: string;
  caption: string;
}
