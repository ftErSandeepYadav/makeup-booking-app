export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface Artist {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}