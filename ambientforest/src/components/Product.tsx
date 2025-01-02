import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import ProductColorNotes from "./ProductColorNotes"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Product as ProductType } from "../types/types"
import { limitText } from "../utils/stringHandling"
import { useContext } from "react"
import { ContextAPI, ContextData } from "../context/ContextProvider"
import { isProductNew } from "../utils/productHandling"

interface Props {
  product: ProductType
}

const Product = ({product}: Props ) => {

  const { addToBag } = useContext(ContextAPI) as ContextData

  const baseImageUrl = import.meta.env.VITE_S3_URL

  console.log(isProductNew(product))

  return (
    <Link to={`/product/${product?.productType}/${product?.productId}`}>
      <HStack w={"100%"} justify={"center"} gap={{base: 4, lg: 14}} px={{base: 4, lg: 10}} wrap={"wrap"}>
        <Box position={"relative"} w={{base: "45%", sm: "30%", lg: "20%"}} aspectRatio={"1/1"} borderRadius={"2xl"} border={"1px solid #AD974F"}>
          {product?.isSoldOut && <Box top={0} right={0} bg={"--black"} position={"absolute"} py={1.5} px={4} borderTopRightRadius={"2xl"}>Sold Out</Box>}
          <Image w={"100%"} h={"100%"}  objectFit={"contain"} src={`${baseImageUrl}/${product?.mainImageUrl}`} alt="Image of candles for sale"/>
        </Box>
        <VStack w={{base: "30%", lg: "20%"}} display={{base: "none", sm: "flex"}}>
          <Heading size={{base: "2xl", xl: "3xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"} display={{base: "none", lg: "flex"}}>{product?.name}</Heading>
          <Heading size={{base: "xl", xl: "2xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} display={{base: "none", lg: "flex"}}>£{(parseInt(product?.price ?? "0") / 100).toFixed(2)}</Heading>
          <Text mt={{base: 1, xl: 7}} color={"black"} textAlign={"center"} fontSize={"sm"}>{`${limitText(product?.description, 175)}`}</Text>
        </VStack>
        <ProductColorNotes product={product}/>
        <VStack w={{base: "45%", sm: "30%", lg: "20%"}} aspectRatio={{base: "1/1", lg: "auto"}} justify={"center"}>
          <Heading display={{base: "block", lg: "none"}} size={"xl"} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"}>{product?.name}</Heading>
          <Heading display={{base: "block", lg: "none"}} size={"lg"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£{(parseInt(product?.price ?? "0") / 100).toFixed(2)}</Heading>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button disabled={product?.isSoldOut} onClick={() => addToBag(product)} w={"100%"} py={{base: 3, lg: 7}} bg={"--black"} color={"white"} fontSize={"sm"} _hover={{w: "14em"}} transition={"all 300ms ease-in-out"}>Add To Basket</Button>
          </Link>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button disabled={product?.isSoldOut} w={"100%"} py={{base: 3, lg: 7}} bg={"--gold"} fontSize={"sm"} _hover={{w: "14em"}} transition={"all 300ms ease-in-out"}>Buy Now</Button>
          </Link>
        </VStack>
      </HStack>
    </Link>
    
  )
}

export default Product
