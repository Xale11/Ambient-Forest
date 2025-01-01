import { VStack } from "@chakra-ui/react"
import { Product } from "../types/types"

interface Props {
  h?: unknown
  w?: unknown
  fontSize?: string | number
  persist?: boolean
  product: Product | undefined
}

const ProductColorNotes = ({h, w, fontSize, persist = false, product}: Props) => {
  return (
    <VStack w={w ? w : "20%"} h={h ? h : "unset"} display={{base: `${persist ? "flex" : "none"}`, xl: "flex"}} aspectRatio={h ? "unset" : "1/1"} gap={0} borderRadius={"3xl"} bgGradient="to-b" gradientFrom={`${product?.notes?.topNotes?.color}`}  gradientTo={`${product?.notes?.baseNotes?.color}`} gradientVia={`${product?.notes?.heartNotes?.color}`}>
      <VStack fontFamily={"Nazare"} fontSize={fontSize ? fontSize : "lg"} justify={"center"} textAlign={"center"} color={"black"} w={"100%"} h={"33%"} bg={"--white"} _hover={{bg: "transparent"}} transition={"all 300ms ease-in-out"}>
        Top notes: {product?.notes?.topNotes?.content}
      </VStack>
      <VStack fontFamily={"Nazare"} fontSize={fontSize ? fontSize : "lg"} justify={"center"} textAlign={"center"} color={"black"} w={"100%"} h={"34%"} bg={"--white"} _hover={{bg: "transparent"}} transition={"all 300ms ease-in-out"}>
        Heart notes: {product?.notes?.heartNotes?.content}
      </VStack>
      <VStack fontFamily={"Nazare"} fontSize={fontSize ? fontSize : "lg"} justify={"center"} textAlign={"center"} color={"black"} w={"100%"} h={"33.1%"} bg={"--white"} _hover={{bg: "transparent"}} transition={"all 300ms ease-in-out"} >
        Base notes: {product?.notes?.baseNotes?.content}
      </VStack>
    </VStack>
  )
}

export default ProductColorNotes
