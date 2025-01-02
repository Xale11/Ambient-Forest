import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import ourStoryImage from "../assets/ourStoryImage.png"
import Footer from "../components/Footer"
import { useQuery } from "@tanstack/react-query"
import { fetchFromDynamoDB } from "../api/awsApi"
import { useEffect, useState } from "react"
import { OurStoryPageData } from "../types/types"
import { Helmet } from "react-helmet"

const OurStory = () => {

  const baseImageUrl = import.meta.env.VITE_S3_URL
  const canonicalUrl = import.meta.env.VITE_DOMAIN

  const [ourStoryPage, setOurStoryPage] = useState<OurStoryPageData>({
    page: "ourStory",
    articles: [],
    pageDescription: ""
    
  })

  const {data: pageData} = useQuery({queryKey: ["fetchOurStoryData"], queryFn: () => fetchFromDynamoDB("/ourStory"), enabled: true})

  useEffect(() => {
    if (pageData?.Items){
      setOurStoryPage(pageData.Items[0] ?? {
        page: "ourStory",
        articles: [],
        pageDescription: ""
        
      })
    }
  }, [pageData])

  // seo
  const seoDescription = [
    ourStoryPage.pageDescription,
    ...ourStoryPage.articles.map(article => article.message)
  ]
    .filter(msg => msg) 
    .join(" ") 

  return (
    <>
      <Helmet>
        <title>Our Story | Ambient Forest Candles</title>
        <meta
          name="description"
          content={`Learn about Ambient Forest Candles' journey and the story behind our handcrafted soy candles. ${seoDescription}`}
        />
        <meta name="keywords" content="candles, handcrafted, soy candles, our story, Peak District, family business" />
        <meta name="author" content="Ambient Forest Candles" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${canonicalUrl}/ourStory`} />
      </Helmet>

      <VStack w={"100vw"} gap={5} >
        <Navbar/>
        <VStack h={{base: "auto", xl: "70vh"}} w={"100%"} pb={10} pt={{base: "7.5em", lg: "10em", xl: "13em"}} gap={3} bg={`url(${ourStoryImage}), rgba(0, 0, 0, 0.4)`} bgSize={"cover"} bgPos={"center"} bgBlendMode={"overlay"} bgRepeat={"no-repeat"}>
          <Heading size={{base: "3xl", xl: "5xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"--white"}>Our Story</Heading>
          <Text w={{base: "90%", lg: "40%"}} fontSize={{base: "sm", xl: "md"}} textAlign={"center"} letterSpacing={"1px"} color={"--white"}>
            {ourStoryPage?.pageDescription}
          </Text>
        </VStack>
        <VStack w={"100%"} gap={14} my={5}>
          {ourStoryPage?.articles?.map((article, i) => {
            return (
              <HStack w={"100%"} justify={"center"} gap={{base: 10, lg: "10em"}} wrap={"wrap"} flexDirection={i % 2 == 0 ? "row" : "row-reverse"}>
                <VStack w={{base: "90%", lg: "30%"}} gap={5}>
                  <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} textAlign={"center"} color={"black"}>{article?.title}</Heading>
                  <Text textAlign={"center"} letterSpacing={"1px"} lineHeight={"1.7em"} color={"black"}>{article?.message}</Text>
                </VStack>
                {article?.imageUrl && <Image src={`${baseImageUrl}/${article?.imageUrl}`} maxH={{base: "45vh", lg: "30em"}} maxW={{base: "90%", lg: "50%"}} alt="Image showing the story behind Ambient Forest"/>}
              </HStack>
            )
          })}
        </VStack>
        <Footer/>
      </VStack>
    </>
  )
}

export default OurStory
