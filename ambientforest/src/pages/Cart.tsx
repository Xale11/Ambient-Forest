import { Heading, HStack, Icon, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import paymentOptions from "../assets/paymentOptions.png"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import Footer from "../components/Footer"
import { ShippingRate } from "../types/types"
import { useContext } from "react"
import { ContextAPI, ContextData } from "../context/ContextProvider"
import CartProduct from "../components/CartProduct"
import { Tooltip } from "../components/ui/tooltip"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { convertDeliveryOptionToShippingRate, getCartTotal, getMinShippingRate, getNumCartItems } from "../utils/cartHandling"
import { goToCheckout } from "../stripe/stripe"
import { Helmet } from "react-helmet"

const Cart = () => {

  const canonicalUrl = import.meta.env.VITE_DOMAIN

  const { cart, cartPage, cartPageLoading } = useContext(ContextAPI) as ContextData


  const checkoutCart = async () => {
    const lineItems = [...cart].map((lineItem) => lineItem.lineItem)
    const shippingRates: ShippingRate[] = [...cartPage.deliveryOptions].map((option) => convertDeliveryOptionToShippingRate(option))
    const url = await goToCheckout(lineItems, shippingRates)
    window.open(url, "_self")
  }



  return (
    <>
      <Helmet>
        <title>Cart | Ambient Forest Candles</title>
        <meta name="description" content="Review and purchase your favorite candles from Ambient Forest Candles. Explore our delivery options and proceed to checkout." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ambient Forest Candles" />
        <link rel="canonical" href={`${canonicalUrl}/cart`} />
      </Helmet>
      <VStack w={"100vw"} minH={"100vh"}>
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
              <Button onClick={checkoutCart} disabled={cart.length == 0 || cartPageLoading ? true : false} w={"100%"} color={"white"} bg={"--black"} transition={"all 300ms ease-in-out"} _hover={{textDecoration: "underline"}}>
                Checkout
              </Button>
            </Link>
            <Image w={"100%"} objectFit={"contain"} src={paymentOptions} alt="Image of payment options"/>
          </VStack>
        </HStack>
        {cart.length === 0 && <Spacer/>}
        <Footer/>
      </VStack>
    </>
    
  )
}

export default Cart
