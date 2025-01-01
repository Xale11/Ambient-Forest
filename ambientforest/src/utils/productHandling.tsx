import { CartItem } from "../types/clientTypes";
import { Product } from "../types/types";

export const convertProductToCartItem = (product: Product): CartItem => {
  return {
    productId: product.productId,
    productType: product.productType,
    entireProduct: product, // add just in case I need more data on the product in future
    lineItem: {
      quantity: 1,
      price_data: {
        currency: "gbp",
        unit_amount: parseInt(product.price),
        product_data: {
          description: product.description,
          images: [product.mainImageUrl],
          name: product.name
        }
      }
    }
  }
}

export const isProductNew = (product: Product | undefined) => {
  const thirtyDays = 2592000000
  if (!product) return false
  const created = new Date(product.createdAt).getTime()
  if (Date.now() - created <= thirtyDays){
    return true
  } else {
    return false
  }
}