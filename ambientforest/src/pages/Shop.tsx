import { Heading, HStack, Icon, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { FaChevronDown } from "react-icons/fa"
import Product from "../components/Product"
import Footer from "../components/Footer"

const Shop = () => {
  return (
    <VStack pos={"relative"} w={"100vw"}>
      <Navbar/>
      <Text display={{base: "none", lg: "inline-block"}} pos={"absolute"} letterSpacing={"1px"} cursor={"pointer"} textDecor={"underline"} top={"8.5em"} left={4} color={"black"} w={"14em"}>Shop for tealights & Giftsets</Text>
      <MenuRoot positioning={{placement: "bottom"}}>
        <MenuTrigger asChild>
        <HStack  gap={5} mt={{base: "6em", lg: "10em"}} align={"center"} justify={"center"}>
          <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Candles</Heading>
          <Icon fontSize={"2xl"} color={"black"}>
            <FaChevronDown/>
          </Icon>
        </HStack>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="Candles"/>
        </MenuContent>
      </MenuRoot>
      <HStack mt={5} w={"100%"} justify={"center"} gap={{base: 4, lg: "10em"}} wrap={"wrap"}>
        <Heading size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Spring</Heading>
        <Heading size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Summer</Heading>
        <Heading size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"--gold"} textDecor={"underline"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Autumn</Heading>
        <Heading size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Winter</Heading>
      </HStack>
      <VStack w={"100%"} my={10} gap={5}>
        {[1, 2, 3].map((i) => {
          return (
            <Product item={i}/>
          )
        })}
      </VStack>
      
      <Footer/>
    </VStack>
  )
}

export default Shop
