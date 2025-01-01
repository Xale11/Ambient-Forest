// this files are for types that are only for the client side and are not shared with the admin site

import { Product } from "./types";

export interface LineItem {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      images: string[];
      description: string;
    };
    unit_amount: number;
  };
  quantity: number;
}

export interface CartItem {
  productId: string
  productType: string
  lineItem: LineItem
  entireProduct: Product
}

export interface LocalStorageCartData {
  cart: CartItem[]
  expires: number
}