import { Spacer, VStack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '../components/ui/accordion'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { TermsCondition } from '../types/types'
import { fetchFromDynamoDB } from '../api/awsApi'
import { useQuery } from '@tanstack/react-query'

const Terms = () => {

  const [terms, setTerms] = useState<TermsCondition[]>([])

  const {data: pageData} = useQuery({queryKey: ["fetchTerms"], queryFn: () => fetchFromDynamoDB("/terms"), enabled: true})

  useEffect(() => {
    if (pageData?.Items){
      setTerms(pageData.Items[0]?.terms ?? [])
    }
  }, [pageData])

  return (
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
  )
}

export default Terms
