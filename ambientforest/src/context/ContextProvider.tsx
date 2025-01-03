import { createContext, ReactNode, useEffect, useState } from "react"
import { CartItem, LocalStorageCartData } from "../types/clientTypes"
import { CartPageData, Product } from "../types/types"
import { convertProductToCartItem } from "../utils/productHandling"
import { fetchFromDynamoDB } from "../api/awsApi"
import { useQuery } from "@tanstack/react-query"

interface Props {
  children: ReactNode
}

export interface ContextData {
  cart: CartItem[]
  setCart: (value: CartItem[]) => void
  addToBag: (value: Product | undefined) => void
  editQuantity: (item: CartItem, value: number) => void
  removeFromBag: (value: CartItem) => void
  cartPage: CartPageData
  cartPageLoading: boolean
  maxCartItems: number
}

export const ContextAPI = createContext<ContextData | undefined>(undefined)

const ContextProvider = ({children}: Props) => {

  const maxCartItems = 7

  const [cart, setCart] = useState<CartItem[]>([])

  const {data: cartPageData, isFetching: cartPageLoading} = useQuery({queryKey: ["fetchCartData"], queryFn: () => fetchFromDynamoDB("/cart"), enabled: true})

  const [cartPage, setCartPage] = useState<CartPageData>({
    page: "cart",
    deliveryOptions: []
  })

  const addToBag = (product: Product | undefined) => {
    if (!product) return
    let exists = false

    const newCart: CartItem[] = [...cart].map((item): CartItem => {
      if (item.productId === product.productId){
        exists = true
        return {
          ...item,
          lineItem: {
            ...item.lineItem,
            quantity: item.lineItem.quantity + 1 > maxCartItems ? maxCartItems : item.lineItem.quantity + 1
          }
        }
      } else {
        return item
      }
    })

    if (!exists) {
      newCart.push(convertProductToCartItem(product))
    }

    updateCart(newCart)

  }

  const editQuantity = (item: CartItem, value: number) => {
    const newCart = [...cart].map((cartItem): CartItem => {
      if (item.productId === cartItem.productId){
        return {
          ...cartItem,
          lineItem: {
            ...cartItem.lineItem,
            quantity: value
          }
        }
      } else {
        return {
          ...cartItem
        }
      }
    })
    updateCart(newCart)
  }

  const removeFromBag = (item: CartItem) => {
    const newCart = [...cart].filter((cartItem) => cartItem.productId !== item.productId)
    setCart(newCart)
  }

  const updateCart = (cart: CartItem[]) => {
    setCart(cart)
    addCartToLocalStorage(cart)
  }

  const addCartToLocalStorage = (cart: CartItem[]) => {
    const eexpiryTime = 5400000 // 1.5hrs
    const cartData: LocalStorageCartData = {
      cart: cart,
      expires: Date.now() + eexpiryTime
    }
    const jsonCart = JSON.stringify(cartData)
    localStorage.setItem("cart", jsonCart)
  }

  const fetchCartFromLocalStorage = () => {
    const res = localStorage.getItem("cart")
    if (res == null) return
    const cartData: LocalStorageCartData = JSON.parse(res)
    if (Date.now() > cartData.expires){
      return
    } else {
      setCart(cartData.cart)
    }
  }

  useEffect(() =>{
    fetchCartFromLocalStorage()
  }, [])

  useEffect(() => {
    if (cartPageData?.Items){
      setCartPage(cartPageData.Items[0] ?? {
        page: "cart",
        deliveryOptions: []
      })
    }
  }, [cartPageData])

  return (
    <ContextAPI.Provider value={{cart, setCart, cartPage, cartPageLoading, addToBag, editQuantity, removeFromBag, maxCartItems}}>
      {children}
    </ContextAPI.Provider>
  )
}

export default ContextProvider
