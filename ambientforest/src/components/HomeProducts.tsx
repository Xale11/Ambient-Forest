import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import candle from "../assets/candle.png"
import { Link } from "react-router-dom"
import { Product, ProductBannerSeasons } from "../types/types"
import { useEffect, useState } from "react"

interface Props {
  title: string
  bannerProducts: ProductBannerSeasons
}

const HomeProducts = ({ title, bannerProducts }: Props) => {

  const baseImageUrl = import.meta.env.VITE_S3_URL

  const slideSpeed = 3500
  
    // slide page num
    const [slideNum, setSlideNum] = useState<number>(1)
    const [currentProduct, setCurrentProduct] = useState<Product>() 
  
    const slideBannerMessage = () => {
      setSlideNum(prev => prev + 1)
    }

    const showSeasonalProduct = (num: number) => {
      if (num === 1){
        setCurrentProduct(bannerProducts.spring)
      } else if (num === 2){
        setCurrentProduct(bannerProducts.summer)
      } else if (num === 3){
        setCurrentProduct(bannerProducts.autumn)
      } else {
        setCurrentProduct(bannerProducts.winter)
      }
    }

    // const handleImageError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    //   const imgElement = event.currentTarget;
    //   imgElement.src = candle;
    // };
  
    useEffect(() => {
      const intervalId = setInterval(slideBannerMessage, slideSpeed)
  
      return () => {
        clearInterval(intervalId);
      };
    }, [])
  
    // setInterval does not track the state of slideNum so I need another useEffect to control the slides based on slide num
    useEffect(() => {
      if (slideNum > 4){
        setSlideNum(1)
      }
      showSeasonalProduct(slideNum)
    }, [slideNum])

  return (
    <VStack w={{base: "30%", lg: "20%"}}>
      <Heading size={{base: "xl",lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>{title}</Heading>
      {currentProduct?.productId && <Link to={`/product/${currentProduct?.productType}/${currentProduct?.productId}`} style={{width: "100%"}}>
        <Image w={"100%"} objectFit={"contain"} aspectRatio={"1/1"} src={`${baseImageUrl}/${currentProduct?.mainImageUrl}`} alt="Image of candles for sale"/>
      </Link>}
      {!currentProduct?.productId && <Link to={`/shop/candle`} style={{width: "100%", position: "relative"}}>
        <Image w={"100%"} objectFit={"contain"} aspectRatio={"1/1"} filter={"blur(8px)"} src={candle} alt="Image of candles for sale"/>
        <Heading textAlign={"center"} fontFamily={"Nazare"} size={"3xl"} w={"fit-content"} h={"min-content"} position={"absolute"} left={0} right={0} top={0} bottom={0} m={"auto"} >Coming Soon</Heading>
      </Link>}
      
      <HStack w={"100%"}>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"--gold"} _hover={{bg: "--gold", cursor: "pointer"}}/>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
      </HStack>
      <VStack gap={{base: 1, lg: 0}}>
        <Text onClick={() => setSlideNum(1)} color={slideNum === 1 ? "--gold" : "black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Spring</Text>
        <Text onClick={() => setSlideNum(2)} color={slideNum === 2 ? "--gold" : "black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Summer</Text>
        <Text onClick={() => setSlideNum(3)} color={slideNum === 3 ? "--gold" : "black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Autumn</Text>
        <Text onClick={() => setSlideNum(4)} color={slideNum >= 4 ? "--gold" : "black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Winter</Text>
      </VStack>
    </VStack>
  )
}

export default HomeProducts
