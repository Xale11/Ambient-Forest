import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import ProductColorNotes from "./ProductColorNotes"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Product } from "../types/types"
import { limitText } from "../utils/stringHandling"
import ProductModal from "./ProductModal"
import { useContext, useEffect, useState } from "react"
import { ContextAPI, ContextData } from "../context/ContextProvider"
import { isProductNew } from "../utils/productHandling"

interface Props {
  product: Product | undefined
}

const ProductPageItem = ({product}: Props) => {

  const { addToBag } = useContext(ContextAPI) as ContextData

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  const baseImageUrl = import.meta.env.VITE_S3_URL

  const [displayImage, setDisplayImage] = useState<string>(`${baseImageUrl}/${product?.mainImageUrl}`)

  useEffect(() => {
    setDisplayImage(`${baseImageUrl}/${product?.mainImageUrl}`)
  }, [product, baseImageUrl])

  return (
    <HStack w={"90%"} h={{base: "unset", lg: "calc(100vh - 11em)"}} border={"1px solid #AD974F"} wrap={{base: "wrap", lg: "nowrap"}} >
          
      <VStack position={"relative"} h={{base: "unset", lg: "100%"}} w={{base: "100%", lg: "50%"}} overflowY={"hidden"}>
        {product?.isSoldOut && <Box top={0} right={35} fontSize={"lg"} bg={"--black"} position={"absolute"} py={1.5} px={4}>Sold Out</Box>}
        <Image h={{base: "unset", lg: "80%"}} w={{base: "100%", lg: "unset"}} maxH={"65vh"} aspectRatio={"1/1"}  objectFit={"contain"} src={displayImage} alt="Image of candle/tealight/giftset for sale"/>
        <HStack h={"20%"} w={"100%"} gap={5} px={5} overflowX={"auto"} overflowY={"hidden"} display={{base: "none", lg: "flex"}}>
          <Image onClick={() => setDisplayImage(`${baseImageUrl}/${product?.mainImageUrl}`)} h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={`${baseImageUrl}/${product?.mainImageUrl}`} alt="Image of candle/tealight/giftset for sale"/>
          {product?.secondaryImageUrl && <Image onClick={() => setDisplayImage(`${baseImageUrl}/${product.secondaryImageUrl}`)} h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={`${baseImageUrl}/${product.secondaryImageUrl}`} alt="Image of candle/tealight/giftset for sale"/>}
          {product?.additionalImages.map((image) => {
            return (<Image onClick={() => setDisplayImage(`${baseImageUrl}/${image.imageUrl}`)} h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={`${baseImageUrl}/${image.imageUrl}`} alt="Image of candle/tealight/giftset for sale"/>)
          })}
        </HStack>
        <HStack display={{base: "flex", lg: "none"}}>
          <Box borderRadius={"100%"} border={"1px solid black"} w={"7px"} aspectRatio={"1/1"}></Box>
          <Box borderRadius={"100%"} border={"1px solid black"} w={"7px"} aspectRatio={"1/1"} bg={"black"}></Box>
          <Box borderRadius={"100%"} border={"1px solid black"} w={"7px"} aspectRatio={"1/1"} bg={"black"}></Box>
          <Box borderRadius={"100%"} border={"1px solid black"} w={"7px"} aspectRatio={"1/1"} bg={"black"}></Box>
        </HStack>
      </VStack>

      <VStack align={"start"} justify={{base: "center", "2xl": "start"}} h={{base: "unset", lg: "100%"}} w={{base: "100%", lg: "50%"}} gap={{base: 5, xl: 7}} pt={{base: 1, xl: 7}}>

        <VStack gap={0} w={"100%"} align={{base: "center", lg: "start"}}>
          <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"}>{product?.name}</Heading>
          <HStack gap={4}>
            <Text fontSize={"lg"} color={"--gold"}>£{(parseInt(product?.price ?? "0") / 100).toFixed(2)}</Text>
            {isProductNew(product) && <Text fontSize={"lg"} bg={"--gold"} px={5}>NEW</Text>}
          </HStack>
        </VStack>

        {/* Mobile button group */}
        <HStack w={"100%"} px={2} display={{base: "flex", lg: "none"}}>
          <Link to={"/cart"} style={{width: "50%"}}>
            <Button disabled={product?.isSoldOut} onClick={() => addToBag(product)} fontSize={"md"} color={"white"} bg={"--black"} w={"100%"} transition={"all 300ms ease-in-out"}>
              Add To Basket
            </Button>
          </Link>
          <Link to={"/cart"} style={{width: "50%"}}>
            <Button disabled={product?.isSoldOut} fontSize={"md"} bg={"--gold"} w={"100%"} transition={"all 300ms ease-in-out"}>
              Buy Now
            </Button>
          </Link>
        </HStack>
        
        <VStack gap={0} w={"100%"} align={{base: "center", lg: "start"}}>
          <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£{(parseInt(product?.price ?? "0") / 100).toFixed(2)}</Heading>
          <Text fontSize={"lg"} color={"black"}>{product?.keyContent}</Text>
        </VStack>

        <HStack w={"100%"} gap={5} justify={{base: "center", lg: "start"}} wrap={"wrap"}>
          <Text fontSize={"xs"} w={{base: "90%", xl: "50%"}} color={"black"} textAlign={{base: "center", lg: "start"}}>
            {`${limitText(product?.description, 275)}`}
            <Button onClick={() => setIsModalOpen(true)} ml={2} py={0} letterSpacing={"1px"} h={"min-content"} fontSize={"xs"} color={"white"} bg={"--black"} _hover={{px: 6}} transition={"all 300ms ease-in-out"}>More Info</Button>
          </Text>
          <ProductColorNotes w={"40%"} h={"10em"} fontSize={"md"} product={product}/>
          <VStack w={"60%"} textAlign={"center"} fontSize={"sm"} mb={2} display={{base: "flex", lg: "none"}}>
            <Text fontFamily={"Novecento"} color={"black"}>
              Top notes: Citrus, Pear, Armoise
            </Text>
            <Text fontFamily={"Novecento"} color={"black"}>
              Heart notes: Amber, Lavender, Jasmine
            </Text>
            <Text fontFamily={"Novecento"} color={"black"}>
              Base notes: Sandalwood, Musk, Vanilla
            </Text>
          </VStack>
        </HStack>

        {/* Desktop Button Group */}
        <HStack w={"100%"} display={{base: "none", lg: "flex"}}>
          <Link to={"/cart"}>
            <Button disabled={product?.isSoldOut} onClick={() => addToBag(product)} fontSize={"md"} color={"white"} bg={"--black"} w={"13em"} _hover={{w: "15em"}} transition={"all 300ms ease-in-out"}>
              Add To Basket
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button disabled={product?.isSoldOut} fontSize={"md"} bg={"--gold"} w={"13em"} _hover={{w: "15em"}} transition={"all 300ms ease-in-out"}>
              Buy Now
            </Button>
          </Link>
        </HStack>

      </VStack>
      <ProductModal open={isModalOpen} setOpen={setIsModalOpen} product={product}/>
    </HStack>
  )
}

export default ProductPageItem
