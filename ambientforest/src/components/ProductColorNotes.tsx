import { VStack } from "@chakra-ui/react"

interface Props {
  h?: unknown
  w?: unknown
  fontSize?: string | number
  persist?: boolean
}

const ProductColorNotes = ({h, w, fontSize, persist = false}: Props) => {
  return (
    <VStack w={w ? w : "20%"} h={h ? h : "unset"} display={{base: `${persist ? "flex" : "none"}`, xl: "flex"}} aspectRatio={h ? "unset" : "1/1"} gap={0} borderRadius={"3xl"} bgGradient="to-b" gradientFrom="#864211" gradientTo="#2A4C29">
      <VStack fontFamily={"Nazare"} fontSize={fontSize ? fontSize : "lg"} justify={"center"} textAlign={"center"} color={"black"} w={"100%"} h={"33%"} bg={"--white"} _hover={{bg: "transparent"}} transition={"all 300ms ease-in-out"}>
        Top notes: Citrus, Pear, Armoise
      </VStack>
      <VStack fontFamily={"Nazare"} fontSize={fontSize ? fontSize : "lg"} justify={"center"} textAlign={"center"} color={"black"} w={"100%"} h={"34%"} bg={"--white"} _hover={{bg: "transparent"}} transition={"all 300ms ease-in-out"}>
        Heart notes: Amber, Lavender, Jasmine
      </VStack>
      <VStack fontFamily={"Nazare"} fontSize={fontSize ? fontSize : "lg"} justify={"center"} textAlign={"center"} color={"black"} w={"100%"} h={"33.1%"} bg={"--white"} _hover={{bg: "transparent"}} transition={"all 300ms ease-in-out"} >
        Base notes: Sandalwood, Musk, Vanilla
      </VStack>
    </VStack>
  )
}

export default ProductColorNotes
