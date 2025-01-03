import { Heading, HStack, Icon, Image, Span, Stack, Text, VStack } from "@chakra-ui/react"
import Logo from "./Logo"
import forestOutline from "../assets/forestOutline.png"
import { Link } from "react-router-dom"
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5"
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { fetchFromDynamoDB } from "../api/awsApi"
import { ContactPageData, TermsCondition } from "../types/types"
import { useQuery } from "@tanstack/react-query"
import { customRedirect } from "../utils/redirect"
import { toaster } from "./ui/toaster"

const Footer = () => {

  const [footerData, setFooterData] = useState<ContactPageData>({
    page: "contact",
    email: "",
    instagram: "",
    linkedin: "",
    location: "",
    number: "",
    pinterest: "",
    twitter: "",
    facebook: "",
    tiktok: ""
  })
  const [terms, setTerms] = useState<TermsCondition[]>([])
  
  const {data: termsData} = useQuery({queryKey: ["fetchTerms"], queryFn: () => fetchFromDynamoDB("/terms"), enabled: true})
  const {data: pageData} = useQuery({queryKey: ["fetchFooterData"], queryFn: () => fetchFromDynamoDB("/contact"), enabled: true})

  const copyContent = (value: string) => {
    navigator.clipboard.writeText(value);
    toaster.create({
      title: "Copied To Clipboard",
      type: "success",
      action: {
        label: "close",
        onClick: () => {return},
      }
    })
  }

  useEffect(() => {
    if (termsData?.Items){
      setTerms(termsData.Items[0]?.terms ?? [])
    }
  }, [termsData])

  useEffect(() => {
    if (pageData?.Items){
      setFooterData(pageData.Items[0] ?? {
        page: "contact",
        email: "",
        instagram: "",
        linkedin: "",
        location: "",
        number: "",
        pinterest: "",
        twitter: "",
        facebook: "",
        tiktok: ""
      })
    }
  }, [pageData])

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
            <Link to={"/shop/candle"}>Shop</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/contact"}>Contact</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/cart"}>Cart</Link>
          </Text>
          <Text _hover={{color: "--gold"}} fontSize={{base: "xs", lg: "md"}}>
            <Link to={"/terms"}>Terms</Link>
          </Text>
        </VStack>

        <VStack align={{base: "center", lg: "start"}} w={{base: "30%", lg: "auto"}} fontSize={{base: "xs", lg: "md"}}>
          <Heading size={{base: "sm", lg: "xl"}} fontFamily={"Novecento"} letterSpacing={"1px"} mb={2}>Contacts</Heading>
          <HStack onClick={() => copyContent(footerData?.location ?? "")} _hover={{color: "--gold", cursor: "pointer"}}>
            <Icon size={"sm"}>
              <IoLocationOutline />
            </Icon>
            <Text>{footerData?.location}</Text>
          </HStack>
          <HStack onClick={() => copyContent(footerData?.number ?? "")} _hover={{color: "--gold", cursor: "pointer"}}>
            <Icon size={"sm"}>
              <IoCallOutline />
            </Icon>
            <Text>{footerData?.number}</Text>
          </HStack>
          <HStack onClick={() => copyContent(footerData?.email ?? "")} _hover={{color: "--gold", cursor: "pointer"}}>
            <Icon size={"sm"}>
              <IoMailOutline />
            </Icon>
            <Text wordBreak={"break-all"}>{footerData?.email}</Text>
          </HStack>
        </VStack>

        <VStack align={{base: "center", lg: "start"}} w={{base: "30%", lg: "auto"}}>
          <Heading size={{base: "sm", lg: "xl"}} fontFamily={"Novecento"} letterSpacing={"1px"} mb={2}>Social Media</Heading>
          <Stack flexDir={{base: "column", lg: "row"}} gap={5} fontSize={"lg"}>
            <Span onClick={() => customRedirect(footerData?.facebook)} _hover={{color: "--gold", cursor: "pointer"}}>
              <FaFacebookF />
            </Span>
            <Span onClick={() => customRedirect(footerData?.twitter)} _hover={{color: "--gold", cursor: "pointer"}}>
              <FaXTwitter />
            </Span>
            <Span onClick={() => customRedirect(footerData?.linkedin)} _hover={{color: "--gold", cursor: "pointer"}}>
              <FaLinkedin />
            </Span>
            <Span onClick={() => customRedirect(footerData?.pinterest)} _hover={{color: "--gold", cursor: "pointer"}}>
              <FaPinterestP />
            </Span>
          </Stack>
        </VStack>

      </HStack>
      <HStack w={"100%"} justify={"center"} wrap={"wrap"} gap={7}>
        {terms?.map((term) => {
          return (
            <Text fontSize={{base: "xs", lg: "md"}} _hover={{color: "--gold"}}>
              <Link to="/terms">{term.title}</Link>
            </Text>
          )
        })}
      </HStack>
    </VStack>
  )
}

export default Footer
