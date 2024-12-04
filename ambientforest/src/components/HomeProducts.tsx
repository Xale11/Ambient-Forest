import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import candle from "../assets/candle.png"
import { Link } from "react-router-dom"

interface Props {
  title: string
}

const HomeProducts = ({ title }: Props) => {
  return (
    <VStack w={{base: "30%", lg: "20%"}}>
      <Heading size={{base: "xl",lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>{title}</Heading>
      <Link to="/shop" style={{width: "100%"}}>
        <Image w={"100%"} objectFit={"contain"} aspectRatio={"1/1"} src={candle} alt="Image of candles for sale"/>
      </Link>
      
      <HStack w={"100%"}>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"--gold"} _hover={{bg: "--gold", cursor: "pointer"}}/>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
        <Box w={"24%"} h={{base: "1px", lg: "1.5px"}} bg={"black"} _hover={{bg: "--gold", cursor: "pointer"}}/>
      </HStack>
      <VStack gap={{base: 1, lg: 0}}>
        <Text color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Spring</Text>
        <Text color={"--gold"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Summer</Text>
        <Text color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Autumn</Text>
        <Text color={"black"} fontSize={{base: "md", lg: "xl"}} letterSpacing={"1px"} _hover={{color: "--gold", cursor: "pointer"}}>Winter</Text>
      </VStack>
    </VStack>
  )
}

export default HomeProducts
