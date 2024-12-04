import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductPageItem from '../components/ProductPageItem'
import candle from "../assets/candle.png"
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <VStack w={"100vw"} >
      <Navbar/>
      <VStack w={"100%"} gap={10} mt={{base: "6em", lg: "10em"}} mb={5}>
        {/* # TODO add ingredients disclosure */}
        <ProductPageItem/>
        <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>You Might Also Like</Heading>
        <HStack w={"100%"} justify={"center"} gap={{base: 10, lg: 14}} wrap={"wrap"}>
          {[1, 2, 3, 4].map((item) => {
            return (
              <VStack key={item} border={"1px solid #AD974F"} w={{base: "40%", lg: "20%"}} >
                <Link to={"/product/candle2"}>
                  <Image h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candle/tealight/giftset for sale"/>
                  <VStack w={"100%"} bg={"--gold"} gap={0} py={1}>
                    <Heading size={{base: "lg", xl: "2xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} >Winter Forest</Heading>
                    <Text fontSize={{base: "md", xl: "xl"}}>£79.99 GBP</Text>
                  </VStack>
                </Link>
              </VStack>
            )
          })}
        </HStack>
      </VStack>
      <Footer/>
    </VStack>
  )
}

export default ProductPage
