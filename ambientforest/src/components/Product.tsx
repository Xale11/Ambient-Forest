import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import ProductColorNotes from "./ProductColorNotes"
import { Link } from "react-router-dom"
import candle from "../assets/candle1.png"
import { Button } from "./ui/button"

interface Props {
  item: number
}

const Product = ({item}: Props ) => {
  return (
    <Link to={"/product/candle1"}>
      <HStack w={"100%"} justify={"center"} gap={{base: 4, lg: 14}} key={item} px={{base: 4, lg: 10}} wrap={"wrap"}>
        <Box w={{base: "45%", sm: "30%", lg: "20%"}} aspectRatio={"1/1"} borderRadius={"2xl"} border={"1px solid #AD974F"}>
          <Image w={"100%"} h={"100%"}  objectFit={"contain"} src={candle} alt="Image of candles for sale"/>
        </Box>
        <VStack w={{base: "30%", lg: "20%"}} display={{base: "none", sm: "flex"}}>
          <Heading size={{base: "2xl", xl: "3xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"} display={{base: "none", lg: "flex"}}>Winter Forest</Heading>
          <Heading size={{base: "xl", xl: "2xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} display={{base: "none", lg: "flex"}}>£79.99 GBP</Heading>
          <Text mt={{base: 1, xl: 7}} color={"black"} textAlign={"center"} fontSize={"sm"}>Immerse yourself in the warmth of the season with our Cinnamon, Nutmeg & Clove candle. This comforting blend captures the essence of autumn and winter...</Text>
        </VStack>
        <ProductColorNotes/>
        <VStack w={{base: "45%", sm: "30%", lg: "20%"}} aspectRatio={{base: "1/1", lg: "auto"}} justify={"center"}>
          <Heading display={{base: "block", lg: "none"}} size={"xl"} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"}>Winter Forest</Heading>
          <Heading display={{base: "block", lg: "none"}} size={"lg"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£79.99 GBP</Heading>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button w={"100%"} py={{base: 3, lg: 7}} bg={"--black"} color={"white"} fontSize={"sm"} _hover={{w: "14em"}} transition={"all 300ms ease-in-out"}>Add To Basket</Button>
          </Link>
          <Link to={"/cart"} style={{width: "100%"}}>
            <Button w={"100%"} py={{base: 3, lg: 7}} bg={"--gold"} fontSize={"sm"} _hover={{w: "14em"}} transition={"all 300ms ease-in-out"}>Buy Now</Button>
          </Link>
        </VStack>
      </HStack>
    </Link>
    
  )
}

export default Product
