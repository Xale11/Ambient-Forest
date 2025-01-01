import { Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import paymentOptions from "../assets/paymentOptions.png"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import Footer from "../components/Footer"
import { CartPageData, ShippingRate } from "../types/types"
import { useContext, useEffect, useState } from "react"
import { fetchFromDynamoDB } from "../api/awsApi"
import { useQuery } from "@tanstack/react-query"
import { ContextAPI, ContextData } from "../context/ContextProvider"
import CartProduct from "../components/CartProduct"
import { Tooltip } from "../components/ui/tooltip"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { convertDeliveryOptionToShippingRate, getCartTotal, getMinShippingRate, getNumCartItems } from "../utils/cartHandling"
import { goToCheckout } from "../stripe/stripe"

const Cart = () => {

  const { cart } = useContext(ContextAPI) as ContextData

  const [cartPage, setCartPage] = useState<CartPageData>({
    page: "cart",
    deliveryOptions: []
  })

  const {data: pageData, isFetching: pageLoading} = useQuery({queryKey: ["fetchCartData"], queryFn: () => fetchFromDynamoDB("/cart"), enabled: true})

  const checkoutCart = async () => {
    const lineItems = [...cart].map((lineItem) => lineItem.lineItem)
    const shippingRates: ShippingRate[] = [...cartPage.deliveryOptions].map((option) => convertDeliveryOptionToShippingRate(option))
    const url = await goToCheckout(lineItems, shippingRates)
    window.open(url, "_self")
  }

  useEffect(() => {
    if (pageData?.Items){
      setCartPage(pageData.Items[0] ?? {
        page: "cart",
        deliveryOptions: []
      })
    }
  }, [pageData])


  return (
    <VStack w={"100vw"}>
      <Navbar/>
      <HStack w={"100%"} mt={{base: "6em", lg: "10em"}} gap={7} justify={"center"} align={"start"} mb={5} wrap={"wrap-reverse"}>

        <VStack w={{base: "85%", md: "40%", xl: "30%"}}>
          <Heading w={"100%"} size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} pb={2} borderBottom={"1px solid #AD974F"}>Cart</Heading>
          {cart.map((item, i) => {
            return (<CartProduct item={item} key={i}/>)
          })}
        </VStack>

        <VStack w={{base: "85%", md: "40%", xl: "20%"}}>
          <Heading w={"100%"} size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} pb={2} borderBottom={"1px solid #AD974F"}>Summary</Heading>
          <VStack w={"100%"} align={"start"} gap={0} pb={2} borderBottom={"1px solid #AD974F"}>
            <Text fontSize={"md"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>{getNumCartItems(cart)} Items</Text>
            <Text fontSize={"md"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Subtotal: £{getCartTotal(cart)}</Text>
            <HStack>
              <Text fontSize={"md"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Delivery: </Text>
              <Tooltip content={`Delivery prices start from £${(getMinShippingRate(cartPage.deliveryOptions)).toFixed(2)}`}>
                <Icon color={"black"}>
                  <AiOutlineInfoCircle />
                </Icon>
              </Tooltip>
            </HStack>
          </VStack>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button onClick={checkoutCart} disabled={cart.length == 0 || pageLoading ? true : false} w={"100%"} color={"white"} bg={"--black"} transition={"all 300ms ease-in-out"} _hover={{textDecoration: "underline"}}>
              Checkout
            </Button>
          </Link>
          <Image w={"100%"} objectFit={"contain"} src={paymentOptions} alt="Image of payment options"/>
        </VStack>

      </HStack>
      <Footer/>
    </VStack>
  )
}

export default Cart
