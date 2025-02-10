import { Heading, HStack, IconButton, Input, Spacer, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getProductsByTypeFromDynamoDB } from "../api/awsApi"
import { Product as ProductType } from "../types/types"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet"
import FragranceTable from "../components/FragranceTable"
import { CiSearch } from "react-icons/ci"

const Fragrances = () => {

  const [products, setProducts] = useState<ProductType[]>([])
  const [filter, setFilter] = useState<string>("")
  
    const {data: pageData, isFetchedAfterMount,} = useQuery({queryKey: ["fetchProductsData"], queryFn: () => getProductsByTypeFromDynamoDB(`candle`), enabled: true})
  
    useEffect(() => {
      if (pageData?.Items){
        setProducts(pageData.Items.filter((item: ProductType) => item.notes?.topNotes?.content.toLowerCase().includes(filter.toLowerCase()) || item.notes?.heartNotes?.content.toLowerCase().includes(filter.toLowerCase()) || item.notes?.baseNotes?.content.toLowerCase().includes(filter.toLowerCase())) ?? [])
      }
    }, [pageData, filter])

  return (
    <>
      <Helmet>
        <title>Candle Fragrance List | Ambient Forest Candles</title>
        <meta
          name="description"
          content={`Shop for the perfect Ambient Forest Candle fragrance, locally produced luxury candles inspired by the Peak District. Available in spring, summer, autumn, and winter scents.`}
        />
        <meta
          name="keywords"
          content={`candles, luxury candles, fragrances, Peak District, handmade candles, spring candles, summer candles, autumn candles, winter candles, handmade products in Macclesfield, Cheshire`}
        />
        <meta property="og:title" content={`Fragrances - Ambient Forest Candles`} />
        <meta property="og:description" content={`Shop for fragrances from Ambient Forest Candles, locally produced luxury candles inspired by the Peak District.`} />
        <meta property="og:url" content={window.location.href} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ambient Forest Candles" />
      </Helmet>

      <VStack pos={"relative"} w={"100vw"} minH={"100vh"}>
        <Navbar/>
          <HStack  gap={5} mt={{base: "6em", lg: "10em"}} align={"center"} justify={"center"}>
            <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Fragrances</Heading>
          </HStack>
        <HStack mt={5} w={"100%"} justify={"center"}  wrap={"wrap"}>
          <Input w={{base: "60%", md: "30%"}} bg={"--black"} value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search for a fragrance"/>
          <IconButton bg={"--white"} borderColor={"--black"}>
            <CiSearch />
          </IconButton>
        </HStack>
        <FragranceTable products={products} />
        {isFetchedAfterMount && products.length == 0 && <Heading color={"black"} textAlign={"center"} fontFamily={"Novecento"} size={"xl"} mb={10}>No s for {filter} right now, but stay tuned—new arrivals coming soon!</Heading>}
        {products.length == 0 && <Spacer/>}
        <Footer/>
      </VStack>
    </>
  )
}

export default Fragrances
