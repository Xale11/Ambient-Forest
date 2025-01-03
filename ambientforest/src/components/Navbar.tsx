import { HStack, Image, Text, VStack } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import forestOutline from "../assets/forestOutlineGold.png"
import Logo from "./Logo"
import MenuDrawer from "./MenuDrawer"
import { useContext } from "react"
import { ContextAPI, ContextData } from "../context/ContextProvider"
import { getNumCartItems } from "../utils/cartHandling"
import ScrollToTop from "./ScrollToTop"

const Navbar = () => {

  const location = useLocation()

  const { cart } = useContext(ContextAPI) as ContextData

  const underline = (url: string) => {
    //override for route url
    if(url === "/" && location.pathname === url){
      return "underline"
    }

    if (url !== "/" && location.pathname.includes(url)){
      return "underline"
    }
    return ""
  }

  return (
    <VStack pos={"fixed"} zIndex={999} w={"100vw"} bg={"--black"} h={{base: "5em",lg: "8em"}} justify={"center"} fontFamily={"Nazare"}>
      <ScrollToTop/>
      <Image pos={"absolute"} left={0} alt="Image of the Macclesfield Forest Outline" h={"100%"} src={forestOutline}/>
      <MenuDrawer/>
      <HStack pos={"relative"} display={{base: "none", lg: "flex"}} w={"100%"} justify={"space-around"}>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/")} _hover={{textDecor: "underline"}}>
          <Link to={"/"}>HOME</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/ourstory")} _hover={{textDecor: "underline"}}>
          <Link to={"/ourstory"}>OUR STORY</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/shop")} _hover={{textDecor: "underline"}}>
          <Link to={`/shop/candle`}>SHOP</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/contact")} _hover={{textDecor: "underline"}}>
          <Link to={"/contact"}>CONTACT</Link>
        </Text>
        <Text position={"relative"} letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/cart")} _hover={{textDecor: "underline"}}>
          {cart.length > 0 &&<HStack top={-1} right={-3} justify={"center"} position={"absolute"} bg={"red"} borderRadius={"50%"} fontSize={"xs"} w={"1.5em"} h={"1.5em"}>{getNumCartItems(cart)}</HStack>}
          <Link to={"/cart"}>CART</Link>
        </Text>
      </HStack>
      <Logo/>
    </VStack>
      
  )
}

export default Navbar
