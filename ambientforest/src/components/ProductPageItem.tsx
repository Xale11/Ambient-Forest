import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import candle from "../assets/candle.png"
import ProductColorNotes from "./ProductColorNotes"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"


const ProductPageItem = () => {

  const desc = "Immerse yourself in the warmth of the season with our Cinnamon, Nutmeg & Clove candle. This comforting blend captures the essence of autumn and winter, filling your space with the rich, spicy aroma of freshly ground cinnamon, the sweet warmth of nutmeg, and the bold, earthy notes of clove. Perfect for creating a cozy atmosphere on chilly days or setting the mood for festive gatherings."

  return (
    <HStack w={"90%"} h={{base: "unset", lg: "calc(100vh - 11em)"}} border={"1px solid #AD974F"} wrap={{base: "wrap", lg: "nowrap"}} >
          
      <VStack h={{base: "unset", lg: "100%"}} w={{base: "100%", lg: "50%"}} overflowY={"hidden"}>
        <Image h={{base: "unset", lg: "80%"}} w={{base: "100%", lg: "unset"}} maxH={"65vh"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candle/tealight/giftset for sale"/>
        <HStack h={"20%"} w={"100%"} gap={5} px={5} overflowX={"auto"} overflowY={"hidden"} display={{base: "none", lg: "flex"}}>
          <Image h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candle/tealight/giftset for sale"/>
          <Image h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candle/tealight/giftset for sale"/>
          <Image h={"80%"} aspectRatio={"1/1"}  objectFit={"contain"} src={candle} alt="Image of candle/tealight/giftset for sale"/>
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
          <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"}>Winter Forest</Heading>
          <HStack gap={4}>
            <Text fontSize={"lg"} color={"--gold"}>CANDLE</Text>
            <Text fontSize={"lg"} bg={"--gold"} px={5}>NEW</Text>
          </HStack>
        </VStack>

        {/* Mobile button group */}
        <HStack w={"100%"} px={2} display={{base: "flex", lg: "none"}}>
          <Link to={"/cart"} style={{width: "50%"}}>
            <Button fontSize={"md"} color={"white"} bg={"--black"} w={"100%"} transition={"all 300ms ease-in-out"}>
              Add To Basket
            </Button>
          </Link>
          <Link to={"/cart"} style={{width: "50%"}}>
            <Button fontSize={"md"} bg={"--gold"} w={"100%"} transition={"all 300ms ease-in-out"}>
              Buy Now
            </Button>
          </Link>
        </HStack>
        
        <VStack gap={0} w={"100%"} align={{base: "center", lg: "start"}}>
          <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£79.99 GBP</Heading>
          <Text fontSize={"lg"} color={"black"}>Cinnamon, nutmeg & clove</Text>
        </VStack>

        <HStack w={"100%"} gap={5} justify={{base: "center", lg: "start"}} wrap={"wrap"}>
          <Text fontSize={"xs"} w={{base: "90%", xl: "50%"}} color={"black"} textAlign={{base: "center", lg: "start"}}>
            {desc.length > 300 ? `${desc.slice(0, 300)}...` : desc}
            {desc.length > 300 && <Button ml={2} py={0} letterSpacing={"1px"} h={"min-content"} fontSize={"xs"} color={"white"} bg={"--black"} _hover={{px: 6}} transition={"all 300ms ease-in-out"}>More Info</Button>}
          </Text>
          <ProductColorNotes w={"40%"} h={"10em"} fontSize={"md"}/>
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
            <Button fontSize={"md"} color={"white"} bg={"--black"} w={"13em"} _hover={{w: "15em"}} transition={"all 300ms ease-in-out"}>
              Add To Basket
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button fontSize={"md"} bg={"--gold"} w={"13em"} _hover={{w: "15em"}} transition={"all 300ms ease-in-out"}>
              Buy Now
            </Button>
          </Link>
        </HStack>

      </VStack>
    </HStack>
  )
}

export default ProductPageItem
