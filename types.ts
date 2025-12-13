
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string; // Custom text for the link button (e.g., "View Deck", "View Flyer")
  status: 'Ongoing' | 'Completed' | 'Planned';
  hideDetailsLink?: boolean;
  embedUrl?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  almaMater?: string;
}

// ==========================================
// SHOP / CART TYPES (For Backend Structure)
// ==========================================

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}