// Session-based cart management
const SESSION_KEY = 'flowrio_session_id';

export function getSessionId(): string {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  message_card?: string;
  include_vase: boolean;
  delivery_date?: string;
  product?: {
    id: string;
    name: string;
    price: number;
    image_url: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  occasion: string[];
  image_url: string;
  images: string[];
  in_stock: boolean;
  is_bestseller: boolean;
  is_featured: boolean;
}
