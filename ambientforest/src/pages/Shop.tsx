import { Heading, HStack, Icon, MenuContent, MenuItem, MenuRoot, MenuTrigger, Spacer, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { FaChevronDown } from "react-icons/fa"
import Product from "../components/Product"
import Footer from "../components/Footer"
import { useNavigate, useParams, useSearchParams, } from "react-router-dom"
import { getProductsByTypeFromDynamoDB } from "../api/awsApi"
import { Product as ProductType } from "../types/types"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCurrentSeason } from "../utils/currentSeason"

const Shop = () => {

  const navigate = useNavigate()
  const { type } = useParams()
  const [ params ] = useSearchParams()


  const checkSeasonQueryParam = () => {
    const season = params.get("season")
    if (season === "spring" || season === "summer" || season === "autumn" || season === "winter"){
      return season
    } else {
      return undefined
    }
  }

  const [products, setProducts] = useState<ProductType[]>([])
  const [filter, setFilter] = useState<"spring" | "summer" | "autumn" | "winter">(checkSeasonQueryParam() ?? getCurrentSeason())
  
    const {data: pageData, refetch: pageRefetch, isFetchedAfterMount,} = useQuery({queryKey: ["fetchProductsData"], queryFn: () => getProductsByTypeFromDynamoDB(`${type}`), enabled: true})
  
    useEffect(() => {
      if (pageData?.Items){
        setProducts(pageData.Items.filter((item: ProductType) => item.season === filter) ?? [])
      }
    }, [pageData, filter])

    useEffect(() => {
      if (isFetchedAfterMount){
        pageRefetch()
      }
    }, [type])

    console.log(products)

  return (
    <VStack pos={"relative"} w={"100vw"} minH={"100vh"}>
      <Navbar/>
      <MenuRoot positioning={{placement: "bottom"}}>
        <MenuTrigger _focus={{outline: "none", border: "none"}}>
        <HStack  gap={5} mt={{base: "6em", lg: "10em"}} align={"center"} justify={"center"}>
          <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Candles</Heading>
          <Icon fontSize={"2xl"} color={"black"}>
            <FaChevronDown/>
          </Icon>
        </HStack>
        </MenuTrigger>
        <MenuContent >
          <MenuItem onClick={() => navigate("/shop/candle")} value="Candles">
            <Text w={"100%"} textAlign={"center"}>Candles</Text>
          </MenuItem>
          <MenuItem onClick={() => navigate("/shop/tealight")} value="Tealights">
            <Text w={"100%"} textAlign={"center"}>Tealights</Text>
          </MenuItem>
          <MenuItem onClick={() => navigate("/shop/giftset")} value="Giftsets">
            <Text w={"100%"} textAlign={"center"}>Giftsets</Text>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
      <HStack mt={5} w={"100%"} justify={"center"} gap={{base: 4, lg: "10em"}} wrap={"wrap"}>
        <Heading onClick={() => setFilter("spring")} size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={ filter === "spring" ? "--gold" : "black"} textDecor={filter === "spring" ? "underline" : "unset"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Spring</Heading>
        <Heading onClick={() => setFilter("summer")} size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={ filter === "summer" ? "--gold" : "black"} textDecor={filter === "summer" ? "underline" : "unset"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Summer</Heading>
        <Heading onClick={() => setFilter("autumn")} size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={ filter === "autumn" ? "--gold" : "black"} textDecor={filter === "autumn" ? "underline" : "unset"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Autumn</Heading>
        <Heading onClick={() => setFilter("winter")} size={{base: "sm", lg: "3xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={ filter === "winter" ? "--gold" : "black"} textDecor={filter === "winter" ? "underline" : "unset"} _hover={{color: "--gold", textDecor: "underline", cursor: "pointer"}}>Winter</Heading>
      </HStack>
      <VStack w={"100%"} my={10} gap={5}>
        {products.map((product) => {
          return (
            <Product product={product}/>
          )
        })}
      </VStack>
      {isFetchedAfterMount && products.length == 0 && <Heading color={"black"} textAlign={"center"} fontFamily={"Novecento"} size={"xl"} mb={10}>No {type}s for {filter} right now, but stay tuned—new arrivals coming soon!</Heading>}
      {products.length == 0 && <Spacer/>}
      <Footer/>
    </VStack>
  )
}

export default Shop
