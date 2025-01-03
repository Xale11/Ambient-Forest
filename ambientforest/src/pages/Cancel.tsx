import { Spacer, VStack } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Alert } from '../components/ui/alert'

const Cancel = () => {
  const canonicalUrl = import.meta.env.VITE_DOMAIN

  return (
    <>
      <Helmet>
        <title>Failed Payment | Ambient Forest Candles</title>
        <meta
          name="description"
          content={`Failed purchase page for Ambient Forest Candles`}
        />
        <meta name="keywords" content="handmade candles, Macclesfield, luxury candles, scented candles, ambient forest candles" />
        <meta name="author" content="Ambient Forest Candles" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${canonicalUrl}/success`} />
      </Helmet>

      <VStack w={"100vw"} minH={"100vh"} gap={5}>
        <Navbar/>
        <Spacer/>
        <Alert
          status="error"
          variant="solid"
          title="Your Purchase Was Cancelled. Please Try Again."
          w={"30%"}
          mt={{base: "6em", lg: "10em"}}
        />
        <Spacer/>
        <Footer/>
      </VStack>
    </>
  )
}

export default Cancel
