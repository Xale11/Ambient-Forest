import { Heading, Text, VStack } from "@chakra-ui/react"
import { Product } from "../types/types"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTitle } from "./ui/dialog"

interface Props {
  open: boolean
  setOpen: (value: boolean) => void
  product: Product | undefined
}

const ProductModal = ({ open, setOpen, product }: Props) => {
  return (
    <DialogRoot open={open} size="cover" placement="center" motionPreset="slide-in-bottom" onEscapeKeyDown={() => setOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
          <DialogCloseTrigger onClick={() => setOpen(false)}/>
        </DialogHeader>
        <DialogBody>
          <VStack align={"start"}>
            <Heading mt={4} fontFamily={"Novecento"} >Product Description</Heading>
            <Text letterSpacing={"1px"}>{product?.description}</Text>
            <Heading mt={4} fontFamily={"Novecento"} >CLP Information</Heading>
            <Text letterSpacing={"1px"}>{product?.clp}</Text>
          </VStack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}

export default ProductModal
