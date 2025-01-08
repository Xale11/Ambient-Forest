import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import ProductColorNotes from "./ProductColorNotes"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Product as ProductType, ShippingRate } from "../types/types"
import { limitText } from "../utils/stringHandling"
import { useContext } from "react"
import { ContextAPI, ContextData } from "../context/ContextProvider"
import { goToCheckout } from "../stripe/stripe"
import { convertDeliveryOptionToShippingRate } from "../utils/cartHandling"
import { CartItem } from "../types/clientTypes"
import { convertProductToCartItem } from "../utils/productHandling"

interface Props {
  product: ProductType
}

const Product = ({product}: Props ) => {

  const { addToBag, cartPage } = useContext(ContextAPI) as ContextData

  const baseImageUrl = import.meta.env.VITE_USE_CLOUDFRONT === "true" ? import.meta.env.VITE_CLOUDFRONT_URL : import.meta.env.VITE_S3_URL

  const handleBuyNow = async () => {
    const cartItem: CartItem = convertProductToCartItem(product)
    const shippingRates: ShippingRate[] = [...cartPage.deliveryOptions].map((option) => convertDeliveryOptionToShippingRate(option))
    const url = await goToCheckout([cartItem.lineItem], shippingRates)
    window.open(url, "_self")
  }

  return (
    <Link style={{"width": "100%"}} to={`/product/${product?.productType}/${product?.productId}`}>
      <HStack w={"100%"} justify={"center"} gap={{base: 4, lg: 14}} px={{base: 4, lg: 10}} wrap={"wrap"}>
        <Box position={"relative"} w={{base: "45%", sm: "30%", lg: "20%"}} aspectRatio={"1/1"} borderRadius={"2xl"} border={"1px solid #AD974F"}>
          {product?.isSoldOut && <Box top={0} right={0} bg={"--black"} position={"absolute"} py={1.5} px={4} borderTopRightRadius={"2xl"}>Sold Out</Box>}
          <Image w={"100%"} h={"100%"}  objectFit={"contain"} src={`${baseImageUrl}/${product?.mainImageUrl}`} alt={`Image of Ambient Forest ${product.productType}`}/>
        </Box>
        <VStack w={{base: "30%", lg: "20%"}} display={{base: "none", sm: "flex"}}>
          <Heading size={{base: "2xl", xl: "3xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"} display={{base: "none", lg: "flex"}} textAlign={"center"}>{product?.name}</Heading>
          <Heading size={{base: "xl", xl: "2xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} display={{base: "none", lg: "flex"}}>£{(parseInt(product?.price ?? "0") / 100).toFixed(2)}</Heading>
          <Text w={"100%"} mt={{base: 1, xl: 7}} color={"black"} textAlign={"center"} fontSize={"sm"}>{`${limitText(product?.description, 175)}`}</Text>
        </VStack>
        <ProductColorNotes product={product}/>
        <VStack w={{base: "45%", sm: "30%", lg: "20%"}} aspectRatio={{base: "1/1", lg: "auto"}} justify={"center"}>
          <Heading display={{base: "block", lg: "none"}} size={"xl"} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"} textAlign={"center"}>{product?.name}</Heading>
          <Heading display={{base: "block", lg: "none"}} size={"lg"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£{(parseInt(product?.price ?? "0") / 100).toFixed(2)}</Heading>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button disabled={product?.isSoldOut} onClick={() => addToBag(product)} w={"100%"} py={{base: 3, lg: 7}} bg={"--black"} color={"white"} fontSize={"sm"} _hover={{w: "14em"}} transition={"all 300ms ease-in-out"}>Add To Basket</Button>
          </Link>
          <Box w={"100%"}>
            <Button onClick={handleBuyNow} disabled={product?.isSoldOut} w={"100%"} py={{base: 3, lg: 7}} bg={"--gold"} fontSize={"sm"} _hover={{w: "14em"}} transition={"all 300ms ease-in-out"}>Buy Now</Button>
          </Box>
        </VStack>
      </HStack>
    </Link>
    
  )
}

export default Product
