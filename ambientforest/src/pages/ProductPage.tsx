import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductPageItem from '../components/ProductPageItem'
import candle from "../assets/candle.png"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../types/types'
import { getProductByTypeAndIdFromDynamoDB } from '../api/awsApi'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'

const ProductPage = () => {
  
  const { type, id } = useParams()

  const [product, setProduct] = useState<Product>()

  const {data: pageData, refetch: pageRefetch, isFetchedAfterMount} = useQuery({queryKey: ["fetchProductData"], queryFn: () => getProductByTypeAndIdFromDynamoDB(`${type}`, `${id}`), enabled: true})
  
  useEffect(() => {
    if (pageData?.Item){
      setProduct(pageData.Item)
    }
  }, [pageData])

  useEffect(() => {
    if (isFetchedAfterMount){
      pageRefetch()
    }
  }, [id])


  return (
    <>
      <Helmet>
        <title>{product ? `${product.name} | Ambient Forest Candles` : 'Product Page | Ambient Forest Candles'}</title>
        <meta
          name="description"
          content={`Shop for ${product ? product.name : 'luxury scented candles'} made with love in Macclesfield. Our hand-poured soy candles come in unique, locally crafted vessels inspired by the Peak District.`}
        />
        <meta
          name="keywords"
          content="candles, scented candles, luxury candles, handmade candles, Macclesfield, Peak District, soy candles, ambient forest candles"
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content={product ? `${product.name} - Ambient Forest Candles` : 'Product Page - Ambient Forest Candles'}
        />
        <meta
          property="og:description"
          content={`Explore our collection of handcrafted soy candles made in Macclesfield. Our candles come in beautiful hand-thrown vessels designed by local artisans, inspired by the stunning Peak District.`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content={product ? product.mainImageUrl : candle} />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="author" content="Ambient Forest Candles" />
      </Helmet>
      <VStack w={"100vw"} >
        <Navbar/>
        <VStack w={"100%"} gap={10} mt={{base: "6em", lg: "10em"}} mb={5}>
          {/* # TODO add ingredients disclosure */}
          <ProductPageItem product={product}/>
          <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>You Might Also Like</Heading>
          <HStack w={"100%"} justify={"center"} gap={{base: 10, lg: 14}} wrap={"wrap"}>
            {[1, 2, 3, 4].map((item) => {
              return (
                <VStack key={item} border={"1px solid #AD974F"} w={{base: "40%", lg: "20%"}} >
                  <Link to={"/product/candle2"}>
                    <Image w={"100%"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candle/tealight/giftset for sale"/>
                    <VStack w={"100%"} bg={"--gold"} gap={0} py={1}>
                      <Heading size={{base: "lg", xl: "2xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} >Winter Forest</Heading>
                      <Text fontSize={{base: "md", xl: "xl"}}>£79.99 GBP</Text>
                    </VStack>
                  </Link>
                </VStack>
              )
            })}
          </HStack>
        </VStack>
        <Footer/>
      </VStack>
    </>
    
  )
}

export default ProductPage
