import { Button, Heading, HStack, Image, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text, VStack } from '@chakra-ui/react'
import { CartItem } from '../types/clientTypes'
import { Link } from 'react-router-dom'
import { isProductNew } from '../utils/productHandling'
import { useContext } from 'react'
import { ContextAPI, ContextData } from '../context/ContextProvider'
import { IoChevronDownSharp } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

interface Props {
  item: CartItem
  key: number
}

const CartProduct = ({item, key}: Props) => {

  const { editQuantity, maxCartItems, removeFromBag } = useContext(ContextAPI) as ContextData

  const quantityArray: number[] = new Array(maxCartItems).fill(0)

  const baseImageUrl = import.meta.env.VITE_USE_CLOUDFRONT === "true" ? import.meta.env.VITE_CLOUDFRONT_URL : import.meta.env.VITE_S3_URL

  return (
    <HStack position={"relative"} w={"100%"} key={key} h={"13em"} border={"1px solid #AD974F"}>
      <Text onClick={() => removeFromBag(item)} _hover={{color: "red.400", cursor: "pointer"}} top={1} right={2} position={"absolute"} color={"black"} fontSize={"2xl"}>
        <RxCross2 />
      </Text>
      <Image w={"40%"} maxH={"100%"} aspectRatio={"1/1"}  objectFit={"contain"} src={`${baseImageUrl}/${item.entireProduct.mainImageUrl}`} alt="Image of candles for sale"/>
      <VStack w={"60%"} h={"100%"} align={"start"} gap={2} py={2}>

        <VStack gap={0} w={"100%"} align={"start"}>
          <Heading size={{base: "xl", lg:"2xl"}} letterSpacing={"1px"} fontFamily={"Nazare"} color={"black"}>{item.entireProduct.name}</Heading>
          <HStack gap={1}>
            <Text fontSize={{base: "xs", lg:"sm"}} color={"--gold"}>{item.productType}</Text>
            {isProductNew(item.entireProduct) && <Text fontSize={{base: "xs", lg:"sm"}} bg={"--gold"} px={4}>NEW</Text>}
          </HStack>
        </VStack>

        <Heading size={{base: "xl", lg:"2xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>£{(parseInt(item.entireProduct.price ?? "0") / 100).toFixed(2)} GBP</Heading>

        <Text fontSize={{base: "sm", lg:"md"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>
          QTY:
          <MenuRoot>
            <MenuTrigger asChild>
              <Button bg={"--white"}  size="sm" color={"black"}>
                {item.lineItem.quantity}
                <IoChevronDownSharp />
              </Button>
            </MenuTrigger>
            <MenuContent pos={"absolute"} bg={"--white"}>
              {quantityArray.map((_, i) => {
                return (
                  <MenuItem onClick={() => editQuantity(item, i + 1)} color={"black"} value={`${i + 1}`}>
                    {i + 1}
                  </MenuItem>
                )
              })}
              
            </MenuContent>
          </MenuRoot>
        </Text>

        <Link to={`/product/${item.productType}/${item.productId}`}>
          <Button color={"white"} bg={"--black"} px={{base: 8, lg: 10}} _hover={{px: 14}} transition={"all 300ms ease-in-out"}>View Product</Button>
        </Link>
      </VStack>
        
    </HStack>
  )
}

export default CartProduct
