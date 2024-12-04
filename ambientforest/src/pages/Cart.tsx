import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import candle from "../assets/candle.png"
import paymentOptions from "../assets/paymentOptions.png"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import Footer from "../components/Footer"

const Cart = () => {
  return (
    <VStack w={"100vw"}>
      <Navbar/>
      <HStack w={"100%"} mt={{base: "6em", lg: "10em"}} gap={7} justify={"center"} align={"start"} mb={5} wrap={"wrap-reverse"}>

        <VStack w={{base: "85%", md: "40%", xl: "30%"}}>
          <Heading w={"100%"} size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} pb={2} borderBottom={"1px solid #AD974F"}>Cart</Heading>
          {[1, 2, 3, 4].map((item) => {
            return (
              <HStack key={item} w={"100%"} h={"13em"} border={"1px solid #AD974F"}>
                <Image w={"40%"} maxH={"100%"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candles for sale"/>
                <VStack w={"60%"} h={"100%"} align={"start"} gap={2} py={2}>

                  <VStack gap={0} w={"100%"} align={"start"}>
                    <Heading size={{base: "xl", lg:"2xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"}>Winter Forest</Heading>
                    <HStack gap={1}>
                      <Text fontSize={{base: "xs", lg:"sm"}} color={"--gold"}>CANDLE</Text>
                      <Text fontSize={{base: "xs", lg:"sm"}} bg={"--gold"} px={4}>NEW</Text>
                    </HStack>
                  </VStack>

                  <Heading size={{base: "xl", lg:"2xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£79.99 GBP</Heading>

                  <Text fontSize={{base: "sm", lg:"md"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>QTY: 2</Text>

                  <Link to={"/product/candle"}>
                    <Button color={"white"} bg={"--black"} px={{base: 8, lg: 10}} _hover={{px: 14}} transition={"all 300ms ease-in-out"}>View Product</Button>
                  </Link>
                </VStack>
                  
              </HStack>
            )
          })}
        </VStack>

        <VStack w={{base: "85%", md: "40%", xl: "20%"}}>
          <Heading w={"100%"} size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} pb={2} borderBottom={"1px solid #AD974F"}>Summary</Heading>
          <VStack w={"100%"} align={"start"} gap={0} pb={2} borderBottom={"1px solid #AD974F"}>
            <Text fontSize={"md"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>6 Items</Text>
            <Text fontSize={"md"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Subtotal: £159.96</Text>
            <Text fontSize={"md"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Delivery: </Text>
          </VStack>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button w={"100%"} color={"white"} bg={"--black"} transition={"all 300ms ease-in-out"} _hover={{textDecoration: "underline"}}>Checkout</Button>
          </Link>
          <Image w={"100%"} objectFit={"contain"} src={paymentOptions} alt="Image of payment options"/>
        </VStack>

      </HStack>
      <Footer/>
    </VStack>
  )
}

export default Cart
