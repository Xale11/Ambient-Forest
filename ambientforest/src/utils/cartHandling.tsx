import { CartItem } from "../types/clientTypes";
import { DeliveryOption, ShippingRate } from "../types/types";

export const getMinShippingRate = (rates: DeliveryOption[]) => {
  if (rates.length === 0) return 0
  let minRate = Number.MAX_SAFE_INTEGER
  for (const rate of rates){
    if (parseInt(rate.price) < minRate){
      minRate = parseInt(rate.price.replace(".", "")) / 100
    }
  }
  return minRate
}

export const getCartTotal = (cart: CartItem[]) => {
  let total = 0
  for (const item of cart){
    total = total + (item.lineItem.quantity * item.lineItem.price_data.unit_amount)
  }
  return (total / 100).toFixed(2)
}

export const getNumCartItems = (cart: CartItem[]) => {
  let total = 0
  for (const item of cart){
    total = total + item.lineItem.quantity
  }
  return total
}

export const convertDeliveryOptionToShippingRate = (option: DeliveryOption): ShippingRate => {
  return {
    name: option.name,
    price: parseInt(option.price.replace(".", "")) / 100,
    shipMin: parseInt(option.shipMin),
    shipMax: parseInt(option.shipMax)
  }
}