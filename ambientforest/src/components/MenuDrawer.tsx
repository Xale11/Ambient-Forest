import { DrawerBackdrop, DrawerBody, DrawerContent, DrawerRoot, DrawerTrigger, Icon, Text, VStack } from "@chakra-ui/react"
import { IoMdMenu } from "react-icons/io"
import { Link } from "react-router-dom"
import { DrawerCloseTrigger } from "./ui/drawer"


const MenuDrawer = () => {

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
      <DrawerRoot placement={"start"} size={"xs"} >
        <DrawerBackdrop/>
        <DrawerTrigger asChild>
          <Icon fontSize={"5xl"} display={{base: "flex", lg: "none"}} position={"absolute"} right={2}>
            <IoMdMenu />
          </Icon>
        </DrawerTrigger>
        <DrawerContent pos={"absolute"} left={0} top={0} bg={"--black"} overflowY={"hidden"}>
          <DrawerBody>
            <DrawerCloseTrigger pos={"relative"} mb={2}/>
            <VStack h={"100vh"} gap={10} align={"start"} borderTop={"1px solid #AD974F"} pt={5} overflowY={"hidden"}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
  )
}

export default MenuDrawer
