export interface Vendor {
  id: number;
  name: string;
  rating: number;
  price: number;
  category: string;
  availability: string[];
  location?: string;
}
