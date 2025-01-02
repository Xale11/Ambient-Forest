import { Spacer, VStack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '../components/ui/accordion'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { TermsCondition } from '../types/types'
import { fetchFromDynamoDB } from '../api/awsApi'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'

const Terms = () => {

  const [terms, setTerms] = useState<TermsCondition[]>([])

  const {data: pageData} = useQuery({queryKey: ["fetchTerms"], queryFn: () => fetchFromDynamoDB("/terms"), enabled: true})

  useEffect(() => {
    if (pageData?.Items){
      setTerms(pageData.Items[0]?.terms ?? [])
    }
  }, [pageData])

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Ambient Forest Candles</title>
        <meta
          name="description"
          content="Read the terms and conditions for Ambient Forest Candles. Learn more about our policies, privacy, and the services we offer for handmade candles in Macclesfield and Cheshire."
        />
        <meta
          name="keywords"
          content="terms and conditions, privacy policy, handmade candles, Macclesfield, luxury candles, scented candles, ambient forest candles"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Terms & Conditions - Ambient Forest Candles"
        />
        <meta
          property="og:description"
          content="Explore the terms and conditions for shopping with Ambient Forest Candles. Our handmade, locally crafted candles are made with love in Macclesfield, Cheshire."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ambient Forest Candles" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <VStack minH={"100vh"}>
        <Navbar/>
        <VStack mt={{base: "6em", lg: "10em"}} mb={10} w={"80%"} color={"black"}>
          <AccordionRoot collapsible>
            {terms.map((item, i) => {
              return (
                <AccordionItem key={i} value={item.title}>
                  <AccordionItemTrigger fontSize={"2xl"} px={2}>{item.title}</AccordionItemTrigger>
                  <AccordionItemContent px={5}>{item.content}</AccordionItemContent>
                </AccordionItem>
              )
            })}
          </AccordionRoot>
        </VStack>
        <Spacer/>
        <Footer/>
      </VStack>
    </>
      
  )
}

export default Terms
