import { Heading, HStack, Icon, Image, Span, Stack, Text, VStack } from "@chakra-ui/react"
import Logo from "./Logo"
import forestOutline from "../assets/forestOutline.png"
import { Link } from "react-router-dom"
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5"
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <VStack w={"100%"} bg={"--black"} gap={5} align={"start"} px={{base: 0, lg: 4, "2xl": "5em"}} pt={7} pb={5}>
      <HStack w={"100%"} align={"start"} justify={{base: "center", xl: "start"}} gap={{base: 3, lg: 7, xl: "10em"}} wrap={"wrap"}>

        <Stack direction={{base: "row", xl: "column"}} w={{base: "100%", xl: "15%"}} justify="center" gap={5} px={{base: 7, lg: "auto"}} >
          <Logo />
          <Image w={{base: "50%", sm: "20%", xl: "100%"}} objectFit={"contain"} src={forestOutline} alt="Image of Maccelesfield Forest Outline"/>
        </Stack>

        <VStack align={{base: "center", lg: "start"}} w={{base: "30%", lg: "auto"}}>
          <Heading size={{base: "sm", lg: "xl"}} fontFamily={"Novecento"} letterSpacing={"1px"} mb={2}>Information</Heading>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/"}>Home</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/ourstory"}>Our Story</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/shop"}>Shop</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/contact"}>Contact</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/cart"}>Cart</Link>
          </Text>
        </VStack>

        <VStack align={{base: "center", lg: "start"}} w={{base: "30%", lg: "auto"}} fontSize={{base: "xs", lg: "md"}}>
          <Heading size={{base: "sm", lg: "xl"}} fontFamily={"Novecento"} letterSpacing={"1px"} mb={2}>Contacts</Heading>
          <HStack _hover={{color: "--gold", cursor: "pointer"}}>
            <Icon size={"sm"}>
              <IoLocationOutline />
            </Icon>
            <Text>Example, Milton Keynes, MK12</Text>
          </HStack>
          <HStack _hover={{color: "--gold", cursor: "pointer"}}>
            <Icon size={"sm"}>
              <IoCallOutline />
            </Icon>
            <Text>01524 333888</Text>
          </HStack>
          <HStack _hover={{color: "--gold", cursor: "pointer"}}>
            <Icon size={"sm"}>
              <IoMailOutline />
            </Icon>
            <Text wordBreak={"break-all"}>sampleemail@gmail.com</Text>
          </HStack>
        </VStack>

        <VStack align={{base: "center", lg: "start"}} w={{base: "30%", lg: "auto"}}>
          <Heading size={{base: "sm", lg: "xl"}} fontFamily={"Novecento"} letterSpacing={"1px"} mb={2}>Social Media</Heading>
          <Stack flexDir={{base: "column", lg: "row"}} gap={5} fontSize={"lg"}>
            <Span _hover={{color: "--gold", cursor: "pointer"}}>
              <FaFacebookF />
            </Span>
            <Span _hover={{color: "--gold", cursor: "pointer"}}>
              <FaXTwitter />
            </Span>
            <Span _hover={{color: "--gold", cursor: "pointer"}}>
              <FaLinkedin />
            </Span>
            <Span _hover={{color: "--gold", cursor: "pointer"}}>
              <FaPinterestP />
            </Span>
          </Stack>
        </VStack>

      </HStack>
      <HStack w={"100%"} justify={"center"} wrap={"wrap"} gap={7}>
        <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
          <Link to="/terms">Terms Of Use</Link>
        </Text>
        <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
          <Link to="/terms">Terms Of Sale</Link>
        </Text>
        <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
          <Link to="/terms">Company Details</Link>
        </Text>
        <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
          <Link to="/terms">UK Modern Slavery Act Disclosure</Link>
        </Text>
        <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
          <Link to="/terms">Privacy & Cookie Policy</Link>
        </Text>
        <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
          <Link to="/terms">Privacy & Cookie Settings</Link>
        </Text>
      </HStack>
    </VStack>
  )
}

export default Footer
