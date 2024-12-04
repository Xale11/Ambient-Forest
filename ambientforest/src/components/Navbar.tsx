import { HStack, Icon, Image, Text, VStack } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import forestOutline from "../assets/forestOutlineGold.png"
import Logo from "./Logo"
import { IoMdMenu } from "react-icons/io"

const Navbar = () => {

  const location = useLocation()

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
      <Image pos={"absolute"} left={0} alt="Image of the Macclesfield Forest Outline" h={"100%"} src={forestOutline}/>
      <Icon fontSize={"5xl"} display={{base: "flex", lg: "none"}} position={"absolute"} right={2}>
        <IoMdMenu />
      </Icon>
      <HStack pos={"relative"} display={{base: "none", lg: "flex"}} w={"100%"} justify={"space-around"}>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/")} _hover={{textDecor: "underline"}}>
          <Link to={"/"}>HOME</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/ourstory")} _hover={{textDecor: "underline"}}>
          <Link to={"/ourstory"}>OUR STORY</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/shop")} _hover={{textDecor: "underline"}}>
          <Link to={"/shop"}>SHOP</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/contact")} _hover={{textDecor: "underline"}}>
          <Link to={"/contact"}>CONTACT</Link>
        </Text>
        <Text letterSpacing={"1px"} fontSize={"xl"} textDecor={underline("/cart")} _hover={{textDecor: "underline"}}>
          <Link to={"/cart"}>CART</Link>
        </Text>
      </HStack>
      <Logo/>
    </VStack>
      
  )
}

export default Navbar
