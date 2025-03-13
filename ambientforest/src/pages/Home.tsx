import { HStack, Spacer, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import HomeBanner from "../components/HomeBanner"
import HomeProducts from "../components/HomeProducts"
import Footer from "../components/Footer"
import { useQuery } from "@tanstack/react-query"
import { fetchFromDynamoDB } from "../api/awsApi"
import { useEffect, useState } from "react"
import { HomePageData } from "../types/types"
import { Helmet } from "react-helmet"

const Home = () => {

  const canonicalUrl = import.meta.env.VITE_DOMAIN
  const baseImageUrl = import.meta.env.VITE_USE_CLOUDFRONT === "true" ? import.meta.env.VITE_CLOUDFRONT_URL : import.meta.env.VITE_S3_URL


const [homePage, setHomePage] = useState<HomePageData>({
  page: "home",
  mainImgUrl: `homePageMainImage`,
  bannerMessages: { msg1: "", msg2: "", msg3: "", msg4: ""},
  productBanner: {
    candle: undefined,
    giftset: undefined,
    tealight: undefined
  }
})

  const {data: pageData} = useQuery({queryKey: ["fetchHomePageData"], queryFn: () => fetchFromDynamoDB("/home"), enabled: true})

  useEffect(() => {
    if (pageData?.Items){
      setHomePage(pageData.Items[0] ?? {
        page: "home",
        bannerMessages: { msg1: "", msg2: "", msg3: "", msg4: ""},
        productBanner: {
          candle: {},
          giftset: {},
          tealight: {}
        }
      })
    }
  }, [pageData])

  // for seo

  const candle = homePage.productBanner?.candle;

  const seoBannerText = [
    homePage?.bannerMessages.msg1,
    homePage?.bannerMessages.msg2,
    homePage?.bannerMessages.msg3,
    homePage?.bannerMessages.msg4,
  ]
    .filter((msg) => msg) // Ensure no undefined messages
    .join(' '); // Combine for a better meta description

  return (
    <>
      <Helmet>
        <title>Ambient Forest Candles | Handcrafted Soy Candles</title>
        <meta
          name="description"
          content={`Discover Ambient Forest Candles, handcrafted soy candles inspired by the beauty of the Peak District. ${seoBannerText}`}
        />
        <meta name="keywords" content="candles, soy candles, gift sets, tealights, handcrafted, Peak District, Macclesfield, Cheshire" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ambient Forest Candles" />
        <link rel="canonical" href={`${canonicalUrl}`} />
        {candle && (
          <meta property="og:title" content={`Shop ${candle.name} - Ambient Forest Candles`} />
        )}
        {candle && (
          <meta property="og:description" content={candle.description} />
        )}
        {candle && (
          <meta property="og:image" content={candle.mainImageUrl} />
        )}
      </Helmet>
      <VStack w={"100%"} gap={0}>
        <VStack h={"100vh"} w={"100%"} bg={`url(${baseImageUrl}/${homePage.mainImgUrl}?t=${Date.now()}), rgba(0, 0, 0, 0.0)`} bgSize={"cover"} bgPos={"center"} bgBlendMode={"overlay"} bgRepeat={"no-repeat"}>
          <Navbar/>
          <Spacer/>
          <VStack>
            <Link to={`/shop/candle`}>
              <Button size={"lg"} fontSize={"2xl"} px={"2em"} _hover={{px: "3em"}} transition={"all 300ms ease-in-out"} bg={"--black"} color={"white"} letterSpacing={"2px"}>SHOP NOW</Button>
            </Link>
            <Link style={{marginBottom: "3.5em"}} to={`/fragrance`}>
              <Button size={"lg"} fontSize={"2xl"} px={"2em"} _hover={{px: "3em"}} transition={"all 300ms ease-in-out"} bg={"--gold"} color={"white"} letterSpacing={"2px"}>FIND A FRAGRANCE</Button>
            </Link>
          </VStack>
          
        </VStack>
        <HomeBanner bannerMessages={homePage?.bannerMessages}/>
        <HStack w={"100%"} justify={"center"} gap={{base: 3, lg: 16}} my={5}>
          <HomeProducts title="Candles" productType="candle" bannerProduct={homePage.productBanner?.candle}/>
          <HomeProducts title="Tealights" productType="tealight" bannerProduct={homePage.productBanner?.tealight}/>
          <HomeProducts title="Giftsets" productType="giftset" bannerProduct={homePage.productBanner?.giftset}/>
        </HStack>
        <Footer/>
      </VStack>
    </>
      
  )
}

export default Home
