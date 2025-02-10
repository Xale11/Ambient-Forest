import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import candle from "../assets/candle.png"
import { Link, useNavigate } from "react-router-dom"
import { Product } from "../types/types"

interface Props {
  title: string
  bannerProduct?: Product
  productType: "candle" | "tealight" | "giftset"
}

const HomeProducts = ({ title, bannerProduct, productType }: Props) => {

  const navigate = useNavigate()

  const baseImageUrl = import.meta.env.VITE_USE_CLOUDFRONT === "true" ? import.meta.env.VITE_CLOUDFRONT_URL : import.meta.env.VITE_S3_URL

    // const handleImageError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    //   const imgElement = event.currentTarget;
    //   imgElement.src = candle;
    // };


  return (
    <VStack w={{base: "30%", lg: "20%"}}>
      <Heading size={{base: "xl",lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>{title}</Heading>
      {bannerProduct?.productId && <Link to={`/product/${bannerProduct?.productType}/${bannerProduct?.productId}`} style={{width: "100%"}}>
        <Image w={"100%"} objectFit={"contain"} aspectRatio={"1/1"} src={`${baseImageUrl}/${bannerProduct?.mainImageUrl}`} alt="Image of candles for sale"/>
      </Link>}
      {!bannerProduct?.productId && <Link to={`/shop/${productType}`} style={{width: "100%", position: "relative"}}>
        <Image w={"100%"} objectFit={"contain"} aspectRatio={"1/1"} filter={"blur(8px)"} src={candle} alt="Image of candles for sale"/>
        <Heading textAlign={"center"} fontFamily={"Nazare"} size={"3xl"} w={"fit-content"} h={"min-content"} position={"absolute"} left={0} right={0} top={0} bottom={0} m={"auto"} >Coming Soon</Heading>
      </Link>}
      
      <HStack w={"100%"}>
        <Box onClick={() => navigate(`/shop/${productType}`)} w={"100%"} h={{base: "1px", lg: "1px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
      </HStack>
      
      <VStack gap={{base: 1, lg: 0}}>
        <Text onClick={() => navigate(`/shop/${productType}?season=spring`)} color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Spring</Text>
        <Text onClick={() => navigate(`/shop/${productType}?season=summer`)} color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Summer</Text>
        <Text onClick={() => navigate(`/shop/${productType}?season=autumn`)} color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Autumn</Text>
        <Text onClick={() => navigate(`/shop/${productType}?season=winter`)} color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Winter</Text>
      </VStack>
    </VStack>
  )
}

export default HomeProducts
